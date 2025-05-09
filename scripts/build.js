// build.js - 与 generate-html.js 配合使用，构建无乱码 worker.js
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname as pathDirname } from 'path';
import { fileURLToPath } from 'url';
import { build } from 'esbuild';
import { PANEL_HTML } from '../src/generated/panel-html.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = pathDirname(__filename);

const ROOT_DIR = join(__dirname, '..');
const DIST_PATH = join(ROOT_DIR, 'dist');
const FAVICON_PATH = join(ROOT_DIR, 'src/assets/favicon.ico');

async function buildWorker() {
  const faviconBuffer = readFileSync(FAVICON_PATH);
  const faviconBase64 = faviconBuffer.toString('base64');

  const result = await build({
    entryPoints: [join(ROOT_DIR, 'src/worker.js')],
    bundle: true,
    format: 'esm',
    write: false,
    external: ['cloudflare:sockets'],
    platform: 'browser',
    define: {
      __PANEL_HTML_CONTENT__: '`' + PANEL_HTML.replace(/`/g, '\\`') + '`',
      __ICON__: JSON.stringify(faviconBase64)
    }
  });

  const code = result.outputFiles[0].text
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
  writeFileSync(join(DIST_PATH, 'worker.js'), code, 'utf8');

  console.log('✅ 构建完成，已输出到 dist/worker.js');
}

buildWorker().catch((err) => {
  console.error('❌ 构建失败:', err);
  process.exit(1);
});
