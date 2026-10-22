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

### Fase 3: Juridisch
- [ ] Juridisch adviesgesprek plannen
- [ ] Privacy Policy finaliseren (placeholders invullen)
- [ ] Algemene Voorwaarden finaliseren
- [ ] Risicoverklaring finaliseren (incl. AFM-status)
- [ ] Cookie Policy reviewen

### Backlog
- Geen openstaand werk aan de publieke site; uitbreiding van de site volgt pas na een nieuw besluit (zie besluit b6).

## Gerelateerde documenten

- `docs/WAITLIST-API-SPEC.md` — **Gearchiveerd (besluit b6):** de wachtlijst bestaat niet meer op deze site; alleen ter referentie
- `docs/MULTI-USER-PLATFORM-PLAN.md` — Multi-user platform planning
- `docs/SECURITY-STANDARDS.md` — Beveiligingsstandaarden
- `DECISIONS.md` — ADR-004 (Frontend Framework keuze)

## Licentie

Proprietary — HoneyBadger Bots
