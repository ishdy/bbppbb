// build.js - 不混淆，支持中文，UTF-8 安全构建
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname as pathDirname } from 'path';
import { fileURLToPath } from 'url';
import { build } from 'esbuild';
import { sync } from 'glob';
import { minify as jsMinify } from 'terser';
import { minify as htmlMinify } from 'html-minifier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = pathDirname(__filename);

const ROOT_DIR = join(__dirname, '..');
const ASSET_PATH = join(ROOT_DIR, 'src/assets');
const DIST_PATH = join(ROOT_DIR, 'dist');

async function processHtmlPages() {
  const indexFiles = sync('**/index.html', { cwd: ASSET_PATH });
  const result = {};

  for (const relativeIndexPath of indexFiles) {
    const dir = pathDirname(relativeIndexPath);
    const base = (file) => join(ASSET_PATH, dir, file);

    const indexHtml = readFileSync(base('index.html'), 'utf8');
    const styleCode = readFileSync(base('style.css'), 'utf8');
    const scriptCode = readFileSync(base('script.js'), 'utf8');

    const finalScriptCode = await jsMinify(scriptCode);
    const finalHtml = indexHtml
      .replace(/__STYLE__/g, `<style>${styleCode}</style>`)
      .replace(/__SCRIPT__/g, finalScriptCode.code);

    const minifiedHtml = htmlMinify(finalHtml, {
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      minifyCSS: true
    });

    // 使用反引号保留中文，防止 JSON 转义
    result[dir] = '`' + minifiedHtml.replace(/`/g, '\\`') + '`';
  }

  console.log('✅ HTML 页面打包完成');
  return result;
}

async function buildWorker() {
  const htmls = await processHtmlPages();
  const faviconBuffer = readFileSync(join(ROOT_DIR, 'src/assets/favicon.ico'));
  const faviconBase64 = faviconBuffer.toString('base64');

  const code = await build({
    entryPoints: [join(ROOT_DIR, 'src/worker.js')],
    bundle: true,
    format: 'esm',
    write: false,
    minifySyntax: false,
    external: ['cloudflare:sockets'],
    platform: 'browser',
    define: {
      __PANEL_HTML_CONTENT__: htmls['panel'] ?? '""',
      __LOGIN_HTML_CONTENT__: htmls['login'] ?? '""',
      __ERROR_HTML_CONTENT__: htmls['error'] ?? '""',
      __SECRETS_HTML_CONTENT__: htmls['secrets'] ?? '""',
      __ICON__: JSON.stringify(faviconBase64)
    }
  });

  let finalCode = code.outputFiles[0].text;

  // 清理 BOM 和不可见字符
  finalCode = finalCode
    .replace(/^\uFEFF/, '')
    .replace(/[\u200B-\u200D]/g, '')
    .replace(/，/g, ',')
    .replace(/；/g, ';')
    .replace(/（/g, '(')
    .replace(/）/g, ')')
    .replace(/【/g, '[')
    .replace(/】/g, ']')
    .replace(/：/g, ':')
    .replace(/。/g, '.')
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'");

  mkdirSync(DIST_PATH, { recursive: true });
  writeFileSync(join(DIST_PATH, 'worker.js'), finalCode, 'utf8');
  console.log('✅ worker.js 已写入 dist 目录');
}

buildWorker().catch(err => {
  console.error('❌ 构建失败:', err);
  process.exit(1);
});
