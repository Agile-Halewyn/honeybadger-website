export const CONTACT_EMAIL = 'info@honeybadgertrader.com';
export const PRIVACY_EMAIL = 'privacy@honeybadgertrader.com';
export const BITVAVO_AFFILIATE_URL = 'https://bitvavo.com/invite?a=629EC7BACD';

/** Publieke waitlist-POST; **verplicht** op buildtijd via `PUBLIC_WAITLIST_API_URL` (zie `.env.example`). Geen stille fallback naar productie — voorkomt dat previews per ongeluk echte aanmeldingen raken. */
const raw = import.meta.env.PUBLIC_WAITLIST_API_URL?.trim();
if (!raw) {
  throw new Error(
    'PUBLIC_WAITLIST_API_URL ontbreekt. Zet deze vóór `astro build` / `astro dev` (kopieer `.env.example` naar `.env` lokaal). Op Netlify: environment variables per context; productie staat in `netlify.toml` onder [context.production]. Voor deploy previews: expliciet een staging-endpoint, niet productie.'
  );
}
export const WAITLIST_API_URL = raw;

// Backward-compatible alias; prefer BITVAVO_AFFILIATE_URL for clarity.
export const AFFILIATE_URL = BITVAVO_AFFILIATE_URL;
