<script lang="ts">
	import Button from './Button.svelte';
	import type { ErrorStateAction, ErrorStateSeverity } from '../types.js';

	interface Props {
		title?: string;
		message: string;
		severity?: ErrorStateSeverity;
		retryAction?: ErrorStateAction;
		supportAction?: ErrorStateAction;
	}

	let {
		title = 'Something went wrong',
		message,
		severity = 'section',
		retryAction,
		supportAction
	}: Props = $props();
</script>

<section
	class="aui-error-state aui-root"
	class:aui-error-state--page={severity === 'page'}
	role="alert"
>
	<div class="aui-error-state__icon" aria-hidden="true">
		<svg viewBox="0 0 24 24" fill="none">
			<path
				d="M12 8v4m0 4h.01M10.31 4.86 3.2 17.19A2 2 0 0 0 4.93 20h14.14a2 2 0 0 0 1.73-2.81L13.69 4.86a1.95 1.95 0 0 0-3.38 0Z"
				stroke="currentColor"
				stroke-width="1.8"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</div>
	<div class="aui-error-state__copy">
		<h2>{title}</h2>
		<p>{message}</p>
	</div>
	{#if retryAction || supportAction}
		<div class="aui-error-state__actions">
			{#if retryAction}
				<Button
					variant="primary"
					label={retryAction.label}
					onClick={retryAction.onClick}
					disabled={retryAction.disabled}
				/>
			{/if}
			{#if supportAction}
				<Button
					variant="secondary"
					label={supportAction.label}
					onClick={supportAction.onClick}
					disabled={supportAction.disabled}
				/>
			{/if}
		</div>
	{/if}
</section>

<style>
	.aui-error-state {
		display: grid;
		place-items: center;
		gap: 1rem;
		padding: 2.5rem 1.5rem;
		text-align: center;
		background: var(--aui-danger-soft);
		border: 1px solid color-mix(in srgb, var(--aui-danger) 18%, white);
		border-radius: var(--aui-radius-lg);
		color: var(--aui-danger);
	}

	.aui-error-state--page {
		min-height: 26rem;
		background:
			radial-gradient(
				circle at top,
				color-mix(in srgb, var(--aui-danger) 12%, transparent),
				transparent 22rem
			),
			var(--aui-surface);
		box-shadow: var(--aui-shadow-sm);
	}

	.aui-error-state__icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 3.5rem;
		height: 3.5rem;
		border-radius: 999px;
		background: white;
		box-shadow: var(--aui-shadow-sm);
	}

	svg {
		width: 1.9rem;
		height: 1.9rem;
	}

	.aui-error-state__copy {
		display: grid;
		gap: 0.45rem;
		max-width: 34rem;
	}

	h2,
	p {
		margin: 0;
	}

	h2 {
		font-size: 1.1rem;
		letter-spacing: -0.02em;
		color: var(--aui-text);
	}

	p {
		font-size: 0.92rem;
		line-height: 1.6;
		color: var(--aui-danger);
	}

	.aui-error-state__actions {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.75rem;
	}
</style>
