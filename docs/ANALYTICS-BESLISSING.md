# Analytics — beslissingsmemo (marketing site)

**Datum:** 2026-07-29  
**Scope:** publieke website (`honeybadgertrader.com`), niet het Flask-dashboard  
**Status:** Plausible actief (PR #30); dit document ondersteunt herbeoordeling van kosten vs. privacy-doelen

---

## Huidige situatie

| Item | Waarde |
|------|--------|
| Vendor | [Plausible Analytics](https://plausible.io/) |
| Integratie | `src/layouts/Base.astro` + `public/js/plausible-init.js` |
| CSP | `script-src` / `connect-src` → `https://plausible.io` in `public/_headers` |
| Juridisch | `src/pages/juridisch/cookies.astro` — geen cookies, geen consent banner op marketing site |
| Kosten | ~€9/maand (10k pageviews, geen gratis plan na trial) |

---

## Waarom Plausible ooit gekozen is (impliciet, geen aparte ADR)

1. **Cookieloos** — geen cookiebanner op de marketing site (AVG-positionering, merk “jij houdt de controle”).
2. **Geen GA/Pixel** — cookies-pagina claimt expliciet: geen Google Analytics, geen Facebook Pixel.
3. **EU-hosting** — vermeld in README; past bij privacy-story.
4. **Eenvoud** — één lightweight script; geen complex consent-management.

**Niet** gekozen vanwege prijs: voor pre-launch / laag verkeer is €9/maand relatief duur.

---

## Opties vergeleken

| Optie | Kosten (indicatie) | Cookiebanner nodig? | Detail / UX | Juridische impact | Ops |
|-------|-------------------|---------------------|-------------|-------------------|-----|
| **A. Plausible (huidig)** | ~€9/mnd | Nee | Goed dashboard, realtime | Cookies- + privacy-copy klopt nu | Laag |
| **B. Umami Cloud** | Gratis tier / lager betaald | Meestal nee* | Vergelijkbaar eenvoudig | Cookies/privacy tekst aanpassen + vendor noemen | Laag |
| **C. Cloudflare Web Analytics** | Gratis | Nee | Minder detail dan Plausible | CF als verwerker vermelden; script/CSP wijzigen | Laag (DNS al CF) |
| **D. Self-hosted Umami/Matomo** | VPS (al Hetzner) | Matomo vaak wel cookies | Volledige controle | Meer DPA/AVG-verantwoordelijkheid bij jou | Medium–hoog |
| **E. Geen analytics** | €0 | Nee | Alleen Netlify deploy-logs / server logs | Cookies-pagina: Plausible-paragraaf verwijderen | Minimaal |
| **F. Google Analytics 4** | Gratis | **Ja** (consent) | Rijkste data | Grote wijziging cookies/privacy + banner-UX | Medium |

\*Umami positioneert zich als privacy-first; altijd vendor-DPA en tekst laten kloppen met feitelijk gedrag.

---

## Aanbeveling (2026-07-29)

### Fase 1 — Launch (nu)

**Plausible aanhouden** zolang:

- PR #30 gemerged en live op `.com` (na 503-fix);
- je basale funnel-metrics wilt (waitlist, juridisch, pricing) zonder cookiebanner;
- €9/mnd acceptabel is als **launch-kosten** (1–3 maanden).

Review **maandelijks** pageview-volume in Plausible dashboard. Onder ~2k pageviews/mnd is de prijs per insight hoog.

### Fase 2 — Herbeoordeling (bijv. na 3 maanden live)

Besliscriteria:

| Trigger | Actie |
|---------|--------|
| Consistent &lt; 5k pageviews + budget gevoelig | Overweeg **E (uit)** of **C (CF Analytics gratis)** |
| Wel metrics nodig, €9 te duur | Migreer naar **B (Umami Cloud gratis tier)** |
| Geen behoefte aan marketing analytics | **E** — script eruit, cookies-pagina bijwerken |

---

## Migratie-checklist (bij vendor-wissel of uitzetten)

Gebruik bij elke optie ≠ Plausible:

- [ ] `src/layouts/Base.astro` — script(s) verwijderen of vervangen
- [ ] `public/js/plausible-init.js` — verwijderen indien niet meer nodig
- [ ] `public/_headers` — CSP `script-src` / `connect-src` hosts bijwerken
- [ ] `src/pages/juridisch/cookies.astro` — Plausible-paragraaf aanpassen of verwijderen
- [ ] `README.md` — analytics-regel bijwerken
- [ ] Privacy policy (indien Plausible/andere vendor als verwerker genoemd)
- [ ] Plausible-abonnement opzeggen (voorkom dubbele kosten)
- [ ] Smoke: Network (scripts 200), CSP 0 violations, Realtime hit op prod-domein

---

## Besluit vastleggen

| Besluit | Datum | Door | Notitie |
|---------|-------|------|---------|
| Plausible behouden t/m herbeoordeling | 2026-07-29 | Marc | Memo aangemaakt; PR #30 integratie |
| | | | |
| | | | |

---

## Referenties

- PR #28 — domein `honeybadgertrader.com`
- PR #30 — Plausible site-script (CSP-safe)
- `.github/skills/security-auditor/SKILL.md` — GDPR/cookie checks
- Issue #29 (website) — Astro CVE’s (los van analytics-keuze)
