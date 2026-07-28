import type { Locale } from './routes';

export type UiStrings = {
  nav: {
    home: string;
    howItWorks: string;
    strategies: string;
    pricing: string;
    faq: string;
    contact: string;
    earlyAccess: string;
    menu: string;
  };
  footer: {
    tagline: string;
    product: string;
    legal: string;
    privacy: string;
    terms: string;
    disclaimer: string;
    cookies: string;
    copyright: string;
    risk: string;
  };
  common: {
    backToHome: string;
    language: string;
  };
  affiliate: {
    summary: string;
    heading: string;
    body: string;
    disclosure: string;
    promo: string;
    cta: string;
    disclaimer: string;
  };
};

const ui: Record<Locale, UiStrings> = {
  nl: {
    nav: {
      home: 'Home',
      howItWorks: 'Hoe het werkt',
      strategies: 'Strategieën',
      pricing: 'Pricing',
      faq: 'FAQ',
      contact: 'Contact',
      earlyAccess: 'Early access',
      menu: 'Menu',
    },
    footer: {
      tagline:
        'Geautomatiseerd crypto handelen met tradingbots, zonder technische kennis.',
      product: 'Product',
      legal: 'Juridisch',
      privacy: 'Privacy Policy',
      terms: 'Algemene Voorwaarden',
      disclaimer: 'Risicoverklaring',
      cookies: 'Cookie Policy',
      copyright: 'Alle rechten voorbehouden.',
      risk: "Crypto-trading brengt risico's met zich mee. Resultaten uit het verleden bieden geen garantie voor de toekomst.",
    },
    common: {
      backToHome: 'Terug naar home',
      language: 'Taal',
    },
    affiliate: {
      summary: 'Nog geen Bitvavo account?',
      heading: 'Nog geen Bitvavo account?',
      body: 'Om HoneyBadger Trader te gebruiken heb je een Bitvavo account nodig. Je kunt je aanmelden via de knop hieronder.',
      disclosure:
        'Gebruik van deze link is volledig vrijwillig. Bij aanmelding ontvangt HoneyBadger Trader een kleine vergoeding van Bitvavo, zonder extra kosten voor jou.',
      promo:
        'Bitvavo heeft regelmatig acties voor nieuwe gebruikers, zoals een welkomstbonus of tijdelijk fee-free trades. Bekijk altijd de actuele voorwaarden op Bitvavo.',
      cta: 'Account aanmaken bij Bitvavo',
      disclaimer:
        'Bitvavo is een gereguleerde Nederlandse crypto exchange (DNB-geregistreerd).',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      howItWorks: 'Cómo funciona',
      strategies: 'Estrategias',
      pricing: 'Precios',
      faq: 'FAQ',
      contact: 'Contacto',
      earlyAccess: 'Acceso anticipado',
      menu: 'Menú',
    },
    footer: {
      tagline:
        'Trading cripto automatizado con bots, sin conocimientos técnicos.',
      product: 'Producto',
      legal: 'Legal',
      privacy: 'Política de Privacidad',
      terms: 'Términos y Condiciones',
      disclaimer: 'Declaración de riesgos',
      cookies: 'Política de cookies',
      copyright: 'Todos los derechos reservados.',
      risk: 'El trading de criptomonedas conlleva riesgos. Los resultados pasados no garantizan resultados futuros.',
    },
    common: {
      backToHome: 'Volver al inicio',
      language: 'Idioma',
    },
    affiliate: {
      summary: '¿Aún no tienes cuenta en Bitvavo?',
      heading: '¿Aún no tienes cuenta en Bitvavo?',
      body: 'Para usar HoneyBadger Trader necesitas una cuenta en Bitvavo. Puedes registrarte con el botón de abajo.',
      disclosure:
        'El uso de este enlace es totalmente voluntario. Al registrarte, HoneyBadger Trader recibe una pequeña comisión de Bitvavo, sin coste adicional para ti.',
      promo:
        'Bitvavo ofrece con frecuencia promociones para nuevos usuarios, como bonos de bienvenida o trades sin comisión por tiempo limitado. Consulta siempre las condiciones actuales en Bitvavo.',
      cta: 'Crear cuenta en Bitvavo',
      disclaimer:
        'Bitvavo es un exchange de criptomonedas regulado en los Países Bajos (registrado en DNB).',
    },
  },
  en: {
    nav: {
      home: 'Home',
      howItWorks: 'How it works',
      strategies: 'Strategies',
      pricing: 'Pricing',
      faq: 'FAQ',
      contact: 'Contact',
      earlyAccess: 'Early access',
      menu: 'Menu',
    },
    footer: {
      tagline:
        'Automated crypto trading with bots, no technical knowledge required.',
      product: 'Product',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms and Conditions',
      disclaimer: 'Risk disclosure',
      cookies: 'Cookie Policy',
      copyright: 'All rights reserved.',
      risk: 'Crypto trading involves risk. Past results do not guarantee future performance.',
    },
    common: {
      backToHome: 'Back to home',
      language: 'Language',
    },
    affiliate: {
      summary: "Don't have a Bitvavo account yet?",
      heading: "Don't have a Bitvavo account yet?",
      body: 'To use HoneyBadger Trader you need a Bitvavo account. You can sign up using the button below.',
      disclosure:
        'Using this link is entirely voluntary. When you sign up, HoneyBadger Trader receives a small commission from Bitvavo at no extra cost to you.',
      promo:
        'Bitvavo often runs promotions for new users, such as welcome bonuses or temporary fee-free trades. Always check the current terms on Bitvavo.',
      cta: 'Create a Bitvavo account',
      disclaimer:
        'Bitvavo is a regulated Dutch crypto exchange (DNB-registered).',
    },
  },
};

export function getUi(locale: Locale): UiStrings {
  return ui[locale];
}

export const defaultDescription: Record<Locale, string> = {
  nl: 'Geautomatiseerd crypto handelen met tradingbots, zonder technische kennis. HoneyBadger Trader beheert de automatisering, jij behoudt de controle.',
  es: 'Trading cripto automatizado con bots, sin conocimientos técnicos. HoneyBadger Trader gestiona la automatización; tú mantienes el control.',
  en: 'Automated crypto trading with bots, no technical knowledge required. HoneyBadger Trader handles automation; you stay in control.',
};
