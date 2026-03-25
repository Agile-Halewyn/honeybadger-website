# HoneyBadger Bots — Publieke Website

Informatieve website voor HoneyBadger Bots. Gebouwd met Astro, gehost op Netlify.

## Stack

- **Framework:** [Astro](https://astro.build/) v5
- **Hosting:** [Netlify](https://www.netlify.com/) (gratis tier)
- **Analytics:** [Plausible](https://plausible.io/) (cookieloos, EU-hosted)
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
│   ├── waitlist.astro      # Early access formulier
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
| `/waitlist` | Early access formulier | Scaffold compleet (Netlify Forms) |
| `/juridisch/privacy` | Privacy Policy | Concept — juridisch advies nodig |
| `/juridisch/voorwaarden` | Algemene Voorwaarden | Concept — juridisch advies nodig |
| `/juridisch/disclaimer` | Risicoverklaring | Concept — juridisch advies nodig |
| `/juridisch/cookies` | Cookie Policy | Scaffold compleet |

## TODO voor go-live

### Fase 1: Technisch
- [ ] `npm install` en `npm run dev` draaien
- [ ] Banner afbeelding toevoegen in `src/assets/`
- [ ] GitHub repo aanmaken en code pushen
- [ ] Netlify koppelen aan repo
- [ ] Custom domain instellen (honeybadgerbots.nl)
- [ ] Plausible Analytics activeren (uncomment script in Base.astro)
- [ ] UptimeRobot instellen

### Fase 2: Content
- [ ] Landing page copy finaliseren
- [ ] "Hoe het werkt" tekst reviewen
- [ ] Pricing bevestigen
- [ ] FAQ aanvullen op basis van feedback
- [ ] Banner/hero afbeelding designen of laten maken

### Fase 3: Juridisch
- [ ] Juridisch adviesgesprek plannen
- [ ] Privacy Policy finaliseren (placeholders invullen)
- [ ] Algemene Voorwaarden finaliseren
- [ ] Risicoverklaring finaliseren (incl. AFM-status)
- [ ] Cookie Policy reviewen

### Fase 4: Na VPS-migratie
- [ ] Waitlist formulier migreren van Netlify Forms naar Flask API
- [ ] "Inloggen" knop updaten naar app.honeybadgerbots.nl/login

## Gerelateerde documenten

- `docs/WEBSITE-ARCHITECTURE-PLAN.md` — Architectuurplan (v1.1, gereviewed)
- `docs/MULTI-USER-PLATFORM-PLAN.md` — Multi-user platform planning
- `docs/SECURITY-STANDARDS.md` — Beveiligingsstandaarden
- `DECISIONS.md` — ADR-004 (Frontend Framework keuze)

## Licentie

Proprietary — HoneyBadger Bots
