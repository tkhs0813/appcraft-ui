<script lang="ts">
	interface Props {
		title?: string;
		value?: unknown;
		collapsed?: boolean;
	}
	let { title = 'JSON', value = {}, collapsed = false }: Props = $props();
	let formatted = $derived(JSON.stringify(value, null, 2));
</script>

<section class="json">
	<header>
		<h3>{title}</h3>
		{#if collapsed}<span>collapsed</span>{/if}
	</header>
	{#if !collapsed}<pre>{formatted}</pre>{/if}
</section>

<style>
	.json {
		border: 1px solid var(--ac-border, #d1d5db);
		border-radius: 1rem;
		background: #0f172a;
		color: #e5e7eb;
		overflow: hidden;
	}
	header {
		display: flex;
		justify-content: space-between;
		padding: 0.75rem 1rem;
		border-bottom: 1px solid rgb(255 255 255 / 0.12);
	}
	h3 {
		margin: 0;
		font-size: 0.95rem;
	}
	span {
		color: #93c5fd;
	}
	pre {
		margin: 0;
		padding: 1rem;
		overflow: auto;
		font-size: 0.85rem;
		line-height: 1.55;
	}
</style>
