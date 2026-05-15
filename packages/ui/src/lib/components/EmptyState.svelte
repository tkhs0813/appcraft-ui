<script lang="ts">
	import Button from './Button.svelte';
	import type { EmptyStateAction, EmptyStateTone } from '../types.js';

	interface Props {
		title: string;
		description?: string;
		tone?: EmptyStateTone;
		action?: EmptyStateAction;
		secondaryAction?: EmptyStateAction;
	}

	let { title, description, tone = 'neutral', action, secondaryAction }: Props = $props();
</script>

<section class="aui-empty-state aui-root" class:aui-empty-state--brand={tone === 'brand'}>
	<div class="aui-empty-state__icon" aria-hidden="true">
		<svg viewBox="0 0 24 24" fill="none">
			<path
				d="M6.5 7.75C6.5 6.23 7.73 5 9.25 5h5.5c1.52 0 2.75 1.23 2.75 2.75v8.5A2.75 2.75 0 0 1 14.75 19h-5.5a2.75 2.75 0 0 1-2.75-2.75v-8.5Z"
				stroke="currentColor"
				stroke-width="1.7"
			/>
			<path d="M9 9h6M9 12h4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
		</svg>
	</div>
	<div class="aui-empty-state__copy">
		<h2>{title}</h2>
		{#if description}
			<p>{description}</p>
		{/if}
	</div>
	{#if action || secondaryAction}
		<div class="aui-empty-state__actions">
			{#if action}
				<Button label={action.label} onClick={action.onClick} disabled={action.disabled} />
			{/if}
			{#if secondaryAction}
				<Button
					variant="secondary"
					label={secondaryAction.label}
					onClick={secondaryAction.onClick}
					disabled={secondaryAction.disabled}
				/>
			{/if}
		</div>
	{/if}
</section>

<style>
	.aui-empty-state {
		display: grid;
		place-items: center;
		gap: 1rem;
		padding: 3rem 1.5rem;
		text-align: center;
		background: var(--aui-surface);
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-lg);
		box-shadow: var(--aui-shadow-sm);
	}

	.aui-empty-state__icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 3.5rem;
		height: 3.5rem;
		border-radius: 1.25rem;
		background: var(--aui-surface-subtle);
		color: var(--aui-text-muted);
	}

	.aui-empty-state--brand .aui-empty-state__icon {
		background: var(--aui-brand-soft);
		color: var(--aui-brand);
	}

	svg {
		width: 1.75rem;
		height: 1.75rem;
	}

	.aui-empty-state__copy {
		display: grid;
		gap: 0.45rem;
		max-width: 28rem;
	}

	h2,
	p {
		margin: 0;
	}

	h2 {
		font-size: 1.05rem;
		letter-spacing: -0.02em;
		color: var(--aui-text);
	}

	p {
		font-size: 0.92rem;
		line-height: 1.6;
		color: var(--aui-text-muted);
	}

	.aui-empty-state__actions {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.75rem;
	}
</style>
