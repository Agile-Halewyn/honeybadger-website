/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_WAITLIST_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
