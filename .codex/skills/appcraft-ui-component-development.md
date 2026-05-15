---
name: appcraft-ui-component-development
description: Use when adding, changing, reviewing, or documenting Appcraft UI components, metadata, recipes, or agent-facing APIs with Codex.
---

# Appcraft UI Component Development for Codex

Use this guide when Codex is asked to add, change, review, or document Appcraft UI components, metadata, recipes, or agent-facing APIs.

## Goal

Appcraft UI is a package-based Svelte component SDK for AI-built applications. The library owns polished UI; applications pass data, intent, state, and callbacks.

Do not treat this project as a copy-paste kit, Tailwind snippet library, or chat-only AI UI package.

## Default workflow

1. Read `AGENTS.md` first. It is the source of truth for Codex in this repository.
2. Inspect existing exports in `packages/ui/src/lib/index.ts`, metadata in `packages/ui/src/lib/metadata.ts`, recipes in `packages/ui/src/lib/recipes.ts`, and examples in `apps/catalog/src/routes/+page.svelte` before designing new API.
3. Choose the largest fitting abstraction first:
   - product component
   - page/pattern component
   - primitive component
   - raw markup only when no Appcraft component fits
4. For new public components, update tests before implementation:
   - `packages/ui/src/lib/metadata.test.ts`
   - `packages/ui/src/lib/recipes.test.ts` when component selection should change
5. Implement with Svelte 5 runes and typed `$props()`.
6. Update all public surfaces in the same change:
   - component file in `packages/ui/src/lib/components/`
   - supporting types in `packages/ui/src/lib/types.ts`
   - exports in `packages/ui/src/lib/index.ts`
   - metadata in `packages/ui/src/lib/metadata.ts`
   - recipes in `packages/ui/src/lib/recipes.ts` when applicable
   - demo in `apps/catalog/src/routes/+page.svelte`
   - README/docs when public usage changes
   - `AGENTS.md`, `CLAUDE.md`, `.claude/`, and `.codex/` when public component lists or rules change
7. Run validation before finishing:
   - `pnpm format`
   - `pnpm lint`
   - `pnpm check`
   - `pnpm test`
   - `pnpm build`

## API rules

- Use semantic props: `variant`, `size`, `tone`, `status`, `loading`, `error`, data arrays, labels, and callbacks.
- Do not expose arbitrary `class` pass-through props unless explicitly requested.
- Do not introduce multi-theme support or dark mode unless explicitly requested.
- Do not add external UI/headless libraries such as bits-ui, Melt UI, Radix, Ark UI, or Floating UI unless explicitly requested.
- Keep styling scoped and based on tokens from `packages/ui/src/lib/styles.css`.
- Use keyed `{#each}` blocks.
- Prefer callback props over mutating props.
- Keep accessible labels for icon-only or ambiguous controls.
- Use explicit `.js` extensions for relative TypeScript imports in library code.
- Avoid SvelteKit-only `$app/*` imports inside `packages/ui/src/lib`.

## Metadata and recipes are product API

For every public component, keep `componentMetadata` complete enough for agents to choose it instead of hand-rolling UI. Include:

- category
- description
- use cases
- forbidden patterns

For user-facing component suggestion behavior, update `componentRecipes` and tests so `appcraft-ui suggest --use-case "..."` stays useful.

## Review checklist

Before claiming success, verify:

- no raw replacement of existing Appcraft components with bespoke markup
- no arbitrary styling API creep
- metadata names match public exports
- recipes cover new workflows when applicable
- demo uses Appcraft components rather than one-off UI
- full validation passed
