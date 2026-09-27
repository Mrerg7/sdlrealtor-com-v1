# sdlrealtor.com

Sales site for the domain **sdlrealtor.com** — a Scottsdale real estate brand name. The domain is for sale. This is not a brokerage.

## Stack

- [Astro](https://astro.build) static site (`output: 'static'`)
- TypeScript + Tailwind CSS
- Cloudflare Workers Static Assets via Wrangler
- `@astrojs/sitemap`, `public/robots.txt`, `public/llms.txt`
- JSON-LD (WebSite, WebPage, Organization, FAQ, breadcrumbs). No Product rich-result markup, so a missing public price does not throw Search Console offer errors.

## Pages

- `/` sales homepage
- `/acquire/` offer and transfer steps
- `/scottsdale-realtor-domain/` why the name works
- `/faq/` buyer questions

## Development

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run build
npm run deploy
```

## Acquisition

Offers go to **sales@desertrich.com**. The form opens a mailto draft; the site does not store inquiries.

## Disclaimer

The domain name is offered for acquisition. The site does not provide real estate services, does not include a license or leads, and is not affiliated with the National Association of REALTORS®. The domain does not guarantee search rankings.
