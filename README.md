# Pharmacy

A small TypeScript simulation engine that models a pharmacy's drug inventory and updates each drug's `benefit` (quality) and `expiresIn` (days left) values day after day, following a distinct aging rule per drug type.

## Why this project

Inventory management systems for perishable goods need a clear, extensible rule set describing how each item degrades or improves over time. This project implements exactly that: a `Pharmacy` holding a list of `Drug` instances, each with its own aging behavior, so new drug types can be added without touching the core simulation loop.

Supported drug types and their rules:

- **Drug** (generic): `benefit` and `expiresIn` decrease by 1 each day. Once expired, `benefit` degrades twice as fast. `benefit` never goes below 0.
- **Dafalgan**: same as a generic drug, but `benefit` degrades twice as fast at all times.
- **HerbalTea**: `benefit` increases as it ages, twice as fast once expired. `benefit` never exceeds 50.
- **Fervex**: `benefit` increases as the expiration date approaches (+2 at 10 days or less, +3 at 5 days or less), then drops to 0 once expired.
- **MagicPill**: never expires and its `benefit` never changes.

## Requirements

- Node.js
- Yarn

## Available commands

| Command | Description |
| --- | --- |
| `yarn start` | Runs the 30-day simulation defined in `index.ts` and writes the result to `output.json`. |
| `yarn test` | Runs the unit test suite with Jest. |
| `yarn lint` | Lints the codebase with ESLint. |

## Project structure

- `src/drug/` — the `Drug` base class and each drug subtype (`Dafalgan`, `Fervex`, `HerbalTea`, `MagicPill`).
- `src/pharmacy.ts` — the `Pharmacy` class, which advances every drug it holds by one day at a time.
- `src/test/` — unit tests covering the aging rules.
- `index.ts` — entry point running the 30-day simulation and dumping the result to `output.json`.
