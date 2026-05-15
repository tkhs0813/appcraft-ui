<script lang="ts">
	import type {
		ActionConfig,
		DataTableColumn,
		DataTableRow,
		DataTableRowAction,
		SearchFilter
	} from '../types.js';
	import DataTable from './DataTable.svelte';
	import PageHeader from './PageHeader.svelte';
	import Pagination from './Pagination.svelte';
	import SearchFilterBar from './SearchFilterBar.svelte';

	interface Props {
		title?: string;
		description?: string;
		columns: DataTableColumn[];
		rows: DataTableRow[];
		rowActions?: DataTableRowAction[];
		filters?: SearchFilter[];
		query?: string;
		activeFilters?: Record<string, string>;
		resultCount?: number;
		page?: number;
		pageCount?: number;
		loading?: boolean;
		error?: string | null;
		primaryAction?: ActionConfig;
		secondaryAction?: ActionConfig;
		onQueryChange?: (value: string) => void;
		onFilterChange?: (key: string, value: string) => void;
		onClear?: () => void;
		onPageChange?: (page: number) => void;
		onRetry?: () => void;
	}

	let {
		title = 'Resources',
		description = 'Search, filter, inspect, and manage resources with built-in CRUD page structure.',
		columns,
		rows,
		rowActions = [],
		filters = [],
		query = '',
		activeFilters = {},
		resultCount = rows.length,
		page = 1,
		pageCount = 1,
		loading = false,
		error = null,
		primaryAction,
		secondaryAction,
		onQueryChange,
		onFilterChange,
		onClear,
		onPageChange,
		onRetry
	}: Props = $props();
</script>

<section class="aui-crud-page aui-root" aria-label={title}>
	<PageHeader {title} {description} {primaryAction} {secondaryAction} />
	<SearchFilterBar
		{query}
		{filters}
		{activeFilters}
		{resultCount}
		{onQueryChange}
		{onFilterChange}
		{onClear}
	/>
	<DataTable {columns} {rows} {rowActions} {loading} {error} {onRetry} />
	{#if pageCount > 1 && onPageChange}<Pagination {page} {pageCount} {onPageChange} />{/if}
</section>

<style>
	.aui-crud-page {
		display: grid;
		gap: 1rem;
		font-family: var(--aui-font-sans);
	}
</style>
