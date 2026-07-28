import type { LocalizedPage, HowItWorksPageContent } from './types';

export const howItWorksContent: LocalizedPage<HowItWorksPageContent> = {
  nl: {
    title: 'Hoe het werkt — HoneyBadger Trader',
    description:
      'Ontdek hoe HoneyBadger Trader tradingbots inzet voor geautomatiseerd crypto handelen op je Bitvavo account.',
    h1: 'Hoe het werkt',
    intro:
      'Van aanmelding tot je eerste geautomatiseerde trade: duidelijk, stap voor stap en ook geschikt als je nog nieuw bent met crypto.',
    steps: [
      {
        title: 'Maak een account aan',
        body: 'Registreer veilig bij HoneyBadger Trader en log in op je persoonlijke dashboard. Je hebt alleen een bestaand Bitvavo account nodig om te starten.',
      },
      {
        title: 'Koppel je exchange account',
        bodyHtml:
          'Maak een beveiligde API-sleutel aan op je exchange (bijv. Bitvavo). Zorg ervoor dat je <strong>uitsluitend handelsrechten</strong> activeert. Met deze veilige afbakening blijft jouw crypto direct en 100% in jouw eigen beheer.',
      },
      {
        title: 'Activeer een strategie',
        bodyHtml:
          'Selecteer een van onze professionele bots, gebaseerd op bewezen handelsstrategieën. Bij elke bot zie je direct het risicoprofiel en hoe de strategie te werk gaat. <a href="{strategiesPath}">Lees meer over onze strategieën</a>.',
      },
      {
        title: 'Stel je allocatie in',
        body: "Bepaal zelf met welk gedeelte van je portfolio de bot mag handelen. Wij traden uitsluitend op de 'Spot' markt. Dit betekent geen gevaarlijke hefbomen (leverage) en dus nooit risico op liquidatie van je account.",
      },
      {
        title: 'Volg alles live',
        body: 'De bot doet het werk, 24/7. Bekijk je actieve posities en trade-geschiedenis eenvoudig via je dashboard. Jij behoudt altijd de controle en kunt bots op elk moment pauzeren.',
      },
    ],
    security: {
      heading: 'Beveiliging staat voorop',
      cards: [
        {
          icon: '🔒',
          title: 'Handelsrechten per design',
          body: 'Onze architectuur (gebouwd op Freqtrade) is uitsluitend ingericht om orders uit te voeren. Wij vragen je expliciet een sleutel aan te maken zonder opnamerechten. Zelfs in het onwaarschijnlijke geval dat ons systeem gecompromitteerd raakt, kan je crypto vermogen nooit worden weggesluisd.',
        },
        {
          icon: '🗞',
          title: 'Versleutelde opslag',
          body: 'Je API-sleutel wordt veilig (ge-encrypt) opgeslagen op onze database in de EU. Zelfs wij kunnen jouw sleutel nooit in ware vorm ontcijferen na de koppeling.',
        },
        {
          icon: '🛡',
          title: 'HODL-vriendelijke aanpak',
          body: "Weet de markt zwaar te dalen? Geen paniek. Omdat we uitsluitend 'Spot' handelen (zoals in BTC), kun je een vaststaande trade eenvoudig vasthouden (HODL). Zo komt de bot direct weer vrij voor nieuwe kansen.",
        },
        {
          icon: '🏦',
          title: 'Jouw geld, jouw beheer',
          body: 'HoneyBadger raakt jouw tegoeden niet aan en verwerkt geen crypto storten of opnames. Alles draait in jouw naam op je eigen, verzekerde Bitvavo account.',
        },
      ],
    },
    cta: {
      heading: 'Overtuigd?',
      body: 'Schrijf je in voor early access en wees een van de eersten.',
      button: 'Schrijf je in',
    },
  },
  es: {
    title: 'Cómo funciona — HoneyBadger Trader',
    description:
      'Descubre cómo HoneyBadger Trader usa bots de trading para automatizar el trading cripto en tu cuenta de Bitvavo.',
    h1: 'Cómo funciona',
    intro:
      'Del registro a tu primera operación automatizada: claro, paso a paso, también si acabas de empezar en cripto.',
    steps: [
      {
        title: 'Crea una cuenta',
        body: 'Regístrate de forma segura en HoneyBadger Trader e inicia sesión en tu panel personal. Solo necesitas una cuenta de Bitvavo existente para empezar.',
      },
      {
        title: 'Conecta tu exchange',
        bodyHtml:
          'Crea una clave API segura en tu exchange (p. ej. Bitvavo). Activa <strong>únicamente permisos de trading</strong>. Con este límite, tu cripto permanece al 100% bajo tu control.',
      },
      {
        title: 'Activa una estrategia',
        bodyHtml:
          'Elige uno de nuestros bots profesionales, basados en estrategias probadas. Cada bot muestra su perfil de riesgo y cómo opera. <a href="{strategiesPath}">Más sobre nuestras estrategias</a>.',
      },
      {
        title: 'Define tu asignación',
        body: 'Decide qué parte de tu cartera puede usar el bot. Operamos solo en mercado Spot: sin apalancamiento peligroso y sin riesgo de liquidación de tu cuenta.',
      },
      {
        title: 'Sigue todo en vivo',
        body: 'El bot hace el trabajo, 24/7. Consulta posiciones activas e historial de operaciones desde tu panel. Siempre mantienes el control y puedes pausar los bots cuando quieras.',
      },
    ],
    security: {
      heading: 'La seguridad es lo primero',
      cards: [
        {
          icon: '🔒',
          title: 'Solo permisos de trading',
          body: 'Nuestra arquitectura (basada en Freqtrade) está diseñada únicamente para ejecutar órdenes. Te pedimos explícitamente crear una clave sin permisos de retiro. Incluso si nuestro sistema se viera comprometido, tus fondos no podrían retirarse.',
        },
        {
          icon: '🗞',
          title: 'Almacenamiento cifrado',
          body: 'Tu clave API se guarda cifrada en nuestra base de datos en la UE. Ni siquiera nosotros podemos descifrarla en texto plano tras la vinculación.',
        },
        {
          icon: '🛡',
          title: 'Enfoque compatible con HODL',
          body: '¿Mercado en caída fuerte? Sin pánico. Al operar solo en Spot (p. ej. BTC), puedes mantener una operación abierta (HODL) y liberar el bot para nuevas oportunidades.',
        },
        {
          icon: '🏦',
          title: 'Tu dinero, tu custodia',
          body: 'HoneyBadger no toca tus fondos ni procesa depósitos o retiros de cripto. Todo funciona a tu nombre en tu propia cuenta de Bitvavo.',
        },
      ],
    },
    cta: {
      heading: '¿Convencido?',
      body: 'Apúntate al acceso anticipado y sé de los primeros.',
      button: 'Apúntate',
    },
  },
  en: {
    title: 'How it works — HoneyBadger Trader',
    description:
      'Learn how HoneyBadger Trader uses trading bots for automated crypto trading on your Bitvavo account.',
    h1: 'How it works',
    intro:
      'From sign-up to your first automated trade: clear, step by step — even if you are new to crypto.',
    steps: [
      {
        title: 'Create an account',
        body: 'Register securely with HoneyBadger Trader and log in to your personal dashboard. You only need an existing Bitvavo account to get started.',
      },
      {
        title: 'Connect your exchange',
        bodyHtml:
          'Create a secure API key on your exchange (e.g. Bitvavo). Enable <strong>trading permissions only</strong>. With this safeguard, your crypto stays 100% under your control.',
      },
      {
        title: 'Activate a strategy',
        bodyHtml:
          'Choose one of our professional bots, built on proven strategies. Each bot shows its risk profile and how it operates. <a href="{strategiesPath}">Read more about our strategies</a>.',
      },
      {
        title: 'Set your allocation',
        body: 'Decide which part of your portfolio the bot may trade. We trade spot markets only — no dangerous leverage and no risk of account liquidation.',
      },
      {
        title: 'Monitor everything live',
        body: 'The bot does the work, 24/7. View active positions and trade history from your dashboard. You always stay in control and can pause bots at any time.',
      },
    ],
    security: {
      heading: 'Security comes first',
      cards: [
        {
          icon: '🔒',
          title: 'Trading permissions by design',
          body: 'Our architecture (built on Freqtrade) is designed solely to place orders. We explicitly ask you to create a key without withdrawal permissions. Even if our system were compromised, your crypto could not be withdrawn.',
        },
        {
          icon: '🗞',
          title: 'Encrypted storage',
          body: 'Your API key is stored encrypted in our EU database. Even we cannot decrypt it in plain form after linking.',
        },
        {
          icon: '🛡',
          title: 'HODL-friendly approach',
          body: 'Sharp market drop? No panic. Because we trade spot only (e.g. BTC), you can hold an open trade (HODL) and free the bot for new opportunities.',
        },
        {
          icon: '🏦',
          title: 'Your money, your custody',
          body: 'HoneyBadger does not touch your funds or process crypto deposits or withdrawals. Everything runs in your name on your own Bitvavo account.',
        },
      ],
    },
    cta: {
      heading: 'Convinced?',
      body: 'Join early access and be among the first.',
      button: 'Sign up',
    },
  },
};
