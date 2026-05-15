<script lang="ts">
	import type { ChartDatum, StatusBadgeTone } from '../types.js';
	interface Props {
		title: string;
		value?: string;
		description?: string;
		data?: ChartDatum[];
		tone?: StatusBadgeTone;
	}
	let { title, value, description, data = [], tone = 'brand' }: Props = $props();
	let max = $derived(Math.max(1, ...data.map((item) => item.value)));
</script>

<section class="chart" data-tone={tone}>
	<header>
		<h3>{title}</h3>
		{#if value}<strong>{value}</strong>{/if}{#if description}<p>{description}</p>{/if}
	</header>
	<div class="bars" aria-label={title}>
		{#each data as item (item.label)}<div>
				<span style={`height: ${(item.value / max) * 100}%`}></span><small>{item.label}</small>
			</div>{/each}
	</div>
</section>

<style>
	.chart {
		border: 1px solid var(--ac-border, #d1d5db);
		border-radius: 1rem;
		padding: 1rem;
		display: grid;
		gap: 1rem;
		background: var(--ac-surface, #fff);
	}
	h3,
	p {
		margin: 0;
	}
	strong {
		font-size: 1.8rem;
	}
	p,
	small {
		color: var(--ac-text-muted, #6b7280);
	}
	.bars {
		block-size: 8rem;
		display: flex;
		gap: 0.5rem;
		align-items: end;
	}
	.bars div {
		flex: 1;
		block-size: 100%;
		display: grid;
		grid-template-rows: 1fr auto;
		gap: 0.35rem;
		align-items: end;
	}
	.bars span {
		display: block;
		min-height: 0.25rem;
		border-radius: 0.4rem 0.4rem 0 0;
		background: var(--ac-brand, #4f46e5);
	}
</style>
