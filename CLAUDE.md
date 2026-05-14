# CLAUDE.md

Guidance for Claude Code and other coding agents working in this repository.

## Repository Purpose

Agent UI is a **single-theme, constrained Svelte UI SDK for AI-built SaaS apps**.

The main idea: AI agents should be able to assemble high-quality product interfaces by passing data and semantic props, without manually designing layouts, spacing, colors, tables, forms, or states.

## Non-Negotiable Product Constraints

1. **Not shadcn-style copy/paste** — this is a package/library, not a component source copier.
2. **One theme for now** — do not add theme switching, dark mode, or brand customization unless explicitly requested.
3. **No arbitrary styling by default** — do not add public `class` passthroughs or raw style escape hatches by default.
4. **Semantic APIs only** — public props should describe intent and state.
5. **Library owns UI quality** — spacing, typography, focus states, loading/empty/error states, and responsive behavior belong in the library.
6. **Metadata matters** — AI-facing component metadata is a first-class API surface.

## Development Commands

```bash
pnpm install
pnpm format
pnpm lint
pnpm check
pnpm test
pnpm build
```

Use this full validation sequence before finalizing changes:

```bash
pnpm format && pnpm lint && pnpm check && pnpm test && pnpm build
```

## Project Structure

```txt
src/lib/
  components/       Public Svelte components
  styles.css        Single fixed Agent UI theme tokens and globals
  types.ts          Public TypeScript types
  metadata.ts       AI-facing component metadata and guardrails
  index.ts          Public package exports
src/routes/         Demo/showcase app for local development
docs/               Product philosophy and agent usage docs
```

## Component Authoring Checklist

When adding or changing a public component:

- [ ] Use Svelte 5 syntax and typed `$props()`.
- [ ] Keep the public API semantic and minimal.
- [ ] Do not expose arbitrary `class` by default.
- [ ] Include loading, empty, error, disabled, or destructive states when relevant.
- [ ] Use accessible markup, labels, focus states, and keyboard-friendly controls.
- [ ] Use keyed each blocks.
- [ ] Use tokens from `src/lib/styles.css`.
- [ ] Export the component from `src/lib/index.ts`.
- [ ] Add or update public types in `src/lib/types.ts`.
- [ ] Add or update metadata in `src/lib/metadata.ts`.
- [ ] Add or update tests when behavior or metadata changes.
- [ ] Update the demo route if the component is user-visible.

## Import and Packaging Rules

- Use explicit `.js` extensions for relative TypeScript imports, e.g. `./types.js`.
- Keep package exports valid for `@sveltejs/package` and `publint`.
- CSS must remain exportable as `agent-ui/styles.css`.
- Do not rely on `$app/*` modules inside `src/lib` unless the package intentionally becomes SvelteKit-only.

## Design Direction

The default visual direction is clean SaaS dashboard UI:

- white and slate surfaces
- indigo brand accent
- subtle borders
- restrained shadows
- rounded but professional corners
- accessible focus rings
- compact but readable density

Do not introduce unrelated visual styles.

## Current First Slice

The initial public surface is intentionally small:

- `Button`
- `PageHeader`
- `UserManagement`
- `componentMetadata`

Prioritize deepening these and adding closely related SaaS patterns before broadening the library.

## Recommended Next Components

Good next additions:

- `AppShell`
- `SidebarNav`
- `FormSection`
- `EmptyState`
- `ErrorState`
- `ConfirmDialog`
- `TextField`
- `SelectField`
- `ApiKeyManager`
- `TeamSettings`

Avoid adding broad marketing-site components until the SaaS/admin product layer is strong.
