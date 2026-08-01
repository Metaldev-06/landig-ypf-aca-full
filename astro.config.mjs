import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.diazserviciosypf.com.ar',
  compressHTML: true,
  integrations: [sitemap()],
  image: {
    quality: 80,
  },
  prefetch: {
    defaultStrategy: 'hover',
  },
});
