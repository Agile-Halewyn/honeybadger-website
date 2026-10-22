export const LOCALES = ['nl', 'es', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'nl';

export type RouteKey = 'home' | 'privacy' | 'terms' | 'cookies' | 'disclaimer';

export const routes: Record<RouteKey, Record<Locale, string>> = {
  home: { nl: '/', es: '/', en: '/' },
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
