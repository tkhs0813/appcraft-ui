<script lang="ts">
	export type BreadcrumbItem = { label: string; href?: string };
	interface Props {
		items: BreadcrumbItem[];
		label?: string;
		onNavigate?: (item: BreadcrumbItem) => void;
	}
	let { items, label = 'Breadcrumbs', onNavigate }: Props = $props();
</script>

<nav class="aui-breadcrumbs aui-root" aria-label={label}>
	<ol>
		{#each items as item, index (`${item.label}-${index}`)}
			<li>
				{#if item.href && index < items.length - 1}
					<button type="button" onclick={() => onNavigate?.(item)}>{item.label}</button>
				{:else}
					<span aria-current={index === items.length - 1 ? 'page' : undefined}>{item.label}</span>
				{/if}
			</li>
		{/each}
	</ol>
</nav>

<style>
	.aui-breadcrumbs {
		font-family: var(--aui-font-sans);
	}
	ol {
		display: flex;
		flex-wrap: wrap;
		gap: 0.45rem;
		list-style: none;
		padding: 0;
		margin: 0;
		color: var(--aui-text-muted);
		font-size: 0.85rem;
	}
	li:not(:last-child)::after {
		content: '/';
		margin-left: 0.45rem;
		color: var(--aui-border-strong);
	}
	button {
		border: 0;
		background: transparent;
		color: var(--aui-brand);
		font: inherit;
		padding: 0;
		text-decoration: none;
		cursor: pointer;
	}
	button:focus-visible {
		outline: 3px solid color-mix(in srgb, var(--aui-brand) 22%, transparent);
		outline-offset: 2px;
	}
	span {
		color: var(--aui-text);
	}
</style>
