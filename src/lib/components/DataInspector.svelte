<script lang="ts">
	import JsonViewer from './JsonViewer.svelte';
	import KeyValueList from './KeyValueList.svelte';
	import type { KeyValueItem } from '../types.js';
	interface Props {
		title?: string;
		summary?: KeyValueItem[];
		value?: unknown;
	}
	let { title = 'Data inspector', summary = [], value = {} }: Props = $props();
</script>

<section class="inspector">
	<h3>{title}</h3>
	<KeyValueList items={summary} /><JsonViewer title="Payload" {value} />
</section>

<style>
	.inspector {
		display: grid;
		gap: 1rem;
		border: 1px solid var(--ac-border, #d1d5db);
		border-radius: 1.25rem;
		padding: 1rem;
		background: var(--ac-surface, #fff);
	}
	h3 {
		margin: 0;
	}
</style>
