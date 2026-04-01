---
name: processing-pr-comments
description: >
  Use when processing GitHub PR review comments, handling Copilot review
  feedback, or resolving open PR threads. Fetch comments, fix code, reply
  with commit reference, resolve threads, cleanup temp files.
---

# Processing PR Comments

## Overview

**Source of truth:** `scripts/README.md` — alle commando's staan daar.

**Core principle:** Elk comment krijgt een antwoord met commitreferentie. Nooit resolven zonder uitleg.

## When to Use

- PR heeft open review-comments (Copilot of menselijke reviewer)
- Je moet comments ophalen en verwerken
- Je wilt threads resolven na een fix

## Mandatory Process (Vaste Volgorde)

### Stap 0 — Juiste branch

```powershell
gh pr view [N] --json headRefName,baseRefName
git fetch --prune origin
git checkout [headRefName]
git pull --rebase origin [headRefName]
```

**Nooit op `develop` werken voor een bestaande PR.**

### Stap 1 — Comments ophalen

```powershell
.\scripts\fetch-copilot-comments.ps1 -PrNumber [N]
# Output: docs/copilot-comments-pr[N].md
```

### Stap 2 — Per comment beoordelen

Voor elk comment:

| Situatie | Actie |
|----------|-------|
| Terecht, nog aanwezig | Fix de code |
| Terecht, al gefixt | Noteer dat het al opgelost is, reply met uitleg |
| Out-of-scope / niet van toepassing | Reply met motivatie, geen code-wijziging |

**Analyseer ROOT CAUSE voor je iets aanpast.** Lees de relevante bronbestanden (routes, backend, conftest) om het gedrag te begrijpen voor je een wijziging maakt.

### Stap 3 — Fixes verifiëren

```powershell
# Relevante checks voor gewijzigde bestanden
ruff check <bestand>
pytest tests/ -q -k "<relevante test>" --no-cov
```

### Stap 4 — Commit en push

```powershell
git add <bestanden>
git commit -m "fix|docs|test: <korte beschrijving>"
git push origin [headRefName]
```

### Stap 5 — Reageren en resolven

```powershell
# Reply plaatsen + thread automatisch resolven
.\scripts\reply-copilot-comment.ps1 -PrNumber [N] -CommentId [ID] -Reply "Opgelost in <hash>: <uitleg>."

# Als je NIET wilt resolven (bijv. open discussie)
.\scripts\reply-copilot-comment.ps1 -PrNumber [N] -CommentId [ID] -Reply "..." -NoResolve
```

**Replies altijd in het Nederlands schrijven.**

Herhaal stap 5 voor elk comment.

### Stap 6 — Cleanup

```powershell
Remove-Item docs/copilot-comments-pr[N].md -Force -ErrorAction SilentlyContinue
git status -sb  # Moet clean zijn
```

## Reply Templates

```
# Fix met commit
Opgelost in <hash>: <wat er veranderd is en waarom>.

# Al gefixt in eerder commit
Dit was al gecorrigeerd in <hash> — huidige code gebruikt <correct patroon>.

# Out-of-scope
Niet van toepassing: <motivatie>. Geen wijziging nodig.
```

## HoneyBadger-specifieke Valkuilen

| Valkuil | Correct patroon |
|---------|-----------------|
| `mock.side_effect = ConnectionError(...)` | `mock.return_value = (False, {"error": "..."})` — `call_api()` raiset nooit |
| `/api/*` expects 302 | `/api/*` geeft altijd **401 JSON** (zie `unauthorized_handler` in app.py) |
| Unauthenticated `client` op `/api/*` | Gebruik `client_logged_in` fixture |
| `/health` als smoke test | Gebruik `/auth/login` (publiek endpoint) |

## Quick Reference

```
0. Branch check     → git checkout [headRefName]
1. Fetch comments   → fetch-copilot-comments.ps1 -PrNumber N
2. Fix code         → lees bronbestanden, pas aan, verifieer
3. Commit + push    → git commit -m "fix: ..." && git push
4. Reply + resolve  → reply-copilot-comment.ps1 -PrNumber N -CommentId X -Reply "..."
5. Cleanup          → Remove-Item docs/copilot-comments-prN.md
```
