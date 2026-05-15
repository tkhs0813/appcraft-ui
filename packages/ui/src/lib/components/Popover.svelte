<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		triggerLabel: string;
		title?: string;
		description?: string;
		open?: boolean;
		placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';
		onOpenChange?: (open: boolean) => void;
		children?: Snippet;
	}

	let {
		triggerLabel,
		title,
		description,
		open = false,
		placement = 'bottom-end',
		onOpenChange,
		children
	}: Props = $props();

	const setOpen = (value: boolean) => {
		open = value;
		onOpenChange?.(value);
	};

	const handleKeydown = (event: KeyboardEvent) => {
		if (open && event.key === 'Escape') setOpen(false);
	};
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="aui-popover aui-root">
	<button
		class="aui-popover__trigger"
		type="button"
		aria-expanded={open}
		onclick={() => setOpen(!open)}>{triggerLabel}</button
	>
	{#if open}
		<section
			class="aui-popover__panel"
			class:aui-popover__panel--start={placement.endsWith('start')}
			class:aui-popover__panel--top={placement.startsWith('top')}
		>
			{#if title || description}
				<header>
					{#if title}<h2>{title}</h2>{/if}
					{#if description}<p>{description}</p>{/if}
				</header>
			{/if}
			{#if children}<div class="aui-popover__body">{@render children()}</div>{/if}
		</section>
	{/if}
</div>

<style>
	.aui-popover {
		position: relative;
		display: inline-block;
		font-family: var(--aui-font-sans);
	}
	.aui-popover__trigger {
		height: 2.5rem;
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-md);
		background: var(--aui-surface);
		color: var(--aui-text);
		padding: 0 0.9rem;
		box-shadow: var(--aui-shadow-sm);
		font: inherit;
		font-size: 0.875rem;
		font-weight: 650;
		cursor: pointer;
	}
	.aui-popover__trigger:hover {
		background: var(--aui-surface-subtle);
	}
	.aui-popover__trigger:focus-visible {
		outline: 3px solid color-mix(in srgb, var(--aui-brand) 24%, transparent);
		outline-offset: 2px;
	}
	.aui-popover__panel {
		position: absolute;
		right: 0;
		top: calc(100% + 0.5rem);
		z-index: 30;
		display: grid;
		gap: 0.75rem;
		width: min(20rem, calc(100vw - 2rem));
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-lg);
		background: var(--aui-surface);
		box-shadow: var(--aui-shadow-md);
		padding: 0.9rem;
		color: var(--aui-text);
	}
	.aui-popover__panel--start {
		right: auto;
		left: 0;
	}
	.aui-popover__panel--top {
		top: auto;
		bottom: calc(100% + 0.5rem);
	}
	header {
		display: grid;
		gap: 0.3rem;
	}
	h2,
	p {
		margin: 0;
	}
	h2 {
		font-size: 0.95rem;
		letter-spacing: -0.01em;
	}
	p {
		color: var(--aui-text-muted);
		font-size: 0.85rem;
		line-height: 1.5;
	}
	.aui-popover__body {
		min-width: 0;
	}
</style>
