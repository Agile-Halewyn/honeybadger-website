---
name: honeybadger-website-hub
description: Main entry point for AI agents working on the HoneyBadger Website (Astro project).
color: #f59e0b
emoji: 🌐
vibe: Clean, performant, and brand-aligned.
---

# AGENTS.md — HoneyBadger Website Hub

Welcome, Agent. This project is the public face of HoneyBadger. We prioritize performance, SEO, and the "Jij houdt de controle" brand identity.

## 🎯 MANDATORY: Load the Relevant Skill

Based on your current task, load the corresponding skill from `.github/skills/` or global skills:

| Capability | Path | Use for... |
|-----------|------|------------|
| **Astro Frontend** | [.github/skills/astro-frontend/SKILL.md](.github/skills/astro-frontend/SKILL.md) | Component architecture, layouts, pages patterns. |
| **Code Reviewer** | [.github/skills/astro-code-reviewer/SKILL.md](.github/skills/astro-code-reviewer/SKILL.md) | **Subagent**: Linting, component isolation, A11y. |
| **SEO Strategist** | [.github/skills/seo-strategist/SKILL.md](.github/skills/seo-strategist/SKILL.md) | **Subagent**: Meta tags, keywords, hierarchy. |
| **Security Auditor** | [.github/skills/security-auditor/SKILL.md](.github/skills/security-auditor/SKILL.md) | **Subagent**: GDPR, privacy, risk disclaimers. |
| **Website Content** | [.github/skills/website-content/SKILL.md](.github/skills/website-content/SKILL.md) | Copywriting, pricing logic, waitlist flow. |
| **Brand Guardian** | [C:\Users\agile\.gemini\antigravity\skills\hb-brand-guardian\SKILL.md](file:///C:/Users/agile/.gemini/antigravity/skills/hb-brand-guardian/SKILL.md) | Ensuring the Dutch "safe crypto" brand voice. |
| **UX Architect** | [C:\Users\agile\.gemini\antigravity\skills\hb-ux-architect\SKILL.md](file:///C:/Users/agile/.gemini/antigravity/skills/hb-ux-architect/SKILL.md) | 3-step funnel logic and mobile-first navigation. |
| **SEO Specialist** | [C:\Users\agile\.gemini\antigravity\skills\hb-seo-specialist\SKILL.md](file:///C:/Users/agile/.gemini/antigravity/skills/hb-seo-specialist\SKILL.md) | Meta tags, heading structure, and keyword optimization. |

## 📁 Repository Reference

- **Tech Stack**: Astro 5.7+ (Static Site Generation), Vanilla CSS, Design Tokens.
- **Project Goal**: High-converting landing page for HoneyBadger Trader.
- **Design Tokens**: See `src/styles/global.css` for the source of truth for colors and spacing.

## 🖥️ IDE Adapters

| IDE | Bestand | Status |
|---|---|---|
| Cursor | `.cursor/.cursorrules` | ✅ Thin adapter → skills |
| VS Code / Copilot | `.github/copilot-instructions.md` | ⚠️ Missing |
| Antigravity / Codex | `AGENTS.md` (dit bestand) | ✅ Volledige router |
| Claude Code / CLI | `CLAUDE.md` | ✅ Thin adapter → skills |

---
*Updated: March 2026 (IDE-agnostisch setup)*
