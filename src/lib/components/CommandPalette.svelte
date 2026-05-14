<script lang="ts">
	export type CommandPaletteAction = {
		id: string;
		label: string;
		group?: string;
		hint?: string;
		disabled?: boolean;
	};
	interface Props {
		open?: boolean;
		query?: string;
		actions?: CommandPaletteAction[];
		onQueryChange?: (query: string) => void;
		onSelect?: (action: CommandPaletteAction) => void;
		onClose?: () => void;
	}
	let {
		open = false,
		query = '',
		actions = [],
		onQueryChange,
		onSelect,
		onClose
	}: Props = $props();
	let filtered = $derived(
		actions.filter((action) => action.label.toLowerCase().includes(query.toLowerCase()))
	);
</script>

{#if open}<div class="aui-command-backdrop aui-root">
		<button class="scrim" type="button" aria-label="Close command palette" onclick={onClose}
		></button>
		<div class="dialog" role="dialog" aria-modal="true" aria-label="Command palette">
			<input
				type="search"
				placeholder="Search commands"
				value={query}
				oninput={(event) => onQueryChange?.(event.currentTarget.value)}
			/>
			<ul>
				{#each filtered as action (action.id)}<li>
						<button type="button" disabled={action.disabled} onclick={() => onSelect?.(action)}
							><span>{action.label}</span>{#if action.hint}<kbd>{action.hint}</kbd>{/if}</button
						>
					</li>{/each}
			</ul>
		</div>
	</div>{/if}

<style>
	.aui-command-backdrop {
		position: fixed;
		inset: 0;
		z-index: 50;
		display: grid;
		place-items: start center;
		padding-top: 12vh;
		font-family: var(--aui-font-sans);
	}
	.scrim {
		position: absolute;
		inset: 0;
		border: 0;
		background: color-mix(in srgb, black 30%, transparent);
	}
	.dialog {
		position: relative;
		width: min(42rem, calc(100vw - 2rem));
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-xl);
		background: var(--aui-surface);
		box-shadow: var(--aui-shadow-md);
		overflow: hidden;
	}
	input {
		width: 100%;
		height: 3.2rem;
		border: 0;
		border-bottom: 1px solid var(--aui-border);
		padding: 0 1rem;
		font: inherit;
	}
	input:focus {
		outline: 0;
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0.5rem;
		display: grid;
		gap: 0.25rem;
	}
	li button {
		width: 100%;
		display: flex;
		justify-content: space-between;
		border: 0;
		border-radius: var(--aui-radius-md);
		background: transparent;
		color: var(--aui-text);
		font: inherit;
		padding: 0.75rem;
		cursor: pointer;
	}
	li button:hover,
	li button:focus-visible {
		background: var(--aui-surface-subtle);
		outline: 0;
	}
	kbd {
		color: var(--aui-text-muted);
		font-size: 0.75rem;
	}
</style>
