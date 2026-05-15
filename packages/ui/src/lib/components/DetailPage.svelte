<script lang="ts">
	import type { ActionConfig, KeyValueItem } from '../types.js';
	interface Props {
		title: string;
		description?: string;
		status?: string;
		items?: KeyValueItem[];
		actions?: ActionConfig[];
	}
	let { title, description, status, items = [], actions = [] }: Props = $props();
</script>

<article class="detail">
	<header>
		<div>
			<p>Detail</p>
			<h2>{title}</h2>
			{#if description}<span>{description}</span>{/if}
		</div>
		{#if status}<strong>{status}</strong>{/if}
	</header>
	<dl>
		{#each items as item (item.key)}<div>
				<dt>{item.label}</dt>
				<dd>{item.value}</dd>
			</div>{/each}
	</dl>
	{#if actions.length}<footer>
			{#each actions as action (action.label)}<button
					type="button"
					onclick={action.onClick}
					disabled={action.disabled || action.loading}
					>{action.loading ? 'Working…' : action.label}</button
				>{/each}
		</footer>{/if}
</article>

<style>
	.detail {
		border: 1px solid var(--ac-border, #d1d5db);
		border-radius: 1.25rem;
		padding: 1.25rem;
		background: var(--ac-surface, #fff);
		display: grid;
		gap: 1rem;
	}
	header {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
	}
	h2,
	p {
		margin: 0;
	}
	p {
		text-transform: uppercase;
		color: var(--ac-brand, #4f46e5);
		font-weight: 800;
		font-size: 0.75rem;
	}
	span,
	dt {
		color: var(--ac-text-muted, #6b7280);
	}
	strong {
		align-self: start;
		border-radius: 999px;
		background: var(--ac-surface-muted, #f3f4f6);
		padding: 0.3rem 0.55rem;
	}
	dl {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
		gap: 0.75rem;
		margin: 0;
	}
	div {
		border: 1px solid var(--ac-border, #e5e7eb);
		border-radius: 0.8rem;
		padding: 0.75rem;
	}
	dd {
		margin: 0.25rem 0 0;
		font-weight: 800;
	}
	footer {
		display: flex;
		justify-content: flex-end;
		gap: 0.5rem;
	}
	button {
		border: 1px solid var(--ac-border, #d1d5db);
		border-radius: 0.75rem;
		background: #fff;
		padding: 0.6rem 0.85rem;
		font-weight: 800;
	}
</style>
