<script lang="ts">
	import type { ActionConfig } from '../types.js';
	interface Props {
		title?: string;
		description?: string;
		formats?: string[];
		action?: ActionConfig;
	}
	let {
		title = 'Import data',
		description = 'Move structured data safely without hand-rolled file workflows.',
		formats = ['CSV', 'JSON'],
		action
	}: Props = $props();
</script>

<section class="io">
	<p>{title}</p>
	<span>{description}</span>
	<div>
		{#each formats as format (format)}<strong>{format}</strong>{/each}
	</div>
	{#if action}<button
			type="button"
			onclick={action.onClick}
			disabled={action.disabled || action.loading}
			>{action.loading ? 'Working…' : action.label}</button
		>{/if}
</section>

<style>
	.io {
		border: 1px solid var(--ac-border, #d1d5db);
		border-radius: 1rem;
		padding: 1rem;
		background: var(--ac-surface, #fff);
		display: grid;
		gap: 0.8rem;
	}
	p {
		margin: 0;
		font-weight: 900;
		font-size: 1.1rem;
	}
	span {
		color: var(--ac-text-muted, #6b7280);
	}
	div {
		display: flex;
		gap: 0.45rem;
		flex-wrap: wrap;
	}
	strong {
		border-radius: 999px;
		background: var(--ac-surface-muted, #f3f4f6);
		padding: 0.3rem 0.55rem;
	}
	button {
		justify-self: start;
		border: 0;
		border-radius: 0.75rem;
		background: var(--ac-brand, #4f46e5);
		color: white;
		padding: 0.65rem 0.9rem;
		font-weight: 800;
	}
</style>
