# CODEX.md

Codex should follow the repository rules in `AGENTS.md`.

This file exists as a short entry point for Codex-oriented workflows and for humans looking for Codex guidance. The source of truth is still `AGENTS.md` so Appcraft UI keeps one shared set of agent rules.

## Codex workflow

1. Read `AGENTS.md` before changing code.
2. Inspect the existing component, metadata, recipe, and demo surfaces before adding new APIs.
3. Use the largest fitting Appcraft UI abstraction instead of hand-rolling UI.
4. Keep public components semantic, constrained, accessible, and styled through `src/lib/styles.css` tokens.
5. Keep these files synchronized when changing public components:
   - `src/lib/components/*`
   - `src/lib/types.ts`
   - `src/lib/index.ts`
   - `src/lib/metadata.ts`
   - `src/lib/recipes.ts`
   - tests
   - demo/docs
   - `AGENTS.md` and `CLAUDE.md`
6. Before finishing, run:

```bash
pnpm format
pnpm lint
pnpm check
pnpm test
pnpm build
```
