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
	},
	{
		name: 'AppShell',
		category: 'pattern',
		description:
			'Responsive SaaS application shell with product branding, workspace context, navigation, top bar, and user affordance.',
		useCases: ['dashboard layout', 'admin console shell', 'workspace application navigation'],
		forbiddenPatterns: [
			'Do not hand-roll SaaS navigation shells.',
			'Do not expose layout class overrides.',
			'Pass semantic navigation items and content only.'
		]
	},
	{
		name: 'EmptyState',
		category: 'pattern',
		description: 'Polished empty state panel with semantic title, description, tone, and actions.',
		useCases: ['empty list', 'first-run onboarding prompt', 'zero data dashboard panel'],
		forbiddenPatterns: [
			'Do not render ad-hoc empty panels.',
			'Do not pass arbitrary icons or custom CSS classes.',
			'Use semantic actions instead of composing loose buttons.'
		]
	},
	{
		name: 'ErrorState',
		category: 'pattern',
		description:
			'Accessible error state with severity, clear message, retry action, and support action.',
		useCases: ['failed data load', 'page-level error', 'recoverable dashboard panel error'],
		forbiddenPatterns: [
			'Do not hide retry actions in plain text.',
			'Do not render unstructured error strings.',
			'Use retryAction and supportAction for recovery paths.'
		]
	},
	{
		name: 'ConfirmDialog',
		category: 'pattern',
		description:
			'Accessible confirmation dialog for destructive or high-impact product actions with loading and escape handling.',
		useCases: [
			'delete confirmation',
			'remove member confirmation',
			'billing or admin destructive flow'
		],
		forbiddenPatterns: [
			'Do not use window.confirm for destructive product flows.',
			'Do not hand-roll modal overlays for confirmations.',
			'Use confirming state for async destructive actions.'
		]
	}
];
