# ADR 0001 — Static-first engineering records

## Status

Accepted

## Decision

Engineering Studio will keep public case studies and capability records in typed, repository-owned data modules until a real backend data source is justified.

## Why

The portfolio needs predictable builds, transparent content, and no dependency on fake or invented telemetry. A typed local model keeps routes deterministic while leaving a clean boundary for a future database or telemetry service.

## Consequences

- Case-study routes can be statically generated.
- Content is reviewable in Git history.
- Future Supabase or telemetry integration can replace the data layer without redesigning the route contract.
- Any performance numbers must be explicitly marked as targets, simulations, or measurements.
