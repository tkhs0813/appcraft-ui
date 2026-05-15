# Appcraft UI Agent Rules

This repository contains **Appcraft UI**, a production-grade Svelte component SDK for AI-built applications.

Important clarification: Appcraft UI is **not** primarily UI for AI agents. It is a broad application UI library designed so AI coding agents can build normal product screens reliably.

## Agent Entry Points

- **Codex CLI:** use this `AGENTS.md` as the source of truth, with Codex helper prompts in `.codex/`.
- **Codex helper prompts:** `.codex/skills/appcraft-ui-component-development.md`, `.codex/commands/validate.md`, and `.codex/commands/plan-component.md` mirror the Claude-side workflow guidance.
- **Claude Code:** use this file through `CLAUDE.md` and the project skill at `.claude/skills/appcraft-ui-component-development.md`.
- **Claude slash commands:** project commands live in `.claude/commands/`:
  - `/validate` runs the required validation checklist.
  - `/plan-component` plans a component/workflow slice before implementation.
- Keep `AGENTS.md` and `CLAUDE.md` identical unless there is a specific reason to diverge.

## Product Direction

Appcraft UI is **not** a shadcn-style copy/paste kit. It is a package-based UI SDK.

- The library owns the polished UI.
- Apps pass data, intent, state, and callbacks.
- The initial product ships with one fixed theme.
- Arbitrary visual customization is intentionally not part of the default API.
- AI coding agents should use existing Appcraft UI components instead of recreating UI manually.
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

## Change Workflow

1. Inspect existing components, exports, metadata, recipes, docs, and demo examples before adding new APIs.
2. Prefer extending an existing Appcraft abstraction over creating a new primitive.
3. For new public components, update tests first where practical:
   - `src/lib/metadata.test.ts`
   - `src/lib/recipes.test.ts` when suggestions should change
4. Implement the component and all synchronized public surfaces in the same change.
5. Update documentation and agent rules when public usage, component lists, or guardrails change.
6. Run the full validation sequence before finishing component/API changes.

## Files That Must Stay in Sync

When adding, removing, or renaming a public component, update all applicable files:

- `src/lib/components/*`
- `src/lib/types.ts`
- `src/lib/index.ts`
- `src/lib/metadata.ts`
- `src/lib/recipes.ts`
- `src/lib/metadata.test.ts`
- `src/lib/recipes.test.ts`
- `src/routes/+page.svelte`
- `README.md`
- `docs/components.md`
- `docs/agent-usage.md`
- `AGENTS.md`
- `CLAUDE.md`
- `.claude/` and `.codex/` guidance files when public rules change

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

If only documentation or agent rules changed, run at least:

```bash
pnpm format
pnpm lint
```

## Current Public Components

- Foundation: `Button`, `IconButton`, `Badge`, `StatusBadge`, `Avatar`, `Spinner`, `ProgressBar`, `Skeleton`, `Tooltip`, `Separator`, `KeyboardShortcut`, `CodeBlock`, `CopyButton`, `Card`, `Dialog`, `DropdownMenu`, `Popover`, `Drawer`, `Accordion`, `Input`, `Textarea`, `Table`, `JsonViewer`, `KeyValueList`.
- Forms/settings: `TextField`, `TextareaField`, `SelectField`, `SwitchField`, `CheckboxField`, `RadioGroupField`, `NumberField`, `Combobox`, `ComboboxField`, `MultiSelectField`, `DateField`, `DateRangeField`, `FormSection`, `SubmitBar`, `SettingsPage`, `ProfileSettings`, `WorkspaceSettings`.
- Layout/navigation: `AppShell`, `DashboardLayout`, `PageHeader`, `Tabs`, `Breadcrumbs`, `CommandPalette`, `CardGrid`, `MetricCard`, `Stepper`, `WizardLayout`, `ChartCard`, `TrendChart`, `BarChart`.
- Feedback/state: `EmptyState`, `ErrorState`, `ConfirmDialog`, `Alert`, `Banner`, `ToastViewport`, `NotificationCenter`, `ActivityFeed`, `Timeline`, `PageState`, `LoadingPage`, `NotFoundPage`, `ForbiddenPage`, `MaintenancePage`.
- Data/resource workflows: `SearchFilterBar`, `DataTable`, `CrudPage`, `Pagination`, `ResourceList`, `ResourceGrid`, `ResourceDetail`, `UserManagement`, `DetailPage`, `PermissionMatrix`, `AuditLog`, `ImportPanel`, `ExportPanel`, `CsvImportWizard`, `DataImportReview`, `DataInspector`, `MetadataPanel`, `IntegrationList`, `ApiKeyManager`, `JobRunList`, `LogViewer`, `InspectorPanel`, `FileUploader`, `FileList`.
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
