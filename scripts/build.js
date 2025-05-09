import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname as pathDirname } from 'path';
import { fileURLToPath } from 'url';
import { build } from 'esbuild';
import { sync } from 'glob';
import pkg from '../package.json' with { type: 'json' };

const __filename = fileURLToPath(import.meta.url);
const __dirname = pathDirname(__filename);

// Define version from package.json
const version = pkg.version;

// Path constants
const ASSET_PATH = join(__dirname, '../src/assets');
const DIST_PATH = join(__dirname, '../dist/');

// First define processHtmlPages function
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
            .replace(/__STYLE__/g, `<style>${styleCode}</style>`)
            .replace(/__SCRIPT__/g, scriptCode)
            .replace(/__PANEL_VERSION__/g, version);

        result[dir] = JSON.stringify(finalHtml);
    }

    console.log('✅ Assets bundled');
    return result;
}

// Then define buildWorker function
async function buildWorker() {
    const htmls = await processHtmlPages();
    const faviconBuffer = readFileSync('./src/assets/favicon.ico');
    const faviconBase64 = faviconBuffer.toString('base64');

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

    if (!result.outputFiles || result.outputFiles.length === 0) {
        throw new Error('No output files from esbuild');
    }

    let code = result.outputFiles[0].text;
    code = code
        code = code
        .replace(/[\u200B-\u200D\uFEFF]/g, '')  // 零宽字符
        .replace(/^\uFEFF/, '')                 // BOM
        .replace(/，/g, ',')
        .replace(/；/g, ';')
        .replace(/“|”/g, '"')
        .replace(/‘|’/g, "'")
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
}

// Execute the build
buildWorker().catch(err => {
    console.error('❌ Build failed:', err);
    process.exit(1);
});
