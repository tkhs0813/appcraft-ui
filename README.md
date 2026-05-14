# Agent UI

Production-grade Svelte components for AI-built applications.

Agent UI is a constrained component SDK designed for AI coding agents. It ships one polished theme, semantic component APIs, built-in application states, and machine-readable metadata so agents can build consistent product interfaces without breaking visual quality.

## Principles

- One carefully designed theme
- No arbitrary styling by default
- Semantic props only
- Built-in loading, empty, error, and destructive states
- Product-ready application components
- Machine-readable component metadata
- Rules and docs for AI coding agents

## Roadmap

The component roadmap is intentionally broader than SaaS: admin tools, developer tools, AI workspaces, content apps, commerce flows, knowledge bases, internal tools, and personal productivity apps are all in scope. See `docs/plans/2026-05-14-component-roadmap.md`.

## Not shadcn

Agent UI is not a copy-paste component kit. The library owns the UI. Your app passes data, intent, and callbacks.

## Install

```bash
pnpm add agent-ui
```

Import the stylesheet once in your app:

```ts
import 'agent-ui/styles.css';
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
	} from 'agent-ui';

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

The Atom Pack adds `IconButton`, `Badge`, `Avatar`, `Spinner`, `ProgressBar`, `Skeleton`, `Tooltip`, `Separator`, `CheckboxField`, `RadioGroupField`, `NumberField`, `CodeBlock`, `CopyButton`, `KeyboardShortcut`, `TokenMeter`, and `AgentStatusIndicator` for small AI-safe UI composition.

Agent UI now includes the full roadmap surface: feedback/navigation patterns, resource and developer-tool product components, AI workspace components, content/media/knowledge layouts, account/auth/billing/commerce flows, plus agent-facing recipes and CLI helpers.

```bash
agent-ui describe ResourceList
agent-ui rules
agent-ui suggest --use-case "chat workspace with prompt composer"
```

## Development

```bash
pnpm install
pnpm check
pnpm test
pnpm build
```
