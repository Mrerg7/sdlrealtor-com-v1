# sdlrealtor.com

Premium domain sales page for **sdlrealtor.com** — Scottsdale luxury real estate authority branding.

## Stack

- [Astro](https://astro.build) static site (`output: 'static'`, no Cloudflare adapter)
- TypeScript + Tailwind CSS
- Astro Content Collections (`why`, `useCases`, `market`)
- Cloudflare Workers **Static Assets** deploy via Wrangler
- Cloudflare Images CDN for hero imagery
- `@astrojs/sitemap` + `public/robots.txt`
- JSON-LD structured data + full Open Graph meta

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

Deploys the `dist/` folder to Cloudflare Workers Static Assets (global edge, assets-only — no Worker script).

## Acquisition Contact

All CTAs route to **sales@desertrich.com**.

## Disclaimer

This site is for demonstration and informational purposes only. It does not constitute an offer of services, a commitment to deploy, or a guarantee of outcomes.
