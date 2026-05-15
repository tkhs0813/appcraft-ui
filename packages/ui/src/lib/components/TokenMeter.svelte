<script lang="ts">
	import ProgressBar from './ProgressBar.svelte';
	interface Props {
		used: number;
		limit: number;
		label?: string;
	}
	let { used, limit, label = 'Token usage' }: Props = $props();
	let percent = $derived(Math.max(0, Math.min(100, Math.round((used / limit) * 100))));
	let tone = $derived(percent >= 90 ? 'danger' : percent >= 70 ? 'warning' : 'brand');
</script>

<div class="aui-token-meter aui-root" data-tone={tone}>
	<ProgressBar value={used} max={limit} {label} showValue />
	<p>{used.toLocaleString()} / {limit.toLocaleString()} tokens</p>
</div>

<style>
	.aui-token-meter {
		display: grid;
		gap: 0.35rem;
		font-family: var(--aui-font-sans);
	}
	p {
		margin: 0;
		color: var(--aui-text-muted);
		font-size: 0.78rem;
	}
	[data-tone='warning'] :global(.track span) {
		background: #f59e0b;
	}
	[data-tone='danger'] :global(.track span) {
		background: #dc2626;
	}
</style>
