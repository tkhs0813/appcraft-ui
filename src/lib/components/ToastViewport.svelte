<script lang="ts">
	import Button from './Button.svelte';
	import StatusBadge from './StatusBadge.svelte';
	import type { StatusBadgeTone } from '../types.js';
	export type ToastItem = {
		id: string;
		title: string;
		description?: string;
		tone?: StatusBadgeTone;
	};
	interface Props {
		toasts?: ToastItem[];
		position?: 'top-right' | 'bottom-right';
		onDismiss?: (id: string) => void;
	}
	let { toasts = [], position = 'bottom-right', onDismiss }: Props = $props();
</script>

<div class="aui-toast-viewport aui-root" data-position={position} aria-live="polite">
	{#each toasts as toast (toast.id)}<article>
			<StatusBadge label={toast.tone ?? 'neutral'} tone={toast.tone ?? 'neutral'} />
			<div>
				<strong>{toast.title}</strong>{#if toast.description}<p>{toast.description}</p>{/if}
			</div>
			{#if onDismiss}<Button
					variant="ghost"
					size="sm"
					label="Dismiss"
					onClick={() => onDismiss?.(toast.id)}
				/>{/if}
		</article>{/each}
</div>

<style>
	.aui-toast-viewport {
		position: fixed;
		z-index: 40;
		right: 1rem;
		display: grid;
		gap: 0.75rem;
		max-width: 24rem;
		font-family: var(--aui-font-sans);
	}
	[data-position='bottom-right'] {
		bottom: 1rem;
	}
	[data-position='top-right'] {
		top: 1rem;
	}
	article {
		display: grid;
		grid-template-columns: auto 1fr auto;
		gap: 0.75rem;
		align-items: start;
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-lg);
		background: var(--aui-surface);
		box-shadow: var(--aui-shadow-md);
		padding: 0.9rem;
	}
	strong,
	p {
		margin: 0;
	}
	strong {
		color: var(--aui-text);
	}
	p {
		margin-top: 0.25rem;
		color: var(--aui-text-muted);
		font-size: 0.84rem;
		line-height: 1.45;
	}
</style>
