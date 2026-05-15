<script lang="ts">
	import type { Snippet } from 'svelte';
	import Button from './Button.svelte';
	import type { DrawerAction, DrawerSide } from '../types.js';

	interface Props {
		open: boolean;
		title: string;
		description?: string;
		side?: DrawerSide;
		primaryAction?: DrawerAction;
		secondaryAction?: DrawerAction;
		closeLabel?: string;
		onClose: () => void;
		children?: Snippet;
	}

	let {
		open,
		title,
		description,
		side = 'right',
		primaryAction,
		secondaryAction,
		closeLabel = 'Close drawer',
		onClose,
		children
	}: Props = $props();

	const handleKeydown = (event: KeyboardEvent) => {
		if (open && event.key === 'Escape') onClose();
	};
</script>

<svelte:window onkeydown={handleKeydown} />

{#if open}
	<div class="aui-drawer aui-root" role="presentation">
		<button class="aui-drawer__backdrop" type="button" aria-label={closeLabel} onclick={onClose}
		></button>
		<aside
			class="aui-drawer__panel"
			class:aui-drawer__panel--left={side === 'left'}
			aria-label={title}
		>
			<header class="aui-drawer__header">
				<div>
					<h2>{title}</h2>
					{#if description}<p>{description}</p>{/if}
				</div>
				<button type="button" aria-label={closeLabel} onclick={onClose}>×</button>
			</header>
			{#if children}<div class="aui-drawer__body">{@render children()}</div>{/if}
			{#if primaryAction || secondaryAction}
				<footer class="aui-drawer__footer">
					{#if secondaryAction}<Button
							variant="secondary"
							label={secondaryAction.label}
							disabled={secondaryAction.disabled}
							loading={secondaryAction.loading}
							onClick={secondaryAction.onClick}
						/>{/if}
					{#if primaryAction}<Button
							variant={primaryAction.variant ?? 'primary'}
							label={primaryAction.label}
							disabled={primaryAction.disabled}
							loading={primaryAction.loading}
							onClick={primaryAction.onClick}
						/>{/if}
				</footer>
			{/if}
		</aside>
	</div>
{/if}

<style>
	.aui-drawer {
		position: fixed;
		inset: 0;
		z-index: 55;
		font-family: var(--aui-font-sans);
	}
	.aui-drawer__backdrop {
		position: absolute;
		inset: 0;
		border: 0;
		background: rgb(15 23 42 / 0.42);
		backdrop-filter: blur(2px);
		cursor: pointer;
	}
	.aui-drawer__panel {
		position: absolute;
		inset-block: 0;
		right: 0;
		display: grid;
		grid-template-rows: auto 1fr auto;
		width: min(100%, 28rem);
		border-left: 1px solid var(--aui-border);
		background: var(--aui-surface);
		box-shadow: var(--aui-shadow-md);
		color: var(--aui-text);
	}
	.aui-drawer__panel--left {
		right: auto;
		left: 0;
		border-right: 1px solid var(--aui-border);
		border-left: 0;
	}
	.aui-drawer__header,
	.aui-drawer__footer {
		padding: 1rem;
	}
	.aui-drawer__header {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 1rem;
		border-bottom: 1px solid var(--aui-border);
	}
	h2,
	p {
		margin: 0;
	}
	h2 {
		font-size: 1.05rem;
		letter-spacing: -0.02em;
	}
	p {
		margin-top: 0.35rem;
		color: var(--aui-text-muted);
		line-height: 1.55;
	}
	.aui-drawer__header button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2rem;
		height: 2rem;
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-md);
		background: var(--aui-surface);
		color: var(--aui-text-muted);
		cursor: pointer;
		font-size: 1.25rem;
	}
	.aui-drawer__header button:focus-visible {
		outline: 3px solid color-mix(in srgb, var(--aui-brand) 24%, transparent);
		outline-offset: 2px;
	}
	.aui-drawer__body {
		min-width: 0;
		overflow: auto;
		padding: 1rem;
	}
	.aui-drawer__footer {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
		gap: 0.75rem;
		border-top: 1px solid var(--aui-border);
	}
</style>
