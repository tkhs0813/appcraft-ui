<script lang="ts">
	import StatusBadge from './StatusBadge.svelte';
	import type { StatusBadgeTone } from '../types.js';
	export type CardGridItem = {
		id: string;
		title: string;
		description?: string;
		status?: string;
		tone?: StatusBadgeTone;
		meta?: string;
	};
	interface Props {
		title?: string;
		items: CardGridItem[];
		columns?: 2 | 3 | 4;
		onSelect?: (item: CardGridItem) => void;
	}
	let { title = 'Cards', items, columns = 3, onSelect }: Props = $props();
</script>

<section class="aui-card-grid aui-root" aria-label={title} style={`--aui-columns:${columns}`}>
	<div class="grid">
		{#each items as item (item.id)}<button type="button" onclick={() => onSelect?.(item)}
				><strong>{item.title}</strong>{#if item.description}<span>{item.description}</span
					>{/if}{#if item.status}<StatusBadge
						label={item.status}
						tone={item.tone ?? 'neutral'}
					/>{/if}</button
			>{/each}
	</div>
</section>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(var(--aui-columns), minmax(0, 1fr));
		gap: 1rem;
		font-family: var(--aui-font-sans);
	}
	button {
		text-align: left;
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-lg);
		background: var(--aui-surface);
		box-shadow: var(--aui-shadow-sm);
		padding: 1rem;
		display: grid;
		gap: 0.65rem;
		cursor: pointer;
	}
	strong {
		color: var(--aui-text);
	}
	span {
		color: var(--aui-text-muted);
		font-size: 0.86rem;
		line-height: 1.5;
	}
	@media (max-width: 780px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
