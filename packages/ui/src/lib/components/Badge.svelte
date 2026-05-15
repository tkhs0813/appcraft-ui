<script lang="ts">
	import type { StatusBadgeTone } from '../types.js';
	interface Props {
		label: string;
		tone?: StatusBadgeTone;
		size?: 'sm' | 'md';
	}
	let { label, tone = 'neutral', size = 'md' }: Props = $props();
</script>

<span class="aui-badge aui-root" data-tone={tone} data-size={size}>{label}</span>

<style>
	.aui-badge {
		display: inline-flex;
		align-items: center;
		width: max-content;
		border: 1px solid var(--aui-border);
		border-radius: 999px;
		background: var(--aui-surface-subtle);
		color: var(--aui-text-muted);
		font-family: var(--aui-font-sans);
		font-weight: 750;
		line-height: 1;
	}
	.aui-badge[data-size='sm'] {
		padding: 0.2rem 0.45rem;
		font-size: 0.72rem;
	}
	.aui-badge[data-size='md'] {
		padding: 0.3rem 0.6rem;
		font-size: 0.78rem;
	}
	.aui-badge[data-tone='brand'] {
		border-color: color-mix(in srgb, var(--aui-brand) 25%, var(--aui-border));
		background: color-mix(in srgb, var(--aui-brand) 10%, var(--aui-surface));
		color: var(--aui-brand);
	}
	.aui-badge[data-tone='success'] {
		background: #ecfdf5;
		color: #047857;
		border-color: #a7f3d0;
	}
	.aui-badge[data-tone='warning'] {
		background: #fffbeb;
		color: #b45309;
		border-color: #fde68a;
	}
	.aui-badge[data-tone='danger'] {
		background: #fef2f2;
		color: #b91c1c;
		border-color: #fecaca;
	}
</style>
