<script lang="ts">
	import type { Snippet } from 'svelte';
	interface Props {
		label: string;
		placement?: 'top' | 'bottom';
		children: Snippet;
	}
	let { label, placement = 'top', children }: Props = $props();
</script>

<span class="aui-tooltip aui-root" data-placement={placement} aria-label={label}
	><span>{@render children()}</span><span class="bubble" role="tooltip">{label}</span></span
>

<style>
	.aui-tooltip {
		position: relative;
		display: inline-flex;
	}
	.aui-tooltip > span:first-child:focus-visible {
		outline: 3px solid color-mix(in srgb, var(--aui-brand) 24%, transparent);
		outline-offset: 2px;
		border-radius: var(--aui-radius-sm);
	}
	.bubble {
		position: absolute;
		z-index: 20;
		left: 50%;
		transform: translateX(-50%);
		width: max-content;
		max-width: 16rem;
		border-radius: var(--aui-radius-md);
		background: #111827;
		color: white;
		font-family: var(--aui-font-sans);
		font-size: 0.78rem;
		font-weight: 750;
		line-height: 1.3;
		padding: 0.4rem 0.55rem;
		opacity: 0;
		pointer-events: none;
		transition: opacity 0.12s ease;
	}
	.aui-tooltip[data-placement='top'] .bubble {
		bottom: calc(100% + 0.45rem);
	}
	.aui-tooltip[data-placement='bottom'] .bubble {
		top: calc(100% + 0.45rem);
	}
	.aui-tooltip:hover .bubble,
	.aui-tooltip:focus-within .bubble {
		opacity: 1;
	}
</style>
