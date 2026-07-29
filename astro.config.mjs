import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://honeybadgertrader.com',
  integrations: [sitemap()],
  i18n: {
    locales: ['nl', 'es', 'en'],
    defaultLocale: 'nl',
    routing: { prefixDefaultLocale: false },
  },
  build: {
    assets: '_assets'
  },
  image: {
    domains: [],
  }
});
