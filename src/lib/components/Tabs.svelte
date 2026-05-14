<script lang="ts">
	export type TabItem = { id: string; label: string; description?: string; disabled?: boolean };
	interface Props {
		tabs: TabItem[];
		activeId?: string;
		onChange?: (id: string) => void;
	}
	let { tabs, activeId = tabs[0]?.id, onChange }: Props = $props();
</script>

<div class="aui-tabs aui-root">
	<div role="tablist" aria-label="Tabs">
		{#each tabs as tab (tab.id)}
			<button
				type="button"
				role="tab"
				aria-selected={tab.id === activeId}
				disabled={tab.disabled}
				onclick={() => onChange?.(tab.id)}>{tab.label}</button
			>
		{/each}
	</div>
	{#each tabs as tab (tab.id)}
		{#if tab.id === activeId}<section role="tabpanel">
				<h3>{tab.label}</h3>
				{#if tab.description}<p>{tab.description}</p>{/if}
			</section>{/if}
	{/each}
</div>

<style>
	.aui-tabs {
		display: grid;
		gap: 1rem;
		font-family: var(--aui-font-sans);
	}
	[role='tablist'] {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		border-bottom: 1px solid var(--aui-border);
	}
	button {
		border: 0;
		border-bottom: 2px solid transparent;
		background: transparent;
		color: var(--aui-text-muted);
		font: inherit;
		font-weight: 750;
		padding: 0.75rem 0.8rem;
		cursor: pointer;
	}
	button[aria-selected='true'] {
		color: var(--aui-brand);
		border-color: var(--aui-brand);
	}
	button:focus-visible {
		outline: 3px solid color-mix(in srgb, var(--aui-brand) 22%, transparent);
		outline-offset: 2px;
	}
	section {
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-lg);
		background: var(--aui-surface);
		padding: 1rem;
	}
	h3,
	p {
		margin: 0;
	}
	p {
		margin-top: 0.35rem;
		color: var(--aui-text-muted);
		line-height: 1.55;
	}
</style>
