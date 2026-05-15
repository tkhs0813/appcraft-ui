<script lang="ts">
	import Spinner from './Spinner.svelte';
	interface Props {
		label: string;
		icon: string;
		variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
		size?: 'sm' | 'md' | 'lg';
		disabled?: boolean;
		loading?: boolean;
		onClick?: () => void;
	}
	let {
		label,
		icon,
		variant = 'secondary',
		size = 'md',
		disabled = false,
		loading = false,
		onClick
	}: Props = $props();
</script>

<button
	class="aui-icon-button aui-root"
	type="button"
	aria-label={label}
	data-variant={variant}
	data-size={size}
	disabled={disabled || loading}
	onclick={onClick}
	>{#if loading}<Spinner size="sm" {label} />{:else}<span aria-hidden="true">{icon}</span
		>{/if}</button
>

<style>
	.aui-icon-button {
		display: inline-grid;
		place-items: center;
		border: 1px solid transparent;
		border-radius: var(--aui-radius-md);
		font-family: var(--aui-font-sans);
		font-weight: 800;
		cursor: pointer;
		transition:
			background 0.15s ease,
			border-color 0.15s ease,
			transform 0.15s ease;
	}
	.aui-icon-button[data-size='sm'] {
		width: 2rem;
		height: 2rem;
		font-size: 0.9rem;
	}
	.aui-icon-button[data-size='md'] {
		width: 2.4rem;
		height: 2.4rem;
		font-size: 1rem;
	}
	.aui-icon-button[data-size='lg'] {
		width: 2.8rem;
		height: 2.8rem;
		font-size: 1.12rem;
	}
	.aui-icon-button[data-variant='primary'] {
		background: var(--aui-brand);
		color: white;
	}
	.aui-icon-button[data-variant='secondary'] {
		background: var(--aui-surface);
		border-color: var(--aui-border);
		color: var(--aui-text);
	}
	.aui-icon-button[data-variant='danger'] {
		background: #dc2626;
		color: white;
	}
	.aui-icon-button[data-variant='ghost'] {
		background: transparent;
		color: var(--aui-text-muted);
	}
	.aui-icon-button:not(:disabled):hover {
		transform: translateY(-1px);
	}
	.aui-icon-button:focus-visible {
		outline: 3px solid color-mix(in srgb, var(--aui-brand) 24%, transparent);
		outline-offset: 2px;
	}
	.aui-icon-button:disabled {
		cursor: not-allowed;
		opacity: 0.6;
	}
</style>
