# HoneyBadger Bots — Publieke Website

Informatieve website voor HoneyBadger Bots. Gebouwd met Astro, gehost op Netlify.

## Stack

- **Framework:** [Astro](https://astro.build/) v7
- **Hosting:** [Netlify](https://www.netlify.com/) (gratis tier)
- **Analytics:** [Cloudflare Web Analytics](https://developers.cloudflare.com/web-analytics/) (cookieloos JS-beacon) — token via `PUBLIC_CF_WEB_ANALYTICS_TOKEN`; zie [docs/ANALYTICS-BESLISSING.md](docs/ANALYTICS-BESLISSING.md)
- **DNS:** [Cloudflare](https://www.cloudflare.com/) (gratis tier)
- **Fonts:** Inter via Google Fonts

## Snel starten

```bash
# Installeer dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Build voor productie
npm run build

# Preview productie build
npm run preview
```

## Omgeving

- **Cloudflare Web Analytics:** zet `PUBLIC_CF_WEB_ANALYTICS_TOKEN` in Netlify (Site settings → Environment variables). Lokaal optioneel in `.env`; zonder token wordt geen beacon ingebouwd.

## Projectstructuur en pagina's

Sinds besluit b6 (2026-10-22) bestaat de site uit één neutrale startpagina (`/`, `src/pages/index.astro`: «HoneyBadger Trader is in ontwikkeling. Er wordt op dit moment geen dienst aangeboden.» plus het contactadres) en de juridische pagina's (`/juridisch/*`, plus `/en/juridisch/*` en `/es/juridisch/*` voor privacy en voorwaarden). Prijzen, wachtlijst, uitleg- en dienstpagina's zijn verwijderd; zie git-historie vóór deze wijziging voor de oude opzet.

## TODO voor go-live

### Fase 1: Technisch
- [x] `npm install` en `npm run dev` draaien
- [x] Banner afbeelding toevoegen in `src/assets/`
- [x] GitHub repo aanmaken en code pushen
- [x] Netlify koppelen aan repo
- [x] Custom domain instellen (honeybadgerbots.nl)
- [x] Cloudflare Web Analytics (JS-beacon via `PUBLIC_CF_WEB_ANALYTICS_TOKEN`)
- [x] UptimeRobot instellen

### Fase 2: Content
- [x] Landing page copy finaliseren
- [x] "Hoe het werkt" tekst reviewen
- [x] Pricing bevestigen
- [x] FAQ aanvullen op basis van feedback
- [x] Banner/hero afbeelding designen of laten maken

### Fase 3: Juridisch
- [ ] Juridisch adviesgesprek plannen
- [ ] Privacy Policy finaliseren (placeholders invullen)
- [ ] Algemene Voorwaarden finaliseren
- [ ] Risicoverklaring finaliseren (incl. AFM-status)
- [ ] Cookie Policy reviewen

### Fase 4: Na VPS-migratie
- [ ] Waitlist: na live Flask API terug naar directe `fetch`-POST (`PUBLIC_WAITLIST_API_URL`, zie `docs/WAITLIST-API-SPEC.md`). **Nu:** tijdelijk Netlify Forms op `/waitlist` zolang productie-endpoint ontbreekt.
- [ ] "Inloggen" knop updaten naar app.honeybadgertrader.com/login

### Backlog (Ideeën voor later)
- [ ] Specifieke 'Prestaties & Strategieën' pagina bouwen (backtests vs live data tonen om verwachtingen te managen)
- [ ] Kennisbank/Informatieve Hub opzetten (zoeken en filters)
- [ ] Links naar educatieve artikelen (bijv. de Bitvavo actuele marktsituaties en uitleg) toevoegen in de FAQ sectie

## Gerelateerde documenten

- `docs/WAITLIST-API-SPEC.md` — Waitlist POST-contract, CORS/CSRF-notities, frontend env (`PUBLIC_WAITLIST_API_URL`)
- `docs/MULTI-USER-PLATFORM-PLAN.md` — Multi-user platform planning
- `docs/SECURITY-STANDARDS.md` — Beveiligingsstandaarden
- `DECISIONS.md` — ADR-004 (Frontend Framework keuze)

## Licentie

Proprietary — HoneyBadger Bots
