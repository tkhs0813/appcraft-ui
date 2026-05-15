<script lang="ts">
	import Stepper from './Stepper.svelte';
	import type { ImportReviewIssue, StepperStep } from '../types.js';
	interface Props {
		title?: string;
		currentStepId?: string;
		issues?: ImportReviewIssue[];
		onStepSelect?: (id: string) => void;
	}
	let {
		title = 'CSV import wizard',
		currentStepId = 'upload',
		issues = [],
		onStepSelect
	}: Props = $props();
	const steps: StepperStep[] = [
		{ id: 'upload', label: 'Upload' },
		{ id: 'map', label: 'Map columns' },
		{ id: 'review', label: 'Review' },
		{ id: 'import', label: 'Import' }
	];
</script>

<section class="csv">
	<h3>{title}</h3>
	<Stepper {steps} {currentStepId} {onStepSelect} />
	<p>{issues.length} rows need review before import.</p>
</section>

<style>
	.csv {
		border: 1px solid var(--ac-border, #d1d5db);
		border-radius: 1rem;
		padding: 1rem;
		background: #fff;
		display: grid;
		gap: 1rem;
	}
	h3,
	p {
		margin: 0;
	}
	p {
		color: var(--ac-text-muted, #6b7280);
	}
</style>
