import type { LocalizedPage, ThankYouPageContent } from './types';

export const bedanktContent: LocalizedPage<ThankYouPageContent> = {
  nl: {
    title: 'Bedankt voor je aanmelding! — HoneyBadger Trader',
    description: 'Je inschrijving voor de early access is gelukt.',
    heading: 'Je staat op de lijst!',
    intro:
      'Fantastisch dat je meedoet aan de early access van HoneyBadger Trader. We nemen zo snel mogelijk contact met je op via het opgegeven e-mailadres wanneer er een plekje voor je vrijkomt.',
    icon: '🎉',
  },
  es: {
    title: '¡Gracias por apuntarte! — HoneyBadger Trader',
    description: 'Tu inscripción al acceso anticipado se ha registrado correctamente.',
    heading: '¡Estás en la lista!',
    intro:
      'Genial que te unas al acceso anticipado de HoneyBadger Trader. Te contactaremos lo antes posible en el correo indicado cuando haya una plaza disponible.',
    icon: '🎉',
  },
  en: {
    title: 'Thanks for signing up! — HoneyBadger Trader',
    description: 'Your early access sign-up was successful.',
    heading: "You're on the list!",
    intro:
      'Great to have you in HoneyBadger Trader early access. We will contact you as soon as possible at the email you provided when a spot opens.',
    icon: '🎉',
  },
};

export const contactBedanktContent: LocalizedPage<ThankYouPageContent> = {
  nl: {
    title: 'Bedankt voor je bericht — HoneyBadger Trader',
    description: 'Je contactbericht is ontvangen.',
    heading: 'Bedankt voor je bericht!',
    intro: 'We hebben je bericht goed ontvangen en reageren zo snel mogelijk per e-mail.',
    icon: '👋',
  },
  es: {
    title: 'Gracias por tu mensaje — HoneyBadger Trader',
    description: 'Hemos recibido tu mensaje de contacto.',
    heading: '¡Gracias por tu mensaje!',
    intro: 'Hemos recibido tu mensaje y responderemos lo antes posible por correo.',
    icon: '👋',
  },
  en: {
    title: 'Thanks for your message — HoneyBadger Trader',
    description: 'Your contact message has been received.',
    heading: 'Thanks for your message!',
    intro: 'We have received your message and will reply by email as soon as we can.',
    icon: '👋',
  },
};

export const waitlistBedanktContent: LocalizedPage<ThankYouPageContent> = {
  nl: {
    title: 'Bedankt voor je inschrijving — HoneyBadger Trader',
    description: 'Je staat op de early-access waitlist. We nemen contact op zodra er plek is.',
    heading: 'Bedankt voor je inschrijving!',
    intro: 'We hebben je aanmelding ontvangen. We nemen contact met je op zodra er plek beschikbaar is.',
    icon: '✓',
  },
  es: {
    title: 'Gracias por apuntarte — HoneyBadger Trader',
    description: 'Estás en la lista de espera de acceso anticipado. Te contactaremos cuando haya plaza.',
    heading: '¡Gracias por apuntarte!',
    intro: 'Hemos recibido tu solicitud. Te contactaremos en cuanto haya una plaza disponible.',
    icon: '✓',
  },
  en: {
    title: 'Thanks for joining — HoneyBadger Trader',
    description: 'You are on the early access waitlist. We will contact you when a spot opens.',
    heading: 'Thanks for signing up!',
    intro: 'We have received your registration. We will contact you as soon as a spot is available.',
    icon: '✓',
  },
};
