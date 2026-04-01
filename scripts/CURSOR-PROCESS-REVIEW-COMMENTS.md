# CURSOR PROMPT - VERWERK COPILOT REVIEW OPMERKINGEN

> **Gebruik:** Na elke PR waar Copilot automatic review opmerkingen heeft geplaatst  
> **Vereisten:** `gh auth login` uitgevoerd, scripts/ aanwezig in repo  
> **Locatie:** `scripts/CURSOR-PROCESS-REVIEW-COMMENTS.md` (canonieke bestandsnaam in deze repo)

> **Source of truth:** `scripts/README.md` is de centrale runbook voor Copilot PR review handling. Dit document is Cursor-specifieke uitvoering en volgt die runbook.

---

## Voorbereiding (jij, voordat je Cursor opent)

```powershell
# Haal Copilot opmerkingen op voor de PR (vervang [N] door het PR-nummer)
.\scripts\fetch-copilot-comments.ps1 -PrNumber [N]

# Controleer output
cat docs\copilot-comments-pr[N].md
```

**Let op:** Zowel fetch als reply gebruiken `-PrNumber [N]`. Zonder dit gaat de reply naar PR 15 (default) en verschijnt op de verkeerde PR.

---

## Cursor Prompt (kopieer dit naar Cursor chat)

```
CONTEXT: Read AGENTS.md before starting.
Read docs/copilot-comments-pr[N].md voor de review opmerkingen.

TAAK: Verwerk alle Copilot review opmerkingen voor PR #[N]

INVOER:
- docs/copilot-comments-pr[N].md  ← opmerkingen met Comment ID, bestand, regel, body
- De bijbehorende bronbestanden die Copilot heeft beoordeeld

WERKWIJZE PER OPMERKING:

Stap 1 – Analyseer
  - Lees de opmerking zorgvuldig
  - Bepaal of de opmerking valide is
  - Identificeer het bestand en de regel

Stap 2a – Opmerking is valide (pas aan)
  - Fix de root cause, niet het symptoom
  - Volg AGENTS.md standaarden bij de fix
  - Voer daarna uit (VERPLICHT -PrNumber [N] meegeven!):
    .\scripts\reply-copilot-comment.ps1 -PrNumber [N] -CommentId [ID uit md bestand] -Reply "[Beschrijf wat je hebt gedaan, max 2 zinnen]"

Stap 2b – Opmerking is niet van toepassing (leg uit waarom)
  - Pas de code NIET aan
  - Voer uit:
    .\scripts\reply-copilot-comment.ps1 -PrNumber [N] -CommentId [ID uit md bestand] -Reply "Not applicable: [reden]" -NoResolve

Stap 3 – Na alle opmerkingen
  - Draai: npm run build
  - Draai: npx astro check
  - Commit: fix(review): address Copilot review comments PR#[N]
  - Push naar bestaande PR branch

REGELS:
- Verwerk opmerkingen één voor één (niet in bulk)
- Elke opmerking krijgt een reply voordat je verder gaat
- Geen bare except: pass introduceren bij fixes
- Type hints en docstrings behouden/toevoegen bij gewijzigde functies
- Geen nieuwe functionaliteit toevoegen (alleen review fixes)
- Bij twijfel: leg de opmerking voor aan de gebruiker

VOLGORDE:
1. Security opmerkingen (hoogste prioriteit)
2. Bug/logica opmerkingen
3. Error handling opmerkingen
4. Code style opmerkingen (laagste prioriteit)

SUCCESS CRITERIA:
- [ ] Alle opmerkingen in docs/copilot-comments-pr[N].md beantwoord
- [ ] Alle threads resolved (of NoResolve met uitleg)
- [ ] npm run build slaagt
- [ ] npx astro check zonder errors (of gedocumenteerde uitzondering)
- [ ] CI slaagt na push
```

---

## Voorbeeld ingevuld (PR #16, charts implementatie)

```
CONTEXT: Read AGENTS.md before starting.
Read docs/copilot-comments-pr16.md voor de review opmerkingen.

TAAK: Verwerk alle Copilot review opmerkingen voor PR #16

[rest van de prompt zoals hierboven, met N=16 ingevuld]
```

---

## Na verwerking: finale check

```powershell
# Controleer of alle threads resolved zijn
.\scripts\fetch-copilot-comments.ps1 -PrNumber [N]
# Output moet leeg zijn (geen openstaande Copilot comments)

# Controleer CI status
gh pr checks [N]

# Klaar voor merge
gh pr review [N] --approve
```

---

## Veelvoorkomende Copilot opmerkingen en standaard replies

| Opmerking type | Standaard aanpak | Reply voorbeeld |
|---------------|-----------------|-----------------|
| Missing error handling | try/except toevoegen | `"Added try/except with logger.error() for [scenario]."` |
| Hardcoded value | Naar os.getenv() | `"Moved to environment variable via os.getenv()."` |
| Missing type hint | Type hint toevoegen | `"Added type hints to function signature."` |
| Missing docstring | Docstring toevoegen | `"Added Google-style docstring."` |
| SQL injection risk | Parameterized query | `"Replaced with parameterized query."` |
| LIVE bot no confirm | confirm=true check | `"Added confirm=true requirement for LIVE bots."` |
| No mobile check | CSS media query | `"Added responsive breakpoint at 768px."` |

---

## Bestandslocatie in de repo

```
scripts/
├── fetch-copilot-comments.ps1
├── reply-copilot-comment.ps1
├── README.md
└── CURSOR-PROCESS-REVIEW-COMMENTS.md   ← dit bestand
```

Gebruik in Cursor:
> "Lees scripts/CURSOR-PROCESS-REVIEW-COMMENTS.md en verwerk de Copilot opmerkingen voor PR #[N]"

---

**Versie:** 1.0  
**Bijwerken wanneer:** Nieuwe standaard reply patronen gevonden, of werkwijze aangepast
