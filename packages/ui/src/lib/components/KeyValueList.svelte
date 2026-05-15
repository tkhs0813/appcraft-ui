<script lang="ts">
	import type { KeyValueItem } from '../types.js';
	interface Props {
		title?: string;
		items?: KeyValueItem[];
	}
	let { title, items = [] }: Props = $props();
</script>

<dl class="kv">
	{#if title}<h3>{title}</h3>{/if}{#each items as item (item.key)}<div>
			<dt>{item.label}</dt>
			<dd>{item.value}</dd>
		</div>{/each}
</dl>

<style>
	.kv {
		border: 1px solid var(--ac-border, #d1d5db);
		border-radius: 1rem;
		padding: 1rem;
		background: #fff;
		display: grid;
		gap: 0.6rem;
	}
	h3 {
		margin: 0;
	}
	div {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		border-top: 1px solid var(--ac-border, #e5e7eb);
		padding-top: 0.6rem;
	}
	dt {
		color: var(--ac-text-muted, #6b7280);
	}
	dd {
		margin: 0;
		font-weight: 800;
	}
</style>
