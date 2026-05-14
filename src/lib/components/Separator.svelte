<script lang="ts">
	interface Props {
		orientation?: 'horizontal' | 'vertical';
		label?: string;
	}
	let { orientation = 'horizontal', label }: Props = $props();
</script>

{#if label && orientation === 'horizontal'}<div
		class="aui-separator labeled aui-root"
		role="separator"
		aria-orientation={orientation}
	>
		<span>{label}</span>
	</div>{:else}<div
		class="aui-separator aui-root"
		data-orientation={orientation}
		role="separator"
		aria-orientation={orientation}
	></div>{/if}

<style>
	.aui-separator {
		background: var(--aui-border);
		flex: none;
	}
	.aui-separator[data-orientation='horizontal'] {
		height: 1px;
		width: 100%;
	}
	.aui-separator[data-orientation='vertical'] {
		width: 1px;
		min-height: 1.5rem;
	}
	.labeled {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		background: transparent;
		color: var(--aui-text-muted);
		font-family: var(--aui-font-sans);
		font-size: 0.78rem;
		font-weight: 750;
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}
	.labeled::before,
	.labeled::after {
		content: '';
		height: 1px;
		background: var(--aui-border);
		flex: 1;
	}
</style>
