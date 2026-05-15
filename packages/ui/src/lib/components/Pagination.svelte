<script lang="ts">
	import Button from './Button.svelte';
	interface Props {
		page: number;
		pageCount: number;
		label?: string;
		onPageChange: (page: number) => void;
	}
	let { page, pageCount, label = 'Pagination', onPageChange }: Props = $props();
	let pages = $derived(
		Array.from({ length: pageCount }, (_, index) => index + 1).filter(
			(item) => item === 1 || item === pageCount || Math.abs(item - page) <= 1
		)
	);
</script>

<nav class="aui-pagination aui-root" aria-label={label}>
	<Button
		variant="secondary"
		size="sm"
		label="Previous"
		disabled={page <= 1}
		onClick={() => onPageChange(page - 1)}
	/>
	<div class="aui-pagination__pages">
		{#each pages as item (item)}
			<button
				type="button"
				aria-current={item === page ? 'page' : undefined}
				onclick={() => onPageChange(item)}>{item}</button
			>
		{/each}
	</div>
	<Button
		variant="secondary"
		size="sm"
		label="Next"
		disabled={page >= pageCount}
		onClick={() => onPageChange(page + 1)}
	/>
</nav>

<style>
	.aui-pagination {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
		font-family: var(--aui-font-sans);
	}
	.aui-pagination__pages {
		display: flex;
		gap: 0.3rem;
	}
	button {
		min-width: 2rem;
		height: 2rem;
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-sm);
		background: var(--aui-surface);
		color: var(--aui-text-muted);
		font: inherit;
		font-size: 0.82rem;
		font-weight: 700;
		cursor: pointer;
	}
	button[aria-current='page'] {
		background: var(--aui-brand);
		border-color: var(--aui-brand);
		color: white;
	}
	button:focus-visible {
		outline: 3px solid color-mix(in srgb, var(--aui-brand) 20%, transparent);
		outline-offset: 2px;
	}
</style>
