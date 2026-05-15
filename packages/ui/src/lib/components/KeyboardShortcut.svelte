<script lang="ts">
	interface Props {
		keys: string[];
		label?: string;
	}
	let { keys, label = keys.join(' + ') }: Props = $props();
</script>

<span class="aui-shortcut aui-root" aria-label={label}
	>{#each keys as key, index (`${key}-${index}`)}<kbd>{key}</kbd>{#if index < keys.length - 1}<span
				aria-hidden="true">+</span
			>{/if}{/each}</span
>

<style>
	.aui-shortcut {
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;
		color: var(--aui-text-muted);
		font-family: var(--aui-font-sans);
		font-size: 0.75rem;
	}
	kbd {
		border: 1px solid var(--aui-border);
		border-bottom-color: var(--aui-border-strong);
		border-radius: 0.35rem;
		background: var(--aui-surface);
		box-shadow: var(--aui-shadow-sm);
		color: var(--aui-text);
		font: inherit;
		font-weight: 800;
		min-width: 1.5rem;
		padding: 0.2rem 0.38rem;
		text-align: center;
	}
</style>
