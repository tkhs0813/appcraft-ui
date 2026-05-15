<script lang="ts">
	import type { AuditLogEvent } from '../types.js';
	interface Props {
		title?: string;
		events?: AuditLogEvent[];
		emptyMessage?: string;
	}
	let { title = 'Audit log', events = [], emptyMessage = 'No events yet' }: Props = $props();
</script>

<section class="panel">
	<h3>{title}</h3>
	<ol>
		{#each events as event (event.id)}<li>
				<time>{event.timestamp}</time><strong>{event.actor}</strong><span>{event.action}</span><em
					>{event.target}</em
				>{#if event.severity}<small data-severity={event.severity}>{event.severity}</small>{/if}
			</li>{:else}<li class="empty">{emptyMessage}</li>{/each}
	</ol>
</section>

<style>
	.panel {
		border: 1px solid var(--ac-border, #d1d5db);
		border-radius: 1rem;
		padding: 1rem;
		background: var(--ac-surface, #fff);
	}
	h3 {
		margin: 0 0 0.8rem;
	}
	ol {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 0.65rem;
	}
	li {
		display: grid;
		grid-template-columns: 8rem 1fr 1fr 1fr auto;
		gap: 0.6rem;
		align-items: center;
		border-top: 1px solid var(--ac-border, #e5e7eb);
		padding-top: 0.65rem;
	}
	time,
	span,
	em {
		color: var(--ac-text-muted, #6b7280);
		font-style: normal;
	}
	small {
		border-radius: 999px;
		padding: 0.2rem 0.45rem;
		background: var(--ac-surface-muted, #f3f4f6);
		font-weight: 800;
	}
	.empty {
		display: block;
		color: var(--ac-text-muted, #6b7280);
	}
</style>
