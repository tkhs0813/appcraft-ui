<script lang="ts">
	import type { DataTableColumn, DataTableRow, DataTableRowAction } from '../types.js';
	import Button from './Button.svelte';
	import EmptyState from './EmptyState.svelte';
	import ErrorState from './ErrorState.svelte';
	import StatusBadge from './StatusBadge.svelte';

	interface Props {
		columns: DataTableColumn[];
		rows: DataTableRow[];
		rowActions?: DataTableRowAction[];
		loading?: boolean;
		error?: string | null;
		emptyTitle?: string;
		emptyDescription?: string;
		onRetry?: () => void;
		onSort?: (key: string) => void;
		sortKey?: string;
		sortDirection?: 'asc' | 'desc';
	}

	let {
		columns,
		rows,
		rowActions = [],
		loading = false,
		error = null,
		emptyTitle = 'No results',
		emptyDescription = 'Try changing filters or create a new item.',
		onRetry,
		onSort,
		sortKey,
		sortDirection = 'asc'
	}: Props = $props();

	const cellValue = (row: DataTableRow, column: DataTableColumn) => row[column.key];
	const displayValue = (row: DataTableRow, column: DataTableColumn) =>
		column.format
			? column.format(cellValue(row, column), row)
			: String(cellValue(row, column) ?? '—');
</script>

<section class="aui-data-table aui-root" aria-busy={loading}>
	{#if error}
		<ErrorState
			message={error}
			retryAction={onRetry ? { label: 'Retry', onClick: onRetry } : undefined}
		/>
	{:else if loading}
		<div class="aui-data-table__skeleton" aria-label="Loading table rows">
			{#each [1, 2, 3, 4] as item (item)}<span></span>{/each}
		</div>
	{:else if rows.length === 0}
		<EmptyState title={emptyTitle} description={emptyDescription} />
	{:else}
		<div class="aui-data-table__wrap">
			<table>
				<thead>
					<tr>
						{#each columns as column (column.key)}
							<th scope="col" style={`width: ${column.width ?? 'auto'}`}>
								{#if column.sortable && onSort}
									<button type="button" onclick={() => onSort?.(column.key)}>
										{column.label}{#if sortKey === column.key}<span aria-hidden="true"
												>{sortDirection === 'asc' ? ' ↑' : ' ↓'}</span
											>{/if}
									</button>
								{:else}{column.label}{/if}
							</th>
						{/each}
						{#if rowActions.length > 0}<th scope="col"><span class="aui-sr-only">Actions</span></th
							>{/if}
					</tr>
				</thead>
				<tbody>
					{#each rows as row (row.id)}
						<tr>
							{#each columns as column (column.key)}
								<td data-align={column.align ?? 'left'}>
									{#if column.kind === 'badge'}<StatusBadge
											label={displayValue(row, column)}
											tone={column.tone?.(cellValue(row, column), row) ?? 'neutral'}
										/>{:else}{displayValue(row, column)}{/if}
								</td>
							{/each}
							{#if rowActions.length > 0}
								<td class="aui-data-table__actions">
									{#each rowActions as action (action.label)}
										<Button
											variant={action.tone === 'danger' ? 'ghost' : 'secondary'}
											size="sm"
											label={action.label}
											disabled={action.disabled?.(row)}
											onClick={() => action.onSelect(row)}
										/>
									{/each}
								</td>
							{/if}
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{/if}
</section>

<style>
	.aui-data-table {
		overflow: hidden;
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-lg);
		background: var(--aui-surface);
		box-shadow: var(--aui-shadow-sm);
		font-family: var(--aui-font-sans);
	}
	.aui-data-table__wrap {
		overflow-x: auto;
	}
	table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.88rem;
	}
	th,
	td {
		padding: 0.85rem 1rem;
		border-top: 1px solid var(--aui-border);
		text-align: left;
		white-space: nowrap;
	}
	th {
		border-top: 0;
		background: var(--aui-surface-subtle);
		color: var(--aui-text-muted);
		font-size: 0.75rem;
		font-weight: 800;
		letter-spacing: 0.04em;
		text-transform: uppercase;
	}
	th button {
		border: 0;
		background: transparent;
		color: inherit;
		font: inherit;
		font-weight: inherit;
		letter-spacing: inherit;
		text-transform: inherit;
		cursor: pointer;
		padding: 0;
	}
	td {
		color: var(--aui-text);
	}
	td[data-align='right'] {
		text-align: right;
	}
	td[data-align='center'] {
		text-align: center;
	}
	.aui-data-table__actions {
		display: flex;
		justify-content: flex-end;
		gap: 0.4rem;
	}
	.aui-data-table__skeleton {
		display: grid;
		gap: 1px;
		background: var(--aui-border);
	}
	.aui-data-table__skeleton span {
		height: 3.25rem;
		background: linear-gradient(
			90deg,
			var(--aui-surface),
			var(--aui-surface-subtle),
			var(--aui-surface)
		);
		background-size: 200% 100%;
		animation: aui-shimmer 1.2s ease-in-out infinite;
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
	@keyframes aui-shimmer {
		to {
			background-position: -200% 0;
		}
	}
</style>
