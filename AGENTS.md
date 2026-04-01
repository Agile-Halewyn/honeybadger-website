---
name: HoneyBadger Website Hub
description: Main entry point for AI agents working on the HoneyBadger Website (Astro project).
color: #f59e0b
emoji: 🌐
vibe: Clean, performant, and brand-aligned. English-first instructions.
---

# AGENTS.md — HoneyBadger Website Hub

Welcome, Agent. This project is the public face of HoneyBadger. We prioritize performance, SEO, and the "Jij houdt de controle" brand identity. One source of truth (`.github/skills/`), many adapters.

---

## 🎯 MANDATORY: Load the Relevant Skill
Based on your current task, load the corresponding skill from `.github/skills/` or global skills:

| Capability | Path | Use for... |
|-----------|------|------------|
| **Astro Frontend** | [.github/skills/astro-frontend/SKILL.md](.github/skills/astro-frontend/SKILL.md) | Component architecture, layouts, pages patterns. |
| **Code Reviewer** | [.github/skills/astro-code-reviewer/SKILL.md](.github/skills/astro-code-reviewer/SKILL.md) | **Subagent**: Linting, component isolation, A11y. |
| **SEO Strategist** | [.github/skills/seo-strategist/SKILL.md](.github/skills/seo-strategist/SKILL.md) | **Subagent**: Meta tags, keywords, hierarchy. |
| **Security Auditor** | [.github/skills/security-auditor/SKILL.md](.github/skills/security-auditor/SKILL.md) | **Subagent**: GDPR, privacy, risk disclaimers. |
| **Website Content** | [.github/skills/website-content/SKILL.md](.github/skills/website-content/SKILL.md) | Copywriting, pricing logic, waitlist flow. |
| **Brand Guardian** | Global: `hb-brand-guardian` | Ensuring the Dutch "safe crypto" brand voice. |
| **UX Architect** | Global: `hb-ux-architect` | 3-step funnel logic and mobile-first navigation. |
| **SEO Specialist** | Global: `hb-seo-specialist` | Meta tags, heading structure, and keyword optimization. |
| **PR Comments** | [.github/skills/processing-pr-comments/SKILL.md](.github/skills/processing-pr-comments/SKILL.md) | Responding to code review feedback. |
| **Debugging** | [.github/skills/systematic-debugging/SKILL.md](.github/skills/systematic-debugging/SKILL.md) | Systematic bug finding and regression testing. |
| **TDD Workflow** | [.github/skills/test-driven-development/SKILL.md](.github/skills/test-driven-development/SKILL.md) | Test-driven development methodology. |

---

## 📁 Repository Reference
- **Tech Stack**: Astro 5.7+ (Static Site Generation), Vanilla CSS, Design Tokens.
- **Project Goal**: High-converting landing page for HoneyBadger Trader.
- **Design Tokens**: See `src/styles/global.css` for the source of truth for colors and spacing.

---

## 🖥️ IDE Adapters

| IDE | Configuration File | Status |
|---|---|---|
| Cursor | `.cursor/.cursorrules` | ✅ Active (English) |
| VS Code / Copilot | `.github/copilot-instructions.md` | ✅ Active (English) |
| Antigravity / Codex | `AGENTS.md` (this file) | ✅ Active (English) |
| Claude Code / CLI | `CLAUDE.md` | ✅ Active (English) |

---
*Updated: March 2026 (IDE-Agnostic English Unification)*
