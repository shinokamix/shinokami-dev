// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://shinokami.dev',
  build: { inlineStylesheets: 'always' }, // ~5 KB of CSS, no render-blocking request
});
