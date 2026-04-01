---
name: test-driven-development
description: >
  Use when implementing new features, bug fixes, Flask routes, backend
  functions, or Playwright E2E tests. RED-GREEN-REFACTOR: write failing
  test first, watch it fail, then implement. Verplicht voor alle nieuwe code.
---

# Test-Driven Development (TDD)

## Overview

Write the test first. Watch it fail. Write minimal code to pass.

**Core principle:** If you didn't watch the test fail, you don't know if it tests the right thing.

**Violating the letter of the rules is violating the spirit of the rules.**

## When to Use

**Always:**
- New Flask routes of API endpoints
- Backend functions (bot_manager, freqtrade_api, allocation)
- Bug fixes
- Refactoring

**Exceptions (ask your human partner):**
- Throwaway prototypes
- Configuration files only

## The Iron Law

```
NO PRODUCTION CODE WITHOUT A FAILING TEST FIRST
```

Write code before the test? Delete it. Start over.

## Red-Green-Refactor

### RED — Write Failing Test

Write one minimal test showing what should happen.

**Flask route tests** (`tests/`):
```python
# Gebruik client_logged_in: /api/* is @login_required, client (anoniem) geeft 401
def test_get_bots_returns_json_with_success(client_logged_in):
    """GET /api/bots returns success and bots list."""
    response = client_logged_in.get('/api/bots')
    assert response.status_code == 200
    data = response.get_json()
    assert data['success'] is True
    assert 'bots' in data
```

**Playwright E2E tests** (`e2e/`):
```typescript
test('dashboard shows bot cards when loaded', async ({ page }) => {
  await page.goto('/dashboard');
  await expect(page.getByTestId('bot-grid')).toBeVisible();
  await expect(page.getByTestId(/^bot-card-/)).toHaveCount(3);
});
```

**Requirements:**
- One behavior per test
- Clear name
- Real code (mock Freqtrade API, not production logic)

### Verify RED — Watch It Fail

**MANDATORY. Never skip.**

```bash
# Flask routes en backend units
pytest tests/ -v -k "test_get_bots"

# E2E tests (Playwright via script)
.\scripts\run-e2e-tests-simple.ps1
```

Confirm: test fails for expected reason (feature missing, not typo).

### GREEN — Minimal Code

Write simplest code to pass the test. Don't over-engineer.

### REFACTOR — Clean Up

After green only: remove duplication, improve names. Keep tests green.

## HoneyBadger-Specific Rules

### Twee Testtypen

| Type | Location | Tool | Mock |
|------|----------|------|------|
| Flask routes, backend | `tests/` | `pytest tests/` | `freqtrade_api.*` |
| E2E user journeys | `e2e/tests/` | `npx playwright test` (via `scripts\run-e2e-tests-simple.ps1`) | mock-api helper |

**Playwright is actief:** TypeScript, Page Object Model in `e2e/pages/`, `data-testid` verplicht voor selectors.

**Lees ALTIJD** `docs/TASK-playwright-selector-assertion-standards.md` voordat je een E2E test schrijft.

### Anti-Pattern: Never Call Real Freqtrade API in Tests

```python
# ❌ BAD: Real API call in test
def test_get_status():
    ok, data = freqtrade_api.get_status(8087, "user", "pass")
    assert ok

# ✅ GOOD: Mock the API (freqtrade_api uses requests.request in call_api)
@patch('backend.freqtrade_api.requests.request')
def test_get_status(mock_request):
    mock_request.return_value.json.return_value = {"state": "running"}
    mock_request.return_value.raise_for_status = lambda: None
    ok, data = freqtrade_api.ping(8087, "user", "pass")
    assert ok
```

### Commit Format

- pytest test commit: `test: add [beschrijving] test`
- E2E test commit (na groene run): `test(e2e): add [feature] E2E spec`
- Implementation commit: `feat: [beschrijving]` or `fix: [beschrijving]`

## Verification Checklist

Before marking work complete:

- [ ] Every new function/route has a test
- [ ] Watched each test fail before implementing
- [ ] Each test failed for expected reason
- [ ] Wrote minimal code to pass each test
- [ ] All tests pass
- [ ] No Freqtrade API calls in tests (always mocked)

Can't check all boxes? You skipped TDD. Start over.

## Red Flags — STOP and Start Over

- Code before test
- Test passes immediately (didn't watch it fail)
- Tests added "later"
- "I already manually tested it"
- Freqtrade API called in test (not mocked)

**All of these mean: Delete code. Start over with TDD.**

## Testing Anti-Patterns

When adding mocks, read [testing-anti-patterns](./testing-anti-patterns.md) to avoid:
- Testing mock behavior instead of real behavior
- Incomplete mocks that don't match API schema
