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
	},
	{
		name: 'IconButton',
		category: 'primitive',
		description:
			'Icon-only action button with accessible label, semantic variants, loading, and disabled states.',
		useCases: ['toolbar actions', 'compact card actions', 'copy and reveal controls'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this atom from loose HTML when this semantic primitive fits.',
			'Use semantic props and callbacks instead of styling escape hatches.'
		]
	},
	{
		name: 'Badge',
		category: 'primitive',
		description: 'Small semantic label for categories, tags, and compact statuses.',
		useCases: ['tags', 'labels', 'compact statuses'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this atom from loose HTML when this semantic primitive fits.',
			'Use semantic props and callbacks instead of styling escape hatches.'
		]
	},
	{
		name: 'Avatar',
		category: 'primitive',
		description: 'User or agent avatar with initials, image, size, and presence status.',
		useCases: ['user identity', 'agent identity', 'team lists'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this atom from loose HTML when this semantic primitive fits.',
			'Use semantic props and callbacks instead of styling escape hatches.'
		]
	},
	{
		name: 'Spinner',
		category: 'primitive',
		description: 'Accessible loading spinner for inline and compact loading states.',
		useCases: ['inline loading', 'button loading', 'panel loading'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this atom from loose HTML when this semantic primitive fits.',
			'Use semantic props and callbacks instead of styling escape hatches.'
		]
	},
	{
		name: 'ProgressBar',
		category: 'primitive',
		description: 'Accessible determinate progress bar with optional visible percentage.',
		useCases: ['upload progress', 'workflow progress', 'usage progress'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this atom from loose HTML when this semantic primitive fits.',
			'Use semantic props and callbacks instead of styling escape hatches.'
		]
	},
	{
		name: 'Skeleton',
		category: 'primitive',
		description: 'Loading placeholder for text, blocks, and avatar-like circular content.',
		useCases: ['loading placeholders', 'optimistic UI', 'content skeletons'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this atom from loose HTML when this semantic primitive fits.',
			'Use semantic props and callbacks instead of styling escape hatches.'
		]
	},
	{
		name: 'Tooltip',
		category: 'primitive',
		description: 'Small contextual helper surface for controls and dense UI.',
		useCases: ['icon explanation', 'keyboard hint', 'dense table help'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this atom from loose HTML when this semantic primitive fits.',
			'Use semantic props and callbacks instead of styling escape hatches.'
		]
	},
	{
		name: 'Separator',
		category: 'primitive',
		description: 'Semantic visual separator with horizontal, vertical, and labeled modes.',
		useCases: ['section separation', 'toolbar grouping', 'settings groups'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this atom from loose HTML when this semantic primitive fits.',
			'Use semantic props and callbacks instead of styling escape hatches.'
		]
	},
	{
		name: 'CheckboxField',
		category: 'primitive',
		description: 'Labeled checkbox field with description, disabled, error, and callback states.',
		useCases: ['forms', 'preferences', 'feature toggles'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this atom from loose HTML when this semantic primitive fits.',
			'Use semantic props and callbacks instead of styling escape hatches.'
		]
	},
	{
		name: 'RadioGroupField',
		category: 'primitive',
		description:
			'Labeled radio option group with descriptions, disabled options, errors, and callback state.',
		useCases: ['forms', 'settings choices', 'configuration'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this atom from loose HTML when this semantic primitive fits.',
			'Use semantic props and callbacks instead of styling escape hatches.'
		]
	},
	{
		name: 'NumberField',
		category: 'primitive',
		description:
			'Labeled numeric input with min, max, step, help text, errors, and callback state.',
		useCases: ['configuration', 'limits', 'usage settings'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this atom from loose HTML when this semantic primitive fits.',
			'Use semantic props and callbacks instead of styling escape hatches.'
		]
	},
	{
		name: 'CodeBlock',
		category: 'primitive',
		description: 'Code display block with title, language label, and copy action.',
		useCases: ['developer tools', 'AI artifacts', 'documentation snippets'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this atom from loose HTML when this semantic primitive fits.',
			'Use semantic props and callbacks instead of styling escape hatches.'
		]
	},
	{
		name: 'CopyButton',
		category: 'primitive',
		description: 'Accessible copy action for tokens, code, IDs, and generated artifacts.',
		useCases: ['copy IDs', 'copy code', 'copy generated output'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this atom from loose HTML when this semantic primitive fits.',
			'Use semantic props and callbacks instead of styling escape hatches.'
		]
	},
	{
		name: 'KeyboardShortcut',
		category: 'primitive',
		description: 'Keyboard shortcut atom for command palettes and productivity UI.',
		useCases: ['command hints', 'menus', 'toolbars'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this atom from loose HTML when this semantic primitive fits.',
			'Use semantic props and callbacks instead of styling escape hatches.'
		]
	},
	{
		name: 'TokenMeter',
		category: 'primitive',
		description: 'AI token usage meter with warning and danger thresholds.',
		useCases: ['LLM usage', 'prompt builders', 'billing previews'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this atom from loose HTML when this semantic primitive fits.',
			'Use semantic props and callbacks instead of styling escape hatches.'
		]
	},
	{
		name: 'AgentStatusIndicator',
		category: 'primitive',
		description:
			'Compact AI agent status indicator for idle, thinking, running, waiting, failed, and completed states.',
		useCases: ['agent runs', 'task status', 'AI workspace headers'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this atom from loose HTML when this semantic primitive fits.',
			'Use semantic props and callbacks instead of styling escape hatches.'
		]
	},
	{
		name: 'Card',
		category: 'primitive',
		description:
			'Composable content card with semantic tone, header, actions, body, and footer slots.',
		useCases: ['settings cards', 'dashboard cards', 'content panels'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild card chrome from loose divs.',
			'Use semantic title, description, tone, actions, and footer props.'
		]
	},
	{
		name: 'Dialog',
		category: 'primitive',
		description:
			'General modal dialog with semantic title, description, size, actions, close, backdrop, and escape handling.',
		useCases: ['modal forms', 'detail previews', 'high-attention workflows'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not hand-roll modal overlays.',
			'Use open, onClose, action props, and snippets for modal content.'
		]
	},
	{
		name: 'DropdownMenu',
		category: 'primitive',
		description:
			'Action menu with semantic items, disabled states, dangerous item tone, shortcuts, and escape handling.',
		useCases: ['toolbar menus', 'row actions', 'compact action groups'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not recreate menu keyboard and action structure by hand.',
			'Use DropdownMenuItem data and callbacks.'
		]
	},
	{
		name: 'Popover',
		category: 'primitive',
		description:
			'Small anchored disclosure surface with trigger label, title, description, placement, and content snippet.',
		useCases: ['inline help', 'quick filters', 'compact previews'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild anchored disclosure panels manually.',
			'Use title, description, placement, and snippet content.'
		]
	},
	{
		name: 'Drawer',
		category: 'primitive',
		description:
			'Side panel drawer with title, description, actions, close, backdrop, and escape handling.',
		useCases: ['edit panels', 'inspectors', 'mobile-friendly side panels'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not hand-roll side-panel overlays.',
			'Use side, open, onClose, action props, and snippets.'
		]
	},
	{
		name: 'Accordion',
		category: 'primitive',
		description:
			'Accessible collapsible section list with controlled open IDs, single or multiple expansion, and disabled items.',
		useCases: ['FAQ sections', 'settings groups', 'progressive disclosure'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild disclosure lists from loose buttons and divs.',
			'Use AccordionItem data and openIds state.'
		]
	},
	{
		name: 'Input',
		category: 'primitive',
		description:
			'Low-level semantic input primitive with Appcraft styling, compact mode, invalid state, and callback.',
		useCases: ['compact forms', 'inline filters', 'custom composed fields'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not use raw inputs when a semantic Appcraft primitive fits.',
			'Prefer TextField when a visible label and help text are needed.'
		]
	},
	{
		name: 'Textarea',
		category: 'primitive',
		description:
			'Low-level semantic multiline primitive with Appcraft styling, rows, invalid state, and callback.',
		useCases: ['compact editors', 'prompt areas', 'custom composed text areas'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not use raw textareas when a semantic Appcraft primitive fits.',
			'Prefer TextareaField when a visible label and help text are needed.'
		]
	},
	{
		name: 'Table',
		category: 'primitive',
		description:
			'Static table primitive with Appcraft table chrome, caption, empty state, alignment, formatting, and badges.',
		useCases: ['static data tables', 'summary tables', 'read-only comparisons'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not hand-roll table chrome for static data.',
			'Use DataTable or CrudPage when sorting, actions, loading, or filters are needed.'
		]
	},
	{
		name: 'DashboardLayout',
		category: 'product',
		description:
			'Complete dashboard page layout with heading actions, metrics, panels, and status badges.',
		useCases: ['dashboard pages', 'admin overview', 'operations overview'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not compose dashboard pages from loose grids and metric cards.',
			'Pass semantic metrics, panels, and actions.'
		]
	},
	{
		name: 'SettingsPage',
		category: 'product',
		description:
			'Complete settings page with heading, semantic sections, setting rows, statuses, and submit state.',
		useCases: ['settings pages', 'account settings', 'workspace preferences'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not compose settings pages from loose section markup.',
			'Use semantic sections and built-in submit state.'
		]
	},
	{
		name: 'CrudPage',
		category: 'product',
		description:
			'Complete CRUD page scaffold combining page header, search/filter bar, data table, loading/error/empty states, row actions, and pagination.',
		useCases: ['CRUD admin pages', 'resource management', 'inventory screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild CRUD screens from raw filters, tables, and pagination.',
			'Use semantic columns, rows, filters, row actions, and callbacks.'
		]
	},
	{
		name: 'Combobox',
		category: 'primitive',
		description:
			'Searchable selection primitive with keyboard-friendly listbox structure, loading, empty, and disabled states.',
		useCases: [
			'searchable selects, user pickers, integration selectors',
			'AI-built application screens'
		],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, built-in states, and callbacks.'
		]
	},
	{
		name: 'ComboboxField',
		category: 'primitive',
		description: 'Labeled combobox field with description and validation messaging.',
		useCases: ['forms, searchable settings, role selection', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, built-in states, and callbacks.'
		]
	},
	{
		name: 'MultiSelectField',
		category: 'primitive',
		description: 'Semantic multi-select field for tags, permissions, and grouped filters.',
		useCases: ['tag selectors, filters, permissions', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, built-in states, and callbacks.'
		]
	},
	{
		name: 'DateField',
		category: 'primitive',
		description: 'Semantic date input wrapper with label, help text, min/max, and error state.',
		useCases: ['date input, schedule forms, filters', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, built-in states, and callbacks.'
		]
	},
	{
		name: 'DateRangeField',
		category: 'primitive',
		description: 'Paired date range field for reporting, billing, and list filtering.',
		useCases: ['date range, reports, billing filters', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, built-in states, and callbacks.'
		]
	},
	{
		name: 'Stepper',
		category: 'pattern',
		description: 'Progress step indicator with selectable, disabled, active, and complete states.',
		useCases: ['onboarding, setup, checkout', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, built-in states, and callbacks.'
		]
	},
	{
		name: 'WizardLayout',
		category: 'pattern',
		description:
			'Complete multi-step workflow shell with stepper, body slot, and primary/secondary actions.',
		useCases: ['setup wizard, import flow, onboarding', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, built-in states, and callbacks.'
		]
	},
	{
		name: 'ChartCard',
		category: 'pattern',
		description:
			'Constrained chart card for compact metric visualization without custom chart code.',
		useCases: ['analytics dashboard, metric chart', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, built-in states, and callbacks.'
		]
	},
	{
		name: 'TrendChart',
		category: 'pattern',
		description: 'Constrained trend chart for time-series-style summaries.',
		useCases: ['trend chart, reporting, dashboard', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, built-in states, and callbacks.'
		]
	},
	{
		name: 'BarChart',
		category: 'pattern',
		description: 'Constrained horizontal bar chart for comparisons and rankings.',
		useCases: ['bar chart, analytics, ranking', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, built-in states, and callbacks.'
		]
	},
	{
		name: 'AuditLog',
		category: 'product',
		description: 'Structured audit log with actor, action, target, timestamp, and severity.',
		useCases: ['admin audit, change history, compliance', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, built-in states, and callbacks.'
		]
	},
	{
		name: 'PermissionMatrix',
		category: 'product',
		description: 'Role and permission matrix for safe authorization editing.',
		useCases: ['roles, permissions, workspace admin', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, built-in states, and callbacks.'
		]
	},
	{
		name: 'DetailPage',
		category: 'product',
		description: 'Resource detail scaffold with header, status, key-value facts, and actions.',
		useCases: ['record detail, order detail, user detail', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, built-in states, and callbacks.'
		]
	},
	{
		name: 'ImportPanel',
		category: 'pattern',
		description: 'Safe import entry panel with supported formats and action state.',
		useCases: ['csv import, data import', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, built-in states, and callbacks.'
		]
	},
	{
		name: 'ExportPanel',
		category: 'pattern',
		description: 'Safe export entry panel with supported formats and action state.',
		useCases: ['csv export, data export', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, built-in states, and callbacks.'
		]
	},
	{
		name: 'CsvImportWizard',
		category: 'product',
		description: 'CSV import wizard scaffold covering upload, mapping, review, and import steps.',
		useCases: ['csv import wizard, bulk import', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, built-in states, and callbacks.'
		]
	},
	{
		name: 'DataImportReview',
		category: 'product',
		description: 'Import issue review list for row-level validation and mapping errors.',
		useCases: ['import review, csv errors', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, built-in states, and callbacks.'
		]
	},
	{
		name: 'PageState',
		category: 'pattern',
		description:
			'Page-level state surface for loading, empty, error, forbidden, and maintenance screens.',
		useCases: ['page state, loading page, error page', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, built-in states, and callbacks.'
		]
	},
	{
		name: 'LoadingPage',
		category: 'pattern',
		description: 'Ready-made loading page state.',
		useCases: ['loading page, suspense', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, built-in states, and callbacks.'
		]
	},
	{
		name: 'NotFoundPage',
		category: 'pattern',
		description: 'Ready-made not-found page state.',
		useCases: ['404, missing resource', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, built-in states, and callbacks.'
		]
	},
	{
		name: 'ForbiddenPage',
		category: 'pattern',
		description: 'Ready-made access-restricted page state.',
		useCases: ['403, permissions', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, built-in states, and callbacks.'
		]
	},
	{
		name: 'MaintenancePage',
		category: 'pattern',
		description: 'Ready-made maintenance page state.',
		useCases: ['maintenance, outage', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, built-in states, and callbacks.'
		]
	},
	{
		name: 'JsonViewer',
		category: 'primitive',
		description: 'Styled JSON viewer to avoid raw pre blocks in developer and admin tools.',
		useCases: ['json, developer tools, metadata', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, built-in states, and callbacks.'
		]
	},
	{
		name: 'KeyValueList',
		category: 'primitive',
		description: 'Structured key-value list for metadata, facts, and summaries.',
		useCases: ['metadata, detail facts', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, built-in states, and callbacks.'
		]
	},
	{
		name: 'DataInspector',
		category: 'product',
		description: 'Data inspection panel combining summary metadata with a styled payload viewer.',
		useCases: ['data inspector, developer tools', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, built-in states, and callbacks.'
		]
	},
	{
		name: 'MetadataPanel',
		category: 'pattern',
		description: 'Metadata panel wrapper for key-value resource facts.',
		useCases: ['metadata panel, inspector', 'AI-built application screens'],
		forbiddenPatterns: [
			'Do not pass custom CSS classes.',
			'Do not rebuild this pattern from loose divs and buttons.',
			'Use semantic props, data arrays, built-in states, and callbacks.'
		]
	}
];
