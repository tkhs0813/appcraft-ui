<script lang="ts">
	import type { StatusBadgeTone, TableColumn, TableRow } from '../types.js';
	import EmptyState from './EmptyState.svelte';
	import StatusBadge from './StatusBadge.svelte';

	interface Props {
		columns: TableColumn[];
		rows: TableRow[];
		caption?: string;
		emptyTitle?: string;
		emptyDescription?: string;
	}

	let {
		columns,
		rows,
		caption,
		emptyTitle = 'No rows',
		emptyDescription = 'There is no table data to display yet.'
	}: Props = $props();

	const cellValue = (row: TableRow, column: TableColumn) => row[column.key];
	const displayValue = (row: TableRow, column: TableColumn) =>
		column.format
			? column.format(cellValue(row, column), row)
			: String(cellValue(row, column) ?? '—');
	const badgeTone = (row: TableRow, column: TableColumn): StatusBadgeTone =>
		column.tone?.(cellValue(row, column), row) ?? 'neutral';
</script>

<section class="aui-table aui-root" aria-label={caption ?? 'Table'}>
	{#if rows.length === 0}
		<EmptyState title={emptyTitle} description={emptyDescription} />
	{:else}
		<div class="aui-table__wrap">
			<table>
				{#if caption}<caption>{caption}</caption>{/if}
				<thead>
					<tr>
						{#each columns as column (column.key)}
							<th scope="col" style={`width: ${column.width ?? 'auto'}`}>{column.label}</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each rows as row (row.id)}
						<tr>
							{#each columns as column (column.key)}
								<td data-align={column.align ?? 'left'}>
									{#if column.kind === 'badge'}
										<StatusBadge label={displayValue(row, column)} tone={badgeTone(row, column)} />
									{:else}
										{displayValue(row, column)}
									{/if}
								</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{/if}
</section>

<style>
	.aui-table {
		overflow: hidden;
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-lg);
		background: var(--aui-surface);
		box-shadow: var(--aui-shadow-sm);
		font-family: var(--aui-font-sans);
	}

	.aui-table__wrap {
		overflow-x: auto;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.88rem;
	}

	caption {
		padding: 0.85rem 1rem;
		border-bottom: 1px solid var(--aui-border);
		color: var(--aui-text-muted);
		font-size: 0.82rem;
		font-weight: 700;
		text-align: left;
	}

	th,
	td {
		padding: 0.8rem 1rem;
		border-top: 1px solid var(--aui-border);
		text-align: left;
		white-space: nowrap;
	}

	tr:first-child td,
	caption + thead th {
		border-top: 0;
	}

	th {
		background: var(--aui-surface-subtle);
		color: var(--aui-text-muted);
		font-size: 0.75rem;
		font-weight: 800;
		letter-spacing: 0.04em;
		text-transform: uppercase;
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
</style>
