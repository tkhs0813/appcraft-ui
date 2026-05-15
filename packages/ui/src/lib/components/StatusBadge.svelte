<script lang="ts">
	import type { StatusBadgeTone } from '../types.js';
	interface Props {
		label: string;
		tone?: StatusBadgeTone;
	}
	let { label, tone = 'neutral' }: Props = $props();
</script>

<span class="aui-status-badge aui-root" data-tone={tone}>{label}</span>

<style>
	.aui-status-badge {
		display: inline-flex;
		align-items: center;
		width: fit-content;
		border-radius: 999px;
		padding: 0.25rem 0.6rem;
		font-family: var(--aui-font-sans);
		font-size: 0.75rem;
		font-weight: 750;
		line-height: 1;
		background: var(--aui-surface-subtle);
		color: var(--aui-text-muted);
	}
	.aui-status-badge[data-tone='brand'] {
		background: var(--aui-brand-soft);
		color: var(--aui-brand-strong);
	}
	.aui-status-badge[data-tone='success'] {
		background: var(--aui-success-soft);
		color: var(--aui-success);
	}
	.aui-status-badge[data-tone='warning'] {
		background: var(--aui-warning-soft);
		color: var(--aui-warning);
	}
	.aui-status-badge[data-tone='danger'] {
		background: var(--aui-danger-soft);
		color: var(--aui-danger);
	}
</style>
