<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ButtonSize, ButtonVariant } from '../types.js';

	interface Props {
		variant?: ButtonVariant;
		size?: ButtonSize;
		type?: 'button' | 'submit' | 'reset';
		disabled?: boolean;
		loading?: boolean;
		label?: string;
		onClick?: () => void;
		children?: Snippet;
	}

	let {
		variant = 'primary',
		size = 'md',
		type = 'button',
		disabled = false,
		loading = false,
		label,
		onClick,
		children
	}: Props = $props();
</script>

<button
	class="aui-button"
	class:aui-button--primary={variant === 'primary'}
	class:aui-button--secondary={variant === 'secondary'}
	class:aui-button--danger={variant === 'danger'}
	class:aui-button--ghost={variant === 'ghost'}
	class:aui-button--sm={size === 'sm'}
	class:aui-button--md={size === 'md'}
	class:aui-button--lg={size === 'lg'}
	{type}
	disabled={disabled || loading}
	aria-busy={loading}
	onclick={onClick}
>
	{#if loading}
		<span class="aui-button__spinner" aria-hidden="true"></span>
	{/if}
	{#if children}
		{@render children()}
	{:else}
		{label}
	{/if}
</button>

<style>
	.aui-button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		border: 1px solid transparent;
		border-radius: var(--aui-radius-md);
		font-family: var(--aui-font-sans);
		font-weight: 650;
		line-height: 1;
		cursor: pointer;
		transition:
			background 120ms ease,
			border-color 120ms ease,
			color 120ms ease,
			box-shadow 120ms ease,
			transform 120ms ease;
	}

	.aui-button:focus-visible {
		outline: 3px solid color-mix(in srgb, var(--aui-brand) 24%, transparent);
		outline-offset: 2px;
	}

	.aui-button:disabled {
		cursor: not-allowed;
		opacity: 0.62;
		transform: none;
	}

	.aui-button:not(:disabled):active {
		transform: translateY(1px);
	}

	.aui-button--sm {
		height: 2rem;
		padding: 0 0.75rem;
		font-size: 0.8125rem;
	}

	.aui-button--md {
		height: 2.5rem;
		padding: 0 1rem;
		font-size: 0.875rem;
	}

	.aui-button--lg {
		height: 2.875rem;
		padding: 0 1.25rem;
		font-size: 0.9375rem;
	}

	.aui-button--primary {
		background: var(--aui-brand);
		color: white;
		box-shadow: var(--aui-shadow-sm);
	}

	.aui-button--primary:hover:not(:disabled) {
		background: var(--aui-brand-strong);
	}

	.aui-button--secondary {
		background: var(--aui-surface);
		border-color: var(--aui-border);
		color: var(--aui-text);
		box-shadow: var(--aui-shadow-sm);
	}

	.aui-button--secondary:hover:not(:disabled) {
		border-color: var(--aui-border-strong);
		background: var(--aui-surface-subtle);
	}

	.aui-button--danger {
		background: var(--aui-danger);
		color: white;
		box-shadow: var(--aui-shadow-sm);
	}

	.aui-button--ghost {
		background: transparent;
		color: var(--aui-text-muted);
	}

	.aui-button--ghost:hover:not(:disabled) {
		background: var(--aui-surface-subtle);
		color: var(--aui-text);
	}

	.aui-button__spinner {
		width: 0.9em;
		height: 0.9em;
		border: 2px solid currentColor;
		border-right-color: transparent;
		border-radius: 999px;
		animation: aui-spin 700ms linear infinite;
	}

	@keyframes aui-spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>
