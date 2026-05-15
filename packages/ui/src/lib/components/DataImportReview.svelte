<script lang="ts">
	import type { ImportReviewIssue } from '../types.js';
	interface Props {
		title?: string;
		issues?: ImportReviewIssue[];
		emptyMessage?: string;
	}
	let {
		title = 'Import review',
		issues = [],
		emptyMessage = 'No import issues found'
	}: Props = $props();
</script>

<section class="review">
	<h3>{title}</h3>
	<ul>
		{#each issues as issue (issue.id)}<li>
				<strong>Row {issue.row}</strong><span>{issue.field}</span>
				<p>{issue.message}</p>
			</li>{:else}<li class="empty">{emptyMessage}</li>{/each}
	</ul>
</section>

<style>
	.review {
		border: 1px solid var(--ac-border, #d1d5db);
		border-radius: 1rem;
		padding: 1rem;
		background: #fff;
	}
	h3 {
		margin: 0 0 0.8rem;
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 0.6rem;
	}
	li {
		border: 1px solid var(--ac-border, #e5e7eb);
		border-radius: 0.8rem;
		padding: 0.75rem;
		display: grid;
		gap: 0.2rem;
	}
	span,
	p,
	.empty {
		color: var(--ac-text-muted, #6b7280);
	}
	p {
		margin: 0;
	}
</style>
