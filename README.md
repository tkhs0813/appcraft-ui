# Agent UI

Production-grade Svelte components for AI-built SaaS apps.

Agent UI is a constrained component SDK designed for AI coding agents. It ships one polished theme, semantic component APIs, built-in application states, and machine-readable metadata so agents can build consistent product interfaces without breaking visual quality.

## Principles

- One carefully designed theme
- No arbitrary styling by default
- Semantic props only
- Built-in loading, empty, error, and destructive states
- Product-ready SaaS components
- Machine-readable component metadata
- Rules and docs for AI coding agents

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
	import { Button, PageHeader, UserManagement } from 'agent-ui';

	const users = [
		{ id: '1', name: 'Ryo', email: 'ryo@example.com', role: 'owner', status: 'active' }
	];
</script>

<PageHeader
	title="Team members"
	description="Manage members and roles for your workspace."
	primaryAction={{ label: 'Invite member', onClick: () => {} }}
/>

<UserManagement {users} onInvite={() => {}} />
```

## Development

```bash
pnpm install
pnpm check
pnpm test
pnpm build
```
