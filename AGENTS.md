# AGENTS.md

This repository contains **Agent UI**, a production-grade Svelte component SDK for AI-built applications.

Important clarification: Agent UI is **not** primarily UI for AI agents. It is a broad application UI library designed so AI coding agents can build normal product screens reliably.

## Product Direction

Agent UI is **not** a shadcn-style copy/paste kit. It is a package-based UI SDK.

- The library owns the polished UI.
- Apps pass data, intent, state, and callbacks.
- The initial product ships with one fixed theme.
- Arbitrary visual customization is intentionally not part of the default API.
- AI coding agents should use existing Agent UI components instead of recreating UI manually.
- Do not narrow the library to chat, assistant, or agent-operation interfaces.

## Core Rules for AI Agents

- Prefer components exported from `src/lib/index.ts`.
- Choose the largest fitting component first: product component, then pattern, then primitive, then raw markup only if needed.
- Do not add arbitrary `class` pass-through props to public components unless explicitly requested.
- Do not introduce multi-theme support yet.
- Do not add dark mode yet.
- Do not copy components into app code as an integration strategy.
- Do not add external UI/headless component libraries such as bits-ui, Melt UI, Radix, Ark UI, or Floating UI unless explicitly requested.
- Tailwind-related tooling/libraries are allowed when useful, but do not turn the public API into arbitrary styling.
- Implement UI/headless components and interaction primitives in-house.
- Use semantic props such as `variant`, `size`, `tone`, `status`, `loading`, `error`, data arrays, and callbacks.
- Use built-in loading, empty, error, dirty/saving/saved, and destructive-action states.
- Keep public component APIs small and hard to misuse.
- Keep component styling scoped and based on tokens from `src/lib/styles.css`.
- Keep AI-facing metadata in `src/lib/metadata.ts` and recipes in `src/lib/recipes.ts` in sync with public components.

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

- Foundation: `Button`, `IconButton`, `Badge`, `StatusBadge`, `Avatar`, `Spinner`, `ProgressBar`, `Skeleton`, `Tooltip`, `Separator`, `KeyboardShortcut`, `CodeBlock`, `CopyButton`.
- Forms/settings: `TextField`, `TextareaField`, `SelectField`, `SwitchField`, `CheckboxField`, `RadioGroupField`, `NumberField`, `FormSection`, `SubmitBar`, `ProfileSettings`, `WorkspaceSettings`.
- Layout/navigation: `AppShell`, `PageHeader`, `Tabs`, `Breadcrumbs`, `CommandPalette`, `CardGrid`, `MetricCard`.
- Feedback/state: `EmptyState`, `ErrorState`, `ConfirmDialog`, `Alert`, `Banner`, `ToastViewport`, `NotificationCenter`, `ActivityFeed`, `Timeline`.
- Data/resource workflows: `SearchFilterBar`, `DataTable`, `Pagination`, `ResourceList`, `ResourceGrid`, `ResourceDetail`, `UserManagement`, `IntegrationList`, `ApiKeyManager`, `JobRunList`, `LogViewer`, `InspectorPanel`, `FileUploader`, `FileList`.
- Content/knowledge/media: `ContentEditorShell`, `DocumentList`, `KnowledgeBaseLayout`, `MediaGallery`, `CalendarList`, `KanbanBoard`.
- Account/commerce: `SignInForm`, `SignUpForm`, `ForgotPasswordForm`, `ResetPasswordForm`, `BillingSettings`, `PricingTable`, `CheckoutSummary`, `OrderList`.
- AI-aware optional components: `ChatPanel`, `ConversationList`, `PromptComposer`, `TokenMeter`, `AgentStatusIndicator`.
- Agent-facing helpers exist in `src/lib/recipes.ts` and `src/lib/cli.ts`; keep recipes, CLI output, metadata, and public exports in sync.

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
