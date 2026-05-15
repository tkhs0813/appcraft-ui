<script lang="ts">
	import type { Snippet } from 'svelte';
	import Button from './Button.svelte';
	import type { CardAction, CardTone } from '../types.js';

	interface Props {
		title?: string;
		description?: string;
		meta?: string;
		tone?: CardTone;
		padded?: boolean;
		actions?: CardAction[];
		footer?: string;
		children?: Snippet;
	}

	let {
		title,
		description,
		meta,
		tone = 'default',
		padded = true,
		actions = [],
		footer,
		children
	}: Props = $props();
</script>

<section
	class="aui-card aui-root"
	class:aui-card--brand={tone === 'brand'}
	class:aui-card--success={tone === 'success'}
	class:aui-card--warning={tone === 'warning'}
	class:aui-card--danger={tone === 'danger'}
	class:aui-card--unpadded={!padded}
>
	{#if title || description || meta || actions.length > 0}
		<header class="aui-card__header">
			<div class="aui-card__heading">
				{#if meta}<p class="aui-card__meta">{meta}</p>{/if}
				{#if title}<h2>{title}</h2>{/if}
				{#if description}<p class="aui-card__description">{description}</p>{/if}
			</div>
			{#if actions.length > 0}
				<div class="aui-card__actions" aria-label="Card actions">
					{#each actions as action (action.label)}
						<Button
							variant={action.variant ?? 'secondary'}
							size="sm"
							label={action.label}
							disabled={action.disabled}
							loading={action.loading}
							onClick={action.onClick}
						/>
					{/each}
				</div>
			{/if}
		</header>
	{/if}

	{#if children}
		<div class="aui-card__body">
			{@render children()}
		</div>
	{/if}

	{#if footer}
		<footer class="aui-card__footer">{footer}</footer>
	{/if}
</section>

<style>
	.aui-card {
		display: grid;
		gap: 1rem;
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-lg);
		background: var(--aui-surface);
		box-shadow: var(--aui-shadow-sm);
		font-family: var(--aui-font-sans);
		color: var(--aui-text);
	}

	.aui-card:not(.aui-card--unpadded) {
		padding: 1rem;
	}

	.aui-card--brand {
		border-color: color-mix(in srgb, var(--aui-brand) 26%, var(--aui-border));
	}
	.aui-card--success {
		border-color: color-mix(in srgb, var(--aui-success) 30%, var(--aui-border));
	}
	.aui-card--warning {
		border-color: color-mix(in srgb, var(--aui-warning) 30%, var(--aui-border));
	}
	.aui-card--danger {
		border-color: color-mix(in srgb, var(--aui-danger) 30%, var(--aui-border));
	}

	.aui-card__header {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 1rem;
	}

	.aui-card__heading {
		display: grid;
		gap: 0.35rem;
	}

	h2,
	p {
		margin: 0;
	}

	h2 {
		font-size: 1rem;
		letter-spacing: -0.02em;
	}

	.aui-card__meta {
		font-size: 0.75rem;
		font-weight: 750;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--aui-brand);
	}

	.aui-card__description,
	.aui-card__footer {
		font-size: 0.9rem;
		line-height: 1.55;
		color: var(--aui-text-muted);
	}

	.aui-card__actions {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
		gap: 0.5rem;
	}
	.aui-card__body {
		min-width: 0;
	}
	.aui-card__footer {
		border-top: 1px solid var(--aui-border);
		padding-top: 0.85rem;
	}

	@media (max-width: 640px) {
		.aui-card__header {
			flex-direction: column;
		}
		.aui-card__actions {
			justify-content: flex-start;
		}
	}
</style>
