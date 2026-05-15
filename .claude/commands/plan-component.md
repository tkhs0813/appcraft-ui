Plan an Appcraft UI component or workflow slice before implementation.

Use this checklist:

1. Identify the app workflow being served, not just the visual widget.
2. Search existing components, metadata, recipes, and demo examples for the closest existing abstraction.
3. Prefer extending an existing product/pattern component over adding small primitives.
4. Define semantic props, built-in states, callbacks, and accessibility behavior.
5. List every synchronized file that must change:
   - `src/lib/components/*`
   - `src/lib/types.ts`
   - `src/lib/index.ts`
   - `src/lib/metadata.ts`
   - `src/lib/recipes.ts`
   - `src/lib/metadata.test.ts`
   - `src/lib/recipes.test.ts`
   - `src/routes/+page.svelte`
   - README/docs
   - `AGENTS.md` and `CLAUDE.md`
6. Start with failing tests for metadata/recipes when adding public components.
7. End with `pnpm format && pnpm lint && pnpm check && pnpm test && pnpm build`.
