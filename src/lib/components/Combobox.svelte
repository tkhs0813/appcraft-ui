<script lang="ts">
	import type { ComboboxOption } from '../types.js';

	interface Props {
		label?: string;
		placeholder?: string;
		options?: ComboboxOption[];
		value?: string;
		query?: string;
		loading?: boolean;
		disabled?: boolean;
		emptyMessage?: string;
		onQueryChange?: (query: string) => void;
		onSelect?: (value: string) => void;
	}

	let {
		label = 'Choose option',
		placeholder = 'Search options…',
		options = [],
		value = '',
		query = '',
		loading = false,
		disabled = false,
		emptyMessage = 'No options found',
		onQueryChange,
		onSelect
	}: Props = $props();

	const uid = $props.id();
	let open = $state(false);
	let internalQuery = $state('');

	let normalized = $derived(internalQuery.trim().toLowerCase());
	let filtered = $derived(
		normalized
			? options.filter((option) =>
					`${option.label} ${option.description ?? ''}`.toLowerCase().includes(normalized)
				)
			: options
	);
	let selected = $derived(options.find((option) => option.value === value));

	function handleInput(event: Event) {
		internalQuery = (event.currentTarget as HTMLInputElement).value;
		open = true;
		onQueryChange?.(internalQuery);
	}

	function choose(option: ComboboxOption) {
		if (option.disabled) return;
		internalQuery = option.label;
		open = false;
		onSelect?.(option.value);
	}
</script>

<div class="ac-combobox" data-open={open}>
	<label for={`${uid}-input`}>{label}</label>
	<div class="control">
		<input
			id={`${uid}-input`}
			type="text"
			role="combobox"
			aria-expanded={open}
			aria-controls={`${uid}-listbox`}
			{placeholder}
			value={internalQuery || query || selected?.label || ''}
			{disabled}
			oninput={handleInput}
			onfocus={() => (open = true)}
		/>
		<span>{loading ? 'Loading' : '⌄'}</span>
	</div>
	{#if open && !disabled}
		<ul id={`${uid}-listbox`} role="listbox">
			{#if loading}
				<li class="muted">Loading options…</li>
			{:else}
				{#each filtered as option (option.value)}
					<li>
						<button
							type="button"
							role="option"
							aria-selected={option.value === value}
							disabled={option.disabled}
							onclick={() => choose(option)}
						>
							<strong>{option.label}</strong>
							{#if option.description}<small>{option.description}</small>{/if}
						</button>
					</li>
				{:else}
					<li class="muted">{emptyMessage}</li>
				{/each}
			{/if}
		</ul>
	{/if}
</div>

<style>
	.ac-combobox {
		position: relative;
		display: grid;
		gap: 0.45rem;
	}
	label {
		color: var(--ac-text-strong, #111827);
		font-weight: 700;
		font-size: 0.9rem;
	}
	.control {
		display: flex;
		align-items: center;
		border: 1px solid var(--ac-border, #d1d5db);
		border-radius: 0.8rem;
		background: var(--ac-surface, #fff);
		padding-right: 0.75rem;
	}
	input {
		min-width: 0;
		width: 100%;
		border: 0;
		background: transparent;
		padding: 0.72rem 0.85rem;
		color: inherit;
		outline: none;
	}
	span {
		color: var(--ac-text-muted, #6b7280);
		font-size: 0.8rem;
	}
	ul {
		position: absolute;
		z-index: 20;
		inset-inline: 0;
		top: calc(100% + 0.35rem);
		max-height: 16rem;
		overflow: auto;
		list-style: none;
		margin: 0;
		padding: 0.35rem;
		border: 1px solid var(--ac-border, #d1d5db);
		border-radius: 0.9rem;
		background: var(--ac-surface, #fff);
		box-shadow: 0 18px 40px rgb(15 23 42 / 0.14);
	}
	li {
		margin: 0;
	}
	button {
		width: 100%;
		border: 0;
		background: transparent;
		border-radius: 0.65rem;
		padding: 0.6rem 0.7rem;
		text-align: left;
		cursor: pointer;
		color: inherit;
		display: grid;
		gap: 0.15rem;
	}
	button:hover,
	button[aria-selected='true'] {
		background: var(--ac-surface-muted, #f3f4f6);
	}
	button:disabled {
		opacity: 0.45;
		cursor: not-allowed;
	}
	small,
	.muted {
		color: var(--ac-text-muted, #6b7280);
	}
	.muted {
		padding: 0.75rem;
	}
</style>
