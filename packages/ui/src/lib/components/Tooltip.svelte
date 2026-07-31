<script lang="ts">
	import { onMount, tick, type Snippet } from 'svelte';

	interface Props {
		label: string;
		placement?: 'top' | 'bottom';
		children: Snippet;
	}

	let { label, placement = 'top', children }: Props = $props();
	let wrapper: HTMLSpanElement;
	let trigger: HTMLElement | null = null;
	let tooltip: HTMLDivElement | null = null;
	let openTimer: ReturnType<typeof setTimeout> | undefined;
	let closeTimer: ReturnType<typeof setTimeout> | undefined;
	let visibilityFrame: number | undefined;
	const uid = $props.id();
	const tooltipId = `${uid}-tooltip`;

	const focusableSelector = [
		'a[href]',
		'button:not([disabled])',
		'input:not([disabled])',
		'select:not([disabled])',
		'textarea:not([disabled])',
		'[tabindex]:not([tabindex="-1"])',
		'[contenteditable="true"]'
	].join(',');

	function clearTimers() {
		if (openTimer) clearTimeout(openTimer);
		if (closeTimer) clearTimeout(closeTimer);
		openTimer = undefined;
		closeTimer = undefined;
		if (visibilityFrame !== undefined) cancelAnimationFrame(visibilityFrame);
		visibilityFrame = undefined;
	}

	function updatePosition() {
		if (!trigger || !tooltip) return;
		const triggerRect = trigger.getBoundingClientRect();
		const tooltipRect = tooltip.getBoundingClientRect();
		const top =
			placement === 'top' ? triggerRect.top - tooltipRect.height - 7 : triggerRect.bottom + 7;
		tooltip.style.left = `${triggerRect.left + triggerRect.width / 2}px`;
		tooltip.style.top = `${top}px`;
	}

	function addDescription() {
		if (!trigger) return;
		const ids = (trigger.getAttribute('aria-describedby') ?? '').split(/\s+/).filter(Boolean);
		if (!ids.includes(tooltipId))
			trigger.setAttribute('aria-describedby', [...ids, tooltipId].join(' '));
	}

	function removeDescription() {
		if (!trigger) return;
		const ids = (trigger.getAttribute('aria-describedby') ?? '')
			.split(/\s+/)
			.filter((id) => id && id !== tooltipId);
		if (ids.length) trigger.setAttribute('aria-describedby', ids.join(' '));
		else trigger.removeAttribute('aria-describedby');
	}

	async function open() {
		clearTimers();
		if (!trigger || tooltip) return;
		tooltip = document.createElement('div');
		tooltip.id = tooltipId;
		tooltip.className = 'aui-tooltip__bubble aui-root';
		tooltip.setAttribute('role', 'tooltip');
		tooltip.dataset.placement = placement;
		tooltip.textContent = label;
		document.body.appendChild(tooltip);
		addDescription();
		window.addEventListener('resize', updatePosition);
		window.addEventListener('scroll', updatePosition, true);
		await tick();
		updatePosition();
		visibilityFrame = requestAnimationFrame(() => {
			tooltip?.classList.add('aui-tooltip__bubble--visible');
			visibilityFrame = undefined;
		});
	}

	function close() {
		clearTimers();
		window.removeEventListener('resize', updatePosition);
		window.removeEventListener('scroll', updatePosition, true);
		removeDescription();
		tooltip?.remove();
		tooltip = null;
	}

	function scheduleOpen() {
		clearTimers();
		openTimer = setTimeout(open, 400);
	}

	function scheduleClose() {
		clearTimers();
		closeTimer = setTimeout(close, 100);
	}

	function handleFocusIn(event: FocusEvent) {
		if (event.target === trigger) void open();
	}

	function handleFocusOut(event: FocusEvent) {
		if (event.target === trigger) close();
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') close();
	}

	$effect(() => {
		if (tooltip) {
			tooltip.textContent = label;
			tooltip.dataset.placement = placement;
			updatePosition();
		}
	});

	onMount(() => {
		const focusableChildren = wrapper.querySelectorAll<HTMLElement>(focusableSelector);
		trigger = focusableChildren.length === 1 ? focusableChildren[0] : null;

		return close;
	});
</script>

<span
	class="aui-tooltip aui-root"
	role="presentation"
	bind:this={wrapper}
	onmouseenter={scheduleOpen}
	onmouseleave={scheduleClose}
	onfocusin={handleFocusIn}
	onfocusout={handleFocusOut}
	onkeydown={handleKeydown}><span>{@render children()}</span></span
>

<style>
	.aui-tooltip {
		display: inline-flex;
	}

	.aui-tooltip > span:first-child:focus-within {
		border-radius: var(--aui-radius-sm);
		outline: 3px solid color-mix(in srgb, var(--aui-brand) 24%, transparent);
		outline-offset: 2px;
	}

	:global(.aui-tooltip__bubble) {
		position: fixed;
		z-index: 1000;
		box-sizing: border-box;
		width: max-content;
		max-width: min(16rem, calc(100vw - 1rem));
		transform: translateX(-50%);
		border-radius: var(--aui-radius-md);
		background: #111827;
		color: white;
		font-family: var(--aui-font-sans);
		font-size: 0.78rem;
		font-weight: 750;
		line-height: 1.3;
		padding: 0.4rem 0.55rem;
		opacity: 0;
		pointer-events: none;
		transition: opacity 0.12s ease;
		white-space: normal;
		overflow-wrap: break-word;
	}

	:global(.aui-tooltip__bubble--visible) {
		opacity: 1;
	}

	@media (prefers-reduced-motion: reduce) {
		:global(.aui-tooltip__bubble) {
			transition: none;
		}
	}
</style>
