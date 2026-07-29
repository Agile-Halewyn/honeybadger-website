# HoneyBadger Bots — Publieke Website

Informatieve website voor HoneyBadger Bots. Gebouwd met Astro, gehost op Netlify.

## Stack

- **Framework:** [Astro](https://astro.build/) v5
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

## Omgeving (waitlist-API)

**Verplicht op buildtijd:** variabele **`PUBLIC_WAITLIST_API_URL`** (wordt door Astro ingebakken voor toekomstige API-modus en blijft geëvalueerd in `src/config.ts`). Lokaal: kopieer `.env.example` naar `.env`. Het waitlist-formulier gebruikt deze URL **niet** zolang Netlify Forms actief is — zie `docs/WAITLIST-API-SPEC.md`.

- **Netlify — productie:** staat in `netlify.toml` onder `[context.production.environment]`.
- **Netlify — deploy previews / branch deploys:** zelf een waarde instellen (bijv. staging-Flask); zie `docs/WAITLIST-API-SPEC.md`.
- **Cloudflare Web Analytics:** zet `PUBLIC_CF_WEB_ANALYTICS_TOKEN` in Netlify (Site settings → Environment variables). Token uit Cloudflare dashboard → Web Analytics → Manage site. Lokaal optioneel in `.env`; zonder token wordt geen beacon ingebouwd.

## Projectstructuur

```
src/
├── assets/           # Afbeeldingen (worden geoptimaliseerd door Astro)
│   └── banner.png    # TODO: banner toevoegen (3200x1280)
├── components/
│   ├── Header.astro  # Navigatie + mobiel menu
│   └── Footer.astro  # Footer met juridische links
├── layouts/
│   └── Base.astro    # Hoofdlayout (SEO, fonts, analytics)
├── pages/
│   ├── index.astro         # Landing page
│   ├── hoe-het-werkt.astro # Uitleg over de dienst
│   ├── pricing.astro       # Pricing met rekenvoorbeelden
│   ├── faq.astro           # Veelgestelde vragen
│   ├── waitlist.astro      # Early access (tijdelijk Netlify Forms)
│   ├── waitlist-bedankt.astro # Bedankpagina na waitlist-submit
│   └── juridisch/
│       ├── privacy.astro       # Privacy Policy (concept)
│       ├── voorwaarden.astro   # Algemene Voorwaarden (concept)
│       ├── disclaimer.astro    # Risicoverklaring (concept)
│       └── cookies.astro       # Cookie Policy
└── styles/
    └── global.css    # Design tokens, reset, utilities
public/
├── _headers          # Security headers voor Netlify
├── favicon.svg
└── robots.txt
netlify.toml          # Build config + .com → .nl redirect
```

## Pagina's

| URL | Pagina | Status |
|-----|--------|--------|
| `/` | Landing page | Scaffold compleet |
| `/hoe-het-werkt` | Hoe het werkt | Scaffold compleet |
| `/pricing` | Pricing | Scaffold compleet |
| `/faq` | FAQ | Scaffold compleet |
| `/waitlist` | Early access formulier | **Tijdelijk:** Netlify Forms (`POST`, bedankpagina `/waitlist-bedankt/`); zie `docs/WAITLIST-API-SPEC.md` |
| `/waitlist-bedankt` | Bedankpagina na waitlist-inschrijving | Netlify Forms redirect |
| `/juridisch/privacy` | Privacy Policy | Concept — juridisch advies nodig |
| `/juridisch/voorwaarden` | Algemene Voorwaarden | Concept — juridisch advies nodig |
| `/juridisch/disclaimer` | Risicoverklaring | Concept — juridisch advies nodig |
| `/juridisch/cookies` | Cookie Policy | Scaffold compleet |

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
