<script lang="ts">
	import CopyButton from './CopyButton.svelte';
	interface Props {
		code: string;
		language?: string;
		title?: string;
		copyLabel?: string;
	}
	let { code, language = 'text', title, copyLabel = 'Copy code' }: Props = $props();
</script>

<figure class="aui-code-block aui-root">
	<figcaption>
		<span>{title ?? language}</span><CopyButton value={code} label={copyLabel} />
	</figcaption>
	<pre><code>{code}</code></pre>
</figure>

<style>
	.aui-code-block {
		display: grid;
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-lg);
		background: #111827;
		overflow: hidden;
		box-shadow: var(--aui-shadow-sm);
	}
	figcaption {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		padding: 0.65rem 0.85rem;
		color: #d1d5db;
		font-family: var(--aui-font-sans);
		font-size: 0.78rem;
		font-weight: 800;
	}
	pre {
		margin: 0;
		overflow: auto;
		padding: 1rem;
		color: #e5e7eb;
		font-size: 0.84rem;
		line-height: 1.6;
	}
	code {
		font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
		white-space: pre;
	}
</style>
