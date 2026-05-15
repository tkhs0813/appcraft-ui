<script lang="ts">
	import type { AccordionItem } from '../types.js';

	interface Props {
		items: AccordionItem[];
		openIds?: string[];
		allowMultiple?: boolean;
		onOpenChange?: (openIds: string[]) => void;
	}

	let { items, openIds = [], allowMultiple = false, onOpenChange }: Props = $props();

	const toggle = (id: string) => {
		const next = openIds.includes(id)
			? openIds.filter((openId) => openId !== id)
			: allowMultiple
				? [...openIds, id]
				: [id];
		openIds = next;
		onOpenChange?.(next);
	};
</script>

<div class="aui-accordion aui-root">
	{#each items as item (item.id)}
		<section class="aui-accordion__item">
			<button
				type="button"
				aria-expanded={openIds.includes(item.id)}
				disabled={item.disabled}
				onclick={() => toggle(item.id)}
			>
				<span class="aui-accordion__copy">
					<span>{item.title}</span>
					{#if item.description}<small>{item.description}</small>{/if}
				</span>
				<span aria-hidden="true">{openIds.includes(item.id) ? '−' : '+'}</span>
			</button>
			{#if openIds.includes(item.id)}
				<div class="aui-accordion__content">{item.content}</div>
			{/if}
		</section>
	{/each}
</div>

<style>
	.aui-accordion {
		display: grid;
		overflow: hidden;
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-lg);
		background: var(--aui-surface);
		font-family: var(--aui-font-sans);
		color: var(--aui-text);
	}
	.aui-accordion__item + .aui-accordion__item {
		border-top: 1px solid var(--aui-border);
	}
	button {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		width: 100%;
		border: 0;
		background: transparent;
		color: var(--aui-text);
		padding: 0.9rem 1rem;
		text-align: left;
		cursor: pointer;
		font: inherit;
		font-weight: 700;
	}
	button:hover:not(:disabled) {
		background: var(--aui-surface-subtle);
	}
	button:disabled {
		cursor: not-allowed;
		opacity: 0.55;
	}
	button:focus-visible {
		outline: 3px solid color-mix(in srgb, var(--aui-brand) 24%, transparent);
		outline-offset: -3px;
	}
	.aui-accordion__copy {
		display: grid;
		gap: 0.25rem;
	}
	small {
		color: var(--aui-text-muted);
		font-size: 0.8rem;
		font-weight: 500;
	}
	.aui-accordion__content {
		border-top: 1px solid var(--aui-border);
		padding: 0.9rem 1rem 1rem;
		color: var(--aui-text-muted);
		line-height: 1.6;
	}
</style>
