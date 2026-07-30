import type { LocalizedPage, FaqPageContent } from './types';

export const faqContent: LocalizedPage<FaqPageContent> = {
  nl: {
    title: 'FAQ — HoneyBadger Trader',
    description:
      'Veelgestelde vragen over HoneyBadger Trader, tradingbots en geautomatiseerd crypto handelen.',
    h1: 'Veelgestelde vragen',
    intro: 'Alles wat je wilt weten over HoneyBadger Trader en geautomatiseerd crypto handelen.',
    affiliateDisclosure:
      'Gebruik van deze link is volledig vrijwillig. Bij aanmelding ontvangt HoneyBadger Trader een kleine vergoeding van Bitvavo, zonder extra kosten voor jou.',
    items: [
      {
        question: 'Wat is HoneyBadger Trader?',
        answer:
          'HoneyBadger Trader is een platform voor geautomatiseerd crypto handelen met tradingbots op jouw Bitvavo account. Wij regelen de techniek op de achtergrond, jij behoudt de controle over je geld.',
      },
      {
        question: 'Is mijn geld veilig?',
        answer:
          'Ja. Je crypto staat op jouw eigen Bitvavo account. Je verstrekt ons uitsluitend een API-sleutel met handelsrechten, zonder opnamerechten. Door deze instelling is het technisch onmogelijk voor ons (of anderen) om je crypto op te nemen. Wij vragen je uitdrukkelijk om opnamerechten actief uit te schakelen bij aanmaak.',
      },
      {
        question: 'Welke exchange wordt ondersteund?',
        answerHtml:
          'Op dit moment ondersteunen we alleen Bitvavo, de grootste Nederlandse crypto exchange. Ondersteuning voor andere exchanges kan in de toekomst worden toegevoegd. Heb je nog geen Bitvavo account? Je kunt <a href="{bitvavoAffiliateUrl}" target="_blank" rel="noopener noreferrer sponsored">hier een account aanmaken</a>. {affiliateDisclosure}',
      },
      {
        question: 'Welke strategieën zijn beschikbaar?',
        answerHtml:
          'We bieden twee strategieën: RegimeSwitch (de voorzichtige handelaar) en Swing Balanced (de actieve handelaar). Beide draaien op Bitcoin en vullen elkaar aan. Lees meer op onze <a href="{strategiesPath}">strategiepagina</a>.',
      },
      {
        question: 'Wat kost het?',
        answerHtml:
          'Je betaalt €5 per actieve strategie per maand. Activeer je één strategie, dan betaal je €5 per maand. Activeer je beide strategieën, dan betaal je €10 per maand (2 actieve strategieën). Daarbovenop rekenen we 8% performance fee over de totale netto winst van al je actieve strategieën samen. Geen winst? Dan betaal je alleen het maandelijkse abonnement. Zie onze <a href="{pricingPath}">pricing pagina</a> voor rekenvoorbeelden.',
      },
      {
        question: 'Kan ik op elk moment stoppen?',
        answer:
          'Ja, altijd. Je kunt bots pauzeren of volledig uitschakelen via je dashboard. Er is geen minimale contractduur.',
      },
      {
        question: 'Is er een verplichte stoploss?',
        answer:
          'Nee, wij dwingen geen stoploss af. Omdat wij uitsluitend Spot trading gebruiken (bijv. op BTC), is er geen risico op liquidatie. Weet de markt zwaar te dalen? Dan kun je je lopende trades eenvoudig vasthouden als een lange-termijn investering (HODL), waardoor de bot weer vrijkomt voor nieuwe kansen.',
      },
      {
        question: 'Garanderen jullie winst?',
        answer:
          "Nee. Crypto-trading brengt altijd risico's met zich mee en resultaten uit het verleden bieden geen garantie voor de toekomst. Onze bots gebruiken bewezen strategieën, maar verlies is mogelijk. Investeer alleen geld dat je kunt missen.",
      },
      {
        question: 'Hoeveel moet ik minimaal inleggen?',
        answer:
          'De minimale inleg hangt af van de gekozen strategie en de minimale ordergrootte op Bitvavo. Doorgaans kun je starten vanaf circa €100.',
      },
      {
        question: 'Hoe kan ik meedoen?',
        answer:
          'We zijn momenteel in early access. Schrijf je in op onze waitlist en we nemen contact met je op zodra er plek is.',
      },
    ],
    contactPrompt: 'Staat je vraag er niet tussen? Neem contact op via',
  },
  es: {
    title: 'FAQ — HoneyBadger Trader',
    description:
      'Preguntas frecuentes sobre HoneyBadger Trader, bots de trading y trading cripto automatizado.',
    h1: 'Preguntas frecuentes',
    intro: 'Todo lo que quieres saber sobre HoneyBadger Trader y el trading cripto automatizado.',
    affiliateDisclosure:
      'El uso de este enlace es totalmente voluntario. Al registrarte, HoneyBadger Trader recibe una pequeña comisión de Bitvavo, sin coste adicional para ti.',
    items: [
      {
        question: '¿Qué es HoneyBadger Trader?',
        answer:
          'HoneyBadger Trader es una plataforma de trading cripto automatizado con bots en tu cuenta de Bitvavo. Nosotros gestionamos la tecnología; tú mantienes el control de tu dinero.',
      },
      {
        question: '¿Está seguro mi dinero?',
        answer:
          'Sí. Tu cripto permanece en tu propia cuenta de Bitvavo. Solo nos das una clave API con permisos de trading, sin permisos de retiro. Con esta configuración es técnicamente imposible que nosotros (u otros) retiremos tu cripto. Te pedimos explícitamente desactivar los permisos de retiro al crear la clave.',
      },
      {
        question: '¿Qué exchange se admite?',
        answerHtml:
          'Por ahora solo admitimos Bitvavo, el mayor exchange cripto de los Países Bajos. En el futuro podrían añadirse otros exchanges. ¿Aún no tienes cuenta en Bitvavo? Puedes <a href="{bitvavoAffiliateUrl}" target="_blank" rel="noopener noreferrer sponsored">crear una cuenta aquí</a>. {affiliateDisclosure}',
      },
      {
        question: '¿Qué estrategias hay disponibles?',
        answerHtml:
          'Ofrecemos dos estrategias: RegimeSwitch (trader prudente) y Swing Balanced (trader activo). Ambas operan en Bitcoin y se complementan. Más información en nuestra <a href="{strategiesPath}">página de estrategias</a>.',
      },
      {
        question: '¿Cuánto cuesta?',
        answerHtml:
          'Pagas €5 por estrategia activa al mes. Con una estrategia activa son €5 al mes; con ambas, €10 al mes (2 estrategias activas). Además cobramos un 8% de comisión por rendimiento sobre el beneficio neto total de todas tus estrategias activas. ¿Sin beneficio? Solo pagas la suscripción mensual. Consulta nuestra <a href="{pricingPath}">página de precios</a> para ver ejemplos.',
      },
      {
        question: '¿Puedo parar en cualquier momento?',
        answer:
          'Sí, siempre. Puedes pausar o desactivar los bots desde tu panel. No hay duración mínima de contrato.',
      },
      {
        question: '¿Hay stoploss obligatorio?',
        answer:
          'No, no imponemos stoploss. Al operar solo en Spot (p. ej. BTC), no hay riesgo de liquidación. ¿Mercado en caída fuerte? Puedes mantener las operaciones abiertas como inversión a largo plazo (HODL) y liberar el bot para nuevas oportunidades.',
      },
      {
        question: '¿Garantizáis beneficios?',
        answer:
          'No. El trading cripto siempre conlleva riesgos y los resultados pasados no garantizan el futuro. Nuestros bots usan estrategias probadas, pero las pérdidas son posibles. Invierte solo dinero que puedas permitirte perder.',
      },
      {
        question: '¿Cuál es la inversión mínima?',
        answer:
          'La inversión mínima depende de la estrategia elegida y del tamaño mínimo de orden en Bitvavo. Normalmente puedes empezar desde unos €100.',
      },
      {
        question: '¿Cómo puedo participar?',
        answer:
          'Estamos en acceso anticipado. Apúntate a nuestra lista de espera y te contactaremos cuando haya plaza.',
      },
    ],
    contactPrompt: '¿Tu pregunta no está aquí? Escríbenos a',
  },
  en: {
    title: 'FAQ — HoneyBadger Trader',
    description:
      'Frequently asked questions about HoneyBadger Trader, trading bots, and automated crypto trading.',
    h1: 'Frequently asked questions',
    intro: 'Everything you want to know about HoneyBadger Trader and automated crypto trading.',
    affiliateDisclosure:
      'Using this link is entirely voluntary. When you sign up, HoneyBadger Trader receives a small commission from Bitvavo at no extra cost to you.',
    items: [
      {
        question: 'What is HoneyBadger Trader?',
        answer:
          'HoneyBadger Trader is a platform for automated crypto trading with bots on your Bitvavo account. We handle the technology; you keep control of your money.',
      },
      {
        question: 'Is my money safe?',
        answer:
          'Yes. Your crypto stays on your own Bitvavo account. You give us an API key with trading permissions only — no withdrawal access. With this setup it is technically impossible for us (or anyone else) to withdraw your crypto. We explicitly ask you to disable withdrawal permissions when creating the key.',
      },
      {
        question: 'Which exchange is supported?',
        answerHtml:
          'We currently support Bitvavo only, the largest Dutch crypto exchange. Other exchanges may be added in the future. No Bitvavo account yet? You can <a href="{bitvavoAffiliateUrl}" target="_blank" rel="noopener noreferrer sponsored">create one here</a>. {affiliateDisclosure}',
      },
      {
        question: 'Which strategies are available?',
        answerHtml:
          'We offer two strategies: RegimeSwitch (the cautious trader) and Swing Balanced (the active trader). Both run on Bitcoin and complement each other. Read more on our <a href="{strategiesPath}">strategies page</a>.',
      },
      {
        question: 'What does it cost?',
        answerHtml:
          'You pay €5 per active strategy per month. One active strategy means €5/month; both strategies means €10/month (2 active strategies). On top of that we charge an 8% performance fee on the total net profit across all your active strategies. No profit? You only pay the monthly subscription. See our <a href="{pricingPath}">pricing page</a> for worked examples.',
      },
      {
        question: 'Can I stop at any time?',
        answer:
          'Yes, always. You can pause or fully disable bots from your dashboard. There is no minimum contract term.',
      },
      {
        question: 'Is there a mandatory stop-loss?',
        answer:
          'No, we do not enforce a stop-loss. Because we trade spot only (e.g. BTC), there is no liquidation risk. Sharp market drop? You can hold open trades as a long-term investment (HODL), freeing the bot for new opportunities.',
      },
      {
        question: 'Do you guarantee profit?',
        answer:
          'No. Crypto trading always carries risk and past results do not guarantee future performance. Our bots use proven strategies, but losses are possible. Only invest money you can afford to lose.',
      },
      {
        question: 'What is the minimum investment?',
        answer:
          'The minimum depends on the chosen strategy and Bitvavo minimum order size. You can usually start from around €100.',
      },
      {
        question: 'How can I join?',
        answer:
          'We are currently in early access. Join our waitlist and we will contact you when a spot opens.',
      },
    ],
    contactPrompt: 'Question not listed? Contact us at',
  },
};
