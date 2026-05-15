<script lang="ts">
	interface Props {
		label?: string;
		lines?: number;
		shape?: 'text' | 'block' | 'circle';
	}
	let { label = 'Loading content', lines = 1, shape = 'text' }: Props = $props();
	let skeletonLines = $derived(Array.from({ length: lines }, (_, index) => index));
</script>

<div class="aui-skeleton aui-root" data-shape={shape} role="status" aria-label={label}>
	{#each skeletonLines as index (index)}<span aria-hidden="true"></span>{/each}
</div>

<style>
	.aui-skeleton {
		display: grid;
		gap: 0.5rem;
	}
	.aui-skeleton span {
		display: block;
		border-radius: var(--aui-radius-md);
		background: linear-gradient(
			90deg,
			var(--aui-surface-subtle),
			color-mix(in srgb, var(--aui-brand) 8%, var(--aui-surface)),
			var(--aui-surface-subtle)
		);
		background-size: 200% 100%;
		animation: aui-shimmer 1.2s ease-in-out infinite;
	}
	.aui-skeleton[data-shape='text'] span {
		height: 0.85rem;
	}
	.aui-skeleton[data-shape='block'] span {
		height: 5rem;
	}
	.aui-skeleton[data-shape='circle'] span {
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 999px;
	}
	@keyframes aui-shimmer {
		to {
			background-position: -200% 0;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.aui-skeleton span {
			animation: none;
		}
	}
</style>
