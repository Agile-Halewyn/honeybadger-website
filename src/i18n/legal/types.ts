import type { Locale } from '../routes';

export type LegalParagraph = { text?: string; html?: string };

export type LegalSection = {
  heading: string;
  intro?: string;
  paragraphs?: LegalParagraph[];
  list?: string[];
};

export type PrivacyPageContent = {
  title: string;
  metaDescription: string;
  h1: string;
  lastUpdated: string;
  noticeLabel: string;
  notice: string;
  sections: LegalSection[];
};

export type TermsPageContent = {
  title: string;
  metaDescription: string;
  h1: string;
  lastUpdated: string;
  noticeLabel: string;
  notice: string;
  bindingClause?: string;
  sections: LegalSection[];
};

export type LocalizedPrivacy = Record<Locale, PrivacyPageContent>;
export type LocalizedTerms = Record<Locale, TermsPageContent>;
