# WAITLIST API SPEC

## Tijdelijk: Netlify Forms (publieke site)

**Status (website):** Zolang de Flask waitlist-endpoint op productie niet betrouwbaar bereikbaar is, post het formulier op **`/waitlist`** via **Netlify Forms** (klassieke HTML `POST`, **geen** `fetch` naar de API).

- Formulier: `data-netlify="true"`, `name="waitlist"`, redirect naar **`/waitlist-bedankt/`** na succes.
- **`submitted_at`:** hidden veld; wordt bij **submit** gevuld door **`/js/waitlist-netlify-submitted-at.js`** (luistert op `submit` — geen tijdstip van alleen pagina-open; compatibel met CSP `script-src 'self'`). Zonder JavaScript kan het veld leeg blijven.
- **Geen duplicate/rate-limit parity:** Netlify Forms voert niet dezelfde server-side checks uit als Flask (`409` duplicate, `429` rate limit). Export naar SQLite vereist **dedup op e-mail** vóór import i.v.m. `UNIQUE(email)` — zie § Migratie.

- **`PUBLIC_WAITLIST_API_URL`:** blijft **verplicht op buildtijd** (zie `src/config.ts`) voor toekomstige migratie / andere tooling; het waitlist-formulier gebruikt die URL **niet** zolang Netlify Forms actief is.

**Terug naar Flask API:** zodra `POST https://app.honeybadgertrader.com/api/waitlist` productieklaar is: website terug naar client-side JSON-`fetch` (extern JS-bestand, geen inline script), `connect-src` blijft `https://app.honeybadgertrader.com` nodig — zie comment bij `connect-src` in `public/_headers`.

**Operator (Netlify):** waar nodig Data Processing Agreement en formulier-notificaties configureren (zie privacytekst).

---

## Endpoint specificatie (Flask — doelarchitectuur)

**POST** `https://app.honeybadgertrader.com/api/waitlist`

Request body (JSON):

```json
{
  "name": "string, verplicht",
  "email": "string, verplicht, geldig e-mailadres",
  "experience": "beginner | some | active, optioneel (leeg = geen keuze)",
  "submitted_at": "string, optioneel — ISO-8601 timestamp (client); server vult server-side indien ontbreekt"
}
```

**Honeypot (client, niet in JSON):** de referentie-website gebruikt een verborgen formulierveld `bot-field`. Als dit veld is ingevuld, **stuurt de client geen geldige aanmelding** (spam). Dit veld staat **niet** in de JSON-body; backends kunnen desgewenst een eigen server-side honeypot/veld ondersteunen, maar dat is niet verplicht voor clients die dit patroon volgen.

**Headers:** `Content-Type: application/json`

**CORS (browser):** requests komen van de publieke website-origin(s). De Flask-app beperkt CORS tot **`POST /api/waitlist`** (geen globale CORS); toegestane origins configureer je server-side (comma-gescheiden `WAITLIST_CORS_ORIGIN` — zie backend-deploy).

**CSRF:** het formulier post **cross-origin JSON** (`fetch`), geen cookies voor CSRF. Op de server is doorgaans **alleen** `POST /api/waitlist` van CSRF-bescherming **uitgezonderd**; andere state-changing routes blijven beschermd. Clients hoeven geen CSRF-token te sturen.

### Frontend (Astro / Netlify) — API-modus (na migratie van Forms)

De website leest **`PUBLIC_WAITLIST_API_URL`** op **buildtijd** — **verplicht**; zie **`.env.example`** en `README.md`. Zonder waarde faalt de build (geen impliciete productie-URL). Voor staging/preview: zet in Netlify per context een **expliciete** endpoint-URL (bijv. staging-Flask), nooit “vergeten en alsnog productie”.

Clientlogica voor API-modus staat typisch in een **extern** `/js/*.js`-bestand (geen inline script) zodat **`Content-Security-Policy`** (`public/_headers`, o.a. `script-src 'self'`) het formulier niet blokkeert. `connect-src` vermeldt **`https://app.honeybadgertrader.com`** (en Plausible) zodat `fetch` naar de API mag.

Response (201 Created):

```json
{ "status": "ok", "message": "Aanmelding ontvangen" }
```

Response (400 Bad Request):

```json
{ "status": "error", "message": "Ongeldig e-mailadres" }
```

Response (409 Conflict):

```json
{ "status": "error", "message": "E-mailadres al aangemeld" }
```

Response (429 Too Many Requests — wanneer rate limiting actief is):

```json
{ "status": "error", "message": "Te veel aanmeldingen. Probeer het later opnieuw." }
```

*(Exacte `message` mag afwijken; clients tonen bij voorkeur de servertekst of een vaste Nederlandse fallback.)*

Database tabel (SQLite):

```sql
CREATE TABLE waitlist (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    experience TEXT,
    submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    status TEXT DEFAULT 'pending'  -- pending | contacted | onboarded | declined
);
```

Admin overzicht route:

- `GET /admin/waitlist` — HTML tabel met alle aanmeldingen
- Toegang beperkt tot `role = owner` (bestaande Flask auth)
- Sortering: nieuwste eerst
- Kolommen: naam, e-mail, ervaring, datum, status (wijzigbaar via dropdown)

## Migratie en dataconsistentiteit

**Van Netlify Forms naar Flask (eenmalig):**

1. Zorg dat `POST /api/waitlist` productieklaar is (validatie, duplicates, rate limits, mail — backend).
2. Exporteer Netlify Forms submissions (CSV) voor het waitlist-formulier.
3. **Normaliseer en dedupliceer** vóór import: het tijdelijke formulier kan **meerdere rijen per e-mail** bevatten; SQLite verwacht **`UNIQUE(email)`**. Kies een regel (bijv. laatste `submitted_at` per e-mail) en verwijder of merge conflicten — anders faalt import of ontstaat handmatige opschoonwerk.
4. Importeer de opgeschoonde rijen in SQLite `waitlist` (operator-actie).

**Historisch:** de website heeft eerder Netlify Forms vervangen door directe API-`fetch`; bij ontbrekende productie-endpoint kan tijdelijk weer Netlify Forms worden ingezet — deze spec beschrijft beide routes; de **privacy policy** moet altijd de actieve route vermelden.

Zie ook `README.md` voor build/omgevingsnotities.
