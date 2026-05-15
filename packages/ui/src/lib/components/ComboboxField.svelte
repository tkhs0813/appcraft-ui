<script lang="ts">
	import Combobox from './Combobox.svelte';
	import type { ComboboxOption } from '../types.js';

	interface Props {
		label: string;
		description?: string;
		error?: string;
		placeholder?: string;
		options?: ComboboxOption[];
		value?: string;
		loading?: boolean;
		disabled?: boolean;
		onSelect?: (value: string) => void;
	}

	let {
		label,
		description,
		error,
		placeholder,
		options = [],
		value = '',
		loading = false,
		disabled = false,
		onSelect
	}: Props = $props();
</script>

<div class="field" data-invalid={Boolean(error)}>
	<Combobox {label} {placeholder} {options} {value} {loading} {disabled} {onSelect} />
	{#if description}<p>{description}</p>{/if}
	{#if error}<p class="error">{error}</p>{/if}
</div>

<style>
	.field {
		display: grid;
		gap: 0.35rem;
	}
	p {
		margin: 0;
		color: var(--ac-text-muted, #6b7280);
		font-size: 0.85rem;
	}
	.error {
		color: var(--ac-danger, #b91c1c);
		font-weight: 700;
	}
</style>
