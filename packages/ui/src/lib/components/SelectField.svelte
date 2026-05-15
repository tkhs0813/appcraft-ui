<script lang="ts">
	import type { SelectOption } from '../types.js';

	interface Props {
		label: string;
		value?: string;
		options: SelectOption[];
		placeholder?: string;
		description?: string;
		error?: string | null;
		required?: boolean;
		disabled?: boolean;
		name?: string;
		onChange?: (value: string) => void;
	}

	let {
		label,
		value = '',
		options,
		placeholder,
		description,
		error = null,
		required = false,
		disabled = false,
		name,
		onChange
	}: Props = $props();
	const fieldId = `aui-select-field-${Math.random().toString(36).slice(2)}`;
	const descriptionId = `${fieldId}-description`;
	const errorId = `${fieldId}-error`;
</script>

<div class="aui-field aui-root" class:aui-field--error={Boolean(error)}>
	<label for={fieldId}
		>{label}{#if required}<span aria-hidden="true"> *</span>{/if}</label
	>
	<select
		id={fieldId}
		{name}
		{required}
		{disabled}
		{value}
		aria-invalid={error ? 'true' : undefined}
		aria-describedby={[description ? descriptionId : undefined, error ? errorId : undefined]
			.filter(Boolean)
			.join(' ') || undefined}
		onchange={(event) => onChange?.(event.currentTarget.value)}
	>
		{#if placeholder}<option value="" disabled={required}>{placeholder}</option>{/if}
		{#each options as option (option.value)}
			<option value={option.value} disabled={option.disabled}>{option.label}</option>
		{/each}
	</select>
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
	select {
		width: 100%;
		height: 2.6rem;
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-md);
		background: var(--aui-surface);
		color: var(--aui-text);
		font: inherit;
		padding: 0 0.85rem;
	}
	select:focus-visible {
		outline: 0;
		border-color: var(--aui-brand);
		box-shadow: 0 0 0 3px color-mix(in srgb, var(--aui-brand) 18%, transparent);
	}
	select:disabled {
		background: var(--aui-surface-subtle);
		color: var(--aui-text-muted);
	}
	.aui-field--error select {
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
