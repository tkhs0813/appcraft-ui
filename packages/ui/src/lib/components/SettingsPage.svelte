<script lang="ts">
	import type { ActionConfig, SettingsPageSection } from '../types.js';
	import Button from './Button.svelte';
	import StatusBadge from './StatusBadge.svelte';
	import SubmitBar from './SubmitBar.svelte';

	interface Props {
		title?: string;
		description?: string;
		sections?: SettingsPageSection[];
		primaryAction?: ActionConfig;
		status?: 'idle' | 'dirty' | 'saving' | 'saved' | 'error';
		message?: string;
		onSubmit?: () => void;
		onCancel?: () => void;
	}

	let {
		title = 'Settings',
		description = 'Manage application settings with consistent section structure and save state.',
		sections = [],
		primaryAction,
		status = 'idle',
		message,
		onSubmit,
		onCancel
	}: Props = $props();
</script>

<section class="aui-settings-page aui-root" aria-label={title}>
	<header>
		<div>
			<p class="eyebrow">Settings</p>
			<h2>{title}</h2>
			{#if description}<p>{description}</p>{/if}
		</div>
		{#if primaryAction}<Button
				label={primaryAction.label}
				onClick={primaryAction.onClick}
				disabled={primaryAction.disabled}
				loading={primaryAction.loading}
			/>{/if}
	</header>

	<div class="sections">
		{#each sections as section (section.id)}
			<section class="section" aria-labelledby={`settings-${section.id}`}>
				<div class="section-header">
					<div>
						<h3 id={`settings-${section.id}`}>{section.title}</h3>
						{#if section.description}<p>{section.description}</p>{/if}
					</div>
					{#if section.status}<StatusBadge
							label={section.status}
							tone={section.tone ?? 'neutral'}
						/>{/if}
				</div>
				<div class="items">
					{#each section.items as item (item.id)}
						<div class="item">
							<div>
								<strong>{item.label}</strong>
								{#if item.description}<span>{item.description}</span>{/if}
							</div>
							{#if item.value}<em>{item.value}</em>{/if}
						</div>
					{/each}
				</div>
			</section>
		{:else}
			<section class="section">
				<h3>No settings sections</h3>
				<p>Pass semantic sections instead of loose setting markup.</p>
			</section>
		{/each}
	</div>

	<SubmitBar {status} {message} onSubmit={onSubmit ?? (() => undefined)} {onCancel} />
</section>

<style>
	.aui-settings-page {
		display: grid;
		gap: 1rem;
		font-family: var(--aui-font-sans);
	}

	header,
	.section {
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-xl);
		background: var(--aui-surface);
		box-shadow: var(--aui-shadow-sm);
		padding: 1.1rem;
	}

	header,
	.section-header,
	.item {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1rem;
	}

	.sections,
	.items {
		display: grid;
		gap: 0.85rem;
	}

	.eyebrow,
	h2,
	h3,
	p {
		margin: 0;
	}

	.eyebrow {
		margin-bottom: 0.4rem;
		color: var(--aui-brand);
		font-size: 0.75rem;
		font-weight: 800;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	h2,
	h3,
	strong {
		color: var(--aui-text);
	}

	h2 {
		font-size: 1.35rem;
		letter-spacing: -0.04em;
	}

	h3 {
		font-size: 1rem;
	}

	p,
	span {
		display: block;
		margin-top: 0.25rem;
		color: var(--aui-text-muted);
		font-size: 0.86rem;
		line-height: 1.5;
	}

	.item {
		border-top: 1px solid var(--aui-border);
		padding-top: 0.85rem;
	}

	.item:first-child {
		border-top: 0;
		padding-top: 0;
	}

	em {
		color: var(--aui-text-muted);
		font-size: 0.82rem;
		font-style: normal;
		font-weight: 700;
	}

	@media (max-width: 720px) {
		header,
		.section-header,
		.item {
			flex-direction: column;
		}
	}
</style>
