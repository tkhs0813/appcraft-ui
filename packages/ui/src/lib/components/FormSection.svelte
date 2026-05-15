<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { FormSectionAction } from '../types.js';
	import Button from './Button.svelte';

	interface Props {
		title: string;
		description?: string;
		status?: string;
		action?: FormSectionAction;
		children?: Snippet;
	}

	let { title, description, status, action, children }: Props = $props();
</script>

<section class="aui-form-section aui-root">
	<header>
		<div>
			<h2>{title}</h2>
			{#if description}<p>{description}</p>{/if}
		</div>
		{#if status}<span>{status}</span>{/if}
	</header>
	<div class="aui-form-section__body">
		{#if children}{@render children()}{/if}
	</div>
	{#if action}
		<footer>
			<Button
				label={action.label}
				onClick={action.onClick}
				disabled={action.disabled}
				loading={action.loading}
			/>
		</footer>
	{/if}
</section>

<style>
	.aui-form-section {
		display: grid;
		overflow: hidden;
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-lg);
		background: var(--aui-surface);
		box-shadow: var(--aui-shadow-sm);
		font-family: var(--aui-font-sans);
	}
	header {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		padding: 1.2rem 1.4rem;
		border-bottom: 1px solid var(--aui-border);
	}
	h2,
	p {
		margin: 0;
	}
	h2 {
		font-size: 1rem;
		color: var(--aui-text);
		letter-spacing: -0.02em;
	}
	p {
		margin-top: 0.3rem;
		color: var(--aui-text-muted);
		font-size: 0.88rem;
		line-height: 1.55;
	}
	header span {
		height: fit-content;
		border-radius: 999px;
		background: var(--aui-surface-subtle);
		color: var(--aui-text-muted);
		padding: 0.25rem 0.55rem;
		font-size: 0.75rem;
		font-weight: 700;
	}
	.aui-form-section__body {
		display: grid;
		gap: 1rem;
		padding: 1.4rem;
	}
	footer {
		display: flex;
		justify-content: flex-end;
		padding: 1rem 1.4rem;
		border-top: 1px solid var(--aui-border);
		background: var(--aui-surface-subtle);
	}
	@media (max-width: 640px) {
		header {
			flex-direction: column;
		}
		footer {
			justify-content: stretch;
		}
	}
</style>
