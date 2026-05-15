<script lang="ts">
	import type { StepperStep } from '../types.js';
	interface Props {
		steps?: StepperStep[];
		currentStepId?: string;
		onStepSelect?: (id: string) => void;
	}
	let { steps = [], currentStepId = steps[0]?.id, onStepSelect }: Props = $props();
	function indexOf(id?: string) {
		return Math.max(
			0,
			steps.findIndex((step) => step.id === id)
		);
	}
	let currentIndex = $derived(indexOf(currentStepId));
</script>

<nav class="stepper" aria-label="Progress">
	{#each steps as step, index (step.id)}
		<button
			type="button"
			class:active={step.id === currentStepId}
			class:done={index < currentIndex}
			disabled={step.disabled}
			onclick={() => onStepSelect?.(step.id)}
		>
			<span>{index + 1}</span><strong>{step.label}</strong>{#if step.description}<small
					>{step.description}</small
				>{/if}
		</button>
	{/each}
</nav>

<style>
	.stepper {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
		gap: 0.75rem;
	}
	button {
		border: 1px solid var(--ac-border, #d1d5db);
		border-radius: 1rem;
		background: var(--ac-surface, #fff);
		color: inherit;
		padding: 0.85rem;
		text-align: left;
		display: grid;
		gap: 0.25rem;
		cursor: pointer;
	}
	span {
		inline-size: 1.6rem;
		block-size: 1.6rem;
		display: grid;
		place-items: center;
		border-radius: 999px;
		background: var(--ac-surface-muted, #f3f4f6);
		font-weight: 800;
	}
	.active {
		border-color: var(--ac-brand, #4f46e5);
		box-shadow: 0 0 0 3px rgb(79 70 229 / 0.12);
	}
	.done span {
		background: var(--ac-success-muted, #dcfce7);
		color: var(--ac-success, #15803d);
	}
	small {
		color: var(--ac-text-muted, #6b7280);
	}
</style>
