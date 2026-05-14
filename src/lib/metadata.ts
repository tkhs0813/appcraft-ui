import type { ComponentMetadata } from './types.js';

export const componentMetadata: ComponentMetadata[] = [
	{
		name: 'Button',
		category: 'primitive',
		description: 'Semantic action button with fixed variants, sizes, loading, and disabled states.',
		useCases: ['primary actions', 'secondary actions', 'destructive actions'],
		forbiddenPatterns: ['Do not pass arbitrary classes.', 'Do not create custom button styling.']
	},
	{
		name: 'PageHeader',
		category: 'pattern',
		description: 'Consistent SaaS page heading with optional primary and secondary actions.',
		useCases: ['dashboard pages', 'settings pages', 'admin pages'],
		forbiddenPatterns: ['Do not hand-roll page title/action layouts when this component fits.']
	},
	{
		name: 'UserManagement',
		category: 'product',
		description:
			'Complete team member management interface with roles, status, empty, loading, and error states.',
		useCases: ['team settings page', 'workspace member management', 'admin user management'],
		forbiddenPatterns: [
			'Do not recreate this UI manually with tables and buttons.',
			'Do not pass custom CSS classes.',
			'Use built-in loading, empty, and error states.'
		]
	}
];
