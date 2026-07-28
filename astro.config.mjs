import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://honeybadgerbots.nl',
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
