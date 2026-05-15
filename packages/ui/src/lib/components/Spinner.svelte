<script lang="ts">
	interface Props {
		label?: string;
		size?: 'sm' | 'md' | 'lg';
	}
	let { label = 'Loading', size = 'md' }: Props = $props();
</script>

<span class="aui-spinner aui-root" data-size={size} role="status" aria-label={label}></span>

<style>
	.aui-spinner {
		display: inline-block;
		border: 2px solid color-mix(in srgb, var(--aui-brand) 18%, var(--aui-border));
		border-top-color: var(--aui-brand);
		border-radius: 999px;
		animation: aui-spin 0.8s linear infinite;
	}
	.aui-spinner[data-size='sm'] {
		width: 1rem;
		height: 1rem;
	}
	.aui-spinner[data-size='md'] {
		width: 1.35rem;
		height: 1.35rem;
	}
	.aui-spinner[data-size='lg'] {
		width: 2rem;
		height: 2rem;
	}
	@keyframes aui-spin {
		to {
			transform: rotate(360deg);
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.aui-spinner {
			animation: none;
		}
	}
</style>
