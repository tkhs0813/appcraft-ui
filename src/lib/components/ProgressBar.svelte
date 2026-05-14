<script lang="ts">
	interface Props {
		value: number;
		max?: number;
		label?: string;
		showValue?: boolean;
	}
	let { value, max = 100, label = 'Progress', showValue = false }: Props = $props();
	let percent = $derived(Math.max(0, Math.min(100, Math.round((value / max) * 100))));
</script>

<div class="aui-progress aui-root">
	<div class="row">
		<span>{label}</span>{#if showValue}<strong>{percent}%</strong>{/if}
	</div>
	<div
		class="track"
		role="progressbar"
		aria-label={label}
		aria-valuenow={value}
		aria-valuemin="0"
		aria-valuemax={max}
	>
		<span style={`width:${percent}%`}></span>
	</div>
</div>

<style>
	.aui-progress {
		display: grid;
		gap: 0.45rem;
		font-family: var(--aui-font-sans);
	}
	.row {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		color: var(--aui-text-muted);
		font-size: 0.82rem;
	}
	.row strong {
		color: var(--aui-text);
	}
	.track {
		height: 0.55rem;
		border-radius: 999px;
		background: var(--aui-surface-subtle);
		border: 1px solid var(--aui-border);
		overflow: hidden;
	}
	.track span {
		display: block;
		height: 100%;
		border-radius: inherit;
		background: var(--aui-brand);
	}
</style>
