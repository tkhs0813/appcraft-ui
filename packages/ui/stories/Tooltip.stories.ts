import type { Meta, StoryObj } from '@storybook/svelte-vite';
import TooltipStory from '../src/lib/components/TooltipStory.svelte';

const meta = {
	title: 'Foundation/Tooltip',
	component: TooltipStory,
	tags: ['autodocs']
} satisfies Meta<TooltipStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	args: { label: 'Copy API key', triggerLabel: 'Copy' }
};

export const LongText: Story = {
	args: {
		label:
			'Tooltips wrap longer plain-text guidance across multiple lines while staying compact and readable.',
		placement: 'bottom',
		triggerLabel: 'Show guidance'
	}
};
