<script lang="ts">
	import '../lib/styles.css';
	import {
		AppShell,
		Button,
		ConfirmDialog,
		EmptyState,
		ErrorState,
		PageHeader,
		UserManagement,
		type AppShellNavItem,
		type UserManagementUser
	} from '$lib/index.js';

	const navItems: AppShellNavItem[] = [
		{ label: 'Overview', href: '/', icon: '⌘', current: true },
		{ label: 'Members', href: '/members', icon: '👥' },
		{ label: 'Billing', href: '/billing', icon: '◇' },
		{ label: 'Settings', href: '/settings', icon: '⚙' }
	];

	let showDialog = $state(false);

	const users: UserManagementUser[] = [
		{
			id: '1',
			name: 'Ryo Takahashi',
			email: 'ryo@example.com',
			role: 'owner',
			status: 'active'
		},
		{
			id: '2',
			name: 'Mina Sato',
			email: 'mina@example.com',
			role: 'admin',
			status: 'active'
		},
		{
			id: '3',
			name: 'Kai Ito',
			email: 'kai@example.com',
			role: 'member',
			status: 'invited'
		}
	];
</script>

<svelte:head>
	<title>Agent UI</title>
	<meta name="description" content="Production-grade Svelte components for AI-built SaaS apps." />
</svelte:head>

<AppShell
	productName="Agent UI"
	workspaceName="Acme Workspace"
	userName="Ryo"
	{navItems}
	primaryAction={{ label: 'New project', onClick: () => undefined }}
>
	<section class="demo aui-root">
		<section class="hero">
			<p class="eyebrow">Agent UI</p>
			<h1>Production-grade Svelte components for AI-built SaaS apps.</h1>
			<p>
				A constrained UI SDK with one polished theme, semantic props, built-in states, and
				machine-readable component metadata.
			</p>
			<div class="actions">
				<Button label="Get started" />
				<Button variant="secondary" label="View metadata" />
			</div>
		</section>

		<PageHeader
			title="Team members"
			description="Manage members and roles for your workspace."
			primaryAction={{ label: 'Invite member', onClick: () => undefined }}
			secondaryAction={{ label: 'Export', onClick: () => undefined }}
		/>

		<UserManagement
			{users}
			currentUserId="1"
			onInvite={() => undefined}
			onChangeRole={() => undefined}
			onRemove={() => (showDialog = true)}
		/>

		<section class="state-grid" aria-label="State components">
			<EmptyState
				tone="brand"
				title="No automations yet"
				description="Create your first workflow and Agent UI will keep the empty state polished for every app."
				action={{ label: 'Create workflow', onClick: () => undefined }}
			/>
			<ErrorState
				message="The latest audit events could not be loaded. Retry without rebuilding the error layout by hand."
				retryAction={{ label: 'Retry', onClick: () => undefined }}
				supportAction={{ label: 'Contact support', onClick: () => undefined }}
			/>
		</section>
	</section>
</AppShell>

<ConfirmDialog
	open={showDialog}
	title="Remove this member?"
	description="This action revokes workspace access immediately. You can invite the member again later."
	confirmLabel="Remove member"
	onConfirm={() => (showDialog = false)}
	onCancel={() => (showDialog = false)}
/>

<style>
	:global(body) {
		margin: 0;
		background: var(--aui-bg);
	}

	.demo {
		display: grid;
		gap: 1.5rem;
	}

	.hero {
		padding: 3rem 1.5rem;
		border-radius: 1.5rem;
		background:
			radial-gradient(
				circle at top left,
				color-mix(in srgb, var(--aui-brand) 18%, transparent),
				transparent 28rem
			),
			var(--aui-surface);
		border: 1px solid var(--aui-border);
		box-shadow: var(--aui-shadow-md);
	}

	.eyebrow {
		margin: 0 0 0.75rem;
		font-size: 0.8rem;
		font-weight: 800;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--aui-brand);
	}

	.hero h1 {
		max-width: 820px;
		margin: 0;
		font-size: clamp(2.25rem, 6vw, 4.75rem);
		line-height: 0.95;
		letter-spacing: -0.07em;
		color: var(--aui-text);
	}

	.hero p:not(.eyebrow) {
		max-width: 680px;
		margin: 1.25rem 0 0;
		font-size: 1.08rem;
		line-height: 1.7;
		color: var(--aui-text-muted);
	}

	.actions,
	.state-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.actions {
		margin-top: 1.5rem;
	}

	.state-grid {
		align-items: stretch;
	}

	.state-grid > :global(*) {
		flex: 1 1 22rem;
	}
</style>
