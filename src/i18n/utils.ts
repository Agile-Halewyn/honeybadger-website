import {
  DEFAULT_LOCALE,
  LOCALES,
  routes,
  type Locale,
  type RouteKey,
} from './routes';

function normalizePath(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

export function getLocaleFromPath(pathname: string): Locale {
  const path = normalizePath(pathname);
  if (path === '/es' || path.startsWith('/es/')) return 'es';
  if (path === '/en' || path.startsWith('/en/')) return 'en';
  return DEFAULT_LOCALE;
}

export function getLocalizedPath(key: RouteKey, locale: Locale): string {
  return routes[key][locale];
}

export function getAlternateUrls(key: RouteKey): Record<Locale, string> {
  return routes[key];
}

export function findRouteKeyFromPath(pathname: string): RouteKey | null {
  const path = normalizePath(pathname);
  for (const [key, paths] of Object.entries(routes) as [RouteKey, Record<Locale, string>][]) {
    for (const locale of LOCALES) {
      const localized = normalizePath(paths[locale]);
      if (path === localized) {
        return key;
      }
    }
  }
  return null;
}

export function getLanguageSwitcherUrls(
  pathname: string,
  fallbackKey: RouteKey = 'home',
): Record<Locale, string> {
  const routeKey = findRouteKeyFromPath(pathname) ?? fallbackKey;
  return getAlternateUrls(routeKey);
}

/** True when at least two locales have distinct URLs (e.g. not NL-only cookies/disclaimer). */
export function hasLocaleAlternates(pathname: string): boolean {
  const urls = Object.values(getLanguageSwitcherUrls(pathname));
  return new Set(urls).size > 1;
}
