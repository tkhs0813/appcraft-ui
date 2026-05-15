<script lang="ts">
	import Stepper from './Stepper.svelte';
	import type { Snippet } from 'svelte';
	import type { ActionConfig, StepperStep } from '../types.js';
	interface Props {
		title: string;
		description?: string;
		steps?: StepperStep[];
		currentStepId?: string;
		primaryAction?: ActionConfig;
		secondaryAction?: ActionConfig;
		children?: Snippet;
		onStepSelect?: (id: string) => void;
	}
	let {
		title,
		description,
		steps = [],
		currentStepId,
		primaryAction,
		secondaryAction,
		children,
		onStepSelect
	}: Props = $props();
</script>

<section class="wizard">
	<header>
		<div>
			<p>Setup wizard</p>
			<h2>{title}</h2>
			{#if description}<span>{description}</span>{/if}
		</div>
	</header>
	<Stepper {steps} {currentStepId} {onStepSelect} />
	<div class="body">{@render children?.()}</div>
	<footer>
		{#if secondaryAction}<button
				type="button"
				onclick={secondaryAction.onClick}
				disabled={secondaryAction.disabled}>{secondaryAction.label}</button
			>{/if}
		{#if primaryAction}<button
				class="primary"
				type="button"
				onclick={primaryAction.onClick}
				disabled={primaryAction.disabled || primaryAction.loading}
				>{primaryAction.loading ? 'Working…' : primaryAction.label}</button
			>{/if}
	</footer>
</section>

<style>
	.wizard {
		border: 1px solid var(--ac-border, #d1d5db);
		border-radius: 1.25rem;
		background: var(--ac-surface, #fff);
		padding: 1.25rem;
		display: grid;
		gap: 1rem;
	}
	h2,
	p {
		margin: 0;
	}
	p {
		color: var(--ac-brand, #4f46e5);
		font-weight: 800;
		text-transform: uppercase;
		font-size: 0.75rem;
	}
	span {
		color: var(--ac-text-muted, #6b7280);
	}
	.body {
		min-height: 8rem;
		border: 1px dashed var(--ac-border, #d1d5db);
		border-radius: 1rem;
		padding: 1rem;
	}
	footer {
		display: flex;
		justify-content: flex-end;
		gap: 0.6rem;
	}
	button {
		border: 1px solid var(--ac-border, #d1d5db);
		border-radius: 0.75rem;
		padding: 0.65rem 0.9rem;
		background: var(--ac-surface, #fff);
		font-weight: 800;
	}
	.primary {
		background: var(--ac-brand, #4f46e5);
		color: white;
		border-color: var(--ac-brand, #4f46e5);
	}
</style>
