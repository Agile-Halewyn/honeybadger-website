# WAITLIST API SPEC

## Endpoint specificatie

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

## Migratie van Netlify naar Flask

**Website (honeybadger-website):** de waitlist-pagina is **gemigreerd** naar een client-side `fetch()`-POST naar deze API (geen Netlify Forms meer op `/waitlist`). Er is **geen** `data-netlify` op dit formulier.

**Nog te doen aan de server/data-kant:**

1. Zorg dat deze Flask-endpoint productie-klaar is (incl. validatie, duplicate detection, mail-notificaties — zie backend-plan).
2. Exporteer historische Netlify Forms submissions als CSV (indien nog beschikbaar).
3. Importeer die rijen in de SQLite `waitlist`-tabel (Operator-actie; schema hierboven).

Zie ook `README.md` (go-live checklist) voor projectstatus.
