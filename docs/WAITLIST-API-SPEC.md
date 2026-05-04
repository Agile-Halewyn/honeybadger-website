# WAITLIST API SPEC

## Endpoint specificatie

**POST** `https://app.honeybadgertrader.com/api/waitlist`

Request body (JSON):

```json
{
  "name": "string, verplicht",
  "email": "string, verplicht, geldig e-mailadres",
  "experience": "beginner | some | active, optioneel"
}
```

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

Wanneer de Flask API live is:

1. Export Netlify Forms submissions als CSV
2. Importeer in SQLite waitlist tabel
3. Vervang in `waitlist.astro` de Netlify form action door een fetch() POST naar de Flask API
4. Verwijder `data-netlify="true"` attribuut
