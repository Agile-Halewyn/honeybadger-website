# Analyse: CSP-fouten en waitlist na “fix”-deploy

**Datum:** 4 mei 2026  
**Context:** Na merge van PR #14 (`fix/waitlist-csp-external-script`) naar `develop` bleven op de openbare site dezelfde soort **Content-Security-Policy (CSP)**-meldingen zichtbaar; daarnaast werd **`https://honeybadgertrader.com/waitlist/`** als **404** gerapporteerd.

Dit document legt uit wat er aan de hand is, hoe dat is gecontroleerd, en welke vervolgstappen logisch zijn.

---

## 1. Kernconclusie

| Observatie | Verklaring |
|------------|------------|
| Console toont **oude** CSP (`style-src` zonder Google Fonts, `font-src` alleen `'self'`, geen expliciete **`connect-src`** → fallback op `default-src 'self'`) | De **productiedeploy volgt nog de `main`-branch**, waar `public/_headers` **nog niet** is bijgewerkt naar de versie op `develop`. |
| PR #14 is “gemerged” | Waarschijnlijk gemerged naar **`develop`**, niet naar **`main`**. Netlify-productie bouwt typisch vanaf **`main`** (tenzij anders ingesteld). |
| Symptomen blijven gelijk aan vóór de fix | **Verwacht** zolang de commit met de nieuwe `_headers` + waitlist-JS **niet** op de branch zit die productie deployt. |

**Live check (4 mei 2026):** een `GET` naar `https://honeybadgertrader.com/waitlist/` geeft **HTTP 200** van **Netlify** met een `Content-Security-Policy`-header die **exact overeenkomt** met de **huidige `main`** in de repo (zie §3). Een eerder gezien **Chrome “404”-scherm** kan nog steeds voorkomen bij bv. mislukte navigatie, cache, of een andere URL-variant; de relevante technische bevinding is vooral: **de CSP-header op dat domein is nog de oude.**

---

## 2. Wat de browsersconsole precies zegt (en waarom)

Samenvatting van de gemelde blokkades:

1. **Google Fonts-stylesheet**  
   - `style-src` op productie staat op `'self' 'unsafe-inline'` **zonder** `https://fonts.googleapis.com`.  
   - **Gevolg:** stylesheet vanaf Google Fonts wordt geweigerd.

2. **Inline script op `(index):regel ~7`**  
   - `script-src` staat op `'self' https://plausible.io` **zonder** `'unsafe-inline'` / hash / nonce.  
   - **Gevolg:** echte **inline scripts** in het document worden geweigerd.  
   - **Let op:** sommige consolemeldingen over “inline script” kunnen ook door **browser-extensies** of door geïnjecteerde fragmenten komen; de **waitlist-fix in de code** verplaatst de site-eigen logica naar **externe** `/js/*.js`-bestanden, maar dat helpt pas als die build ook **live** staat.

3. **Font `data:...` (o.a. gemeld bij `script.js`)**  
   - `font-src` op productie is alleen `'self'`.  
   - **Gevolg:** `data:`-fonts worden geweigerd. (Kan deels door de pagina, deels door extensies komen.)

4. **`fetch` naar `https://plausible.io/api/event`**  
   - Er is **geen** `connect-src` in de live header; de browser valt terug op **`default-src 'self'`**.  
   - **Gevolg:** verbindingen naar Plausible (`/api/event`) worden geweigerd — dezelfde mechaniek zou ook **`fetch` naar de waitlist-API** blokkeren totdat `connect-src` de juiste API-host bevat.

Dit patroon past bij **één** oude CSP-bundel, niet bij de **bijgewerkte** `_headers` op `develop`.

---

## 3. Bewijs: productie-CSP = `main`, niet `develop`

### 3.1 Header op productie (`honeybadgertrader.com`)

Responsheader (fragment):

```http
Content-Security-Policy: default-src 'self'; script-src 'self' https://plausible.io; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'
Server: Netlify
```

### 3.2 `public/_headers` op branch **`main`** (GitHub, commit `cb18211` op moment van analyse)

```
Content-Security-Policy: default-src 'self'; script-src 'self' https://plausible.io; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'
```

→ **Inhoudelijk gelijk** aan wat productie teruggeeft.

### 3.3 `public/_headers` op branch **`develop`** (na PR #14)

O.a. uitgebreid met:

- `style-src … https://fonts.googleapis.com`
- `font-src … https://fonts.gstatic.com data:`
- `connect-src 'self' https://app.honeybadgertrader.com https://plausible.io …`

→ Dit is de versie die **gekoppeld is aan de codebase-fix**, maar die **nog niet op `main` stond** ten tijde van deze analyse.

---

## 4. Waitlist-routes, 404 en formuliergedrag

- In de repo is de **bedoelde** marketing-`site`-URL in `astro.config.mjs`: **`https://honeybadgerbots.nl`**.  
  **`honeybadgertrader.com`** kan als **extra custom domain** op dezelfde Netlify-site hangen; de headers laten zien dat het **wel** Netlify is, met de **zelfde (oude) CSP** als `main`.

- **Als client-side JavaScript niet draait** (of wordt geblokkeerd), kan het formulier alsnog een **klassieke HTML-POST** doen naar het `action`-pad (`/waitlist/`). Een statische hosting (Netlify zonder aparte handler) behandelt dat **niet** hetzelfde als een API-endpoint; gebruikers kunnen dan **onverwachte** statuscodes of foutpagina’s zien (afhankelijk van methode en configuratie).

- Zodra de **nieuwe** build live staat met werkende externe scripts en **`connect-src`**, hoort de flow weer via **`fetch`** naar `PUBLIC_WAITLIST_API_URL` te gaan in plaats van een “naakte” POST naar `/waitlist/`.

---

## 5. Aanbevolen vervolgstappen

1. **`main` bijwerken met `develop`**  
   - Openstaande PR: **[#15 — merge develop → main](https://github.com/Agile-Halewyn/honeybadger-website/pull/15)** (of equivalent), en **mergen** zodat productie de nieuwe `_headers` en waitlist-assets bouwt.

2. **Netlify controleren**  
   - Welke **branch** triggert **production deploy**? (Standaard: `main`.)  
   - Of er geen **tweedeprioriteits** CSP staat in het Netlify-dashboard (Headers) die `_headers` **overrulet**.

3. **Na deploy verifiëren**  
   - In DevTools → **Network** → eerste documentrequest: **`Content-Security-Policy`** moet **`connect-src`**, **`fonts.googleapis.com`** in `style-src`, en uitgebreide `font-src` tonen (consistent met `develop`).  
   - Hard refresh / cache legen om oude HTML te vermijden.

4. **Optioneel: console schoner interpreteren**  
   - Test **zonder extensies** (incognito) om meldingen van `themeContext`/`core.js`-achtige stacks te scheiden van site-eigen code.

---

## 6. Samengevat in één zin

**De “fix” staat in de repository op `develop`, maar productie (`honeybadgertrader.com` op Netlify) draait nog de oude `main`-build met een oudere CSP in `_headers`; merge naar `main` + succesvolle production-deploy lost de gemelde CSP- en waitlist-gerelateerde symptomen op die van die oude policy afhangen.**

---

*Document gegenereerd ter ondersteuning van teamcommunicatie; bijgewerken na merge naar `main` en nieuwe live header-check.*
