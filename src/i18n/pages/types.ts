import type { Locale } from '../routes';

export type LocalizedPage<T> = Record<Locale, T>;

export type CardItem = {
  icon: string;
  title: string;
  body: string;
};

export type StepItem = {
  title: string;
  body: string;
  bodyHtml?: string;
};

export type IndexPageContent = {
  title: string;
  description: string;
  hero: {
    badge: string;
    h1: string;
    sub: string;
    pricingNote: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  why: {
    heading: string;
    intro: string;
    cards: CardItem[];
  };
  steps: {
    heading: string;
    items: StepItem[];
    footerCta: string;
  };
  cta: {
    heading: string;
    body: string;
    button: string;
  };
  imageAlt: string;
};

export type HowItWorksStep = {
  title: string;
  body: string;
  bodyHtml?: string;
};

export type HowItWorksPageContent = {
  title: string;
  description: string;
  h1: string;
  intro: string;
  steps: HowItWorksStep[];
  security: {
    heading: string;
    cards: CardItem[];
  };
  cta: {
    heading: string;
    body: string;
    button: string;
  };
};

export type StrategyTableRow = {
  situation: string;
  action: string;
};

export type ExitRule = {
  label: string;
  body: string;
};

export type StrategyBlock = {
  badge: string;
  name: string;
  intro: string;
  table?: {
    headers: [string, string];
    rows: StrategyTableRow[];
  };
  exitRules?: ExitRule[];
  closing: string;
};

export type StrategiesPageContent = {
  title: string;
  description: string;
  h1: string;
  intro: string;
  strategies: [StrategyBlock, StrategyBlock];
  disclaimer: {
    body: string;
    linkText: string;
  };
};

export type PricingFeature = string;

export type PricingScenarioRow = {
  label: string;
  value: string;
  note?: string;
  isSep?: boolean;
  isTotal?: boolean;
};

export type PricingScenario = {
  title: string;
  rows: PricingScenarioRow[];
  netLabel: string;
  netHtml?: string;
};

export type PricingPageContent = {
  title: string;
  description: string;
  h1: string;
  intro: string;
  card: {
    badge: string;
    amount: string;
    period: string;
    feePct: string;
    feeLabel: string;
    tagline: string;
    features: PricingFeature[];
    cta: string;
    earlyAccessNote: string;
  };
  example: {
    heading: string;
    intro: string;
    scenarios: PricingScenario[];
    footnote: string;
  };
};

export type FaqItem = {
  question: string;
  answer?: string;
  answerHtml?: string;
};

export type FaqPageContent = {
  title: string;
  description: string;
  h1: string;
  intro: string;
  items: FaqItem[];
  contactPrompt: string;
  affiliateDisclosure: string;
};

export type FormOption = {
  value: string;
  label: string;
};

export type ContactPageContent = {
  title: string;
  description: string;
  h1: string;
  intro: string;
  form: {
    honeypotLabel: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    subjectOptions: FormOption[];
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    privacyHtml: string;
  };
};

export type WaitlistPageContent = {
  title: string;
  description: string;
  badge: string;
  h1: string;
  intro: string;
  benefits: string[];
  form: {
    noscriptHtml: string;
    honeypotLabel: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    experienceLabel: string;
    experiencePlaceholder: string;
    experienceOptions: FormOption[];
    submit: string;
    privacyHtml: string;
  };
};

export type ThankYouPageContent = {
  title: string;
  description: string;
  heading: string;
  intro: string;
  icon: string;
};
