<script lang="ts">
	interface Props {
		label: string;
		description?: string;
		checked?: boolean;
		disabled?: boolean;
		error?: string;
		onChange?: (checked: boolean) => void;
	}
	let { label, description, checked = false, disabled = false, error, onChange }: Props = $props();
</script>

<label class="aui-checkbox aui-root" data-disabled={disabled}
	><input
		type="checkbox"
		{checked}
		{disabled}
		onchange={(event) => onChange?.(event.currentTarget.checked)}
	/><span
		><strong>{label}</strong>{#if description}<small>{description}</small>{/if}{#if error}<em
				>{error}</em
			>{/if}</span
	></label
>

<style>
	.aui-checkbox {
		display: flex;
		align-items: flex-start;
		gap: 0.7rem;
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-md);
		background: var(--aui-surface);
		padding: 0.85rem;
		font-family: var(--aui-font-sans);
		cursor: pointer;
	}
	input {
		width: 1rem;
		height: 1rem;
		margin: 0.15rem 0 0;
		accent-color: var(--aui-brand);
	}
	strong {
		display: block;
		color: var(--aui-text);
		font-size: 0.88rem;
	}
	small,
	em {
		display: block;
		margin-top: 0.2rem;
		color: var(--aui-text-muted);
		font-size: 0.8rem;
		line-height: 1.45;
	}
	em {
		font-style: normal;
		color: #b91c1c;
	}
	[data-disabled='true'] {
		opacity: 0.6;
		cursor: not-allowed;
	}
</style>
