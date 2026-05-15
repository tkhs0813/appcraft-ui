<script lang="ts">
	import PageState from './PageState.svelte';
	import type { ActionConfig } from '../types.js';
	interface Props {
		title?: string;
		description?: string;
		action?: ActionConfig;
	}
	let {
		title = 'Page not found',
		description = 'The requested resource could not be found.',
		action
	}: Props = $props();
</script>

<PageState {title} {description} tone="empty" {action} />
