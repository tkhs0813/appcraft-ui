<script lang="ts">
	import PageState from './PageState.svelte';
	import type { ActionConfig } from '../types.js';
	interface Props {
		title?: string;
		description?: string;
		action?: ActionConfig;
	}
	let {
		title = 'Access restricted',
		description = 'You do not have permission to view this page.',
		action
	}: Props = $props();
</script>

<PageState {title} {description} tone="forbidden" {action} />
