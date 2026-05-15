<script lang="ts">
	export type AgentStatus = 'idle' | 'thinking' | 'running' | 'waiting' | 'failed' | 'completed';
	interface Props {
		status: AgentStatus;
		label?: string;
	}
	let { status, label = status }: Props = $props();
</script>

<span class="aui-agent-status aui-root" data-status={status}
	><span aria-hidden="true"></span>{label}</span
>

<style>
	.aui-agent-status {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		border: 1px solid var(--aui-border);
		border-radius: 999px;
		background: var(--aui-surface);
		padding: 0.28rem 0.6rem;
		color: var(--aui-text);
		font-family: var(--aui-font-sans);
		font-size: 0.78rem;
		font-weight: 800;
	}
	.aui-agent-status span {
		width: 0.55rem;
		height: 0.55rem;
		border-radius: 999px;
		background: var(--aui-text-muted);
	}
	[data-status='thinking'] span,
	[data-status='running'] span {
		background: var(--aui-brand);
		box-shadow: 0 0 0 0.25rem color-mix(in srgb, var(--aui-brand) 14%, transparent);
	}
	[data-status='waiting'] span {
		background: #f59e0b;
	}
	[data-status='failed'] span {
		background: #dc2626;
	}
	[data-status='completed'] span {
		background: #059669;
	}
</style>
