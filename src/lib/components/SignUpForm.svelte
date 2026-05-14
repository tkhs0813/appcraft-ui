<script lang="ts">
	import type { ActionConfig } from '../types.js';
	import Button from './Button.svelte';
	import TextField from './TextField.svelte';
	interface Props {
		title?: string;
		description?: string;
		primaryAction?: ActionConfig;
		onSubmit?: (values: Record<string, string>) => void;
	}
	let {
		title = 'Sign up',
		description = 'Provider-agnostic sign up form.',
		primaryAction,
		onSubmit
	}: Props = $props();
	let email = $state('');
	let password = $state('');
	let message = $state('');
</script>

<section class="aui-product aui-root" aria-label={title}>
	<header>
		<h2>{title}</h2>
		{#if description}<p>{description}</p>{/if}
	</header>
	<form
		onsubmit={(event) => {
			event.preventDefault();
			onSubmit?.({ email, password, message });
		}}
	>
		<TextField label="Email" type="email" value={email} onInput={(value) => (email = value)} />
		<TextField
			label="Password"
			type="password"
			value={password}
			onInput={(value) => (password = value)}
		/>
		<Button
			label={primaryAction?.label ?? 'Submit'}
			onClick={primaryAction?.onClick}
			loading={primaryAction?.loading}
			disabled={primaryAction?.disabled}
		/>
	</form>
</section>

<style>
	.aui-product {
		display: grid;
		gap: 1rem;
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-lg);
		background: var(--aui-surface);
		box-shadow: var(--aui-shadow-sm);
		padding: 1.1rem;
		font-family: var(--aui-font-sans);
		max-width: 32rem;
	}
	h2,
	p {
		margin: 0;
	}
	h2 {
		color: var(--aui-text);
		font-size: 1.05rem;
	}
	p {
		margin-top: 0.3rem;
		color: var(--aui-text-muted);
		font-size: 0.88rem;
		line-height: 1.55;
	}
	form {
		display: grid;
		gap: 1rem;
	}
</style>
