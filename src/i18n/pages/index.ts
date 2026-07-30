import type { LocalizedPage, IndexPageContent } from './types';

export const indexContent: LocalizedPage<IndexPageContent> = {
  nl: {
    title: 'HoneyBadger Trader — Geautomatiseerd crypto handelen met tradingbots',
    description:
      'Geautomatiseerd crypto handelen met tradingbots, zonder technische kennis. HoneyBadger Trader beheert de automatisering, jij behoudt de controle.',
    hero: {
      badge: 'Nu in early access',
      h1: 'Automatiseer je crypto handelen zonder de controle te verliezen',
      sub: 'Met HoneyBadger Trader laat je tradingbots 24/7 voor je werken, ook als je nieuw bent in crypto. Koppel eenmalig je Bitvavo account, kies een strategie en behoud altijd controle over je eigen tegoeden.',
      pricingNote: 'Vanaf €5 per strategie per maand — plus 8% op netto winst.',
      ctaPrimary: 'Schrijf je in voor early access',
      ctaSecondary: 'Hoe het werkt →',
    },
    why: {
      heading: 'Waarom HoneyBadger?',
      intro:
        'Tradingbots waren lang vooral voor techneuten of grote fondsen. Wij maken geautomatiseerd crypto handelen toegankelijk voor iedereen.',
      cards: [
        {
          icon: '🤖',
          title: 'Handelt 24/7 voor jou',
          body: 'Profiteer dag en nacht van marktbewegingen met geautomatiseerde handelsstrategieën. Terwijl jij slaapt, blijft de bot waakzaam.',
        },
        {
          icon: '🔒',
          title: 'Jouw geld, jouw regels',
          body: 'Je crypto staat en blijft veilig op je eigen Bitvavo account. Via API-sleutels krijgen wij enkel handelsrechten, nooit toestemming om op te nemen.',
        },
        {
          icon: '📱',
          title: 'Zowel simpel als pro',
          body: 'Start direct en simpel via een strak, intuïtief dashboard. Liever diep in de data duiken? Voor de analist is er een geavanceerde view vol met gedetailleerde grafieken en handelsstatistieken.',
        },
      ],
    },
    steps: {
      heading: 'Binnen 3 stappen aan de slag',
      items: [
        {
          title: 'Koppel je account',
          body: 'Maak een HoneyBadger Trader account aan en verbind je Bitvavo account veilig via een exclusieve API-sleutel.',
        },
        {
          title: 'Kies & configureer',
          bodyHtml:
            'Selecteer een professionele bot, bepaal met welke inleg hij mag werken en stel eventuele eigen limieten in. Lees meer over onze <a href="{strategiesPath}">strategieën</a>.',
        },
        {
          title: 'Activeer & volg live',
          body: "Geef je bot de 'Go' en leun achterover. Monitor alle trades en het rendement eenvoudig via je persoonlijke dashboard.",
        },
      ],
      footerCta: 'Meer over hoe het werkt',
    },
    cta: {
      heading: 'Klaar om te beginnen?',
      body: 'Schrijf je in voor early access en wees een van de eersten die HoneyBadger Trader uitprobeert.',
      button: 'Schrijf je in',
    },
    imageAlt: 'HoneyBadger Trader dashboard overzicht',
  },
  es: {
    title: 'HoneyBadger Trader — Trading cripto automatizado con bots',
    description:
      'Trading cripto automatizado con bots, sin conocimientos técnicos. HoneyBadger Trader gestiona la automatización; tú mantienes el control.',
    hero: {
      badge: 'Ahora en acceso anticipado',
      h1: 'Automatiza tu trading cripto sin perder el control',
      sub: 'Con HoneyBadger Trader, tus bots operan 24/7 por ti, incluso si acabas de empezar en cripto. Conecta tu cuenta de Bitvavo una sola vez, elige una estrategia y mantén siempre el control de tus fondos.',
      pricingNote: 'Desde €5 por estrategia al mes — más el 8% sobre la ganancia neta.',
      ctaPrimary: 'Apúntate al acceso anticipado',
      ctaSecondary: 'Cómo funciona →',
    },
    why: {
      heading: '¿Por qué HoneyBadger?',
      intro:
        'Durante mucho tiempo, los bots de trading eran cosa de expertos técnicos o grandes fondos. Nosotros hacemos el trading cripto automatizado accesible para todos.',
      cards: [
        {
          icon: '🤖',
          title: 'Opera 24/7 por ti',
          body: 'Aprovecha los movimientos del mercado día y noche con estrategias automatizadas. Mientras duermes, el bot sigue vigilante.',
        },
        {
          icon: '🔒',
          title: 'Tu dinero, tus reglas',
          body: 'Tu cripto permanece en tu propia cuenta de Bitvavo. Mediante claves API solo obtenemos permisos de trading, nunca de retiro.',
        },
        {
          icon: '📱',
          title: 'Simple y también pro',
          body: 'Empieza de forma directa con un panel intuitivo. ¿Prefieres profundizar en los datos? Para el analista hay una vista avanzada con gráficos detallados y estadísticas de trading.',
        },
      ],
    },
    steps: {
      heading: 'En marcha en 3 pasos',
      items: [
        {
          title: 'Conecta tu cuenta',
          body: 'Crea una cuenta en HoneyBadger Trader y vincula tu cuenta de Bitvavo de forma segura con una clave API exclusiva.',
        },
        {
          title: 'Elige y configura',
          bodyHtml:
            'Selecciona un bot profesional, define con qué capital puede operar y establece tus propios límites. Más sobre nuestras <a href="{strategiesPath}">estrategias</a>.',
        },
        {
          title: 'Activa y sigue en vivo',
          body: 'Dale luz verde a tu bot y relájate. Supervisa todas las operaciones y el rendimiento fácilmente desde tu panel personal.',
        },
      ],
      footerCta: 'Más sobre cómo funciona',
    },
    cta: {
      heading: '¿Listo para empezar?',
      body: 'Apúntate al acceso anticipado y sé de los primeros en probar HoneyBadger Trader.',
      button: 'Apúntate',
    },
    imageAlt: 'Vista general del panel de HoneyBadger Trader',
  },
  en: {
    title: 'HoneyBadger Trader — Automated crypto trading with bots',
    description:
      'Automated crypto trading with bots, no technical knowledge required. HoneyBadger Trader handles automation; you stay in control.',
    hero: {
      badge: 'Now in early access',
      h1: 'Automate your crypto trading without giving up control',
      sub: 'With HoneyBadger Trader, trading bots work for you 24/7 — even if you are new to crypto. Connect your Bitvavo account once, pick a strategy, and always keep control of your own funds.',
      pricingNote: 'From €5 per strategy per month — plus 8% on net profit.',
      ctaPrimary: 'Join early access',
      ctaSecondary: 'How it works →',
    },
    why: {
      heading: 'Why HoneyBadger?',
      intro:
        'Trading bots used to be mainly for tech-savvy traders or large funds. We make automated crypto trading accessible to everyone.',
      cards: [
        {
          icon: '🤖',
          title: 'Trades 24/7 for you',
          body: 'Capture market moves day and night with automated strategies. While you sleep, the bot stays alert.',
        },
        {
          icon: '🔒',
          title: 'Your money, your rules',
          body: 'Your crypto stays on your own Bitvavo account. Through API keys we only get trading permissions — never withdrawal access.',
        },
        {
          icon: '📱',
          title: 'Simple yet pro-ready',
          body: 'Get started quickly with a clean, intuitive dashboard. Want to dive deeper? Advanced users get detailed charts and trading statistics.',
        },
      ],
    },
    steps: {
      heading: 'Up and running in 3 steps',
      items: [
        {
          title: 'Connect your account',
          body: 'Create a HoneyBadger Trader account and securely link your Bitvavo account with a dedicated API key.',
        },
        {
          title: 'Choose & configure',
          bodyHtml:
            'Pick a professional bot, set how much capital it may use, and define your own limits. Read more about our <a href="{strategiesPath}">strategies</a>.',
        },
        {
          title: 'Activate & monitor live',
          body: 'Give your bot the go-ahead and lean back. Track every trade and your returns easily from your personal dashboard.',
        },
      ],
      footerCta: 'More about how it works',
    },
    cta: {
      heading: 'Ready to get started?',
      body: 'Join early access and be among the first to try HoneyBadger Trader.',
      button: 'Sign up',
    },
    imageAlt: 'HoneyBadger Trader dashboard overview',
  },
};
