---
name: test-driven-development
description: >
  Use when implementing Astro components, fixing UI bugs, or changing content
  with clear acceptance criteria. This repo is Astro SSG — prefer minimal
  reproducible checks and npm run build; add Vitest/E2E when the project adopts them.
---

# Test-Driven Development (TDD) — HoneyBadger Website

## Overview

Define expected behavior **before** you ship changes. For this Astro codebase there is no mandatory Python/Flask or Playwright suite in-repo yet — the **non-negotiable gate** is a clean production build.

**Core principle:** If you cannot state what “done” looks like, you cannot know if the change is correct.

## When to Use

**Always (mental RED-GREEN):**

- New or changed Astro components / layouts
- Routing, content, or SEO metadata changes
- Bug fixes affecting rendered HTML or styles

**Practical RED:** Reproduce the issue or missing behavior (minimal page, `npm run dev`, or failing `npm run build`).

**Practical GREEN:** Smallest change that satisfies acceptance criteria; then `npm run build` + `npx astro check`.

## The Iron Law (this repo)

```
NO MERGE WITHOUT npm run build SUCCESS (for code changes)
```

Pure copy tweaks in markdown/HTML still need a quick build if they touch components or frontmatter.

## Acceptance criteria (examples)

- **Component:** “Hero shows headline + CTA; one `h1`; CTAs keyboard-focusable.”
- **SEO:** “Page has unique title + meta description + `og:title` per seo-strategist skill.”
- **Bug:** “Steps X–Y no longer throw in console; layout matches design tokens.”

## When automated tests exist

If the project adds **Vitest** or **Playwright**, extend this workflow: failing test first → minimal fix → green CI. Until then, document checks in the PR description.

## Verification checklist

Before marking work complete:

- [ ] Expected behavior written down (even briefly)
- [ ] `npm run build` succeeds
- [ ] `npx astro check` succeeds (or failure explained)
- [ ] Spot-check in `npm run dev` for interactive or visual changes

## Red flags

- Skipping `npm run build` “because it’s only CSS”
- No reproduction steps for a bugfix
- Changing design tokens without checking `global.css`

**Return to a clear acceptance criterion and rebuild.**
