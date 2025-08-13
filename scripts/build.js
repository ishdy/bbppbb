// 导入所需的核心模块
import { readFileSync, writeFileSync, mkdirSync } from 'fs'; // 文件系统操作
import { join, dirname as pathDirname } from 'path'; // 路径处理
import { fileURLToPath } from 'url'; // URL与路径转换
import { build } from 'esbuild'; // 高效的JavaScript打包器
import { globSync } from 'glob'; // 文件路径匹配工具
import { minify as jsMinify } from 'terser'; // JavaScript代码压缩工具
import { minify as htmlMinify } from 'html-minifier'; // HTML代码压缩工具
import { execSync } from 'child_process'; // 用于执行同步的子进程命令（如此处的git命令）
import JSZip from "jszip"; // 用于创建ZIP压缩包
import pkg from '../package.json' with { type: 'json' }; // 导入package.json以获取版本号

// --- 配置常量 ---
const __filename = fileURLToPath(import.meta.url); // 获取当前文件的绝对路径
const __dirname = pathDirname(__filename); // 获取当前文件所在的目录路径
const ASSET_PATH = join(__dirname, '../src/assets'); // 定义资源文件（HTML, CSS, JS）的根目录
const DIST_PATH = join(__dirname, '../dist/'); // 定义最终输出文件的目录
const version = pkg.version; // 从package.json中获取当前版本号

// --- 用于美化控制台输出的辅助变量 ---
const green = '\x1b[32m'; // 绿色文本
const red = '\x1b[31m';   // 红色文本
const reset = '\x1b[0m';  // 重置文本颜色
const success = `${green}✔${reset}`; // 成功标记
const failure = `${red}✖${reset}`;   // 失败标记

/**
 * 处理所有HTML页面：查找、内联CSS和JS、压缩，并返回一个Base64编码的HTML页面映射。
 * @returns {Promise<Object>} 一个对象，键是目录名，值是JSON字符串化的Base64编码HTML。
 */
async function processHtmlPages() {
    console.log('正在捆绑和压缩HTML资源...');
    // 同步查找所有子目录中的index.html文件
    const indexFiles = globSync('**/index.html', { cwd: ASSET_PATH });
    const result = {}; // 用于存储处理结果

    for (const relativeIndexPath of indexFiles) {
        const dir = pathDirname(relativeIndexPath); // 获取文件所在的目录名，例如 'panel'
        const base = (file) => join(ASSET_PATH, dir, file); // 创建一个辅助函数来拼接完整路径

        try {
            // 读取HTML、CSS和JS文件的内容
            const indexHtml = readFileSync(base('index.html'), 'utf8');
            const styleCode = readFileSync(base('style.css'), 'utf8');
            const scriptCode = readFileSync(base('script.js'), 'utf8');

            // 使用Terser压缩页面内联的JavaScript代码
            const minifiedScript = await jsMinify(scriptCode, {
                mangle: true, // 混淆变量名
                compress: true, // 压缩代码
            });

            // 将CSS和压缩后的JS注入到HTML模板中
            const finalHtml = indexHtml
                .replace('__STYLE__', `<style>${styleCode}</style>`)
                .replace('__SCRIPT__', `<script>${minifiedScript.code}</script>`)
                .replace(/__PANEL_VERSION__/g, version); // 替换所有版本号占位符

            // 使用html-minifier压缩最终的HTML内容
            const minifiedHtml = htmlMinify(finalHtml, {
                collapseWhitespace: true,       // 折叠空白字符
                removeAttributeQuotes: true,    // 移除属性的引号
                minifyCSS: true,                // 压缩内联CSS
                minifyJS: true,                 // 压缩内联JS
                removeComments: true,           // 移除注释
            });

            // 将压缩后的HTML编码为Base64，然后JSON.stringify以便安全地注入到主脚本中
            const encodedHtml = Buffer.from(minifiedHtml, 'utf8').toString('base64');
            result[dir] = JSON.stringify(encodedHtml);

        } catch (error) {
            console.error(`${failure} 处理目录 '${dir}' 中的资源失败:`, error);
            throw error; // 抛出错误，中断构建过程
        }
    }

    console.log(`${success} 所有HTML资源已成功捆绑！`);
    return result;
}

