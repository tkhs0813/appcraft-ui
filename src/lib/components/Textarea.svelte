<script lang="ts">
	import type { FieldTone } from '../types.js';

	interface Props {
		value?: string;
		placeholder?: string;
		name?: string;
		ariaLabel?: string;
		rows?: number;
		disabled?: boolean;
		readonly?: boolean;
		required?: boolean;
		invalid?: boolean;
		tone?: FieldTone;
		onInput?: (value: string) => void;
	}

	let {
		value = '',
		placeholder,
		name,
		ariaLabel,
		rows = 4,
		disabled = false,
		readonly = false,
		required = false,
		invalid = false,
		tone = 'default',
		onInput
	}: Props = $props();
</script>

<textarea
	class="aui-textarea aui-root"
	class:aui-textarea--compact={tone === 'compact'}
	class:aui-textarea--invalid={invalid}
	{name}
	{placeholder}
	{rows}
	{required}
	{disabled}
	{readonly}
	aria-label={ariaLabel}
	aria-invalid={invalid ? 'true' : undefined}
	oninput={(event) => onInput?.(event.currentTarget.value)}>{value}</textarea
>

<style>
	.aui-textarea {
		width: 100%;
		min-height: 7rem;
		resize: vertical;
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-md);
		background: var(--aui-surface);
		color: var(--aui-text);
		font: inherit;
		font-family: var(--aui-font-sans);
		line-height: 1.55;
		padding: 0.75rem 0.85rem;
		transition:
			border-color 120ms ease,
			box-shadow 120ms ease,
			background 120ms ease;
	}

	.aui-textarea--compact {
		min-height: 5.5rem;
		border-radius: var(--aui-radius-sm);
		font-size: 0.875rem;
	}

	.aui-textarea::placeholder {
		color: color-mix(in srgb, var(--aui-text-muted) 72%, white);
	}

	.aui-textarea:focus-visible {
		outline: 0;
		border-color: var(--aui-brand);
		box-shadow: 0 0 0 3px color-mix(in srgb, var(--aui-brand) 18%, transparent);
	}

	.aui-textarea:disabled,
	.aui-textarea:read-only {
		background: var(--aui-surface-subtle);
		color: var(--aui-text-muted);
	}

	.aui-textarea--invalid {
		border-color: color-mix(in srgb, var(--aui-danger) 65%, var(--aui-border));
	}
</style>
