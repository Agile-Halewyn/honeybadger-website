import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://honeybadgertrader.com',
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
