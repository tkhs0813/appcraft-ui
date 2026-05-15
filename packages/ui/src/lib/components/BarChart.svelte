<script lang="ts">
	import type { ChartDatum } from '../types.js';
	interface Props {
		title: string;
		data?: ChartDatum[];
	}
	let { title, data = [] }: Props = $props();
	let max = $derived(Math.max(1, ...data.map((item) => item.value)));
</script>

<section class="bar-chart">
	<h3>{title}</h3>
	{#each data as item (item.label)}
		<div class="row">
			<span>{item.label}</span>
			<div><i style={`width: ${(item.value / max) * 100}%`}></i></div>
			<strong>{item.value}</strong>
		</div>
	{/each}
</section>

<style>
	.bar-chart {
		border: 1px solid var(--ac-border, #d1d5db);
		border-radius: 1rem;
		padding: 1rem;
		display: grid;
		gap: 0.7rem;
		background: var(--ac-surface, #fff);
	}
	h3 {
		margin: 0;
	}
	.row {
		display: grid;
		grid-template-columns: 8rem 1fr 3rem;
		gap: 0.75rem;
		align-items: center;
	}
	span {
		color: var(--ac-text-muted, #6b7280);
	}
	div div {
		height: 0.65rem;
		background: var(--ac-surface-muted, #f3f4f6);
		border-radius: 999px;
		overflow: hidden;
	}
	i {
		display: block;
		height: 100%;
		background: var(--ac-brand, #4f46e5);
	}
</style>
