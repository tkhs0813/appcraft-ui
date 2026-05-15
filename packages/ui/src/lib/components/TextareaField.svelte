<script lang="ts">
	interface Props {
		label: string;
		value?: string;
		placeholder?: string;
		description?: string;
		error?: string | null;
		required?: boolean;
		disabled?: boolean;
		readonly?: boolean;
		name?: string;
		rows?: number;
		onInput?: (value: string) => void;
	}

	let {
		label,
		value = '',
		placeholder,
		description,
		error = null,
		required = false,
		disabled = false,
		readonly = false,
		name,
		rows = 4,
		onInput
	}: Props = $props();

	const fieldId = `aui-textarea-field-${Math.random().toString(36).slice(2)}`;
	const descriptionId = `${fieldId}-description`;
	const errorId = `${fieldId}-error`;
</script>

<div class="aui-field aui-root" class:aui-field--error={Boolean(error)}>
	<label for={fieldId}
		>{label}{#if required}<span aria-hidden="true"> *</span>{/if}</label
	>
	<textarea
		id={fieldId}
		{name}
		{placeholder}
		{required}
		{disabled}
		{readonly}
		{rows}
		{value}
		aria-invalid={error ? 'true' : undefined}
		aria-describedby={[description ? descriptionId : undefined, error ? errorId : undefined]
			.filter(Boolean)
			.join(' ') || undefined}
		oninput={(event) => onInput?.(event.currentTarget.value)}
	></textarea>
	{#if description}<p id={descriptionId} class="aui-field__description">{description}</p>{/if}
	{#if error}<p id={errorId} class="aui-field__error">{error}</p>{/if}
</div>

<style>
	.aui-field {
		display: grid;
		gap: 0.45rem;
		font-family: var(--aui-font-sans);
	}
	label {
		font-size: 0.86rem;
		font-weight: 700;
		color: var(--aui-text);
	}
	label span {
		color: var(--aui-danger);
	}
	textarea {
		width: 100%;
		min-height: 6.5rem;
		resize: vertical;
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-md);
		background: var(--aui-surface);
		color: var(--aui-text);
		font: inherit;
		line-height: 1.55;
		padding: 0.75rem 0.85rem;
		transition:
			border-color 120ms ease,
			box-shadow 120ms ease,
			background 120ms ease;
	}
	textarea::placeholder {
		color: color-mix(in srgb, var(--aui-text-muted) 72%, white);
	}
	textarea:focus-visible {
		outline: 0;
		border-color: var(--aui-brand);
		box-shadow: 0 0 0 3px color-mix(in srgb, var(--aui-brand) 18%, transparent);
	}
	textarea:disabled,
	textarea:read-only {
		background: var(--aui-surface-subtle);
		color: var(--aui-text-muted);
	}
	.aui-field--error textarea {
		border-color: color-mix(in srgb, var(--aui-danger) 65%, var(--aui-border));
	}
	.aui-field__description,
	.aui-field__error {
		margin: 0;
		font-size: 0.8rem;
		line-height: 1.45;
	}
	.aui-field__description {
		color: var(--aui-text-muted);
	}
	.aui-field__error {
		color: var(--aui-danger);
	}
</style>
