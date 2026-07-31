<script lang="ts">
	import Tooltip from './Tooltip.svelte';

	interface Props {
		label?: string;
		placement?: 'top' | 'bottom';
	}

	let { label = 'Helpful context', placement = 'top' }: Props = $props();
</script>

<Tooltip {label} {placement}>
	<button type="button" aria-label="Save changes">Save</button>
</Tooltip>
