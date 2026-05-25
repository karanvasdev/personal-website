import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://karanvasdev.com',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
