export const SITE = {
  name: 'sdlrealtor.com',
  title: 'sdlrealtor.com | Premium Domain for Scottsdale\'s Most Influential Realtor',
  description:
    'sdlrealtor.com — The premium domain for the most influential and authoritative realtor or real estate brand in Scottsdale, Arizona\'s rarest and most desirable luxury market.',
  url: 'https://sdlrealtor.com/',
  email: 'sales@desertrich.com',
  locale: 'en_US',
  location: 'Scottsdale, Arizona',
  disclaimerDate: 'July 7, 2026',
} as const;

export const CF_IMAGES = {
  accountHash: '-sPAUAWeA405NiWJ0SNIQA',
  heroImageId: '4fb4e179-d61f-4485-fa16-9677bfec6d00',
} as const;

export function cfImageUrl(imageId: string, variant = 'public'): string {
  return `https://imagedelivery.net/${CF_IMAGES.accountHash}/${imageId}/${variant}`;
}

export const OG_IMAGE = cfImageUrl(CF_IMAGES.heroImageId);

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('sdlrealtor.com Domain Acquisition Inquiry')}&body=${encodeURIComponent('Hello,\n\nI am interested in acquiring sdlrealtor.com.\n\nIntended use:\nBudget range:\n\nThank you.')}`;

export const PORTFOLIO_LINKS = [
  { label: 'sdl.contact → Scottsdale Directory', href: 'https://sdl.contact' },
  { label: 'sdl.hair → Premium Hair Domain', href: 'https://sdl.hair' },
  { label: 'phx.beauty → Phoenix Beauty', href: 'https://phx.beauty' },
  { label: 'sdldwntwn.com → Downtown Scottsdale', href: 'https://sdldwntwn.com' },
  { label: 'sdl.life → Scottsdale Luxury Living', href: 'https://sdl.life' },
] as const;
