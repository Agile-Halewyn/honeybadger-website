---
name: systematic-debugging
description: >
  Use when debugging Astro build failures, broken layouts, hydration issues,
  or unexpected behavior in the browser. Root cause first — reproduce,
  read errors, then fix. No random tweaks.
---

# Systematic Debugging — HoneyBadger Website

## Overview

Random fixes waste time. For this **Astro static site**, investigation means build output + browser devtools — not Pi ports or Freqtrade APIs.

**Core principle:** Find root cause before changing code.

## The Iron Law

```
NO FIXES WITHOUT REPRODUCTION AND ERROR TEXT
```

## When to Use

- `npm run build` or `npx astro check` fails
- Page looks wrong (layout, styles, missing content)
- Console errors after adding `client:*` or scripts
- SEO/meta not appearing as expected

## Phase 1: Root cause investigation

### 1. Reproduce

- **Build-time:** Run `npm run build` and capture the **full** error (file + line).
- **Dev-time:** Run `npm run dev`, open the page, note exact URL and steps.

### 2. Read the error

- Astro/Vite stack traces point to the real file — follow them.
- TypeScript errors from `astro check` are authoritative until resolved.

### 3. Browser (client-only issues)

- F12 → **Console** for JS errors from islands.
- **Network** tab for failed assets or form posts.
- **Elements** for wrong DOM / duplicate `h1` / missing landmarks.

### 4. Recent changes

- `git diff`, `git log -n 5`
- Did a change break typography tokens (`global.css`) or a shared layout?

### 5. Environment

- Node version matches project expectations?
- Dependencies installed: `npm install`

## Phase 2: Hypothesis and minimal fix

1. One hypothesis: “X fails because Y.”
2. Smallest change; rebuild or refresh.
3. If wrong, **new** hypothesis — do not stack guesses.

## Phase 3: Verify

- `npm run build`
- `npx astro check`
- Manual spot-check for UI changes

## Website-specific patterns

| Symptom | Likely cause | Check |
|---------|--------------|--------|
| Styles look “off” | Hardcoded color/spacing | Use tokens from `src/styles/global.css` |
| Hydration mismatch | Island boundary or invalid HTML | Astro docs; component boundaries |
| SEO missing | Layout missing `<title>` / Meta | Compare with seo-strategist skill |
| Build OOM / slow | Accidentally huge client bundle | Reduce `client:*` usage |

## Red flags — STOP

- “Try this CSS” without seeing which rule applied
- Fixing without a failing command or console message
- Editing production deploy scripts for a static site bug (wrong layer)

**Return to Phase 1.**
