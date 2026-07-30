import type { LocalizedPage, ContactPageContent } from './types';

export const contactContent: LocalizedPage<ContactPageContent> = {
  nl: {
    title: 'Contact — HoneyBadger Trader',
    description: 'Neem contact op met HoneyBadger Trader voor vragen, support of samenwerking.',
    h1: 'Contact',
    intro: 'Vragen of opmerkingen? Stuur ons een bericht.',
    form: {
      honeypotLabel: 'Niet invullen:',
      nameLabel: 'Naam',
      namePlaceholder: 'Je naam',
      emailLabel: 'E-mailadres',
      emailPlaceholder: 'je@email.nl',
      subjectLabel: 'Onderwerp',
      subjectPlaceholder: '— Selecteer —',
      subjectOptions: [
        { value: 'vraag-over-de-dienst', label: 'Vraag over de dienst' },
        { value: 'technisch-probleem', label: 'Technisch probleem' },
        { value: 'samenwerking', label: 'Samenwerking' },
        { value: 'overig', label: 'Overig' },
      ],
      messageLabel: 'Bericht',
      messagePlaceholder: 'Typ hier je bericht...',
      submit: 'Verstuur bericht',
      privacyHtml:
        'Je gegevens worden alleen gebruikt om je bericht te beantwoorden. Zie onze <a href="{privacyPath}">Privacy Policy</a>.',
    },
  },
  es: {
    title: 'Contacto — HoneyBadger Trader',
    description: 'Contacta con HoneyBadger Trader para preguntas, soporte o colaboración.',
    h1: 'Contacto',
    intro: '¿Preguntas o comentarios? Envíanos un mensaje.',
    form: {
      honeypotLabel: 'No rellenar:',
      nameLabel: 'Nombre',
      namePlaceholder: 'Tu nombre',
      emailLabel: 'Correo electrónico',
      emailPlaceholder: 'tu@email.com',
      subjectLabel: 'Asunto',
      subjectPlaceholder: '— Selecciona —',
      subjectOptions: [
        { value: 'vraag-over-de-dienst', label: 'Pregunta sobre el servicio' },
        { value: 'technisch-probleem', label: 'Problema técnico' },
        { value: 'samenwerking', label: 'Colaboración' },
        { value: 'overig', label: 'Otro' },
      ],
      messageLabel: 'Mensaje',
      messagePlaceholder: 'Escribe tu mensaje aquí...',
      submit: 'Enviar mensaje',
      privacyHtml:
        'Tus datos solo se usarán para responder a tu mensaje. Consulta nuestra <a href="{privacyPath}">Política de Privacidad</a>.',
    },
  },
  en: {
    title: 'Contact — HoneyBadger Trader',
    description: 'Contact HoneyBadger Trader for questions, support, or partnership enquiries.',
    h1: 'Contact',
    intro: 'Questions or feedback? Send us a message.',
    form: {
      honeypotLabel: 'Do not fill in:',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email address',
      emailPlaceholder: 'you@email.com',
      subjectLabel: 'Subject',
      subjectPlaceholder: '— Select —',
      subjectOptions: [
        { value: 'vraag-over-de-dienst', label: 'Question about the service' },
        { value: 'technisch-probleem', label: 'Technical issue' },
        { value: 'samenwerking', label: 'Partnership' },
        { value: 'overig', label: 'Other' },
      ],
      messageLabel: 'Message',
      messagePlaceholder: 'Type your message here...',
      submit: 'Send message',
      privacyHtml:
        'Your details are used only to reply to your message. See our <a href="{privacyPath}">Privacy Policy</a>.',
    },
  },
};
