<script lang="ts">
	import type { ActionConfig, DashboardMetric, DashboardPanel } from '../types.js';
	import Button from './Button.svelte';
	import MetricCard from './MetricCard.svelte';
	import StatusBadge from './StatusBadge.svelte';

	interface Props {
		title?: string;
		description?: string;
		metrics?: DashboardMetric[];
		panels?: DashboardPanel[];
		primaryAction?: ActionConfig;
		secondaryAction?: ActionConfig;
	}

	let {
		title = 'Dashboard',
		description = 'Monitor the most important application signals in one polished page.',
		metrics = [],
		panels = [],
		primaryAction,
		secondaryAction
	}: Props = $props();
</script>

<section class="aui-dashboard-layout aui-root" aria-label={title}>
	<header>
		<div>
			<p class="eyebrow">Dashboard</p>
			<h2>{title}</h2>
			{#if description}<p>{description}</p>{/if}
		</div>
		<div class="actions">
			{#if secondaryAction}<Button
					variant="secondary"
					label={secondaryAction.label}
					onClick={secondaryAction.onClick}
					disabled={secondaryAction.disabled}
					loading={secondaryAction.loading}
				/>{/if}
			{#if primaryAction}<Button
					label={primaryAction.label}
					onClick={primaryAction.onClick}
					disabled={primaryAction.disabled}
					loading={primaryAction.loading}
				/>{/if}
		</div>
	</header>

	{#if metrics.length > 0}
		<div class="metrics">
			{#each metrics as metric (metric.id)}
				<MetricCard
					title={metric.label}
					items={[
						{
							id: metric.id,
							title: metric.value,
							description: metric.description,
							status: metric.delta,
							tone: metric.tone ?? 'neutral'
						}
					]}
				/>
			{/each}
		</div>
	{/if}

	<div class="panels">
		{#each panels as panel (panel.id)}
			<article>
				<div>
					<h3>{panel.title}</h3>
					{#if panel.description}<p>{panel.description}</p>{/if}
				</div>
				{#if panel.status}<StatusBadge label={panel.status} tone={panel.tone ?? 'neutral'} />{/if}
			</article>
		{:else}
			<article>
				<h3>No dashboard panels</h3>
				<p>Pass panel data instead of composing loose cards.</p>
			</article>
		{/each}
	</div>
</section>

<style>
	.aui-dashboard-layout {
		display: grid;
		gap: 1rem;
		font-family: var(--aui-font-sans);
	}

	header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1rem;
		padding: 1.2rem;
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-xl);
		background: var(--aui-surface);
		box-shadow: var(--aui-shadow-sm);
	}

	.eyebrow,
	h2,
	h3,
	p {
		margin: 0;
	}

	.eyebrow {
		margin-bottom: 0.4rem;
		color: var(--aui-brand);
		font-size: 0.75rem;
		font-weight: 800;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	h2 {
		color: var(--aui-text);
		font-size: 1.4rem;
		letter-spacing: -0.04em;
	}

	h3 {
		color: var(--aui-text);
		font-size: 0.98rem;
	}

	p {
		margin-top: 0.3rem;
		color: var(--aui-text-muted);
		font-size: 0.88rem;
		line-height: 1.55;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
		gap: 0.65rem;
	}

	.metrics,
	.panels {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
		gap: 1rem;
	}

	article {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		min-height: 7rem;
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-lg);
		background: var(--aui-surface);
		box-shadow: var(--aui-shadow-sm);
		padding: 1rem;
	}

	@media (max-width: 720px) {
		header,
		article {
			flex-direction: column;
		}
	}
</style>
