<script lang="ts">
	import type { SelectOption } from '../types.js';
	interface Props {
		label: string;
		options: SelectOption[];
		value?: string;
		description?: string;
		error?: string;
		onChange?: (value: string) => void;
	}
	let { label, options, value, description, error, onChange }: Props = $props();
</script>

<fieldset class="aui-radio-group aui-root">
	<legend>{label}</legend>{#if description}<p>{description}</p>{/if}
	<div>
		{#each options as option (option.value)}<label
				><input
					type="radio"
					name={label}
					checked={value === option.value}
					value={option.value}
					disabled={option.disabled}
					onchange={() => onChange?.(option.value)}
				/><span>{option.label}</span></label
			>{/each}
	</div>
	{#if error}<em>{error}</em>{/if}
</fieldset>

<style>
	.aui-radio-group {
		display: grid;
		gap: 0.65rem;
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-md);
		background: var(--aui-surface);
		padding: 0.9rem;
		font-family: var(--aui-font-sans);
	}
	legend {
		padding: 0 0.25rem;
		color: var(--aui-text);
		font-weight: 850;
	}
	p {
		margin: 0;
		color: var(--aui-text-muted);
		font-size: 0.82rem;
	}
	div {
		display: grid;
		gap: 0.5rem;
	}
	label {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		color: var(--aui-text);
		font-size: 0.88rem;
	}
	input {
		accent-color: var(--aui-brand);
	}
	em {
		font-style: normal;
		color: #b91c1c;
		font-size: 0.8rem;
	}
</style>
