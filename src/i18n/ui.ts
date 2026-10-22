import type { Locale } from './routes';

export type UiStrings = {
  nav: {
    home: string;
    menu: string;
  };
  footer: {
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
};

const ui: Record<Locale, UiStrings> = {
  nl: {
    nav: {
      home: 'Home',
      menu: 'Menu',
    },
    footer: {
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
  },
  es: {
    nav: {
      home: 'Inicio',
      menu: 'Menú',
    },
    footer: {
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
  },
  en: {
    nav: {
      home: 'Home',
      menu: 'Menu',
    },
    footer: {
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
  },
};

export function getUi(locale: Locale): UiStrings {
  return ui[locale];
}

export const defaultDescription: Record<Locale, string> = {
  nl: 'HoneyBadger Trader is in ontwikkeling. Er wordt op dit moment geen dienst aangeboden.',
  es: 'HoneyBadger Trader is in ontwikkeling. Er wordt op dit moment geen dienst aangeboden.',
  en: 'HoneyBadger Trader is in ontwikkeling. Er wordt op dit moment geen dienst aangeboden.',
};
