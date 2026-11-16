// Ultimate Football 27 — Cloudflare Worker entry.
// The app is a pre-built ES module bundle, so the Worker only serves the
// static assets and falls back to the app shell for client-side routes.
export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    if (response.status !== 404) return response;

    const url = new URL(request.url);
    const wantsHtml = (request.headers.get('accept') || '').includes('text/html');
    if (url.pathname.startsWith('/assets/') || !wantsHtml) return response;

    return env.ASSETS.fetch(new Request(new URL('/index.html', url), request));
  },
};
