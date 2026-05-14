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
	},
	{
		name: 'Alert',
		category: 'pattern',
		description:
			'Opinionated Alert component for AI-built applications with semantic data and callbacks.',
		useCases: ['alert', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, and callbacks.'
		]
	},
	{
		name: 'Banner',
		category: 'pattern',
		description:
			'Opinionated Banner component for AI-built applications with semantic data and callbacks.',
		useCases: ['banner', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, and callbacks.'
		]
	},
	{
		name: 'ToastViewport',
		category: 'pattern',
		description:
			'Opinionated ToastViewport component for AI-built applications with semantic data and callbacks.',
		useCases: ['toastviewport', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, and callbacks.'
		]
	},
	{
		name: 'Tabs',
		category: 'pattern',
		description:
			'Opinionated Tabs component for AI-built applications with semantic data and callbacks.',
		useCases: ['tabs', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, and callbacks.'
		]
	},
	{
		name: 'Breadcrumbs',
		category: 'pattern',
		description:
			'Opinionated Breadcrumbs component for AI-built applications with semantic data and callbacks.',
		useCases: ['breadcrumbs', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, and callbacks.'
		]
	},
	{
		name: 'CardGrid',
		category: 'pattern',
		description:
			'Opinionated CardGrid component for AI-built applications with semantic data and callbacks.',
		useCases: ['cardgrid', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, and callbacks.'
		]
	},
	{
		name: 'MetricCard',
		category: 'pattern',
		description:
			'Opinionated MetricCard component for AI-built applications with semantic data and callbacks.',
		useCases: ['metriccard', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, and callbacks.'
		]
	},
	{
		name: 'ActivityFeed',
		category: 'pattern',
		description:
			'Opinionated ActivityFeed component for AI-built applications with semantic data and callbacks.',
		useCases: ['activityfeed', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, and callbacks.'
		]
	},
	{
		name: 'Timeline',
		category: 'pattern',
		description:
			'Opinionated Timeline component for AI-built applications with semantic data and callbacks.',
		useCases: ['timeline', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, and callbacks.'
		]
	},
	{
		name: 'CommandPalette',
		category: 'pattern',
		description:
			'Opinionated CommandPalette component for AI-built applications with semantic data and callbacks.',
		useCases: ['commandpalette', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not hand-roll command palette keyboard interactions.',
			'Do not expose arbitrary styling hooks.',
			'Use grouped actions and callbacks.'
		]
	},
	{
		name: 'ResourceList',
		category: 'product',
		description:
			'Opinionated ResourceList component for AI-built applications with semantic data and callbacks.',
		useCases: ['resource list', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not compose resource CRUD lists from loose cards and buttons.',
			'Use built-in empty and action states.',
			'Keep resource actions semantic.'
		]
	},
	{
		name: 'ResourceGrid',
		category: 'product',
		description:
			'Opinionated ResourceGrid component for AI-built applications with semantic data and callbacks.',
		useCases: ['resourcegrid', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, and callbacks.'
		]
	},
	{
		name: 'ResourceDetail',
		category: 'product',
		description:
			'Opinionated ResourceDetail component for AI-built applications with semantic data and callbacks.',
		useCases: ['resourcedetail', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, and callbacks.'
		]
	},
	{
		name: 'FileUploader',
		category: 'product',
		description:
			'Opinionated FileUploader component for AI-built applications with semantic data and callbacks.',
		useCases: ['fileuploader', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, and callbacks.'
		]
	},
	{
		name: 'FileList',
		category: 'product',
		description:
			'Opinionated FileList component for AI-built applications with semantic data and callbacks.',
		useCases: ['file list', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, and callbacks.'
		]
	},
	{
		name: 'ApiKeyManager',
		category: 'product',
		description:
			'Opinionated ApiKeyManager component for AI-built applications with semantic data and callbacks.',
		useCases: ['apikey manager', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, and callbacks.'
		]
	},
	{
		name: 'IntegrationList',
		category: 'product',
		description:
			'Opinionated IntegrationList component for AI-built applications with semantic data and callbacks.',
		useCases: ['integration list', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, and callbacks.'
		]
	},
	{
		name: 'JobRunList',
		category: 'product',
		description:
			'Opinionated JobRunList component for AI-built applications with semantic data and callbacks.',
		useCases: ['jobrun list', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, and callbacks.'
		]
	},
	{
		name: 'LogViewer',
		category: 'product',
		description:
			'Opinionated LogViewer component for AI-built applications with semantic data and callbacks.',
		useCases: ['logviewer', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, and callbacks.'
		]
	},
	{
		name: 'InspectorPanel',
		category: 'product',
		description:
			'Opinionated InspectorPanel component for AI-built applications with semantic data and callbacks.',
		useCases: ['inspector panel', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, and callbacks.'
		]
	},
	{
		name: 'ChatPanel',
		category: 'product',
		description:
			'Opinionated ChatPanel component for AI-built applications with semantic data and callbacks.',
		useCases: ['chat panel', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not bake in a specific LLM provider.',
			'Do not hand-roll message layouts.',
			'Use provider-agnostic data and callbacks.'
		]
	},
	{
		name: 'ConversationList',
		category: 'product',
		description:
			'Opinionated ConversationList component for AI-built applications with semantic data and callbacks.',
		useCases: ['conversation list', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, and callbacks.'
		]
	},
	{
		name: 'PromptComposer',
		category: 'product',
		description:
			'Opinionated PromptComposer component for AI-built applications with semantic data and callbacks.',
		useCases: ['promptcomposer', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, and callbacks.'
		]
	},
	{
		name: 'NotificationCenter',
		category: 'product',
		description:
			'Opinionated NotificationCenter component for AI-built applications with semantic data and callbacks.',
		useCases: ['notificationcenter', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, and callbacks.'
		]
	},
	{
		name: 'KanbanBoard',
		category: 'product',
		description:
			'Opinionated KanbanBoard component for AI-built applications with semantic data and callbacks.',
		useCases: ['kanbanboard', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, and callbacks.'
		]
	},
	{
		name: 'CalendarList',
		category: 'product',
		description:
			'Opinionated CalendarList component for AI-built applications with semantic data and callbacks.',
		useCases: ['calendar list', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, and callbacks.'
		]
	},
	{
		name: 'ContentEditorShell',
		category: 'product',
		description:
			'Opinionated ContentEditorShell component for AI-built applications with semantic data and callbacks.',
		useCases: ['contenteditorshell', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, and callbacks.'
		]
	},
	{
		name: 'MediaGallery',
		category: 'product',
		description:
			'Opinionated MediaGallery component for AI-built applications with semantic data and callbacks.',
		useCases: ['mediagallery', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, and callbacks.'
		]
	},
	{
		name: 'KnowledgeBaseLayout',
		category: 'product',
		description:
			'Opinionated KnowledgeBaseLayout component for AI-built applications with semantic data and callbacks.',
		useCases: ['knowledgebaselayout', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, and callbacks.'
		]
	},
	{
		name: 'DocumentList',
		category: 'product',
		description:
			'Opinionated DocumentList component for AI-built applications with semantic data and callbacks.',
		useCases: ['document list', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, and callbacks.'
		]
	},
	{
		name: 'SignInForm',
		category: 'product',
		description:
			'Opinionated SignInForm component for AI-built applications with semantic data and callbacks.',
		useCases: ['signin form', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, and callbacks.'
		]
	},
	{
		name: 'SignUpForm',
		category: 'product',
		description:
			'Opinionated SignUpForm component for AI-built applications with semantic data and callbacks.',
		useCases: ['signup form', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, and callbacks.'
		]
	},
	{
		name: 'ForgotPasswordForm',
		category: 'product',
		description:
			'Opinionated ForgotPasswordForm component for AI-built applications with semantic data and callbacks.',
		useCases: ['forgotpassword form', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, and callbacks.'
		]
	},
	{
		name: 'ResetPasswordForm',
		category: 'product',
		description:
			'Opinionated ResetPasswordForm component for AI-built applications with semantic data and callbacks.',
		useCases: ['resetpassword form', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, and callbacks.'
		]
	},
	{
		name: 'ProfileSettings',
		category: 'product',
		description:
			'Opinionated ProfileSettings component for AI-built applications with semantic data and callbacks.',
		useCases: ['profilesettings', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, and callbacks.'
		]
	},
	{
		name: 'WorkspaceSettings',
		category: 'product',
		description:
			'Opinionated WorkspaceSettings component for AI-built applications with semantic data and callbacks.',
		useCases: ['workspacesettings', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, and callbacks.'
		]
	},
	{
		name: 'BillingSettings',
		category: 'product',
		description:
			'Opinionated BillingSettings component for AI-built applications with semantic data and callbacks.',
		useCases: ['billingsettings', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, and callbacks.'
		]
	},
	{
		name: 'PricingTable',
		category: 'product',
		description:
			'Opinionated PricingTable component for AI-built applications with semantic data and callbacks.',
		useCases: ['pricingtable', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not hard-code billing provider logic inside UI.',
			'Do not hand-roll pricing cards.',
			'Use provider-agnostic plan data and callbacks.'
		]
	},
	{
		name: 'CheckoutSummary',
		category: 'product',
		description:
			'Opinionated CheckoutSummary component for AI-built applications with semantic data and callbacks.',
		useCases: ['checkoutsummary', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, and callbacks.'
		]
	},
	{
		name: 'OrderList',
		category: 'product',
		description:
			'Opinionated OrderList component for AI-built applications with semantic data and callbacks.',
		useCases: ['order list', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, and callbacks.'
		]
	}
];
