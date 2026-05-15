<script lang="ts">
	import type { SelectOption } from '../types.js';

	interface Props {
		label: string;
		description?: string;
		options?: SelectOption[];
		values?: string[];
		error?: string;
		disabled?: boolean;
		onChange?: (values: string[]) => void;
	}

	let {
		label,
		description,
		options = [],
		values = [],
		error,
		disabled = false,
		onChange
	}: Props = $props();
	const uid = $props.id();

	function toggle(value: string) {
		const next = values.includes(value)
			? values.filter((item) => item !== value)
			: [...values, value];
		onChange?.(next);
	}
</script>

<fieldset class="multi" data-invalid={Boolean(error)}>
	<legend>{label}</legend>
	{#if description}<p>{description}</p>{/if}
	<div class="options">
		{#each options as option (option.value)}
			<label for={`${uid}-${option.value}`}>
				<input
					id={`${uid}-${option.value}`}
					type="checkbox"
					checked={values.includes(option.value)}
					disabled={disabled || option.disabled}
					onchange={() => toggle(option.value)}
				/>
				<span>{option.label}</span>
			</label>
		{/each}
	</div>
	{#if error}<p class="error">{error}</p>{/if}
</fieldset>

<style>
	.multi {
		border: 1px solid var(--ac-border, #d1d5db);
		border-radius: 1rem;
		padding: 1rem;
		display: grid;
		gap: 0.75rem;
	}
	legend {
		padding: 0 0.35rem;
		font-weight: 800;
	}
	p {
		margin: 0;
		color: var(--ac-text-muted, #6b7280);
	}
	.options {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	label {
		display: inline-flex;
		gap: 0.45rem;
		align-items: center;
		border: 1px solid var(--ac-border, #d1d5db);
		border-radius: 999px;
		padding: 0.45rem 0.7rem;
		background: var(--ac-surface, #fff);
	}
	.error {
		color: var(--ac-danger, #b91c1c);
		font-weight: 700;
	}
</style>
