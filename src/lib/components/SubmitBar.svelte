<script lang="ts">
	import Button from './Button.svelte';
	import type { SubmitBarAction } from '../types.js';

	interface Props {
		message?: string;
		status?: 'idle' | 'dirty' | 'saving' | 'saved' | 'error';
		submitLabel?: string;
		cancelLabel?: string;
		saving?: boolean;
		disabled?: boolean;
		onSubmit: () => void;
		onCancel?: () => void;
		secondaryAction?: SubmitBarAction;
	}

	let {
		message,
		status = 'idle',
		submitLabel = 'Save changes',
		cancelLabel = 'Cancel',
		saving = false,
		disabled = false,
		onSubmit,
		onCancel,
		secondaryAction
	}: Props = $props();
</script>

<div class="aui-submit-bar aui-root" data-status={status}>
	<div class="aui-submit-bar__message" aria-live="polite">
		{#if message}<span>{message}</span>{:else if status === 'dirty'}<span>Unsaved changes</span
			>{:else if status === 'saved'}<span>Saved</span>{/if}
	</div>
	<div class="aui-submit-bar__actions">
		{#if secondaryAction}<Button
				variant="ghost"
				label={secondaryAction.label}
				onClick={secondaryAction.onClick}
				disabled={secondaryAction.disabled || saving}
			/>{/if}
		{#if onCancel}<Button
				variant="secondary"
				label={cancelLabel}
				onClick={onCancel}
				disabled={saving}
			/>{/if}
		<Button label={submitLabel} onClick={onSubmit} loading={saving} {disabled} />
	</div>
</div>

<style>
	.aui-submit-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 0.9rem 1rem;
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-lg);
		background: color-mix(in srgb, var(--aui-surface) 92%, transparent);
		box-shadow: var(--aui-shadow-sm);
		font-family: var(--aui-font-sans);
	}
	.aui-submit-bar__message {
		min-height: 1.25rem;
		color: var(--aui-text-muted);
		font-size: 0.86rem;
		font-weight: 650;
	}
	.aui-submit-bar[data-status='error'] .aui-submit-bar__message {
		color: var(--aui-danger);
	}
	.aui-submit-bar[data-status='saved'] .aui-submit-bar__message {
		color: var(--aui-success);
	}
	.aui-submit-bar__actions {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
		gap: 0.6rem;
	}
	@media (max-width: 640px) {
		.aui-submit-bar {
			align-items: stretch;
			flex-direction: column;
		}
		.aui-submit-bar__actions {
			justify-content: stretch;
		}
	}
</style>
