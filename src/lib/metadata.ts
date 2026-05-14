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
		description: 'Consistent application page heading with optional primary and secondary actions.',
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
			'Responsive application shell with product branding, workspace context, navigation, top bar, and user affordance.',
		useCases: ['dashboard layout', 'admin console shell', 'workspace application navigation'],
		forbiddenPatterns: [
			'Do not hand-roll application navigation shells.',
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
	},
	{
		name: 'TextField',
		category: 'primitive',
		description:
			'Labeled text input with description, validation error, required, disabled, and readonly states.',
		useCases: ['forms', 'settings screens', 'search inputs', 'profile editing'],
		forbiddenPatterns: [
			'Do not hand-roll labeled inputs.',
			'Do not pass arbitrary classes.',
			'Use error and description props for field help.'
		]
	},
	{
		name: 'TextareaField',
		category: 'primitive',
		description: 'Labeled multiline text input with help text and validation error states.',
		useCases: ['content editing', 'notes', 'descriptions', 'prompt inputs'],
		forbiddenPatterns: [
			'Do not hand-roll multiline form fields.',
			'Do not separate labels from controls.',
			'Use built-in validation messaging.'
		]
	},
	{
		name: 'SelectField',
		category: 'primitive',
		description:
			'Labeled select control with options, placeholder, help text, and validation error states.',
		useCases: ['settings forms', 'filters', 'role selection', 'configuration screens'],
		forbiddenPatterns: [
			'Do not hand-roll select fields.',
			'Do not omit labels for selects.',
			'Use SelectOption data.'
		]
	},
	{
		name: 'SwitchField',
		category: 'primitive',
		description:
			'Accessible switch control with label, description, hidden form value, and callback.',
		useCases: ['feature toggles', 'preferences', 'notification settings'],
		forbiddenPatterns: [
			'Do not use unlabeled checkboxes for toggles.',
			'Do not recreate switch interactions.',
			'Use semantic checked state.'
		]
	},
	{
		name: 'FormSection',
		category: 'pattern',
		description:
			'Structured form section with heading, description, status, body content, and optional action.',
		useCases: ['settings screens', 'configuration forms', 'profile sections'],
		forbiddenPatterns: [
			'Do not compose settings forms from loose divs.',
			'Do not hand-roll section headers and footers.',
			'Keep form controls grouped semantically.'
		]
	},
	{
		name: 'SubmitBar',
		category: 'pattern',
		description:
			'Sticky-friendly submit action bar with dirty/saving/saved/error messaging and actions.',
		useCases: ['settings forms', 'edit screens', 'multi-section forms'],
		forbiddenPatterns: [
			'Do not scatter submit buttons across form layouts.',
			'Do not hide unsaved-change state.',
			'Use saving and status states.'
		]
	},
	{
		name: 'StatusBadge',
		category: 'primitive',
		description: 'Semantic status badge with neutral, brand, success, warning, and danger tones.',
		useCases: ['tables', 'resource lists', 'workflow states', 'account status'],
		forbiddenPatterns: [
			'Do not invent custom badge colors.',
			'Do not use raw text for important statuses.',
			'Use semantic tones.'
		]
	},
	{
		name: 'DataTable',
		category: 'pattern',
		description:
			'Accessible data table with columns, rows, loading, empty, error, sorting hooks, badges, and row actions.',
		useCases: ['resource lists', 'admin tables', 'developer tool tables', 'content inventories'],
		forbiddenPatterns: [
			'Do not recreate sortable data tables by hand.',
			'Do not forget loading, empty, and error states.',
			'Use rowActions for table actions.'
		]
	},
	{
		name: 'SearchFilterBar',
		category: 'pattern',
		description:
			'Combined search, filters, result count, and clear action for list and table screens.',
		useCases: ['resource browsing', 'table filters', 'content search', 'developer tools'],
		forbiddenPatterns: [
			'Do not scatter search and filter controls across the page.',
			'Do not hand-roll filter layouts.',
			'Use activeFilters for controlled state.'
		]
	},
	{
		name: 'Pagination',
		category: 'pattern',
		description:
			'Accessible pagination controls with previous/next and compact page number navigation.',
		useCases: ['tables', 'resource lists', 'search results', 'activity feeds'],
		forbiddenPatterns: [
			'Do not hand-roll pagination controls.',
			'Do not omit aria labels for pagination.',
			'Use onPageChange for navigation.'
		]
	}
];
