export const SITE = {
  name: 'sdlrealtor.com',
  title: 'sdlrealtor.com For Sale | Scottsdale Realtor Domain',
  description:
    'sdlrealtor.com is for sale. An 11-character exact-match .com for a Scottsdale luxury realtor, team, or brokerage. Confidential offers: sales@desertrich.com.',
  url: 'https://sdlrealtor.com/',
  email: 'sales@desertrich.com',
  locale: 'en_US',
  location: 'Scottsdale, Arizona',
  owner: 'SDL Domains',
  disclaimerDate: 'September 27, 2026',
  publishedDate: '2026-07-07',
  modifiedDate: '2026-09-27',
  googleSiteVerification: 'e-YINv88LvUldRi_kTl7RxJ0LAcGntpPectpxXhddnk',
  keywords:
    'sdlrealtor.com for sale, buy sdlrealtor.com, Scottsdale realtor domain, premium real estate domain Scottsdale, SDL realtor domain name',
} as const;

export const CF_IMAGES = {
  accountHash: '-sPAUAWeA405NiWJ0SNIQA',
  heroImageId: '4fb4e179-d61f-4485-fa16-9677bfec6d00',
} as const;

export function cfImageUrl(imageId: string, variant = 'public'): string {
  return `https://imagedelivery.net/${CF_IMAGES.accountHash}/${imageId}/${variant}`;
}

export const OG_IMAGE = cfImageUrl(CF_IMAGES.heroImageId);
export const OG_IMAGE_ALT =
  'Scottsdale desert estate and mountain views behind the sdlrealtor.com domain for sale';

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('sdlrealtor.com Domain Acquisition Inquiry')}&body=${encodeURIComponent('Hello,\n\nI am interested in acquiring sdlrealtor.com.\n\nName:\nEmail:\nPhone:\nIntended use:\nOffer (USD), or ask for pricing:\n\nThank you.')}`;

export const NAV_LINKS = [
  { href: '/#why', label: 'Why This Domain' },
  { href: '/#perfect-for', label: 'Perfect For' },
  { href: '/scottsdale-realtor-domain/', label: 'The Name' },
  { href: '/faq/', label: 'FAQ' },
  { href: '/acquire/', label: 'Acquire' },
] as const;

export const FOOTER_LINKS = [
  { href: '/acquire/', label: 'Acquire the domain' },
  { href: '/scottsdale-realtor-domain/', label: 'Why this name' },
  { href: '/faq/', label: 'Buyer FAQ' },
  { href: '/#market', label: 'Scottsdale market' },
] as const;

export const PORTFOLIO_LINKS = [
  { label: 'sdl.contact — Scottsdale directory', href: 'https://sdl.contact' },
  { label: 'sdl.life — Scottsdale luxury living', href: 'https://sdl.life' },
  { label: 'sdldwntwn.com — Downtown Scottsdale', href: 'https://sdldwntwn.com' },
  { label: 'sdl.hair — premium hair domain', href: 'https://sdl.hair' },
  { label: 'phx.beauty — Phoenix beauty', href: 'https://phx.beauty' },
] as const;

export const USE_OPTIONS = [
  { value: 'top-realtor', label: 'Personal brand — luxury realtor' },
  { value: 'boutique-brokerage', label: 'Boutique brokerage or team' },
  { value: 'luxury-marketing', label: 'Luxury marketing or listing brand' },
  { value: 'neighborhood-specialist', label: 'Neighborhood specialist' },
  { value: 'investment-development', label: 'Investment or development brand' },
  { value: 'relocation-brand', label: 'Relocation or national brand' },
  { value: 'hold', label: 'Investment hold' },
  { value: 'other', label: 'Other' },
] as const;

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Inquire',
    text: 'Tell us who you are and how you would use sdlrealtor.com. Serious buyers only — replies stay confidential.',
  },
  {
    step: '02',
    title: 'Terms',
    text: 'We confirm the name is available and discuss price in private. There is no public buy-it-now.',
  },
  {
    step: '03',
    title: 'Escrow',
    text: 'Payment goes through a standard domain escrow service such as Escrow.com, not a wire to a stranger.',
  },
  {
    step: '04',
    title: 'Transfer',
    text: 'You receive the domain by registrar auth code or account push. Most transfers complete in a few business days after release.',
  },
] as const;
