<script lang="ts">
	import type { FieldTone, TextInputType } from '../types.js';

	interface Props {
		value?: string;
		type?: TextInputType;
		placeholder?: string;
		name?: string;
		ariaLabel?: string;
		disabled?: boolean;
		readonly?: boolean;
		required?: boolean;
		invalid?: boolean;
		tone?: FieldTone;
		onInput?: (value: string) => void;
	}

	let {
		value = '',
		type = 'text',
		placeholder,
		name,
		ariaLabel,
		disabled = false,
		readonly = false,
		required = false,
		invalid = false,
		tone = 'default',
		onInput
	}: Props = $props();
</script>

<input
	class="aui-input aui-root"
	class:aui-input--compact={tone === 'compact'}
	class:aui-input--invalid={invalid}
	{name}
	{type}
	{placeholder}
	{required}
	{disabled}
	{readonly}
	{value}
	aria-label={ariaLabel}
	aria-invalid={invalid ? 'true' : undefined}
	oninput={(event) => onInput?.(event.currentTarget.value)}
/>

<style>
	.aui-input {
		width: 100%;
		height: 2.6rem;
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-md);
		background: var(--aui-surface);
		color: var(--aui-text);
		font: inherit;
		font-family: var(--aui-font-sans);
		padding: 0 0.85rem;
		transition:
			border-color 120ms ease,
			box-shadow 120ms ease,
			background 120ms ease;
	}

	.aui-input--compact {
		height: 2.25rem;
		border-radius: var(--aui-radius-sm);
		font-size: 0.875rem;
	}

	.aui-input::placeholder {
		color: color-mix(in srgb, var(--aui-text-muted) 72%, white);
	}

	.aui-input:focus-visible {
		outline: 0;
		border-color: var(--aui-brand);
		box-shadow: 0 0 0 3px color-mix(in srgb, var(--aui-brand) 18%, transparent);
	}

	.aui-input:disabled,
	.aui-input:read-only {
		background: var(--aui-surface-subtle);
		color: var(--aui-text-muted);
	}

	.aui-input--invalid {
		border-color: color-mix(in srgb, var(--aui-danger) 65%, var(--aui-border));
	}
</style>
