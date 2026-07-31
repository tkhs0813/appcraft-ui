<script lang="ts">
	import Tooltip from './Tooltip.svelte';

	interface Props {
		label: string;
		placement?: 'top' | 'bottom';
		triggerLabel?: string;
	}

	let { label, placement = 'top', triggerLabel = 'Copy' }: Props = $props();
</script>

<Tooltip {label} {placement}>
	<button type="button">{triggerLabel}</button>
</Tooltip>
