---
name: systematic-debugging
description: >
  Use when debugging crashes, 500 errors, bot API timeouts, Freqtrade
  failures, or unexpected UI behavior. Root cause first — check logs,
  staging vs production, bot ping. No fixes without investigation.
---

# Systematic Debugging

## Overview

Random fixes waste time and create new bugs. Quick patches mask underlying issues.

**Core principle:** ALWAYS find root cause before attempting fixes. Symptom fixes are failure.

## The Iron Law

```
NO FIXES WITHOUT ROOT CAUSE INVESTIGATION FIRST
```

## When to Use

Use for ANY technical issue:
- 500 errors in Flask
- Bot API timeouts or failures
- Unexpected UI behavior
- Test failures
- Build/CI failures

**Use this ESPECIALLY when:**
- Under time pressure
- "Just one quick fix" seems obvious
- Previous fix didn't work

## Phase 1: Root Cause Investigation

**BEFORE attempting ANY fix, ask:**

### 1. Omgeving & Status

- **Op welke omgeving?** Staging (Pi port 5002) of production (port 5000)?
- **Is de Freqtrade bot online?**
  ```bash
  curl http://localhost:<port>/api/v1/ping -u freqtrader:<password>
  ```
- **Is het de juiste bot/port?** Check `config/bots.json` en `config_path`.

### 2. Logs

```bash
# Dashboard logs
sudo journalctl -u honeybadger -n 100
sudo journalctl -u honeybadger-staging -n 100

# Browser console (voor JS fouten)
# F12 → Console tab

# Freqtrade bot logs
sudo journalctl -u freqtrade-<botnaam> -n 50
```

### 3. Read Error Messages

- Don't skip past errors or stack traces
- Note line numbers, file paths, error codes

### 4. Reproduce Consistently

- Can you trigger it reliably?
- What are the exact steps?

### 5. Check Recent Changes

- Git diff, recent commits
- Config changes, new dependencies

## Phase 2: Pattern Analysis

- Find working examples in same codebase
- Compare: what's different between working and broken?
- Understand dependencies (config_path, env vars)

## Phase 3: Hypothesis and Testing

1. **Form single hypothesis:** "I think X is the root cause because Y"
2. **Test minimally:** Smallest possible change
3. **Verify before continuing:** Did it work? If not, form NEW hypothesis

## Phase 4: Implementation

1. **Create failing test case** (use test-driven-development skill)
2. **Implement single fix** — ONE change at a time
3. **Verify fix** — Test passes? No regressions?

**If 3+ fixes failed:** Question the architecture. Discuss with human partner.

## HoneyBadger-Specific Failure Patterns

| Symptom | Likely Cause | Check |
|---------|--------------|-------|
| Bot offline → timeout | `freqtrade_api` geeft timeout, niet crash | Handle graceful: return `{"online": false}` |
| 500 on config read | Config zonder `config_path` | Zie Issue #25 fix — config_path verplicht |
| Wrong P&L / trades | Endpoint verwarring | `/api/v1/status` = open trades, `/api/v1/profit` = closed P&L (nooit omwisselen) |
| CSRF errors on POST | Missing token | X-CSRFToken header + cookie |
| Login fails | users.yaml / hash | Check config/users.yaml, regenerate hash |

## Red Flags — STOP and Follow Process

- "Quick fix for now, investigate later"
- "Just try changing X and see if it works"
- Proposing solutions before tracing data flow
- "One more fix attempt" (when already tried 2+)

**ALL of these mean: STOP. Return to Phase 1.**
