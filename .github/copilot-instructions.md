# Copilot Review Guidelines — HoneyBadger Website
# Version: 1.1 (English)
# Date: 2026-03-31

When performing a code review, apply these HoneyBadger standards:

## Frontend & Astro
- **Performance**: Minimize `client:*` directive usage to reduce JS bundle size.
- **Images**: Ensure the `<Image />` component is used from `astro:assets`.
- **Typing**: Mandatory TypeScript interfaces for component `Props`.
- **Styles**: Enforce the use of design tokens from `global.css`.

## Accessibility (A11y)
- **Alt Text**: All images must have descriptive alt attributes.
- **Hierarchy**: Logical heading structure (only one `h1` per page).
- **Contrast**: Maintain WCAG AA compliant colors (refer to design tokens).

## SEO & Meta
- **Completeness**: Every page must have metadata (Title + Description).
- **Socials**: Verify OpenGraph (`og:*`) and Twitter card tags.

## Compliance
- **Privacy**: Ensure a link to the Privacy Policy exists in the footer.
- **Risk Disclosure**: Verify that the "trading risk" disclaimer is visible on landing pages.

---
*Reference: AGENTS.md for full skill index.*
