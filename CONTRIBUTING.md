# Contributing

Engineering Studio uses small, reviewable changes instead of direct pushes to `main`.

## Branches

Use one focused branch per change:

- `feat/<scope>` for new capability
- `fix/<scope>` for bug fixes
- `docs/<scope>` for documentation
- `refactor/<scope>` for internal restructuring

## Pull requests

Every PR should explain:

1. What changed.
2. Why it changed.
3. How it was validated.
4. Any follow-up work that remains.

Keep unrelated work out of the same PR. UI, hardware interfaces, data contracts, and deployment changes should remain separable where practical.

## Validation

Before requesting review, run:

```bash
npm install
npm run lint
npm run typecheck
npm run build
```

Do not commit secrets, local environment files, generated credentials, or fabricated measurements. Experimental metrics must be identified as targets, simulations, or measured results.
