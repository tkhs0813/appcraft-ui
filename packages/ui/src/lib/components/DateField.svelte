<script lang="ts">
	interface Props {
		label: string;
		value?: string;
		description?: string;
		error?: string;
		min?: string;
		max?: string;
		disabled?: boolean;
		onChange?: (value: string) => void;
	}
	let {
		label,
		value = '',
		description,
		error,
		min,
		max,
		disabled = false,
		onChange
	}: Props = $props();
	const uid = $props.id();
</script>

<label class="date" for={`${uid}-date`} data-invalid={Boolean(error)}>
	<span>{label}</span>
	<input
		id={`${uid}-date`}
		type="date"
		{value}
		{min}
		{max}
		{disabled}
		onchange={(event) => onChange?.((event.currentTarget as HTMLInputElement).value)}
	/>
	{#if description}<small>{description}</small>{/if}
	{#if error}<small class="error">{error}</small>{/if}
</label>

<style>
	.date {
		display: grid;
		gap: 0.4rem;
		font-weight: 700;
	}
	input {
		border: 1px solid var(--ac-border, #d1d5db);
		border-radius: 0.8rem;
		padding: 0.7rem 0.8rem;
		background: var(--ac-surface, #fff);
		color: inherit;
	}
	small {
		color: var(--ac-text-muted, #6b7280);
		font-weight: 500;
	}
	.error {
		color: var(--ac-danger, #b91c1c);
		font-weight: 700;
	}
</style>
