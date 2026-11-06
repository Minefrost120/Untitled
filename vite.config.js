import { defineConfig } from 'vite';

// The cloud preview hostname is supplied per-process so it never has to be
// hard-coded into the repo. Local development keeps the default host checks.
const previewHost = process.env.PREVIEW_HOST;

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
    ...(previewHost ? { allowedHosts: [previewHost] } : {}),
  },
});
