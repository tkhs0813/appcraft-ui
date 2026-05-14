<script lang="ts">
	import type { ActionConfig, StatusBadgeTone } from '../types.js';
	import Button from './Button.svelte';
	import StatusBadge from './StatusBadge.svelte';
	export type KanbanBoardItem = {
		id: string;
		title: string;
		description?: string;
		status?: string;
		tone?: StatusBadgeTone;
		meta?: string;
	};
	interface Props {
		title?: string;
		description?: string;
		items?: KanbanBoardItem[];
		actions?: ActionConfig[];
		primaryAction?: ActionConfig;
		onSelect?: (item: KanbanBoardItem) => void;
	}
	let {
		title = 'Kanban board',
		description = 'Simple kanban board for workflow apps.',
		items = [],
		actions = [],
		primaryAction,
		onSelect
	}: Props = $props();
</script>

<section class="aui-product aui-root" aria-label={title}>
	<header>
		<div>
			<h2>{title}</h2>
			{#if description}<p>{description}</p>{/if}
		</div>
		{#if primaryAction}<Button
				label={primaryAction.label}
				onClick={primaryAction.onClick}
				disabled={primaryAction.disabled}
				loading={primaryAction.loading}
			/>{/if}
	</header>
	<div class="aui-grid">
		{#each items as item (item.id)}<button type="button" onclick={() => onSelect?.(item)}
				><div>
					<strong>{item.title}</strong>{#if item.description}<span>{item.description}</span>{/if}
				</div>
				{#if item.status}<StatusBadge
						label={item.status}
						tone={item.tone ?? 'neutral'}
					/>{/if}{#if item.meta}<small>{item.meta}</small>{/if}</button
			>{:else}<p class="empty">No items yet.</p>{/each}
	</div>
	{#if actions.length > 0}<footer>
			{#each actions as action (action.label)}<Button
					variant="secondary"
					label={action.label}
					onClick={action.onClick}
				/>{/each}
		</footer>{/if}
</section>

<style>
	.aui-product {
		display: grid;
		gap: 1rem;
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-lg);
		background: var(--aui-surface);
		box-shadow: var(--aui-shadow-sm);
		padding: 1.1rem;
		font-family: var(--aui-font-sans);
	}
	header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1rem;
	}
	h2,
	p {
		margin: 0;
	}
	h2 {
		color: var(--aui-text);
		font-size: 1.05rem;
	}
	p,
	.empty {
		margin-top: 0.3rem;
		color: var(--aui-text-muted);
		font-size: 0.88rem;
		line-height: 1.55;
	}
	.aui-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
		gap: 0.8rem;
	}
	.aui-grid button {
		display: grid;
		gap: 0.6rem;
		text-align: left;
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-md);
		background: var(--aui-surface-subtle);
		padding: 0.85rem;
		cursor: pointer;
	}
	strong {
		display: block;
		color: var(--aui-text);
	}
	span,
	small {
		color: var(--aui-text-muted);
		font-size: 0.82rem;
		line-height: 1.45;
	}
	footer {
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem;
		justify-content: flex-end;
	}
</style>
