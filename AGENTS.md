# AGENTS.md

This repository contains **Agent UI**, a production-grade Svelte component SDK for AI-built SaaS apps.

## Product Direction

Agent UI is **not** a shadcn-style copy/paste kit. It is a package-based UI SDK.

- The library owns the polished UI.
- Apps pass data, intent, and callbacks.
- The initial product ships with one fixed theme.
- Arbitrary visual customization is intentionally not part of the default API.
- AI agents should use existing Agent UI components instead of recreating UI manually.

## Core Rules for AI Agents

- Prefer components exported from `src/lib/index.ts`.
- Do not add arbitrary `class` pass-through props to public components unless explicitly requested.
- Do not introduce multi-theme support yet.
- Do not add dark mode yet.
- Do not copy components into app code as an integration strategy.
- Use semantic props such as `variant`, `size`, `tone`, `status`, `loading`, `error`, data arrays, and callbacks.
- Use built-in loading, empty, error, and destructive-action states.
- Keep public component APIs small and hard to misuse.
- Keep component styling scoped and based on tokens from `src/lib/styles.css`.
- Keep AI-facing metadata in `src/lib/metadata.ts` in sync with public components.

## Svelte Rules

- Use Svelte 5 runes and typed `$props()`.
- Use keyed `{#each}` blocks.
- Prefer callback props over mutating props.
- Use explicit `.js` extensions for relative TypeScript imports in library code.
- Avoid SvelteKit-specific `$app/*` imports inside `src/lib`; this package should remain usable as a Svelte library.
- Run the Svelte autofixer when writing or significantly changing Svelte components.

## Validation

Before considering changes complete, run:

```bash
pnpm format
pnpm lint
pnpm check
pnpm test
pnpm build
```

Expected:

- Prettier and ESLint pass.
- `svelte-check` reports 0 errors and 0 warnings.
- Vitest passes.
- `svelte-package` succeeds.
- `publint` reports `All good!`.

## Current Public Components

- `Button` — primitive action button with semantic variants and loading state.
- `PageHeader` — SaaS/admin page header with optional actions.
- `UserManagement` — product component for workspace/team member management.

## Good API Example

```svelte
<UserManagement
	{users}
	{loading}
	{error}
	currentUserId={currentUser.id}
	onInvite={inviteMember}
	onChangeRole={changeRole}
	onRemove={removeUser}
/>
```

## Bad API Direction

Avoid adding APIs like this by default:

```svelte
<Button class="bg-purple-500 rounded-none px-10" />
```

This project optimizes for consistent product quality and AI-safe guardrails, not unlimited customization.
