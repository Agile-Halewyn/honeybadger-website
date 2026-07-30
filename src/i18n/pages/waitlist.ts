import type { LocalizedPage, WaitlistPageContent } from './types';

export const waitlistContent: LocalizedPage<WaitlistPageContent> = {
  nl: {
    title: 'Early access — HoneyBadger Trader',
    description: 'Schrijf je in voor early access bij HoneyBadger Trader.',
    badge: 'Early access',
    h1: 'Wees er als eerste bij',
    intro: 'We laten geleidelijk nieuwe gebruikers toe. Schrijf je in en we nemen contact met je op zodra er plek is.',
    benefits: [
      '3 maanden gratis per strategie — daarna €5 per actieve strategie per maand',
      'Directe toegang tot alle strategieën',
      'Persoonlijke onboarding',
    ],
    form: {
      noscriptHtml:
        'Dit formulier kun je ook zonder JavaScript versturen. Vul de velden in en gebruik de knop hieronder. Bij problemen mail <a href="mailto:{contactEmail}">{contactEmail}</a>.',
      honeypotLabel: 'Niet invullen:',
      nameLabel: 'Naam',
      namePlaceholder: 'Je naam',
      emailLabel: 'E-mailadres',
      emailPlaceholder: 'je@email.nl',
      experienceLabel: 'Ervaring met crypto',
      experiencePlaceholder: '— Selecteer —',
      experienceOptions: [
        { value: 'beginner', label: 'Beginner — ik wil ermee starten' },
        { value: 'some', label: 'Enige ervaring — ik koop/verkoop af en toe' },
        { value: 'active', label: 'Actief — ik trade regelmatig' },
      ],
      submit: 'Schrijf me in',
      privacyHtml:
        'Door je in te schrijven ga je akkoord met onze <a href="{privacyPath}">Privacy Policy</a>. We gebruiken je e-mailadres alleen om je te informeren over HoneyBadger Trader. Netlify Forms heeft niet dezelfde dubbele-aanmeldingcheck als onze API; hetzelfde e-mailadres kan tijdelijk meerdere keren worden ingediend tot overstap naar het platform.',
    },
  },
  es: {
    title: 'Acceso anticipado — HoneyBadger Trader',
    description: 'Apúntate al acceso anticipado de HoneyBadger Trader.',
    badge: 'Acceso anticipado',
    h1: 'Sé de los primeros',
    intro: 'Vamos incorporando usuarios de forma gradual. Apúntate y te contactaremos cuando haya plaza.',
    benefits: [
      '3 meses gratis por estrategia — después €5 por estrategia activa al mes',
      'Acceso directo a todas las estrategias',
      'Onboarding personalizado',
    ],
    form: {
      noscriptHtml:
        'También puedes enviar este formulario sin JavaScript. Rellena los campos y usa el botón de abajo. Si hay problemas, escribe a <a href="mailto:{contactEmail}">{contactEmail}</a>.',
      honeypotLabel: 'No rellenar:',
      nameLabel: 'Nombre',
      namePlaceholder: 'Tu nombre',
      emailLabel: 'Correo electrónico',
      emailPlaceholder: 'tu@email.com',
      experienceLabel: 'Experiencia con cripto',
      experiencePlaceholder: '— Selecciona —',
      experienceOptions: [
        { value: 'beginner', label: 'Principiante — quiero empezar' },
        { value: 'some', label: 'Algo de experiencia — compro/vendo de vez en cuando' },
        { value: 'active', label: 'Activo — opero con regularidad' },
      ],
      submit: 'Apuntarme',
      privacyHtml:
        'Al apuntarte aceptas nuestra <a href="{privacyPath}">Política de Privacidad</a>. Usamos tu correo solo para informarte sobre HoneyBadger Trader. Netlify Forms no tiene la misma comprobación de duplicados que nuestra API; el mismo correo puede enviarse varias veces hasta la migración a la plataforma.',
    },
  },
  en: {
    title: 'Early access — HoneyBadger Trader',
    description: 'Join early access for HoneyBadger Trader.',
    badge: 'Early access',
    h1: 'Be among the first',
    intro: 'We onboard new users gradually. Sign up and we will contact you when a spot opens.',
    benefits: [
      '3 months free per strategy — then €5 per active strategy per month',
      'Direct access to all strategies',
      'Personal onboarding',
    ],
    form: {
      noscriptHtml:
        'You can submit this form without JavaScript. Fill in the fields and use the button below. If you run into issues, email <a href="mailto:{contactEmail}">{contactEmail}</a>.',
      honeypotLabel: 'Do not fill in:',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email address',
      emailPlaceholder: 'you@email.com',
      experienceLabel: 'Crypto experience',
      experiencePlaceholder: '— Select —',
      experienceOptions: [
        { value: 'beginner', label: 'Beginner — I want to get started' },
        { value: 'some', label: 'Some experience — I buy/sell occasionally' },
        { value: 'active', label: 'Active — I trade regularly' },
      ],
      submit: 'Join the waitlist',
      privacyHtml:
        'By signing up you agree to our <a href="{privacyPath}">Privacy Policy</a>. We use your email only to keep you informed about HoneyBadger Trader. Netlify Forms does not have the same duplicate-check as our API; the same email may be submitted more than once until we migrate to the platform.',
    },
  },
};
