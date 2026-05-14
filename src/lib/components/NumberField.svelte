<script lang="ts">
	interface Props {
		label: string;
		value?: number;
		min?: number;
		max?: number;
		step?: number;
		description?: string;
		error?: string;
		disabled?: boolean;
		onInput?: (value: number | undefined) => void;
	}
	let {
		label,
		value,
		min,
		max,
		step = 1,
		description,
		error,
		disabled = false,
		onInput
	}: Props = $props();
</script>

<label class="aui-number aui-root"
	><span>{label}</span>{#if description}<small>{description}</small>{/if}<input
		type="number"
		{value}
		{min}
		{max}
		{step}
		{disabled}
		aria-invalid={error ? 'true' : undefined}
		oninput={(event) =>
			onInput?.(event.currentTarget.value === '' ? undefined : event.currentTarget.valueAsNumber)}
	/>{#if error}<em>{error}</em>{/if}</label
>

<style>
	.aui-number {
		display: grid;
		gap: 0.4rem;
		font-family: var(--aui-font-sans);
	}
	span {
		color: var(--aui-text);
		font-size: 0.86rem;
		font-weight: 800;
	}
	small {
		color: var(--aui-text-muted);
		font-size: 0.8rem;
	}
	input {
		height: 2.5rem;
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-md);
		background: var(--aui-surface);
		color: var(--aui-text);
		font: inherit;
		padding: 0 0.75rem;
	}
	input:focus {
		outline: 3px solid color-mix(in srgb, var(--aui-brand) 18%, transparent);
		border-color: var(--aui-brand);
	}
	em {
		font-style: normal;
		color: #b91c1c;
		font-size: 0.8rem;
	}
</style>
