# Architecture

## System boundary

The studio interface is intentionally separated into route composition, feature modules, shared primitives, and engineering documentation.

## Ownership

### Koglesh
- Web application routes
- UI primitives
- Full-stack interfaces
- Data contracts
- Deployment configuration

### Yennamutan
- Hardware documentation
- Schematics and CAD assets
- Firmware documentation
- Edge AI documentation
- Integrated lab case studies

### Shared
- Architecture decisions
- Cross-system interfaces
- Project specifications
- CI standards

## Change protocol

1. Create a short-lived `feat/*`, `fix/*`, `docs/*`, or `chore/*` branch.
2. Keep changes focused.
3. Run lint and build locally.
4. Open a pull request into `main`.
5. Obtain one independent review.
6. Squash merge only after CI is green.
