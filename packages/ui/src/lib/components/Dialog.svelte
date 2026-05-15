<script lang="ts">
	import type { Snippet } from 'svelte';
	import Button from './Button.svelte';
	import type { DialogAction, DialogSize } from '../types.js';

	interface Props {
		open: boolean;
		title: string;
		description?: string;
		size?: DialogSize;
		primaryAction?: DialogAction;
		secondaryAction?: DialogAction;
		closeLabel?: string;
		closeOnBackdrop?: boolean;
		onClose: () => void;
		children?: Snippet;
	}

	let {
		open,
		title,
		description,
		size = 'md',
		primaryAction,
		secondaryAction,
		closeLabel = 'Close dialog',
		closeOnBackdrop = true,
		onClose,
		children
	}: Props = $props();

	const uid = $props.id();
	const titleId = `${uid}-title`;
	const descriptionId = `${uid}-description`;

	const handleKeydown = (event: KeyboardEvent) => {
		if (open && event.key === 'Escape') onClose();
	};
</script>

<svelte:window onkeydown={handleKeydown} />

{#if open}
	<div class="aui-dialog aui-root" role="presentation">
		<button
			class="aui-dialog__backdrop"
			type="button"
			aria-label={closeLabel}
			onclick={closeOnBackdrop ? onClose : undefined}
		></button>
		<div
			class="aui-dialog__panel"
			class:aui-dialog__panel--sm={size === 'sm'}
			class:aui-dialog__panel--lg={size === 'lg'}
			role="dialog"
			aria-modal="true"
			aria-labelledby={titleId}
			aria-describedby={description ? descriptionId : undefined}
		>
			<header class="aui-dialog__header">
				<div>
					<h2 id={titleId}>{title}</h2>
					{#if description}<p id={descriptionId}>{description}</p>{/if}
				</div>
				<button class="aui-dialog__close" type="button" aria-label={closeLabel} onclick={onClose}
					>×</button
				>
			</header>

			{#if children}
				<div class="aui-dialog__body">{@render children()}</div>
			{/if}

			{#if primaryAction || secondaryAction}
				<footer class="aui-dialog__footer">
					{#if secondaryAction}
						<Button
							variant="secondary"
							label={secondaryAction.label}
							disabled={secondaryAction.disabled}
							loading={secondaryAction.loading}
							onClick={secondaryAction.onClick}
						/>
					{/if}
					{#if primaryAction}
						<Button
							variant={primaryAction.variant ?? 'primary'}
							label={primaryAction.label}
							disabled={primaryAction.disabled}
							loading={primaryAction.loading}
							onClick={primaryAction.onClick}
						/>
					{/if}
				</footer>
			{/if}
		</div>
	</div>
{/if}

<style>
	.aui-dialog {
		position: fixed;
		inset: 0;
		z-index: 60;
		display: grid;
		place-items: center;
		padding: 1rem;
	}
	.aui-dialog__backdrop {
		position: absolute;
		inset: 0;
		border: 0;
		background: rgb(15 23 42 / 0.5);
		backdrop-filter: blur(3px);
		cursor: pointer;
	}
	.aui-dialog__panel {
		position: relative;
		z-index: 1;
		display: grid;
		gap: 1rem;
		width: min(100%, 34rem);
		max-height: min(88vh, 48rem);
		overflow: auto;
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-lg);
		background: var(--aui-surface);
		box-shadow: var(--aui-shadow-md);
		padding: 1rem;
		font-family: var(--aui-font-sans);
		color: var(--aui-text);
	}
	.aui-dialog__panel--sm {
		width: min(100%, 26rem);
	}
	.aui-dialog__panel--lg {
		width: min(100%, 48rem);
	}
	.aui-dialog__header {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 1rem;
	}
	h2,
	p {
		margin: 0;
	}
	h2 {
		font-size: 1.1rem;
		letter-spacing: -0.02em;
	}
	p {
		margin-top: 0.35rem;
		color: var(--aui-text-muted);
		line-height: 1.55;
	}
	.aui-dialog__close {
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
		line-height: 1;
	}
	.aui-dialog__close:hover {
		background: var(--aui-surface-subtle);
		color: var(--aui-text);
	}
	.aui-dialog__close:focus-visible {
		outline: 3px solid color-mix(in srgb, var(--aui-brand) 24%, transparent);
		outline-offset: 2px;
	}
	.aui-dialog__body {
		min-width: 0;
		color: var(--aui-text);
	}
	.aui-dialog__footer {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
		gap: 0.75rem;
		border-top: 1px solid var(--aui-border);
		padding-top: 1rem;
	}
</style>
