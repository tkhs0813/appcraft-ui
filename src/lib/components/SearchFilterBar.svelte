<script lang="ts">
	import Button from './Button.svelte';
	import type { SearchFilter } from '../types.js';

	interface Props {
		query?: string;
		placeholder?: string;
		filters?: SearchFilter[];
		activeFilters?: Record<string, string>;
		resultCount?: number;
		clearLabel?: string;
		onQueryChange?: (query: string) => void;
		onFilterChange?: (key: string, value: string) => void;
		onClear?: () => void;
	}

	let {
		query = '',
		placeholder = 'Search',
		filters = [],
		activeFilters = {},
		resultCount,
		clearLabel = 'Clear',
		onQueryChange,
		onFilterChange,
		onClear
	}: Props = $props();
</script>

<section class="aui-search-filter-bar aui-root" aria-label="Search and filters">
	<label>
		<span class="aui-sr-only">Search</span>
		<input
			type="search"
			value={query}
			{placeholder}
			oninput={(event) => onQueryChange?.(event.currentTarget.value)}
		/>
	</label>
	{#if filters.length > 0}
		<div class="aui-search-filter-bar__filters">
			{#each filters as filter (filter.key)}
				<label>
					<span>{filter.label}</span>
					<select
						value={activeFilters[filter.key] ?? ''}
						onchange={(event) => onFilterChange?.(filter.key, event.currentTarget.value)}
					>
						<option value="">All</option>
						{#each filter.options as option (option.value)}
							<option value={option.value} disabled={option.disabled}>{option.label}</option>
						{/each}
					</select>
				</label>
			{/each}
		</div>
	{/if}
	<div class="aui-search-filter-bar__meta">
		{#if typeof resultCount === 'number'}<span>{resultCount} results</span>{/if}
		{#if onClear}<Button variant="ghost" size="sm" label={clearLabel} onClick={onClear} />{/if}
	</div>
</section>

<style>
	.aui-search-filter-bar {
		display: flex;
		align-items: end;
		flex-wrap: wrap;
		gap: 0.75rem;
		padding: 1rem;
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-lg);
		background: var(--aui-surface);
		box-shadow: var(--aui-shadow-sm);
		font-family: var(--aui-font-sans);
	}
	.aui-search-filter-bar > label {
		flex: 1 1 16rem;
	}
	input,
	select {
		width: 100%;
		height: 2.35rem;
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-md);
		background: var(--aui-surface);
		color: var(--aui-text);
		font: inherit;
		padding: 0 0.75rem;
	}
	input:focus-visible,
	select:focus-visible {
		outline: 0;
		border-color: var(--aui-brand);
		box-shadow: 0 0 0 3px color-mix(in srgb, var(--aui-brand) 18%, transparent);
	}
	.aui-search-filter-bar__filters {
		display: flex;
		flex: 2 1 20rem;
		flex-wrap: wrap;
		gap: 0.65rem;
	}
	.aui-search-filter-bar__filters label {
		display: grid;
		gap: 0.3rem;
		min-width: 9rem;
	}
	.aui-search-filter-bar__filters span {
		color: var(--aui-text-muted);
		font-size: 0.75rem;
		font-weight: 750;
	}
	.aui-search-filter-bar__meta {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		margin-left: auto;
		color: var(--aui-text-muted);
		font-size: 0.84rem;
		font-weight: 650;
	}
	.aui-sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}
</style>
