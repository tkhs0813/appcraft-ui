<script lang="ts">
	import Button from './Button.svelte';
	interface Props {
		title?: string;
		description?: string;
		accept?: string;
		multiple?: boolean;
		disabled?: boolean;
		onFiles?: (files: File[]) => void;
	}
	let {
		title = 'Upload files',
		description = 'Drop files into a safe, consistent upload surface.',
		accept,
		multiple = true,
		disabled = false,
		onFiles
	}: Props = $props();
</script>

<section class="aui-uploader aui-root">
	<h2>{title}</h2>
	<p>{description}</p>
	<label
		><input
			type="file"
			{accept}
			{multiple}
			{disabled}
			onchange={(event) => onFiles?.(Array.from(event.currentTarget.files ?? []))}
		/><span>Choose files</span></label
	><Button variant="secondary" label="Browse" {disabled} />
</section>

<style>
	.aui-uploader {
		display: grid;
		gap: 0.75rem;
		place-items: center;
		text-align: center;
		border: 1px dashed var(--aui-border-strong);
		border-radius: var(--aui-radius-lg);
		background: var(--aui-surface);
		padding: 2rem;
		font-family: var(--aui-font-sans);
	}
	h2,
	p {
		margin: 0;
	}
	h2 {
		color: var(--aui-text);
	}
	p {
		color: var(--aui-text-muted);
		font-size: 0.88rem;
	}
	label {
		cursor: pointer;
	}
	input {
		position: absolute;
		opacity: 0;
		pointer-events: none;
	}
	span {
		color: var(--aui-brand);
		font-weight: 800;
	}
</style>
