<script lang="ts">
	interface Props {
		name: string;
		src?: string;
		size?: 'sm' | 'md' | 'lg';
		status?: 'online' | 'offline' | 'busy';
	}
	let { name, src, size = 'md', status }: Props = $props();
	let initials = $derived(
		name
			.split(/\s+/)
			.filter(Boolean)
			.slice(0, 2)
			.map((part) => part[0]?.toUpperCase())
			.join('')
	);
</script>

<span class="aui-avatar aui-root" data-size={size} aria-label={name}
	>{#if src}<img {src} alt="" />{:else}<span>{initials}</span>{/if}{#if status}<i
			data-status={status}
			aria-label={status}
		></i>{/if}</span
>

<style>
	.aui-avatar {
		position: relative;
		display: inline-grid;
		place-items: center;
		border-radius: 999px;
		background: color-mix(in srgb, var(--aui-brand) 12%, var(--aui-surface));
		border: 1px solid var(--aui-border);
		color: var(--aui-brand);
		font-family: var(--aui-font-sans);
		font-weight: 900;
		overflow: visible;
	}
	.aui-avatar[data-size='sm'] {
		width: 2rem;
		height: 2rem;
		font-size: 0.75rem;
	}
	.aui-avatar[data-size='md'] {
		width: 2.6rem;
		height: 2.6rem;
		font-size: 0.9rem;
	}
	.aui-avatar[data-size='lg'] {
		width: 3.3rem;
		height: 3.3rem;
		font-size: 1.05rem;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: inherit;
	}
	i {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 0.65rem;
		height: 0.65rem;
		border: 2px solid var(--aui-surface);
		border-radius: 999px;
		background: var(--aui-text-muted);
	}
	i[data-status='online'] {
		background: #059669;
	}
	i[data-status='busy'] {
		background: #dc2626;
	}
</style>
