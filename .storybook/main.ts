import type { StorybookConfig } from '@storybook/svelte-vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

const config: StorybookConfig = {
	stories: ['../packages/ui/stories/**/*.stories.ts'],
	addons: ['@storybook/addon-a11y'],
	framework: '@storybook/svelte-vite',
	viteFinal(config) {
		config.plugins ??= [];
		config.plugins.unshift(svelte());
		return config;
	}
};

export default config;
