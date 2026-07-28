export const LOCALES = ['nl', 'es', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'nl';

export type RouteKey =
  | 'home'
  | 'howItWorks'
  | 'strategies'
  | 'pricing'
  | 'faq'
  | 'contact'
  | 'contactThankYou'
  | 'waitlist'
  | 'waitlistThankYou'
  | 'bedankt'
  | 'privacy'
  | 'terms'
  | 'cookies'
  | 'disclaimer';

export const routes: Record<RouteKey, Record<Locale, string>> = {
  home: { nl: '/', es: '/es/', en: '/en/' },
  howItWorks: {
    nl: '/hoe-het-werkt',
    es: '/es/como-funciona',
    en: '/en/how-it-works',
  },
  strategies: {
    nl: '/strategieen',
    es: '/es/estrategias',
    en: '/en/strategies',
  },
  pricing: { nl: '/pricing', es: '/es/pricing', en: '/en/pricing' },
  faq: { nl: '/faq', es: '/es/faq', en: '/en/faq' },
  contact: { nl: '/contact', es: '/es/contacto', en: '/en/contact' },
  contactThankYou: {
    nl: '/contact/bedankt/',
    es: '/es/contacto/gracias/',
    en: '/en/contact/thank-you/',
  },
  waitlist: {
    nl: '/waitlist',
    es: '/es/lista-espera',
    en: '/en/waitlist',
  },
  waitlistThankYou: {
    nl: '/waitlist-bedankt/',
    es: '/es/lista-espera/gracias/',
    en: '/en/waitlist/thank-you/',
  },
  bedankt: { nl: '/bedankt', es: '/es/gracias', en: '/en/thank-you' },
  privacy: {
    nl: '/juridisch/privacy',
    es: '/es/juridisch/privacy',
    en: '/en/juridisch/privacy',
  },
  terms: {
    nl: '/juridisch/voorwaarden',
    es: '/es/juridisch/voorwaarden',
    en: '/en/juridisch/voorwaarden',
  },
  cookies: {
    nl: '/juridisch/cookies',
    es: '/juridisch/cookies',
    en: '/juridisch/cookies',
  },
  disclaimer: {
    nl: '/juridisch/disclaimer',
    es: '/juridisch/disclaimer',
    en: '/juridisch/disclaimer',
  },
};

const OG_LOCALE: Record<Locale, string> = {
  nl: 'nl_NL',
  es: 'es_ES',
  en: 'en_GB',
};

export function getOgLocale(locale: Locale): string {
  return OG_LOCALE[locale];
}
