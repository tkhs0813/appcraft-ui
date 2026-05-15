<script lang="ts">
	import PageState from './PageState.svelte';
	import type { ActionConfig } from '../types.js';
	interface Props {
		title?: string;
		description?: string;
		action?: ActionConfig;
	}
	let {
		title = 'Maintenance in progress',
		description = 'This area is temporarily unavailable.',
		action
	}: Props = $props();
</script>

<PageState {title} {description} tone="maintenance" {action} />
