<script lang="ts">
	import IconButton from './IconButton.svelte';
	interface Props {
		value: string;
		label?: string;
		copiedLabel?: string;
		onCopied?: () => void;
	}
	let { value, label = 'Copy', copiedLabel = 'Copied', onCopied }: Props = $props();
	let copied = $state(false);
	async function copy() {
		if (typeof navigator !== 'undefined' && navigator.clipboard) {
			await navigator.clipboard.writeText(value);
		}
		copied = true;
		onCopied?.();
		setTimeout(() => (copied = false), 1600);
	}
</script>

<span class="aui-copy aui-root"
	><IconButton icon={copied ? '✓' : '⧉'} label={copied ? copiedLabel : label} onClick={copy} /><span
		aria-live="polite">{copied ? copiedLabel : label}</span
	></span
>

<style>
	.aui-copy {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		color: var(--aui-text-muted);
		font-family: var(--aui-font-sans);
		font-size: 0.78rem;
		font-weight: 750;
	}
</style>
