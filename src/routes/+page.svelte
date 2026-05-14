<script lang="ts">
	import '../lib/styles.css';
	import { Button, PageHeader, UserManagement, type UserManagementUser } from '$lib/index.js';

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

<main class="demo aui-root">
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
		onRemove={() => undefined}
	/>
</main>

<style>
	:global(body) {
		margin: 0;
		background: var(--aui-bg);
	}

	.demo {
		max-width: 1100px;
		margin: 0 auto;
		padding: 3rem 1.25rem;
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

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-top: 1.5rem;
	}
</style>
