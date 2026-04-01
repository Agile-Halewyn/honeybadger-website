# Scripts – Copilot review workflow

## GitHub CLI ↔ Cursor workflow

Met GitHub CLI kun je Copilot-reviewcomments ophalen en Cursor kan ze verwerken. Daarna kun je via de CLI reageren.

## Source of truth

Dit document is de centrale werkwijze voor Copilot PR review handling.

- **`AGENTS.md`** — skill-index, tech stack en projectdoelen (start hier).
- **`scripts/CURSOR-PROCESS-REVIEW-COMMENTS.md`** — Cursor-prompt en checklist; volgt deze runbook.

## Standaard volgorde (ophalen → beoordelen/fixen → reply/resolve → cleanup)

### 0. Werk altijd op de juiste branch

Voor een bestaande PR: werk op de PR head branch, niet op `develop`.

```powershell
# Check PR branch
gh pr view [N] --json headRefName,baseRefName

# Checkout PR branch
git fetch --prune origin
git checkout [headRefName]
git pull --rebase origin [headRefName]
```

Gebruik alleen een nieuwe branch vanaf `develop` als je bewust een clean-slate opvolg-PR wilt maken.

### 1. Comments ophalen

```powershell
.\scripts\fetch-copilot-comments.ps1 -PrNumber 26
```

Output: `docs/copilot-comments-pr26.md` – alle Copilot-comments met bestand, regel en comment ID.

**Let op:** Default is PR **15** en repo **`Agile-Halewyn/honeybadger-website`**. Gebruik `-PrNumber [N]` en zo nodig `-Owner` / `-Repo` voor andere PR’s of forks.

### 2. In Cursor

Open het bestand of zeg: *"Verwerk de Copilot-comments in docs/copilot-comments-pr26.md"*. Cursor kan dan de code aanpassen.

### 2b. Verifiëren na fixes (aanbevolen)

Run minimaal de relevante checks voor je wijzigingen (bijv. lint/tests op aangepast bestand of map), commit daarna pas.

```powershell
# Astro website (minimaal voor doc-only wijzigingen)
npm run build

# Aanbevolen frontend checks (zie .github/skills/astro-code-reviewer/SKILL.md)
npx astro check
```

### 2c. Commit en push

```powershell
git add <bestanden>
git commit -m "fix|test|docs: <korte beschrijving>"
git push origin [headRefName]
```

### 3. Reageren op een comment (en thread resolven)

```powershell
.\scripts\reply-copilot-comment.ps1 -PrNumber 26 -CommentId 2867277977 -Reply "Opgelost in a1b2c3d: korte uitleg in het Nederlands."
```

**Belangrijk:** 
- Geef altijd `-PrNumber [N]` mee. Zonder deze parameter gaan replies naar PR 15 (default) en worden ze op de verkeerde PR geplaatst.
- **Replies in het Nederlands schrijven.** Bijvoorbeeld:
  - ✅ "Opgelost in c872f5f: DATABASE_PATH vervangen door temp file."
  - ❌ "Fixed in c872f5f: Replaced DATABASE_PATH with temp file."

Na het plaatsen van de reply wordt de thread automatisch als "resolved" gemarkeerd. Gebruik `-NoResolve` om dit uit te schakelen.

### 4. Herhaal voor alle comments

Voor elke open comment in de review:

1. Beoordeel (terecht / al gefixt / out-of-scope met motivatie)
2. Pas zo nodig code aan
3. Reageer met commitreferentie
4. Resolve thread

### 5. Tijdelijke bestanden opruimen

Scripts genereren soms tijdelijke reviewbestanden. Ruim deze op vóór afronden:

```powershell
Remove-Item docs/copilot-comments-pr[N].md -Force -ErrorAction SilentlyContinue
git status -sb
```

Werkboom hoort clean te zijn na afronding.

### Vereisten

- `gh auth login` (eenmalig)
- GitHub CLI: `winget install GitHub.cli`

## Korte checklist

- [ ] Op juiste PR head branch gewerkt
- [ ] Relevante checks lokaal gedraaid
- [ ] Commit(s) gepusht naar PR branch
- [ ] Alle comments hebben reply + status resolved (of onderbouwd open)
- [ ] Tijdelijke bestanden opgeruimd
