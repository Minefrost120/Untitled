// Static server for Ultimate Football 27.
// The app is a pre-built ES module bundle, so it is served verbatim: no
// transform, no bundling, no rewriting of the hashed chunk names.
import { createServer } from 'node:http';
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { extname, join, normalize, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)));
const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || '0.0.0.0';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.mp3': 'audio/mpeg',
  '.ogg': 'audio/ogg',
  '.txt': 'text/plain; charset=utf-8',
};

async function resolveFile(urlPath) {
  // Strip query/hash, decode, then keep the request inside ROOT.
  const clean = decodeURIComponent(urlPath.split('?')[0].split('#')[0]);
  const relative = normalize(clean).replace(/^([/\\])+/, '');
  const candidate = join(ROOT, relative);
  if (candidate !== ROOT && !candidate.startsWith(ROOT + sep)) return null;

  try {
    const info = await stat(candidate);
    if (info.isFile()) return { file: candidate, info };
    if (info.isDirectory()) {
      const indexPath = join(candidate, 'index.html');
      const indexInfo = await stat(indexPath);
      if (indexInfo.isFile()) return { file: indexPath, info: indexInfo };
    }
  } catch {
    /* fall through to the app shell */
  }
  return null;
}

function send(res, status, body, headers = {}) {
  res.writeHead(status, { 'cache-control': 'no-store', ...headers });
  res.end(body);
}

const server = createServer(async (req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { allow: 'GET, HEAD' });
    res.end('Method Not Allowed');
    return;
  }

  const urlPath = req.url || '/';
  let found = await resolveFile(urlPath);

  // Asset requests must 404 when absent; everything else falls back to the shell.
  if (!found && urlPath.startsWith('/assets/')) {
    send(res, 404, 'Not found', { 'content-type': 'text/plain; charset=utf-8' });
    return;
  }
  if (!found) found = await resolveFile('/index.html');
  if (!found) {
    send(res, 404, 'Not found', { 'content-type': 'text/plain; charset=utf-8' });
    return;
  }

  const type = MIME[extname(found.file).toLowerCase()] || 'application/octet-stream';
  const immutable = found.file.includes(`${sep}assets${sep}`) && !found.file.endsWith('.html');
  res.writeHead(200, {
    'content-type': type,
    'content-length': found.info.size,
    'cache-control': immutable ? 'public, max-age=31536000, immutable' : 'public, max-age=0, must-revalidate',
    'x-content-type-options': 'nosniff',
  });
  if (req.method === 'HEAD') {
    res.end();
    return;
  }
  createReadStream(found.file).pipe(res);
});

server.listen(PORT, HOST, () => {
  console.log(`Ultimate Football 27 → http://${HOST}:${PORT}`);
});
