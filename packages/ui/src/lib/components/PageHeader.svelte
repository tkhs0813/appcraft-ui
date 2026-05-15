<script lang="ts">
	import Button from './Button.svelte';
	import type { PageHeaderAction } from '../types.js';

	interface Props {
		title: string;
		description?: string;
		kicker?: string;
		primaryAction?: PageHeaderAction;
		secondaryAction?: PageHeaderAction;
	}

	let { title, description, kicker, primaryAction, secondaryAction }: Props = $props();
</script>

<header class="aui-page-header aui-root">
	<div class="aui-page-header__copy">
		{#if kicker}
			<p class="aui-page-header__kicker">{kicker}</p>
		{/if}
		<h1>{title}</h1>
		{#if description}
			<p>{description}</p>
		{/if}
	</div>
	{#if primaryAction || secondaryAction}
		<div class="aui-page-header__actions" aria-label="Page actions">
			{#if secondaryAction}
				<Button
					variant="secondary"
					label={secondaryAction.label}
					disabled={secondaryAction.disabled}
					onClick={secondaryAction.onClick}
				/>
			{/if}
			{#if primaryAction}
				<Button
					variant="primary"
					label={primaryAction.label}
					disabled={primaryAction.disabled}
					onClick={primaryAction.onClick}
				/>
			{/if}
		</div>
	{/if}
</header>

<style>
	.aui-page-header {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 1.25rem;
		padding: 1.5rem;
		background: var(--aui-surface);
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-lg);
		box-shadow: var(--aui-shadow-sm);
	}

	.aui-page-header__copy {
		min-width: 0;
	}

	.aui-page-header__kicker {
		margin: 0 0 0.45rem;
		font-size: 0.75rem;
		font-weight: 750;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--aui-brand);
	}

	h1 {
		margin: 0;
		font-size: clamp(1.35rem, 2vw, 1.875rem);
		line-height: 1.15;
		letter-spacing: -0.035em;
		color: var(--aui-text);
	}

	p:not(.aui-page-header__kicker) {
		margin: 0.45rem 0 0;
		max-width: 42rem;
		font-size: 0.95rem;
		line-height: 1.6;
		color: var(--aui-text-muted);
	}

	.aui-page-header__actions {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
		gap: 0.625rem;
	}

	@media (max-width: 720px) {
		.aui-page-header {
			flex-direction: column;
		}

		.aui-page-header__actions {
			width: 100%;
			justify-content: flex-start;
		}
	}
</style>
