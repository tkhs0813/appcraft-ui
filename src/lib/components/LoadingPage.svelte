<script lang="ts">
	import PageState from './PageState.svelte';
	import type { ActionConfig } from '../types.js';
	interface Props {
		title?: string;
		description?: string;
		action?: ActionConfig;
	}
	let {
		title = 'Loading page',
		description = 'We are preparing this screen.',
		action
	}: Props = $props();
</script>

<PageState {title} {description} tone="loading" {action} />
