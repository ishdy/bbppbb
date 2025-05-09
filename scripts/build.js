import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname as pathDirname } from 'path';
import { fileURLToPath } from 'url';
import { build } from 'esbuild';
import { sync } from 'glob';
import pkg from '../package.json' with { type: 'json' };

const __filename = fileURLToPath(import.meta.url);
const __dirname = pathDirname(__filename);
const version = pkg.version; // 关键修复：从 package.json 获取版本号

// 当前工作目录（main 或 dev）
const ASSET_PATH = join(__dirname, '../src/assets');
const DIST_PATH = join(__dirname, '../dist/'); // 修改为 dist 目录

async function buildWorker() {
    const htmls = await processHtmlPages();
    const faviconBuffer = readFileSync('./src/assets/favicon.ico');
    const faviconBase64 = faviconBuffer.toString('base64');

    // 修改这里：获取构建结果的代码
    const result = await build({
        entryPoints: [join(__dirname, '../src/worker.js')],
        bundle: true,
        format: 'esm',
        write: false,
        external: ['cloudflare:sockets'],
        platform: 'browser',
        target: 'es2020',
        define: {
            __PANEL_HTML_CONTENT__: htmls['panel'] ?? '""',
            __LOGIN_HTML_CONTENT__: htmls['login'] ?? '""',
            __ERROR_HTML_CONTENT__: htmls['error'] ?? '""',
            __SECRETS_HTML_CONTENT__: htmls['secrets'] ?? '""',
            __ICON__: JSON.stringify(faviconBase64),
            __PANEL_VERSION__: JSON.stringify(version)
        }
    });

    // 关键修改：获取输出代码
    let code = result.outputFiles[0].text;

    // 清理特殊字符
    code = code
        .replace(/，/g, ',')
        .replace(/；/g, ';')
        .replace(/（/g, '(')
        .replace(/）/g, ')')
        .replace(/【/g, '[')
        .replace(/】/g, ']')
        .replace(/：/g, ':')
        .replace(/。/g, '.')
        .replace(/“/g, '"')
        .replace(/”/g, '"')
        .replace(/‘/g, "'")
        .replace(/’/g, "'");

    mkdirSync(DIST_PATH, { recursive: true });
    const outputFile = join(DIST_PATH, 'worker.js');
    writeFileSync(outputFile, code, 'utf8');

    console.log(`✅ Wrote: ${outputFile}`);
}buildWorker().catch(err => {
    console.error('❌ Build failed:', err);
    process.exit(1);
});