/**
 * 构建Cloudflare Worker的主函数。
 */
async function buildWorker() {
    // 步骤1: 处理所有HTML页面
    const htmls = await processHtmlPages();
    // 读取favicon图标并转为Base64
    const faviconBuffer = readFileSync(join(__dirname, '../src/assets/favicon.ico'));
    const faviconBase64 = faviconBuffer.toString('base64');

    // 步骤2: 使用esbuild打包Worker脚本
    console.log('正在使用esbuild构建Worker...');
    const bundledCode = await build({
        entryPoints: [join(__dirname, '../src/worker.js')], // 入口文件
        bundle: true,          // 捆绑所有依赖
        format: 'esm',         // 输出为ES模块格式
        write: false,          // 不将结果写入文件系统，而是返回到内存中
        external: ['cloudflare:sockets'], // 排除Cloudflare的内置模块
        platform: 'browser',   // 目标平台为浏览器环境
        target: 'es2020',      // 目标ECMAScript版本
        define: {
            // 在此注入所有动态变量
            __PANEL_HTML_CONTENT__: htmls['panel'] ?? '""',
            __LOGIN_HTML_CONTENT__: htmls['login'] ?? '""',
            __ERROR_HTML_CONTENT__: htmls['error'] ?? '""',
            __SECRETS_HTML_CONTENT__: htmls['secrets'] ?? '""',
            __ICON__: JSON.stringify(faviconBase64),
            __PANEL_VERSION__: JSON.stringify(version)
        }
    });
    console.log(`${success} Worker构建成功！`);

    // 步骤3: 使用Terser对最终的Worker代码进行压缩
    console.log('正在压缩最终的Worker代码...');
    const minifiedResult = await jsMinify(bundledCode.outputFiles[0].text, {
        module: true, // 这是一个ES模块
        output: {
            comments: false // 移除所有注释
        },
        compress: {
            dead_code: true, // 移除无法访问的代码
            unused: true,    // 移除未使用的变量和函数
        },
        mangle: true, // 混淆变量名以减小体积
    });

    if (!minifiedResult.code) {
        throw new Error('代码压缩失败，未生成任何代码。');
    }
    console.log(`${success} Worker压缩成功！`);

    // --- 准备最终输出文件 ---
    const buildTimestamp = new Date().toISOString(); // 获取构建时间
    let gitHash = 'unknown'; // 初始化git提交哈希
    try {
        // 尝试获取当前git仓库的短哈希
        gitHash = execSync('git rev-parse --short HEAD').toString().trim();
    } catch (e) {
        console.warn('无法获取git提交哈希，将使用 "unknown" 作为默认值。');
    }

    // 创建一个包含构建信息的注释头
    const buildInfo = `// Build: ${buildTimestamp} | Commit: ${gitHash} | Version: ${version}\n`;
    const finalWorkerCode = `${buildInfo}// @ts-nocheck\n${minifiedResult.code}`;

    // --- 将文件写入磁盘 ---
    mkdirSync(DIST_PATH, { recursive: true }); // 确保输出目录存在
    writeFileSync(join(DIST_PATH, 'worker.js'), finalWorkerCode, 'utf8'); // 写入worker.js

    console.log('正在创建 worker.zip...');
    const zip = new JSZip();
    zip.file('_worker.js', finalWorkerCode); // 在zip中添加worker脚本
    const zipBuffer = await zip.generateAsync({
        type: 'nodebuffer', // 生成Node.js的Buffer
        compression: 'DEFLATE', // 使用DEFLATE压缩算法
        compressionOptions: {
            level: 9 // 设置最高压缩级别
        }
    });
    writeFileSync(join(DIST_PATH, 'worker.zip'), zipBuffer); // 写入worker.zip

    console.log(`\n${success} 构建完成！输出文件位于 'dist' 目录中。`);
}

// --- 运行构建流程 ---
buildWorker().catch(err => {
    console.error(`\n${failure} 构建失败:`, err);
    process.exit(1); // 如果发生错误，则以非零状态码退出进程
});
