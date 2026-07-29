# Analytics — beslissingsmemo (marketing site)

**Datum:** 2026-07-29 (herzienzelfde dag — review Marc)  
**Scope:** publieke website (`honeybadgertrader.com`), niet het Flask-dashboard  
**Status:** **Spoor 1 bevestigd (Marc, 2026-07-29)** — migratie PR naar Cloudflare Web Analytics; Plausible-trial niet verlengen

---

## Huidige situatie

| Item | Waarde |
|------|--------|
| Vendor (code) | [Cloudflare Web Analytics](https://developers.cloudflare.com/web-analytics/) (JS-beacon) |
| Integratie | `src/layouts/Base.astro` — `PUBLIC_CF_WEB_ANALYTICS_TOKEN` (build-time) |
| CSP | `script-src` → `https://static.cloudflareinsights.com`; `connect-src` → `https://cloudflareinsights.com` |
| Juridisch | `cookies.astro` + `src/i18n/legal/privacy.ts` (NL/ES/EN) vermelden Cloudflare Web Analytics |
| Kosten | €0 (gratis tier) |
| DNS | `honeybadgerbots.nl` proxied via Cloudflare (CF-RAY); `honeybadgertrader.com` wijst naar Netlify (75.2.60.5 / 99.83.231.61) — **geen orange-cloud vereist** voor JS-beacon |
| **Baseline pageviews** | **Geen** — pre-launch; volume ≈ 0 tot `.com` live is |

---

## Waarom Plausible ooit gekozen is (impliciet, geen aparte ADR)

1. **Cookieloos** — geen cookiebanner op de marketing site (AVG-positionering, merk “jij houdt de controle”).
2. **Geen GA/Pixel** — cookies-pagina claimt expliciet: geen Google Analytics, geen Facebook Pixel.
3. **EU-hosting** — vermeld in README; past bij privacy-story.
4. **Eenvoud** — één lightweight script; geen complex consent-management.

**Niet** gekozen vanwege prijs.

### Scheiding privacy vs. kosten (belangrijk)

| Dimensie | Status |
|----------|--------|
| **Privacy / cookieloos / geen banner** | Oorspronkelijke afweging **blijft geldig** — dat is geen reden om Plausible *specifiek* te houden |
| **Kosten vs. launch-fase verkeer** | **Nieuwe** afweging — €9/mnd is duur wanneer volume ≈ 0 en funnel-analyse nog niet nodig is |

Heroverwegen gaat dus **niet** over “privacy opgeven”, maar over **welke cookieloos-gratis optie** past bij pre-launch.

---

## Opties vergeleken

| Optie | Kosten (indicatie) | Cookiebanner nodig? | Detail / UX | Juridische impact | Ops |
|-------|-------------------|---------------------|-------------|-------------------|-----|
| **A. Plausible (code nu)** | ~€9/mnd | Nee | Goals, realtime, waitlist-funnel | Copy klopt nu (cookies + privacy i18n) | Laag |
| **B. Umami Cloud** | Gratis tier / lager betaald | Meestal nee* | Vergelijkbaar eenvoudig | Cookies/privacy tekst aanpassen | Laag |
| **C. Cloudflare Web Analytics** | Gratis | Nee* | Minder detail; geen Plausible-goals | CF als verwerker; cookies/privacy tekst | **Laagst** (DNS al CF) |
| **D. Self-hosted Umami/Matomo** | VPS | Matomo vaak wel cookies | Volledige controle | Meer DPA/AVG bij jou | Medium–hoog |
| **E. Geen analytics** | €0 | Nee | Alleen Netlify/CF edge logs | Plausible-verwijzingen verwijderen | Minimaal |
| **F. Google Analytics 4** | Gratis | **Ja** | Rijkste data | Banner + grote copy-wijziging | Medium |

\*Umami/CF: altijd feitelijk gedrag vs. tekst checken; CF Web Analytics is cookieless per Cloudflare-docs, geen banner voor standaard pageview-metriek.

### Optie C — launch-fase sterker dan initieel memo suggereerde

| Voordeel | Toelichting |
|----------|-------------|
| Geen nieuwe vendor | DNS loopt al via Cloudflare |
| €0 | Precies in fase met minste verkeer |
| Zelfde AVG-positionering | Cookieloos → geen consent banner (parallel aan Plausible) |
| Voldoende bij ≈0 verkeer | Pageviews/uniques/referrers; geen waitlist goal-tracking nodig tot er volume is |

| Trade-off | Toelichting |
|-----------|-------------|
| Minder rijk | Geen Plausible-achtige goals/events voor waitlist-optimalisatie |
| Later upgraden | Terug-migreren naar Plausible = zelfde checklist-moeite als nu weg van Plausible |
| Integratie | CF-dashboard inschakelen + token in Netlify env; beacon werkt **zonder** orange-cloud (alleen JS-snippet) |

---

## Baseline-gap (kritiek op v1-aanbeveling)

De oorspronkelijke trigger “consistent &lt; 5k pageviews → overweeg C” is **niet toetsbaar vóór launch**:

- Er is **geen** historisch volume in Plausible (pre-launch ≈ 0).
- Je weet pas **achteraf** (bijv. na 3 maanden) of €9/mnd te duur was — niet vooraf.

**Mitigatie:** bij go-live **maand 1** baseline vastleggen (CF of Plausible — één vendor):

| Meting | Doel |
|--------|------|
| Pageviews maand 1 | Vergelijk met €9/mnd drempel (~€0,0009/view bij 10k cap) |
| Waitlist submits | Bepaalt of goal/funnel-analyse (Plausible) nodig wordt |
| Besluitdatum | Vast in tabel onderaan (niet open-ended “over 3 maanden”) |

---

## Aanbevelingen (twee sporen)

### Spoor 1 — Herziene fasering (Marc, 2026-07-29) — **voorkeur bij groenfield launch**

**Fase 1 — Launch:** start met **C (Cloudflare Web Analytics)**, niet Plausible.

- Bespaart €9/mnd in periode met minste data.
- Behoudt juridische eenvoud (geen cookiebanner).
- Plausible-account **niet** verlengen / trial laten verlopen tot upgrade-trigger.

**Fase 2 — Upgrade naar Plausible** wanneer **concrete** trigger (niet alleen “3 maanden”):

| Trigger | Voorbeeld |
|---------|-----------|
| Funnel-analyse | Waitlist-conversie per land/pagina optimaliseren met goals |
| Volume | Pageviews rechtvaardigen dashboard-kosten (bijv. &gt;5k/mnd **en** actieve content-beslissingen) |
| Product | A/B of event-tracking op marketing flows |

**Migratie Fase 1→2:** checklist onderaan (Plausible erin = zelfde moeite als Plausible eruit).

### Spoor 2 — Plausible aanhouden (v1-memo) — **alleen als uitzondering**

Plausible **niet** switchen als:

- PR #30 **live** op `.com` **en**
- je **actief** Plausible-dashboard gebruikt voor besluitvorming (content/waitlist), **en**
- €9/mnd &lt; waarde van continuïteit + geen migratie-uren.

**Huidige stand (2026-07-29):** PR #30 gemerged in repo; `.com` nog 503 → dashboard waarschijnlijk **nog niet** in actief gebruik → **Spoor 1** is praktisch nog vrijwel kosteloos te kiezen.

---

## Migratie-checklist (elke vendor-wissel)

### Plausible → Cloudflare (Spoor 1)

- [ ] Cloudflare dashboard → Web Analytics inschakelen voor `honeybadgertrader.com`
- [ ] Netlify → `PUBLIC_CF_WEB_ANALYTICS_TOKEN` (secret) zetten vóór productie-deploy
- [x] `src/layouts/Base.astro` — Plausible-scripts verwijderen; CF-beacon
- [x] `public/js/plausible-init.js` — verwijderen
- [x] `public/_headers` — CSP: `plausible.io` eruit; `static.cloudflareinsights.com` + `cloudflareinsights.com`
- [x] `src/pages/juridisch/cookies.astro` — Plausible → Cloudflare Web Analytics
- [x] `src/i18n/legal/privacy.ts` — NL/ES/EN Plausible-verwijzingen → CF (3 locales)
- [x] `README.md` + dit memo — status/besluit bijwerken
- [ ] Plausible-abonnement / trial **niet** verlengen
- [ ] Smoke: 0 CSP violations; CF dashboard toont pageviews na prod-hit (`.com` moet uit 503)

### Cloudflare → Plausible (Spoor 1 Fase 2)

- [ ] Plausible property `honeybadgertrader.com` actief
- [ ] PR #30-patroon opnieuw toepassen (of branch cherry-pick)
- [ ] CSP + cookies + privacy i18n terug naar Plausible
- [ ] CF Web Analytics uit in dashboard (geen dubbele telling)

### Naar E (geen analytics)

- [ ] Alle scripts eruit; cookies/privacy: “geen analytics” vermelden

---

## Besluit vastleggen

| Besluit | Datum | Door | Notitie |
|---------|-------|------|---------|
| Memo v1 + PR #30 code | 2026-07-29 | Agent | Plausible geïntegreerd |
| Review: CF-first launch | 2026-07-29 | Marc | Baseline-gap; Spoor 1 vs 2 |
| **Launch-vendor: Spoor 1 (CF)** | 2026-07-29 | Marc | Plausible-trial niet verlengen; upgrade later bij funnel-trigger |
| Baseline maand 1 | *open* | | Pageviews + waitlist na go-live |

---

## Referenties

- PR #28 — domein `honeybadgertrader.com`
- PR #30 — Plausible site-script (CSP-safe); **code ≠ verplichting tot betalen**
- [Cloudflare Web Analytics](https://developers.cloudflare.com/web-analytics/)
- `.github/skills/security-auditor/SKILL.md` — GDPR/cookie checks
- Issue #29 — Astro CVE’s (los van analytics-keuze)
