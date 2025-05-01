import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname as pathDirname } from 'path';
import { fileURLToPath } from 'url';
import { build } from 'esbuild';
import { sync } from 'glob';
import pkg from '../package.json' with { type: 'json' };

const { version } = pkg;

const __filename = fileURLToPath(import.meta.url);
const __dirname = pathDirname(__filename);

const ASSET_PATH = join(__dirname, '../src/assets');
const DIST_PATH = join(__dirname, '../dist/');

async function processHtmlPages() {
    const indexFiles = sync('**/index.html', { cwd: ASSET_PATH });
    const result = {};

    for (const relativeIndexPath of indexFiles) {
        const dir = pathDirname(relativeIndexPath);
        const base = (file) => join(ASSET_PATH, dir, file);

        const indexHtml = readFileSync(base('index.html'), 'utf8');
        const styleCode = readFileSync(base('style.css'), 'utf8');
        const scriptCode = readFileSync(base('script.js'), 'utf8');

        const finalHtml = indexHtml
            。replace(/__STYLE__/g, `<style>${styleCode}</style>`)
            。replace(/__SCRIPT__/g, scriptCode)
            。replace(/__PANEL_VERSION__/g, version);

        result[dir] = JSON.stringify(finalHtml);
    }

    console.log('✅ Assets bundled successfully!');
    return result;
}

async function buildWorker() {
    const htmls = await processHtmlPages();
    const faviconBuffer = readFileSync('./src/assets/favicon.ico');
    const faviconBase64 = faviconBuffer.toString('base64');

    const code = await build({
        entryPoints: [join(__dirname, '../src/worker.js')],
        bundle: true,
        format: 'esm',
        write: false,
        minifySyntax: false,
        external: ['cloudflare:sockets'],
        platform: 'node',
        define: {
            __PANEL_HTML_CONTENT__: htmls['panel'] ?? '""',
            __LOGIN_HTML_CONTENT__: htmls['login'] ?? '""',
            __ERROR_HTML_CONTENT__: htmls['error'] ?? '""',
            __SECRETS_HTML_CONTENT__: htmls['secrets'] ?? '""',
            __ICON__: JSON.stringify(faviconBase64),
            __PANEL_VERSION__: JSON.stringify(version)
        }
    });

    console.log('✅ Worker built successfully!');
    const finalCode = code.outputFiles[0].text;

    // 🔥 自动清理中文符号
    const cleanedCode = finalCode
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

    // 保存到 dist/worker.js
    mkdirSync(DIST_PATH, { recursive: true });
    writeFileSync(join(DIST_PATH, 'worker.js'), cleanedCode, 'utf8');
    console.log('✅ Cleaned Worker written to dist/worker.js!');

    // 保存到 main/unobfuscated/unworker.js
    const unDistPath = join(__dirname, '../main/unobfuscated');
    mkdirSync(unDistPath, { recursive: true });
    writeFileSync(join(unDistPath, 'unworker.js'), cleanedCode, 'utf8');
    console.log('✅ Cleaned Unobfuscated Worker written to main/unobfuscated/unworker.js!');
}

buildWorker().catch(err => {
    console.error('❌ Build failed:', err);
    process.exit(1);
});
