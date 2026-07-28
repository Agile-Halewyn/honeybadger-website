import type { Locale } from '../routes';
import { getLocalizedPath } from '../utils';

export type PathPlaceholders = {
  homePath: string;
  howItWorksPath: string;
  strategiesPath: string;
  pricingPath: string;
  faqPath: string;
  contactPath: string;
  waitlistPath: string;
  privacyPath: string;
  disclaimerPath: string;
  contactThankYouPath: string;
  waitlistThankYouPath: string;
};

export function getPathPlaceholders(locale: Locale): PathPlaceholders {
  return {
    homePath: getLocalizedPath('home', locale),
    howItWorksPath: getLocalizedPath('howItWorks', locale),
    strategiesPath: getLocalizedPath('strategies', locale),
    pricingPath: getLocalizedPath('pricing', locale),
    faqPath: getLocalizedPath('faq', locale),
    contactPath: getLocalizedPath('contact', locale),
    waitlistPath: getLocalizedPath('waitlist', locale),
    privacyPath: getLocalizedPath('privacy', locale),
    disclaimerPath: getLocalizedPath('disclaimer', locale),
    contactThankYouPath: getLocalizedPath('contactThankYou', locale),
    waitlistThankYouPath: getLocalizedPath('waitlistThankYou', locale),
  };
}

export function interpolatePaths(
  text: string,
  paths: PathPlaceholders,
  extra: Record<string, string> = {},
): string {
  let result = text;
  for (const [key, value] of Object.entries({ ...paths, ...extra })) {
    result = result.replace(new RegExp(`\\{${key}\\}`, 'g'), value);
  }
  return result;
}
