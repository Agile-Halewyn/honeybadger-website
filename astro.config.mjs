import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://honeybadgerbots.nl',
  build: {
    assets: '_assets'
  },
  image: {
    domains: [],
  }
});
