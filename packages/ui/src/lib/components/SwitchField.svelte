<script lang="ts">
	interface Props {
		label: string;
		checked?: boolean;
		description?: string;
		disabled?: boolean;
		name?: string;
		onChange?: (checked: boolean) => void;
	}
	let { label, checked = false, description, disabled = false, name, onChange }: Props = $props();
	const fieldId = `aui-switch-field-${Math.random().toString(36).slice(2)}`;
	const labelId = `${fieldId}-label`;
</script>

<div class="aui-switch-field aui-root">
	<div class="aui-switch-field__copy">
		<label id={labelId} for={fieldId}>{label}</label>
		{#if description}<p>{description}</p>{/if}
	</div>
	<button
		id={fieldId}
		class="aui-switch"
		class:aui-switch--checked={checked}
		type="button"
		role="switch"
		aria-checked={checked}
		aria-labelledby={labelId}
		{disabled}
		onclick={() => onChange?.(!checked)}
	>
		<span aria-hidden="true"></span>
	</button>
	{#if name}<input type="hidden" {name} value={checked ? 'true' : 'false'} />{/if}
</div>

<style>
	.aui-switch-field {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		font-family: var(--aui-font-sans);
	}
	.aui-switch-field__copy {
		min-width: 0;
	}
	label {
		display: block;
		font-size: 0.9rem;
		font-weight: 700;
		color: var(--aui-text);
	}
	p {
		margin: 0.25rem 0 0;
		font-size: 0.82rem;
		line-height: 1.45;
		color: var(--aui-text-muted);
	}
	.aui-switch {
		position: relative;
		flex: none;
		width: 2.7rem;
		height: 1.55rem;
		border: 1px solid var(--aui-border-strong);
		border-radius: 999px;
		background: var(--aui-surface-subtle);
		cursor: pointer;
		transition:
			background 120ms ease,
			border-color 120ms ease;
	}
	.aui-switch span {
		position: absolute;
		top: 0.18rem;
		left: 0.18rem;
		width: 1.08rem;
		height: 1.08rem;
		border-radius: 999px;
		background: white;
		box-shadow: var(--aui-shadow-sm);
		transition: transform 120ms ease;
	}
	.aui-switch--checked {
		background: var(--aui-brand);
		border-color: var(--aui-brand);
	}
	.aui-switch--checked span {
		transform: translateX(1.13rem);
	}
	.aui-switch:focus-visible {
		outline: 3px solid color-mix(in srgb, var(--aui-brand) 22%, transparent);
		outline-offset: 2px;
	}
	.aui-switch:disabled {
		cursor: not-allowed;
		opacity: 0.62;
	}
</style>
