<script lang="ts">
	import type { DropdownMenuItem } from '../types.js';

	interface Props {
		label: string;
		items: DropdownMenuItem[];
		open?: boolean;
		align?: 'start' | 'end';
		onOpenChange?: (open: boolean) => void;
	}

	let { label, items, open = false, align = 'end', onOpenChange }: Props = $props();

	const setOpen = (value: boolean) => {
		open = value;
		onOpenChange?.(value);
	};

	const selectItem = (item: DropdownMenuItem) => {
		if (item.disabled) return;
		item.onSelect?.(item.id);
		setOpen(false);
	};

	const handleKeydown = (event: KeyboardEvent) => {
		if (open && event.key === 'Escape') setOpen(false);
	};
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="aui-dropdown aui-root">
	<button
		class="aui-dropdown__trigger"
		type="button"
		aria-haspopup="menu"
		aria-expanded={open}
		onclick={() => setOpen(!open)}
	>
		<span>{label}</span>
		<span aria-hidden="true">⌄</span>
	</button>

	{#if open}
		<div class="aui-dropdown__menu" class:aui-dropdown__menu--start={align === 'start'} role="menu">
			{#each items as item (item.id)}
				<button
					class:aui-dropdown__item--danger={item.tone === 'danger'}
					type="button"
					role="menuitem"
					disabled={item.disabled}
					onclick={() => selectItem(item)}
				>
					<span class="aui-dropdown__item-copy">
						<span>{item.label}</span>
						{#if item.description}<small>{item.description}</small>{/if}
					</span>
					{#if item.shortcut}<kbd>{item.shortcut}</kbd>{/if}
				</button>
			{/each}
		</div>
	{/if}
</div>

<style>
	.aui-dropdown {
		position: relative;
		display: inline-block;
		font-family: var(--aui-font-sans);
	}
	.aui-dropdown__trigger {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		height: 2.5rem;
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-md);
		background: var(--aui-surface);
		color: var(--aui-text);
		box-shadow: var(--aui-shadow-sm);
		padding: 0 0.9rem;
		font: inherit;
		font-size: 0.875rem;
		font-weight: 650;
		cursor: pointer;
	}
	.aui-dropdown__trigger:hover {
		background: var(--aui-surface-subtle);
	}
	.aui-dropdown__trigger:focus-visible,
	button:focus-visible {
		outline: 3px solid color-mix(in srgb, var(--aui-brand) 24%, transparent);
		outline-offset: 2px;
	}
	.aui-dropdown__menu {
		position: absolute;
		right: 0;
		top: calc(100% + 0.45rem);
		z-index: 30;
		display: grid;
		min-width: 14rem;
		padding: 0.35rem;
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-lg);
		background: var(--aui-surface);
		box-shadow: var(--aui-shadow-md);
	}
	.aui-dropdown__menu--start {
		right: auto;
		left: 0;
	}
	.aui-dropdown__menu button {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		width: 100%;
		border: 0;
		border-radius: var(--aui-radius-md);
		background: transparent;
		color: var(--aui-text);
		padding: 0.65rem 0.7rem;
		text-align: left;
		cursor: pointer;
		font: inherit;
	}
	.aui-dropdown__menu button:hover:not(:disabled) {
		background: var(--aui-surface-subtle);
	}
	.aui-dropdown__menu button:disabled {
		cursor: not-allowed;
		opacity: 0.55;
	}
	.aui-dropdown__item--danger {
		color: var(--aui-danger) !important;
	}
	.aui-dropdown__item-copy {
		display: grid;
		gap: 0.15rem;
	}
	small {
		color: var(--aui-text-muted);
		font-size: 0.75rem;
	}
	kbd {
		border: 1px solid var(--aui-border);
		border-radius: 0.35rem;
		background: var(--aui-surface-subtle);
		color: var(--aui-text-muted);
		padding: 0.1rem 0.35rem;
		font-size: 0.72rem;
	}
</style>
