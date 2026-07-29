import type { LocalizedPrivacy } from './types';

export const privacyContent: LocalizedPrivacy = {
  nl: {
    title: 'Privacy Policy — HoneyBadger Trader',
    metaDescription: 'Hoe HoneyBadger Trader omgaat met je persoonsgegevens.',
    h1: 'Privacy Policy',
    lastUpdated: 'Versie 1.0 — laatst bijgewerkt: 21 juli 2026',
    noticeLabel: 'Let op:',
    notice:
      'Deze versie 1.0 is opgesteld door de platformeigenaar en nog niet formeel getoetst door een gespecialiseerd jurist. Een gerichte juridische toets is gepland zodra daarvoor budget beschikbaar is; na die toets volgt versie 2.0.',
    sections: [
      {
        heading: '1. Wie zijn wij',
        paragraphs: [
          {
            text: 'HoneyBadger Trader is een dienst van eenmanszaak Agile Halewyn, gevestigd aan Middenburcht 27, 3452MS Vleuten, ingeschreven bij de Kamer van Koophandel onder nummer 90024559 (vestigingsnummer 000055776876). Wij zijn verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in deze Privacy Policy. Handelsnamen: Agile Halewyn, HoneyBadger Trader en HoneyBadger Bots.',
          },
        ],
      },
      {
        heading: '2. Welke gegevens verzamelen wij',
        intro: 'Wij verzamelen de volgende gegevens:',
        list: [
          '<strong>Accountgegevens:</strong> naam, e-mailadres bij registratie',
          '<strong>Waitlist:</strong> naam, e-mailadres, ervaring met crypto',
          '<strong>Contactformulier:</strong> naam, e-mailadres, onderwerp en bericht',
          '<strong>Technische gegevens:</strong> IP-adres, browser type (geanonimiseerd via Cloudflare Web Analytics)',
          '<strong>Handelsgegevens:</strong> API-sleutel (versleuteld opgeslagen), handelstransacties uitgevoerd door de bots',
        ],
      },
      {
        heading: '3. Waarvoor gebruiken wij je gegevens',
        list: [
          'Het leveren van onze dienst (geautomatiseerd handelen)',
          'Het tonen van je handelsresultaten in het dashboard',
          'Het informeren over de status van je early access aanmelding',
          'Het verbeteren van onze dienst (geanonimiseerde analytics)',
        ],
      },
      {
        heading: '4. Hoe lang bewaren wij je gegevens',
        list: [
          '<strong>Waitlist gegevens:</strong> maximaal 12 maanden na inschrijving',
          '<strong>Accountgegevens:</strong> tot je je account verwijdert',
          '<strong>Handelsgegevens (incl. gegevens die aan facturatie zijn gekoppeld):</strong> 7 jaar na de transactie, op grond van de Nederlandse fiscale bewaarplicht (art. 52 Algemene wet inzake rijksbelastingen). Na afloop van die termijn worden deze gegevens verwijderd, tenzij een langere wettelijke bewaarplicht van toepassing is.',
        ],
      },
      {
        heading: '5. Met wie delen wij je gegevens',
        intro: 'Wij delen je gegevens niet met derden, behalve:',
        list: [
          '<strong>Bitvavo:</strong> handelsorders worden uitgevoerd op jouw Bitvavo account via de door jou verstrekte API-sleutel',
          '<strong>Netlify:</strong> hosting van de publieke website; voor het contactformulier en <strong>tijdelijk</strong> voor <strong>early-access / waitlist</strong>-inschrijvingen verwerkt Netlify ingediende formuliergegevens als onderaannemer in het kader van hun dienstverlening (EU/US-verwerkersstructuur zoals beschreven door Netlify). Een gegevensverwerkersovereenkomst met Netlify kan worden gesloten via het Netlify-account (Compliance / Data Processing Agreement). Zodra waitlist-inschrijvingen via onze eigen API verlopen, worden die gegevens rechtstreeks aan ons platform toegeleverd.',
          '<strong>Cloudflare:</strong> geanonimiseerde pageview-statistieken via Cloudflare Web Analytics (JS-beacon; geen cookies). Cloudflare treedt op als verwerker onder hun gegevensverwerkersovereenkomst.',
          '<strong>Eigen platform (API):</strong> zodra waitlist via onze server loopt: aanmeldingen rechtstreeks naar onze API; verwerking en opslag op ons platform (Hetzner EU)',
          '<strong>Hosting provider:</strong> Hetzner (Duitsland, EU) voor het hosten van ons platform',
          '<strong>Wettelijke verplichting:</strong> als wij hiertoe wettelijk verplicht zijn',
        ],
      },
      {
        heading: '6. Beveiliging',
        paragraphs: [
          {
            text: 'Wij nemen passende technische en organisatorische maatregelen om je gegevens te beschermen, waaronder versleutelde opslag van API-sleutels en HTTPS-verbindingen.',
          },
        ],
      },
      {
        heading: '7. Jouw rechten',
        intro: 'Onder de AVG heb je de volgende rechten:',
        list: [
          'Recht op inzage in je gegevens',
          'Recht op correctie van onjuiste gegevens',
          'Recht op verwijdering van je gegevens',
          'Recht op beperking van verwerking',
          'Recht op overdraagbaarheid van je gegevens',
          'Recht om bezwaar te maken tegen verwerking',
        ],
        paragraphs: [
          {
            html: 'Neem contact op via <a href="{privacyMailto}">{privacyEmail}</a> om je rechten uit te oefenen.',
          },
        ],
      },
      {
        heading: '8. Cookies',
        paragraphs: [
          {
            html: 'Wij gebruiken Cloudflare Web Analytics, een cookieloos analytics-platform. Er worden geen tracking cookies geplaatst. Zie ook onze <a href="/juridisch/cookies">Cookie Policy</a>.',
          },
        ],
      },
      {
        heading: '9. Wijzigingen',
        paragraphs: [
          {
            text: 'Wij kunnen deze Privacy Policy wijzigen. De laatste versie is altijd beschikbaar op deze pagina.',
          },
        ],
      },
      {
        heading: '10. Contact',
        paragraphs: [
          {
            html: 'Vragen over deze Privacy Policy? Neem contact op via <a href="{privacyMailto}">{privacyEmail}</a>.',
          },
        ],
      },
    ],
  },

  es: {
    title: 'Política de Privacidad — HoneyBadger Trader',
    metaDescription:
      'Cómo HoneyBadger Trader trata sus datos personales.',
    h1: 'Política de Privacidad',
    lastUpdated: 'Versión 1.0 — última actualización: 21 de julio de 2026',
    noticeLabel: 'Atención:',
    notice:
      'Esta versión 1.0 ha sido redactada por el propietario de la plataforma y aún no ha sido revisada formalmente por un jurista especializado. Se prevé una revisión jurídica específica en cuanto haya presupuesto disponible; tras dicha revisión se publicará la versión 2.0.',
    sections: [
      {
        heading: '1. Quiénes somos',
        paragraphs: [
          {
            text: 'HoneyBadger Trader es un servicio de la empresa unipersonal Agile Halewyn, con domicilio en Middenburcht 27, 3452MS Vleuten (Países Bajos), inscrita en la Cámara de Comercio con el número 90024559 (número de establecimiento 000055776876). Somos responsables del tratamiento de datos personales conforme a esta Política de Privacidad. Nombres comerciales: Agile Halewyn, HoneyBadger Trader y HoneyBadger Bots.',
          },
        ],
      },
      {
        heading: '2. Qué datos recopilamos',
        intro: 'Recopilamos los siguientes datos:',
        list: [
          '<strong>Datos de cuenta:</strong> nombre y dirección de correo electrónico al registrarse',
          '<strong>Lista de espera:</strong> nombre, dirección de correo electrónico y experiencia con criptomonedas',
          '<strong>Formulario de contacto:</strong> nombre, dirección de correo electrónico, asunto y mensaje',
          '<strong>Datos técnicos:</strong> dirección IP y tipo de navegador (anonimizados mediante Cloudflare Web Analytics)',
          '<strong>Datos de trading:</strong> clave API (almacenada cifrada) y transacciones ejecutadas por los bots',
        ],
      },
      {
        heading: '3. Para qué utilizamos sus datos',
        list: [
          'Prestar nuestro servicio (trading automatizado)',
          'Mostrar sus resultados de trading en el panel de control',
          'Informarle sobre el estado de su solicitud de acceso anticipado',
          'Mejorar nuestro servicio (analítica anonimizada)',
        ],
      },
      {
        heading: '4. Cuánto tiempo conservamos sus datos',
        list: [
          '<strong>Datos de la lista de espera:</strong> como máximo 12 meses tras la inscripción',
          '<strong>Datos de cuenta:</strong> hasta que elimine su cuenta',
          '<strong>Datos de trading (incluidos los vinculados a la facturación):</strong> 7 años tras la transacción, en virtud de la obligación de conservación fiscal neerlandesa (art. 52 de la Ley General de Impuestos del Estado). Transcurrido ese plazo, estos datos se eliminarán, salvo que aplique un periodo de conservación legal más largo.',
        ],
      },
      {
        heading: '5. Con quién compartimos sus datos',
        intro: 'No compartimos sus datos con terceros, excepto en los siguientes casos:',
        list: [
          '<strong>Bitvavo:</strong> las órdenes de trading se ejecutan en su cuenta de Bitvavo mediante la clave API que usted proporciona',
          '<strong>Netlify:</strong> alojamiento del sitio web público; para el formulario de contacto y, <strong>de forma temporal</strong>, para inscripciones de <strong>acceso anticipado / lista de espera</strong>, Netlify procesa los datos del formulario como encargado del tratamiento en el marco de su prestación de servicios (estructura de encargados UE/EE. UU. según la documentación de Netlify). Puede formalizarse un acuerdo de tratamiento de datos con Netlify a través de la cuenta de Netlify (Compliance / Data Processing Agreement). En cuanto las inscripciones en la lista de espera se gestionen mediante nuestra propia API, esos datos se entregarán directamente a nuestra plataforma.',
          '<strong>Cloudflare:</strong> estadísticas de páginas vistas anonimizadas mediante Cloudflare Web Analytics (beacon JS; sin cookies). Cloudflare actúa como encargado del tratamiento en el marco de su acuerdo de tratamiento de datos.',
          '<strong>Plataforma propia (API):</strong> cuando la lista de espera se procese en nuestro servidor: inscripciones directamente a nuestra API; tratamiento y almacenamiento en nuestra plataforma (Hetzner UE)',
          '<strong>Proveedor de alojamiento:</strong> Hetzner (Alemania, UE) para el alojamiento de nuestra plataforma',
          '<strong>Obligación legal:</strong> cuando estemos legalmente obligados a ello',
        ],
      },
      {
        heading: '6. Seguridad',
        paragraphs: [
          {
            text: 'Adoptamos medidas técnicas y organizativas adecuadas para proteger sus datos, incluido el almacenamiento cifrado de claves API y conexiones HTTPS.',
          },
        ],
      },
      {
        heading: '7. Sus derechos',
        intro: 'En virtud del RGPD, usted dispone de los siguientes derechos:',
        list: [
          'Derecho de acceso a sus datos',
          'Derecho de rectificación de datos inexactos',
          'Derecho de supresión de sus datos',
          'Derecho a la limitación del tratamiento',
          'Derecho a la portabilidad de sus datos',
          'Derecho de oposición al tratamiento',
        ],
        paragraphs: [
          {
            html: 'Póngase en contacto con nosotros en <a href="{privacyMailto}">{privacyEmail}</a> para ejercer sus derechos.',
          },
        ],
      },
      {
        heading: '8. Cookies',
        paragraphs: [
          {
            html: 'Utilizamos Cloudflare Web Analytics, una plataforma de analítica sin cookies. No se instalan cookies de seguimiento. Consulte también nuestra <a href="/juridisch/cookies">Política de Cookies</a>.',
          },
        ],
      },
      {
        heading: '9. Modificaciones',
        paragraphs: [
          {
            text: 'Podemos modificar esta Política de Privacidad. La versión más reciente estará siempre disponible en esta página.',
          },
        ],
      },
      {
        heading: '10. Contacto',
        paragraphs: [
          {
            html: '¿Tiene preguntas sobre esta Política de Privacidad? Póngase en contacto con nosotros en <a href="{privacyMailto}">{privacyEmail}</a>.',
          },
        ],
      },
    ],
  },

  en: {
    title: 'Privacy Policy — HoneyBadger Trader',
    metaDescription:
      'How HoneyBadger Trader handles your personal data.',
    h1: 'Privacy Policy',
    lastUpdated: 'Version 1.0 — last updated: 21 July 2026',
    noticeLabel: 'Please note:',
    notice:
      'This version 1.0 was drafted by the platform owner and has not yet been formally reviewed by a specialist legal adviser. A targeted legal review is planned once budget is available; version 2.0 will follow that review.',
    sections: [
      {
        heading: '1. Who we are',
        paragraphs: [
          {
            text: 'HoneyBadger Trader is a service operated by sole proprietorship Agile Halewyn, registered at Middenburcht 27, 3452MS Vleuten, the Netherlands, registered with the Chamber of Commerce under number 90024559 (establishment number 000055776876). We are responsible for processing personal data as described in this Privacy Policy. Trading names: Agile Halewyn, HoneyBadger Trader and HoneyBadger Bots.',
          },
        ],
      },
      {
        heading: '2. What data we collect',
        intro: 'We collect the following data:',
        list: [
          '<strong>Account data:</strong> name and email address upon registration',
          '<strong>Waitlist:</strong> name, email address and crypto experience',
          '<strong>Contact form:</strong> name, email address, subject and message',
          '<strong>Technical data:</strong> IP address and browser type (anonymised via Cloudflare Web Analytics)',
          '<strong>Trading data:</strong> API key (stored encrypted) and trades executed by the bots',
        ],
      },
      {
        heading: '3. How we use your data',
        list: [
          'Providing our service (automated trading)',
          'Displaying your trading results in the dashboard',
          'Informing you about the status of your early access registration',
          'Improving our service (anonymised analytics)',
        ],
      },
      {
        heading: '4. How long we retain your data',
        list: [
          '<strong>Waitlist data:</strong> up to 12 months after registration',
          '<strong>Account data:</strong> until you delete your account',
          '<strong>Trading data (including data linked to invoicing):</strong> 7 years after the transaction, pursuant to Dutch tax retention obligations (Section 52 of the General Tax Act). After that period, this data will be deleted unless a longer statutory retention period applies.',
        ],
      },
      {
        heading: '5. Who we share your data with',
        intro: 'We do not share your data with third parties, except:',
        list: [
          '<strong>Bitvavo:</strong> trade orders are executed on your Bitvavo account via the API key you provide',
          '<strong>Netlify:</strong> hosting of the public website; for the contact form and, <strong>temporarily</strong>, for <strong>early access / waitlist</strong> registrations, Netlify processes submitted form data as a processor in the course of its service provision (EU/US processor structure as described by Netlify). A data processing agreement with Netlify can be entered into via the Netlify account (Compliance / Data Processing Agreement). Once waitlist registrations run via our own API, that data will be delivered directly to our platform.',
          '<strong>Cloudflare:</strong> anonymised pageview statistics via Cloudflare Web Analytics (JS beacon; no cookies). Cloudflare acts as a processor under its data processing agreement.',
          '<strong>Own platform (API):</strong> once the waitlist runs on our server: registrations sent directly to our API; processing and storage on our platform (Hetzner EU)',
          '<strong>Hosting provider:</strong> Hetzner (Germany, EU) for hosting our platform',
          '<strong>Legal obligation:</strong> where we are legally required to do so',
        ],
      },
      {
        heading: '6. Security',
        paragraphs: [
          {
            text: 'We take appropriate technical and organisational measures to protect your data, including encrypted storage of API keys and HTTPS connections.',
          },
        ],
      },
      {
        heading: '7. Your rights',
        intro: 'Under the GDPR, you have the following rights:',
        list: [
          'Right of access to your data',
          'Right to rectification of inaccurate data',
          'Right to erasure of your data',
          'Right to restriction of processing',
          'Right to data portability',
          'Right to object to processing',
        ],
        paragraphs: [
          {
            html: 'Contact us at <a href="{privacyMailto}">{privacyEmail}</a> to exercise your rights.',
          },
        ],
      },
      {
        heading: '8. Cookies',
        paragraphs: [
          {
            html: 'We use Cloudflare Web Analytics, a cookieless analytics platform. No tracking cookies are placed. See also our <a href="/juridisch/cookies">Cookie Policy</a>.',
          },
        ],
      },
      {
        heading: '9. Changes',
        paragraphs: [
          {
            text: 'We may amend this Privacy Policy. The latest version will always be available on this page.',
          },
        ],
      },
      {
        heading: '10. Contact',
        paragraphs: [
          {
            html: 'Questions about this Privacy Policy? Contact us at <a href="{privacyMailto}">{privacyEmail}</a>.',
          },
        ],
      },
    ],
  },
};
