# Appcraft UI

Production-grade Svelte components for AI-built applications

Appcraft UI is **not** a UI kit for AI agents. It is a package-based component SDK for building ordinary, polished application screens in a way that AI coding agents can use reliably. Humans and agents pass data, intent, and callbacks; the library owns layout, spacing, visual quality, interaction details, and common application states.

## What this is

A constrained UI library for product applications:

- Admin consoles and internal tools
- Developer tools and dashboards
- Content, knowledge, and media apps
- Settings, account, billing, and commerce flows
- AI-powered apps when needed, without making AI chat the center of the library

## Principles

- One carefully designed theme
- No arbitrary styling by default
- Semantic props only
- Built-in loading, empty, error, saved, and destructive states
- Product-ready application components, not only atoms
- Machine-readable component metadata
- Agent-readable rules and recipes so AI coding agents choose existing components instead of inventing UI

See `docs/principles.md` for the full design stance and `docs/components.md` for the component map.

## Not shadcn, not headless, not "AI agent UI"

Appcraft UI is not a copy-paste component kit, not a headless primitive library, and not a chat/agent-operation interface kit. The library owns the UI. Your app passes data, intent, and callbacks.

```svelte
<UserManagement
	{users}
	loading={membersLoading}
	error={membersError}
	currentUserId={currentUser.id}
	onInvite={inviteMember}
	onChangeRole={changeRole}
	onRemove={removeUser}
/>
```

The goal is that an AI coding agent can safely assemble a good application screen without hand-writing fragile markup, class strings, table states, dialog behavior, or form layouts.

## Install

```bash
pnpm add appcraft-ui
```

Import the stylesheet once in your app:

```ts
import 'appcraft-ui/styles.css';
```

Use components from the package root:

```svelte
<script lang="ts">
	import {
		DataTable,
		FormSection,
		PageHeader,
		SearchFilterBar,
		TextField,
		UserManagement
	} from 'appcraft-ui';

	let workspaceName = $state('Acme');
	const users = [
		{ id: '1', name: 'Ryo', email: 'ryo@example.com', role: 'owner', status: 'active' }
	];
	const columns = [
		{ key: 'name', label: 'Name', sortable: true },
		{ key: 'status', label: 'Status', kind: 'badge' }
	];
	const rows = [{ id: '1', name: 'Research assistant', status: 'Ready' }];
</script>

<PageHeader
	title="Team members"
	description="Manage members and roles for your workspace."
	primaryAction={{ label: 'Invite member', onClick: () => {} }}
/>

<FormSection
	title="Workspace profile"
	description="Use semantic fields instead of loose form markup."
>
	<TextField
		label="Workspace name"
		value={workspaceName}
		onInput={(value) => (workspaceName = value)}
	/>
</FormSection>

<SearchFilterBar query="" resultCount={rows.length} />
<DataTable {columns} {rows} />

<UserManagement {users} onInvite={() => {}} />
```

## Component coverage

The current library includes primitives, form controls, page/application patterns, feedback/navigation patterns, resource/developer-tool components, content/media/knowledge layouts, account/auth/billing/commerce flows, and a small set of AI-aware components for apps that need them.

The Atom Pack adds `IconButton`, `Badge`, `Avatar`, `Spinner`, `ProgressBar`, `Skeleton`, `Tooltip`, `Separator`, `CheckboxField`, `RadioGroupField`, `NumberField`, `CodeBlock`, `CopyButton`, `KeyboardShortcut`, `TokenMeter`, and `AgentStatusIndicator` for small safe UI composition.

The basic and product page expansion adds low-level `Input`, `Textarea`, and `Table` primitives plus larger `DashboardLayout`, `SettingsPage`, and `CrudPage` components so agents can choose either safe small building blocks or complete application pages.

The advanced workflow expansion adds searchable selection, date ranges, multi-step workflow shells, constrained charts, governance/admin patterns, import/export review flows, page-level states, and data inspection: `Combobox`, `ComboboxField`, `MultiSelectField`, `DateField`, `DateRangeField`, `Stepper`, `WizardLayout`, `ChartCard`, `TrendChart`, `BarChart`, `PermissionMatrix`, `AuditLog`, `DetailPage`, `ImportPanel`, `ExportPanel`, `CsvImportWizard`, `DataImportReview`, `PageState`, `LoadingPage`, `NotFoundPage`, `ForbiddenPage`, `MaintenancePage`, `JsonViewer`, `KeyValueList`, `DataInspector`, and `MetadataPanel`.

```bash
appcraft-ui describe ResourceList
appcraft-ui rules
appcraft-ui suggest --use-case "settings page with billing and team members"
```

## Development

This repository is a pnpm monorepo:

```txt
packages/ui      # publishable appcraft-ui package
apps/catalog     # SvelteKit catalog/demo app deployed to GitHub Pages
```

Common commands:

```bash
pnpm install
pnpm check
pnpm test
pnpm build
```

Focused commands:

```bash
pnpm --filter appcraft-ui build
pnpm --filter @appcraft-ui/catalog dev
pnpm docs:props
BASE_PATH=/appcraft-ui pnpm --filter @appcraft-ui/catalog build
```

Catalog component docs are source-assisted:

- `pnpm docs:props` regenerates `apps/catalog/src/lib/generated-component-props.ts` from each component's typed `Props` interface.
- Add human descriptions, usage snippets, and preview coverage in `apps/catalog/src/lib/component-docs.ts`.
- Add rendered examples in `apps/catalog/src/lib/ComponentShowcase.svelte`.
- Detail pages are generated at `/components/<component-slug>/`, for example `/components/button/`.
