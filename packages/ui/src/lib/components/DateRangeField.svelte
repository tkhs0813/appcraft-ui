<script lang="ts">
	interface Props {
		label: string;
		start?: string;
		end?: string;
		description?: string;
		error?: string;
		disabled?: boolean;
		onChange?: (range: { start: string; end: string }) => void;
	}
	let {
		label,
		start = '',
		end = '',
		description,
		error,
		disabled = false,
		onChange
	}: Props = $props();
	const uid = $props.id();
	function change(next: { start?: string; end?: string }) {
		onChange?.({ start: next.start ?? start, end: next.end ?? end });
	}
</script>

<fieldset class="range" data-invalid={Boolean(error)}>
	<legend>{label}</legend>
	{#if description}<p>{description}</p>{/if}
	<div>
		<label for={`${uid}-start`}
			>Start<input
				id={`${uid}-start`}
				type="date"
				value={start}
				{disabled}
				onchange={(event) => change({ start: (event.currentTarget as HTMLInputElement).value })}
			/></label
		>
		<label for={`${uid}-end`}
			>End<input
				id={`${uid}-end`}
				type="date"
				value={end}
				{disabled}
				onchange={(event) => change({ end: (event.currentTarget as HTMLInputElement).value })}
			/></label
		>
	</div>
	{#if error}<p class="error">{error}</p>{/if}
</fieldset>

<style>
	.range {
		border: 1px solid var(--ac-border, #d1d5db);
		border-radius: 1rem;
		padding: 1rem;
		display: grid;
		gap: 0.7rem;
	}
	legend {
		font-weight: 800;
		padding: 0 0.35rem;
	}
	div {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 0.75rem;
	}
	label {
		display: grid;
		gap: 0.35rem;
		color: var(--ac-text-muted, #6b7280);
		font-size: 0.85rem;
		font-weight: 700;
	}
	input {
		border: 1px solid var(--ac-border, #d1d5db);
		border-radius: 0.8rem;
		padding: 0.65rem 0.75rem;
		color: inherit;
		background: var(--ac-surface, #fff);
	}
	p {
		margin: 0;
		color: var(--ac-text-muted, #6b7280);
	}
	.error {
		color: var(--ac-danger, #b91c1c);
		font-weight: 700;
	}
	@media (max-width: 640px) {
		div {
			grid-template-columns: 1fr;
		}
	}
</style>
