Plan an Appcraft UI component or workflow slice before implementation with Codex.

Use this checklist:

1. Identify the app workflow being served, not just the visual widget.
2. Search existing components, metadata, recipes, and demo examples for the closest existing abstraction.
3. Prefer extending an existing product/pattern component over adding small primitives.
4. Define semantic props, built-in states, callbacks, and accessibility behavior.
5. List every synchronized file that must change:
   - `packages/ui/src/lib/components/*`
   - `packages/ui/src/lib/types.ts`
   - `packages/ui/src/lib/index.ts`
   - `packages/ui/src/lib/metadata.ts`
   - `packages/ui/src/lib/recipes.ts`
   - `packages/ui/src/lib/metadata.test.ts`
   - `packages/ui/src/lib/recipes.test.ts`
   - `apps/catalog/src/routes/+page.svelte`
   - README/docs
   - `AGENTS.md` and `CLAUDE.md`
   - `.claude/` and `.codex/` guidance files when public rules change
6. Start with failing tests for metadata/recipes when adding public components.
7. End with `pnpm format && pnpm lint && pnpm check && pnpm test && pnpm build`.
