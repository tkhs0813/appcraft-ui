<script lang="ts">
	import Button from './Button.svelte';
	import type { ConfirmDialogTone } from '../types.js';

	interface Props {
		open: boolean;
		title: string;
		description: string;
		confirmLabel?: string;
		cancelLabel?: string;
		tone?: ConfirmDialogTone;
		confirming?: boolean;
		onConfirm: () => void;
		onCancel: () => void;
	}

	let {
		open,
		title,
		description,
		confirmLabel = 'Confirm',
		cancelLabel = 'Cancel',
		tone = 'danger',
		confirming = false,
		onConfirm,
		onCancel
	}: Props = $props();

	const handleKeydown = (event: KeyboardEvent) => {
		if (open && event.key === 'Escape' && !confirming) {
			onCancel();
		}
	};
</script>

<svelte:window onkeydown={handleKeydown} />

{#if open}
	<div class="aui-confirm-dialog aui-root" role="presentation">
		<button
			class="aui-confirm-dialog__backdrop"
			type="button"
			aria-label="Close confirmation dialog"
			onclick={confirming ? undefined : onCancel}
		></button>
		<div
			class="aui-confirm-dialog__panel"
			role="dialog"
			aria-modal="true"
			aria-labelledby="aui-confirm-dialog-title"
			aria-describedby="aui-confirm-dialog-description"
		>
			<div
				class="aui-confirm-dialog__icon"
				class:aui-confirm-dialog__icon--danger={tone === 'danger'}
				aria-hidden="true"
			>
				<svg viewBox="0 0 24 24" fill="none">
					<path
						d="M12 8v4m0 4h.01M10.31 4.86 3.2 17.19A2 2 0 0 0 4.93 20h14.14a2 2 0 0 0 1.73-2.81L13.69 4.86a1.95 1.95 0 0 0-3.38 0Z"
						stroke="currentColor"
						stroke-width="1.8"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</div>
			<div class="aui-confirm-dialog__copy">
				<h2 id="aui-confirm-dialog-title">{title}</h2>
				<p id="aui-confirm-dialog-description">{description}</p>
			</div>
			<div class="aui-confirm-dialog__actions">
				<Button variant="secondary" label={cancelLabel} onClick={onCancel} disabled={confirming} />
				<Button
					variant={tone === 'danger' ? 'danger' : 'primary'}
					label={confirmLabel}
					onClick={onConfirm}
					loading={confirming}
				/>
			</div>
		</div>
	</div>
{/if}

<style>
	.aui-confirm-dialog {
		position: fixed;
		inset: 0;
		z-index: 50;
		display: grid;
		place-items: center;
		padding: 1rem;
	}

	.aui-confirm-dialog__backdrop {
		position: absolute;
		inset: 0;
		border: 0;
		background: rgb(15 23 42 / 0.48);
		backdrop-filter: blur(3px);
		cursor: pointer;
	}

	.aui-confirm-dialog__panel {
		position: relative;
		z-index: 1;
		display: grid;
		gap: 1rem;
		width: min(100%, 28rem);
		padding: 1.25rem;
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-lg);
		background: var(--aui-surface);
		box-shadow: var(--aui-shadow-md);
	}

	.aui-confirm-dialog__icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.75rem;
		height: 2.75rem;
		border-radius: 999px;
		background: var(--aui-brand-soft);
		color: var(--aui-brand);
	}

	.aui-confirm-dialog__icon--danger {
		background: var(--aui-danger-soft);
		color: var(--aui-danger);
	}

	svg {
		width: 1.55rem;
		height: 1.55rem;
	}

	.aui-confirm-dialog__copy {
		display: grid;
		gap: 0.45rem;
	}

	h2,
	p {
		margin: 0;
	}

	h2 {
		font-size: 1.1rem;
		letter-spacing: -0.02em;
		color: var(--aui-text);
	}

	p {
		font-size: 0.92rem;
		line-height: 1.6;
		color: var(--aui-text-muted);
	}

	.aui-confirm-dialog__actions {
		display: flex;
		justify-content: flex-end;
		gap: 0.75rem;
		padding-top: 0.25rem;
	}

	@media (max-width: 520px) {
		.aui-confirm-dialog__actions {
			flex-direction: column-reverse;
		}
	}
</style>
