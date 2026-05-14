<script lang="ts">
	export type LogViewerLine = {
		id: string;
		timestamp?: string;
		level?: 'debug' | 'info' | 'warn' | 'error';
		message: string;
	};
	interface Props {
		title?: string;
		lines?: LogViewerLine[];
		emptyMessage?: string;
		wrap?: boolean;
	}
	let { title = 'Logs', lines = [], emptyMessage = 'No logs yet.', wrap = false }: Props = $props();
</script>

<section class="aui-log-viewer aui-root" aria-label={title}>
	<header><h2>{title}</h2></header>
	<pre class:wrap>{#each lines as line (line.id)}<code data-level={line.level ?? 'info'}
				>{line.timestamp ? `${line.timestamp} ` : ''}[{line.level ?? 'info'}] {line.message}</code
			>{:else}<code>{emptyMessage}</code>{/each}</pre>
</section>

<style>
	.aui-log-viewer {
		display: grid;
		gap: 0.75rem;
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-lg);
		background: var(--aui-surface);
		padding: 1rem;
		font-family: var(--aui-font-sans);
	}
	h2 {
		margin: 0;
		color: var(--aui-text);
		font-size: 1rem;
	}
	pre {
		margin: 0;
		overflow: auto;
		border-radius: var(--aui-radius-md);
		background: #111827;
		color: #d1d5db;
		padding: 1rem;
		font-size: 0.82rem;
		line-height: 1.6;
	}
	pre.wrap {
		white-space: pre-wrap;
	}
	code {
		display: block;
		font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
	}
	code[data-level='error'] {
		color: #fecaca;
	}
	code[data-level='warn'] {
		color: #fde68a;
	}
	code[data-level='debug'] {
		color: #bfdbfe;
	}
</style>
