<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ActionConfig, StatusBadgeTone } from '../types.js';
	import Button from './Button.svelte';
	import StatusBadge from './StatusBadge.svelte';

	export type KnowledgeBaseLayoutItem = {
		id: string;
		title: string;
		description?: string;
		meta?: string;
		status?: string;
		tone?: StatusBadgeTone;
	};

	interface Props {
		title?: string;
		description?: string;
		items?: KnowledgeBaseLayoutItem[];
		emptyMessage?: string;
		actions?: ActionConfig[];
		children?: Snippet;
	}

	let {
		title = 'KnowledgeBaseLayout',
		description = 'Knowledge base layout with sections and article content.',
		items = [],
		emptyMessage = 'No items to show.',
		actions = [],
		children
	}: Props = $props();
</script>

<section class="aui-panel aui-root" aria-label={title}>
	<header>
		<div>
			<h2>{title}</h2>
			{#if description}<p>{description}</p>{/if}
		</div>
		{#if actions.length > 0}
			<div class="aui-actions">
				{#each actions as action (action.label)}
					<Button
						variant="secondary"
						size="sm"
						label={action.label}
						onClick={action.onClick}
						disabled={action.disabled}
						loading={action.loading}
					/>
				{/each}
			</div>
		{/if}
	</header>
	{#if children}
		<div class="aui-custom">{@render children()}</div>
	{:else if items.length > 0}
		<ul>
			{#each items as item (item.id)}
				<li>
					<div>
						<strong>{item.title}</strong>
						{#if item.description}<span>{item.description}</span>{/if}
					</div>
					{#if item.status}<StatusBadge label={item.status} tone={item.tone ?? 'neutral'} />{/if}
					{#if item.meta}<small>{item.meta}</small>{/if}
				</li>
			{/each}
		</ul>
	{:else}
		<p class="aui-empty">{emptyMessage}</p>
	{/if}
</section>

<style>
	.aui-panel {
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
		gap: 1rem;
		align-items: flex-start;
	}
	h2,
	p {
		margin: 0;
	}
	h2 {
		color: var(--aui-text);
		font-size: 1rem;
		letter-spacing: -0.02em;
	}
	p {
		margin-top: 0.3rem;
		color: var(--aui-text-muted);
		line-height: 1.55;
		font-size: 0.88rem;
	}
	.aui-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		justify-content: flex-end;
	}
	ul {
		display: grid;
		gap: 0.65rem;
		padding: 0;
		margin: 0;
		list-style: none;
	}
	li {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto auto;
		align-items: center;
		gap: 0.75rem;
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-md);
		padding: 0.8rem;
		background: var(--aui-surface-subtle);
	}
	strong {
		display: block;
		color: var(--aui-text);
		font-size: 0.9rem;
	}
	span,
	small,
	.aui-empty {
		color: var(--aui-text-muted);
		font-size: 0.82rem;
		line-height: 1.45;
	}
	.aui-custom {
		min-width: 0;
	}
	@media (max-width: 700px) {
		header,
		li {
			grid-template-columns: 1fr;
		}
		header {
			flex-direction: column;
		}
	}
</style>
