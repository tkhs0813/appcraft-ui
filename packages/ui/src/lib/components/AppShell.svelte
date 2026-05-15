<script lang="ts">
	import type { Snippet } from 'svelte';
	import Button from './Button.svelte';
	import type { AppShellNavItem, PageHeaderAction } from '../types.js';

	interface Props {
		productName: string;
		navItems: AppShellNavItem[];
		currentPath?: string;
		workspaceName?: string;
		userName?: string;
		primaryAction?: PageHeaderAction;
		children?: Snippet;
	}

	let {
		productName,
		navItems,
		currentPath,
		workspaceName,
		userName,
		primaryAction,
		children
	}: Props = $props();

	const isCurrent = (item: AppShellNavItem) => item.current ?? item.href === currentPath;
</script>

<div class="aui-app-shell aui-root">
	<aside class="aui-app-shell__sidebar" aria-label="Primary navigation">
		<div class="aui-app-shell__brand">
			<div class="aui-app-shell__mark" aria-hidden="true">{productName.slice(0, 1)}</div>
			<div>
				<strong>{productName}</strong>
				{#if workspaceName}
					<span>{workspaceName}</span>
				{/if}
			</div>
		</div>

		<nav class="aui-app-shell__nav">
			<!-- eslint-disable svelte/no-navigation-without-resolve -- library nav hrefs must stay framework-neutral -->
			{#each navItems as item (item.href)}
				<a
					href={item.href}
					aria-current={isCurrent(item) ? 'page' : undefined}
					class:aui-app-shell__nav-item--current={isCurrent(item)}
				>
					<span aria-hidden="true">{item.icon ?? '•'}</span>
					{item.label}
				</a>
			{/each}
			<!-- eslint-enable svelte/no-navigation-without-resolve -->
		</nav>
	</aside>

	<div class="aui-app-shell__body">
		<header class="aui-app-shell__topbar">
			<div>
				{#if workspaceName}
					<span class="aui-app-shell__workspace">{workspaceName}</span>
				{/if}
				<strong>{productName}</strong>
			</div>
			<div class="aui-app-shell__topbar-actions">
				{#if primaryAction}
					<Button
						label={primaryAction.label}
						onClick={primaryAction.onClick}
						disabled={primaryAction.disabled}
						size="sm"
					/>
				{/if}
				{#if userName}
					<div class="aui-app-shell__user" aria-label={`Signed in as ${userName}`}>
						<span aria-hidden="true">{userName.slice(0, 1).toUpperCase()}</span>
						<strong>{userName}</strong>
					</div>
				{/if}
			</div>
		</header>

		<main class="aui-app-shell__main">
			{#if children}
				{@render children()}
			{/if}
		</main>
	</div>
</div>

<style>
	.aui-app-shell {
		display: grid;
		grid-template-columns: 17rem minmax(0, 1fr);
		min-height: 100vh;
		background: var(--aui-bg);
		color: var(--aui-text);
	}

	.aui-app-shell__sidebar {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		padding: 1.25rem;
		background: var(--aui-surface);
		border-right: 1px solid var(--aui-border);
	}

	.aui-app-shell__brand,
	.aui-app-shell__user,
	.aui-app-shell__topbar,
	.aui-app-shell__topbar-actions {
		display: flex;
		align-items: center;
	}

	.aui-app-shell__brand {
		gap: 0.75rem;
	}

	.aui-app-shell__brand strong,
	.aui-app-shell__topbar strong {
		display: block;
		font-size: 0.95rem;
		letter-spacing: -0.02em;
	}

	.aui-app-shell__brand span,
	.aui-app-shell__workspace {
		display: block;
		margin-top: 0.1rem;
		font-size: 0.78rem;
		color: var(--aui-text-muted);
	}

	.aui-app-shell__mark {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.35rem;
		height: 2.35rem;
		border-radius: 0.85rem;
		background: var(--aui-brand);
		color: white;
		font-weight: 850;
		box-shadow: var(--aui-shadow-sm);
	}

	.aui-app-shell__nav {
		display: grid;
		gap: 0.35rem;
	}

	a {
		display: flex;
		align-items: center;
		gap: 0.65rem;
		min-height: 2.45rem;
		padding: 0 0.75rem;
		border-radius: var(--aui-radius-md);
		color: var(--aui-text-muted);
		font-size: 0.9rem;
		font-weight: 650;
		text-decoration: none;
		transition:
			background 120ms ease,
			color 120ms ease;
	}

	a:hover {
		background: var(--aui-surface-subtle);
		color: var(--aui-text);
	}

	a:focus-visible {
		outline: 3px solid color-mix(in srgb, var(--aui-brand) 20%, transparent);
		outline-offset: 2px;
	}

	.aui-app-shell__nav-item--current {
		background: var(--aui-brand-soft);
		color: var(--aui-brand-strong);
	}

	.aui-app-shell__body {
		min-width: 0;
	}

	.aui-app-shell__topbar {
		justify-content: space-between;
		gap: 1rem;
		min-height: 4.25rem;
		padding: 0 1.5rem;
		background: color-mix(in srgb, var(--aui-surface) 88%, transparent);
		border-bottom: 1px solid var(--aui-border);
		backdrop-filter: blur(14px);
	}

	.aui-app-shell__topbar-actions {
		gap: 0.75rem;
	}

	.aui-app-shell__user {
		gap: 0.55rem;
		padding: 0.25rem 0.6rem 0.25rem 0.25rem;
		border: 1px solid var(--aui-border);
		border-radius: 999px;
		background: var(--aui-surface);
	}

	.aui-app-shell__user span {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 1.75rem;
		height: 1.75rem;
		border-radius: 999px;
		background: var(--aui-surface-subtle);
		color: var(--aui-text-muted);
		font-size: 0.75rem;
		font-weight: 800;
	}

	.aui-app-shell__user strong {
		font-size: 0.82rem;
	}

	.aui-app-shell__main {
		padding: 1.5rem;
	}

	@media (max-width: 840px) {
		.aui-app-shell {
			grid-template-columns: 1fr;
		}

		.aui-app-shell__sidebar {
			border-right: 0;
			border-bottom: 1px solid var(--aui-border);
		}

		.aui-app-shell__nav {
			grid-auto-flow: column;
			grid-auto-columns: max-content;
			overflow-x: auto;
			padding-bottom: 0.25rem;
		}
	}
</style>
