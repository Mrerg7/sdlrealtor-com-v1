import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sdlrealtor.com',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  image: {
    remotePatterns: [
      { protocol: 'https', hostname: 'imagedelivery.net' },
    ],
  },
});
