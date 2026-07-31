import { cleanup, fireEvent, render } from '@testing-library/svelte';
import { afterEach, describe, expect, it, vi } from 'vitest';
import TooltipTest from './Tooltip.test.svelte';

describe('Tooltip', () => {
	afterEach(() => {
		cleanup();
		vi.useRealTimers();
	});

	it('opens after the hover delay and closes after the leave delay', async () => {
		vi.useFakeTimers();
		const { getByRole } = render(TooltipTest);
		const trigger = getByRole('button', { name: 'Save changes' });

		await fireEvent.mouseEnter(trigger.parentElement!.parentElement!);
		await vi.advanceTimersByTimeAsync(399);
		expect(document.body.querySelector('[role="tooltip"]')).toBeNull();
		await vi.advanceTimersByTimeAsync(1);

		const tooltip = getByRole('tooltip');
		expect(tooltip.parentElement).toBe(document.body);
		expect(trigger.getAttribute('aria-describedby')).toBe(tooltip.id);
		expect(trigger.getAttribute('aria-label')).toBe('Save changes');

		await fireEvent.mouseLeave(trigger.parentElement!.parentElement!);
		await vi.advanceTimersByTimeAsync(99);
		expect(document.body.contains(tooltip)).toBe(true);
		await vi.advanceTimersByTimeAsync(1);
		expect(document.body.contains(tooltip)).toBe(false);
		expect(trigger.hasAttribute('aria-describedby')).toBe(false);
	});

	it('opens immediately on focus and closes immediately on blur', async () => {
		const { getByRole } = render(TooltipTest);
		const trigger = getByRole('button', { name: 'Save changes' });

		await fireEvent.focusIn(trigger);
		const tooltip = getByRole('tooltip');
		expect(trigger.getAttribute('aria-describedby')).toBe(tooltip.id);

		await fireEvent.focusOut(trigger);
		expect(document.body.contains(tooltip)).toBe(false);
	});

	it('preserves existing descriptions and does not toggle on click', async () => {
		vi.useFakeTimers();
		const { getByRole } = render(TooltipTest);
		const trigger = getByRole('button', { name: 'Save changes' });
		trigger.setAttribute('aria-describedby', 'existing-description');

		await fireEvent.click(trigger);
		await vi.runAllTimersAsync();
		expect(document.body.querySelector('[role="tooltip"]')).toBeNull();

		await fireEvent.focusIn(trigger);
		const tooltip = getByRole('tooltip');
		expect(trigger.getAttribute('aria-describedby')).toBe(`existing-description ${tooltip.id}`);

		await fireEvent.focusOut(trigger);
		expect(trigger.getAttribute('aria-describedby')).toBe('existing-description');
	});

	it('uses top placement by default', async () => {
		const { getByRole } = render(TooltipTest);
		const trigger = getByRole('button', { name: 'Save changes' });

		await fireEvent.focusIn(trigger);
		expect(getByRole('tooltip').dataset.placement).toBe('top');
	});

	it('closes immediately on Escape', async () => {
		const { getByRole } = render(TooltipTest);
		const trigger = getByRole('button', { name: 'Save changes' });

		await fireEvent.focusIn(trigger);
		const tooltip = getByRole('tooltip');
		await fireEvent.keyDown(trigger, { key: 'Escape' });

		expect(document.body.contains(tooltip)).toBe(false);
		expect(trigger.hasAttribute('aria-describedby')).toBe(false);
	});

	it('removes pending timers, listeners, ARIA state, and the portal on unmount', async () => {
		vi.useFakeTimers();
		const removeEventListener = vi.spyOn(window, 'removeEventListener');
		const { getByRole, unmount } = render(TooltipTest);
		const trigger = getByRole('button', { name: 'Save changes' });

		await fireEvent.focusIn(trigger);
		expect(document.body.contains(getByRole('tooltip'))).toBe(true);
		unmount();
		await vi.runAllTimersAsync();

		expect(document.body.querySelector('[role="tooltip"]')).toBeNull();
		expect(trigger.hasAttribute('aria-describedby')).toBe(false);
		expect(removeEventListener).toHaveBeenCalledWith('resize', expect.any(Function));
		expect(removeEventListener).toHaveBeenCalledWith('scroll', expect.any(Function), true);
	});

	it('cancels a pending hover open when unmounted', async () => {
		vi.useFakeTimers();
		const { getByRole, unmount } = render(TooltipTest);
		const trigger = getByRole('button', { name: 'Save changes' });

		await fireEvent.mouseEnter(trigger.parentElement!.parentElement!);
		unmount();
		await vi.runAllTimersAsync();

		expect(document.body.querySelector('[role="tooltip"]')).toBeNull();
	});
});
