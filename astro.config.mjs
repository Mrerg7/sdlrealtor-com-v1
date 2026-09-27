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
    sitemap({
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        const url = item.url;
        if (url === 'https://sdlrealtor.com/' || url === 'https://sdlrealtor.com') {
          item.priority = 1;
        } else if (url.includes('/acquire/')) {
          item.priority = 0.9;
        } else if (url.includes('/scottsdale-realtor-domain/')) {
          item.priority = 0.8;
        } else if (url.includes('/faq/')) {
          item.priority = 0.6;
        }
        item.changefreq = 'weekly';
        item.lastmod = '2026-09-27';
        return item;
      },
    }),
  ],
  image: {
    remotePatterns: [{ protocol: 'https', hostname: 'imagedelivery.net' }],
  },
});
