import type { Preview } from '@storybook/svelte-vite';
import '../packages/ui/src/lib/styles.css';

const preview: Preview = {
	parameters: {
		layout: 'centered'
	}
};

export default preview;
