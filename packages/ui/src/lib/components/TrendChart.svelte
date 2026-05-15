<script lang="ts">
	import type { ChartDatum } from '../types.js';
	interface Props {
		title: string;
		data?: ChartDatum[];
		summary?: string;
	}
	let { title, data = [], summary }: Props = $props();
	let max = $derived(Math.max(1, ...data.map((item) => item.value)));
	let points = $derived(
		data
			.map(
				(item, index) =>
					`${data.length <= 1 ? 0 : (index / (data.length - 1)) * 100},${100 - (item.value / max) * 90}`
			)
			.join(' ')
	);
</script>

<section class="trend">
	<header>
		<h3>{title}</h3>
		{#if summary}<p>{summary}</p>{/if}
	</header>
	<svg viewBox="0 0 100 100" role="img" aria-label={title} preserveAspectRatio="none"
		><polyline {points} /></svg
	>
</section>

<style>
	.trend {
		border: 1px solid var(--ac-border, #d1d5db);
		border-radius: 1rem;
		padding: 1rem;
		background: var(--ac-surface, #fff);
		display: grid;
		gap: 0.8rem;
	}
	h3,
	p {
		margin: 0;
	}
	p {
		color: var(--ac-text-muted, #6b7280);
	}
	svg {
		width: 100%;
		height: 9rem;
		background: linear-gradient(#f8fafc, #fff);
		border-radius: 0.8rem;
	}
	polyline {
		fill: none;
		stroke: var(--ac-brand, #4f46e5);
		stroke-width: 3;
		vector-effect: non-scaling-stroke;
	}
</style>
