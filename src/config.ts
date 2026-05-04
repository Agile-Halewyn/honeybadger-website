export const CONTACT_EMAIL = 'info@honeybadgertrader.com';
export const PRIVACY_EMAIL = 'privacy@honeybadgertrader.com';
export const BITVAVO_AFFILIATE_URL = 'https://bitvavo.com/invite?a=629EC7BACD';

/** Publieke waitlist-POST; override via `PUBLIC_WAITLIST_API_URL` (zie `.env.example`). */
const DEFAULT_WAITLIST_API_URL = 'https://app.honeybadgertrader.com/api/waitlist';
const fromEnv = import.meta.env.PUBLIC_WAITLIST_API_URL?.trim();
export const WAITLIST_API_URL =
  fromEnv && fromEnv.length > 0 ? fromEnv : DEFAULT_WAITLIST_API_URL;

// Backward-compatible alias; prefer BITVAVO_AFFILIATE_URL for clarity.
export const AFFILIATE_URL = BITVAVO_AFFILIATE_URL;
