<script lang="ts">
	import type { ActionConfig } from '../types.js';
	interface Props {
		title: string;
		description?: string;
		tone?: 'loading' | 'empty' | 'error' | 'forbidden' | 'maintenance';
		action?: ActionConfig;
	}
	let { title, description, tone = 'empty', action }: Props = $props();
	let icon = $derived(
		tone === 'loading'
			? '⏳'
			: tone === 'error'
				? '!'
				: tone === 'forbidden'
					? '🔒'
					: tone === 'maintenance'
						? '◇'
						: '∅'
	);
</script>

<section class="state" data-tone={tone}>
	<span>{icon}</span>
	<h2>{title}</h2>
	{#if description}<p>{description}</p>{/if}{#if action}<button
			type="button"
			onclick={action.onClick}
			disabled={action.disabled || action.loading}
			>{action.loading ? 'Working…' : action.label}</button
		>{/if}
</section>

<style>
	.state {
		min-height: 18rem;
		display: grid;
		place-items: center;
		align-content: center;
		gap: 0.75rem;
		text-align: center;
		border: 1px solid var(--ac-border, #d1d5db);
		border-radius: 1.25rem;
		padding: 2rem;
		background: var(--ac-surface, #fff);
	}
	span {
		inline-size: 3rem;
		block-size: 3rem;
		display: grid;
		place-items: center;
		border-radius: 999px;
		background: var(--ac-surface-muted, #f3f4f6);
		font-weight: 900;
	}
	h2,
	p {
		margin: 0;
	}
	p {
		max-width: 34rem;
		color: var(--ac-text-muted, #6b7280);
	}
	button {
		border: 0;
		border-radius: 0.75rem;
		background: var(--ac-brand, #4f46e5);
		color: white;
		padding: 0.65rem 0.9rem;
		font-weight: 800;
	}
</style>
