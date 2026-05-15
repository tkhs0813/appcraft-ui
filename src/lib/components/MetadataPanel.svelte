<script lang="ts">
	import KeyValueList from './KeyValueList.svelte';
	import type { KeyValueItem } from '../types.js';
	interface Props {
		title?: string;
		items?: KeyValueItem[];
	}
	let { title = 'Metadata', items = [] }: Props = $props();
</script>

<KeyValueList {title} {items} />
