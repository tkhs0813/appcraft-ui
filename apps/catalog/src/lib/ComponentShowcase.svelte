<script lang="ts">
	import type { Component } from 'svelte';
	import * as Appcraft from 'appcraft-ui';
	import { Tooltip } from 'appcraft-ui';

	interface Props {
		name: string;
	}

	type ComponentProps = Record<string, unknown>;

	let { name }: Props = $props();

	const componentRegistry = Appcraft as unknown as Record<string, Component<ComponentProps>>;
	const ShowcaseComponent = $derived(componentRegistry[name]);
	const showcaseProps = $derived(getShowcaseProps(name));

	const noop = () => undefined;
	const noopValue = () => undefined;

	const actions = [
		{ label: 'Create', onClick: noop },
		{ label: 'Review', onClick: noop, disabled: false }
	];
	const primaryAction = { label: 'Save changes', onClick: noop };
	const secondaryAction = { label: 'Cancel', onClick: noop, variant: 'secondary' };

	const genericItems = [
		{
			id: 'workspace',
			title: 'Workspace sync',
			description: 'Production-ready data surface with semantic status and action hooks.',
			meta: 'Updated 4 min ago',
			status: 'Live',
			tone: 'success'
		},
		{
			id: 'billing',
			title: 'Billing review',
			description: 'AI agents pass structured data instead of rebuilding the layout.',
			meta: 'Owner: Finance',
			status: 'Needs review',
			tone: 'warning'
		},
		{
			id: 'archive',
			title: 'Archive export',
			description: 'Built-in empty, status, and action states keep app screens consistent.',
			meta: 'Queued today',
			status: 'Queued',
			tone: 'brand'
		}
	];

	const columns = [
		{ key: 'name', label: 'Name', sortable: true },
		{ key: 'status', label: 'Status', kind: 'badge', tone: () => 'success' },
		{ key: 'owner', label: 'Owner' }
	];
	const rows = [
		{ id: 'api', name: 'API keys', status: 'Live', owner: 'Platform' },
		{ id: 'billing', name: 'Billing sync', status: 'Review', owner: 'Finance' },
		{ id: 'content', name: 'Content import', status: 'Queued', owner: 'Ops' }
	];
	const rowActions = [
		{ label: 'Open', onSelect: noopValue },
		{ label: 'Archive', tone: 'danger', onSelect: noopValue }
	];

	const selectOptions = [
		{ value: 'starter', label: 'Starter' },
		{ value: 'growth', label: 'Growth' },
		{ value: 'enterprise', label: 'Enterprise', disabled: false }
	];
	const comboboxOptions = [
		{ value: 'ryo', label: 'Ryo Takahashi', description: 'Workspace owner' },
		{ value: 'mina', label: 'Mina Sato', description: 'Product lead' },
		{ value: 'ops', label: 'Ops team', description: 'Shared inbox' }
	];
	const filters = [
		{ key: 'status', label: 'Status', options: selectOptions },
		{ key: 'owner', label: 'Owner', options: [{ value: 'platform', label: 'Platform' }] }
	];
	const steps = [
		{ id: 'upload', label: 'Upload', description: 'Choose source data' },
		{ id: 'map', label: 'Map fields', description: 'Confirm columns' },
		{ id: 'review', label: 'Review', description: 'Resolve issues' }
	];
	const chartData = [
		{ label: 'Mon', value: 24, tone: 'brand' },
		{ label: 'Tue', value: 38, tone: 'success' },
		{ label: 'Wed', value: 31, tone: 'warning' },
		{ label: 'Thu', value: 46, tone: 'success' }
	];
	const auditEvents = [
		{
			id: 'evt_1',
			actor: 'Ryo Takahashi',
			action: 'changed role',
			target: 'Mina Sato',
			timestamp: '2026-05-16 17:20',
			severity: 'info'
		},
		{
			id: 'evt_2',
			actor: 'System',
			action: 'blocked import',
			target: 'customers.csv',
			timestamp: '2026-05-16 17:24',
			severity: 'warning'
		}
	];
	const permissionRoles = [
		{ id: 'admin', value: 'admin', label: 'Admin', description: 'Full workspace access' },
		{ id: 'editor', value: 'editor', label: 'Editor', description: 'Can change content' },
		{ id: 'viewer', value: 'viewer', label: 'Viewer', description: 'Read-only access' }
	];
	const permissions = [
		{ id: 'members', label: 'Manage members', description: 'Invite and remove users' },
		{ id: 'billing', label: 'Manage billing', description: 'Plans and invoices' },
		{ id: 'content', label: 'Publish content', description: 'Release public updates' }
	];
	const users = [
		{ id: 'u_1', name: 'Ryo Takahashi', email: 'ryo@example.com', role: 'admin', status: 'active' },
		{ id: 'u_2', name: 'Mina Sato', email: 'mina@example.com', role: 'editor', status: 'invited' }
	];
	const keyValueItems = [
		{ key: 'plan', label: 'Plan', value: 'Growth' },
		{ key: 'owner', label: 'Owner', value: 'Ryo Takahashi' },
		{ key: 'region', label: 'Region', value: 'Tokyo' }
	];
	const dashboardMetrics = [
		{ id: 'mrr', label: 'MRR', value: '$18.4k', delta: '+12%', tone: 'success' },
		{ id: 'imports', label: 'Imports', value: '42', description: 'This week', tone: 'brand' },
		{ id: 'alerts', label: 'Alerts', value: '3', delta: '-2', tone: 'warning' }
	];
	const dashboardPanels = [
		{
			id: 'jobs',
			title: 'Job queue',
			description: '12 completed runs',
			status: 'Healthy',
			tone: 'success'
		},
		{
			id: 'sync',
			title: 'Data sync',
			description: 'Last sync finished 4 minutes ago',
			status: 'Live',
			tone: 'brand'
		}
	];
	const settingsSections = [
		{
			id: 'workspace',
			title: 'Workspace',
			description: 'Shared application settings.',
			status: 'Configured',
			tone: 'success',
			items: keyValueItems
		},
		{
			id: 'security',
			title: 'Security',
			description: 'Access and data retention.',
			items: [{ key: 'sso', label: 'SSO', value: 'Required' }]
		}
	];
	const importIssues = [
		{ id: 'issue_1', row: 12, field: 'email', message: 'Invalid email domain', severity: 'error' },
		{
			id: 'issue_2',
			row: 18,
			field: 'role',
			message: 'Unknown role, defaulting to viewer',
			severity: 'warning'
		}
	];
	const logLines = [
		{ id: 'l1', timestamp: '17:20:11', level: 'info', message: 'Import job started' },
		{ id: 'l2', timestamp: '17:20:14', level: 'warn', message: '2 rows require review' },
		{ id: 'l3', timestamp: '17:20:18', level: 'info', message: 'Preview generated successfully' }
	];
	const commandActions = [
		{ id: 'new', label: 'Create workspace', group: 'Actions', hint: '⌘N' },
		{ id: 'invite', label: 'Invite teammate', group: 'People', hint: '⌘I' },
		{ id: 'billing', label: 'Open billing', group: 'Settings', hint: '⌘B' }
	];
	const toastItems = [
		{
			id: 'saved',
			title: 'Changes saved',
			description: 'Workspace settings are now live.',
			tone: 'success'
		},
		{
			id: 'review',
			title: 'Import needs review',
			description: '2 rows need attention.',
			tone: 'warning'
		}
	];
	const tabs = [
		{ id: 'overview', label: 'Overview' },
		{ id: 'activity', label: 'Activity' },
		{ id: 'settings', label: 'Settings' }
	];
	const breadcrumbs = [
		{ id: 'home', label: 'Home', href: '/' },
		{ id: 'settings', label: 'Settings', href: '/settings' },
		{ id: 'members', label: 'Members', href: '/settings/members', current: true }
	];

	const componentSpecificProps: Record<string, ComponentProps> = {
		Button: { label: 'Create project' },
		IconButton: { label: 'Copy API key', icon: '⌘' },
		Badge: { label: 'Production', tone: 'success' },
		Avatar: { name: 'Ryo Takahashi', status: 'online' },
		Spinner: { label: 'Loading workspace' },
		ProgressBar: { label: 'Import progress', value: 68, showValue: true },
		Skeleton: { lines: 3 },
		Tooltip: {
			label: 'Hover for guidance',
			content: 'Use semantic props instead of custom classes.'
		},
		Separator: { label: 'Advanced settings' },
		CheckboxField: {
			label: 'Require approval',
			description: 'Gate production changes.',
			checked: true
		},
		RadioGroupField: { label: 'Default plan', options: selectOptions, value: 'growth' },
		NumberField: {
			label: 'Seat limit',
			value: 12,
			min: 1,
			max: 100,
			description: 'Controls workspace capacity.'
		},
		CodeBlock: { title: 'Install', language: 'bash', code: 'pnpm add appcraft-ui' },
		CopyButton: { value: 'sk_live_appcraft_demo', label: 'Copy token' },
		KeyboardShortcut: { keys: ['⌘', 'K'], label: 'Open command palette' },
		TokenMeter: { label: 'Context window', used: 8200, limit: 12000 },
		AgentStatusIndicator: { status: 'running', label: 'Agent running' },
		PageHeader: {
			title: 'Members',
			description: 'Invite teammates and manage workspace access.',
			primaryAction,
			secondaryAction
		},
		AppShell: {
			productName: 'Appcraft',
			workspaceName: 'Acme workspace',
			userName: 'Ryo',
			currentPath: '.',
			navItems: [
				{ label: 'Dashboard', href: '.', current: true },
				{ label: 'Members', href: '.' },
				{ label: 'Settings', href: '.' }
			]
		},
		EmptyState: {
			title: 'No projects yet',
			description: 'Create the first project to start shipping.',
			action: primaryAction
		},
		ErrorState: {
			message: 'The workspace could not be loaded.',
			retryAction: { label: 'Retry', onClick: noop }
		},
		ConfirmDialog: {
			open: true,
			title: 'Delete API key?',
			description: 'This immediately revokes production access for connected services.',
			confirmLabel: 'Delete key',
			onConfirm: noop,
			onCancel: noop
		},
		TextField: {
			label: 'Workspace name',
			value: 'Acme workspace',
			description: 'Shown in navigation and invoices.'
		},
		TextareaField: {
			label: 'Release notes',
			value: 'Summarize what changed for customers.',
			rows: 4
		},
		SelectField: {
			label: 'Plan',
			options: selectOptions,
			value: 'growth',
			description: 'Controls available features.'
		},
		SwitchField: {
			label: 'Require SSO',
			description: 'All members must authenticate through SSO.',
			checked: true
		},
		FormSection: {
			title: 'Profile',
			description: 'Manage public account details.',
			status: 'Saved',
			action: secondaryAction
		},
		SubmitBar: {
			message: 'You have unpublished changes.',
			status: 'dirty',
			onSubmit: noop,
			onCancel: noop
		},
		StatusBadge: { label: 'Live', tone: 'success' },
		SearchFilterBar: {
			query: 'workspace',
			filters,
			activeFilters: { status: 'growth' },
			resultCount: 24
		},
		Pagination: { page: 2, pageCount: 8, onPageChange: noopValue },
		Alert: {
			title: 'Usage approaching limit',
			description: 'Upgrade or archive old runs before the next import.',
			items: genericItems.slice(0, 1),
			actions
		},
		Banner: {
			title: 'New import workflow',
			description: 'Review row-level issues before committing data.',
			items: genericItems.slice(0, 1),
			actions
		},
		ToastViewport: { items: toastItems },
		Tabs: { tabs, activeId: 'activity', onChange: noopValue },
		Breadcrumbs: { items: breadcrumbs, onNavigate: noopValue },
		CardGrid: { title: 'Projects', items: genericItems, columns: 3, onSelect: noopValue },
		MetricCard: {
			title: 'Revenue',
			description: 'Monthly recurring revenue',
			items: genericItems.slice(0, 2)
		},
		Card: {
			title: 'Workspace health',
			description: 'A composable Appcraft content surface.',
			meta: 'Updated now',
			tone: 'brand',
			actions
		},
		Dialog: {
			open: true,
			title: 'Invite teammate',
			description: 'Use dialogs for focused product workflows.',
			primaryAction,
			secondaryAction,
			onClose: noop
		},
		DropdownMenu: {
			label: 'Actions',
			open: true,
			items: [
				{ id: 'open', label: 'Open', description: 'View details', shortcut: '↵' },
				{ id: 'archive', label: 'Archive', description: 'Move out of active list', tone: 'danger' }
			]
		},
		Popover: {
			triggerLabel: 'Show details',
			title: 'Usage details',
			description: 'Popover content stays anchored to the trigger.',
			open: true
		},
		Drawer: {
			open: true,
			title: 'Edit resource',
			description: 'Use drawers for side-panel inspection and editing.',
			primaryAction,
			secondaryAction,
			onClose: noop
		},
		Accordion: {
			items: [
				{
					id: 'one',
					title: 'Semantic props',
					content: 'Pass intent and data instead of CSS classes.'
				},
				{
					id: 'two',
					title: 'Built-in states',
					content: 'Loading, empty, and error states are part of the component.'
				}
			],
			openIds: ['one']
		},
		Input: { value: 'Acme workspace', ariaLabel: 'Workspace name' },
		Textarea: { value: 'Draft a short customer-facing summary.', ariaLabel: 'Prompt', rows: 4 },
		Table: { caption: 'Workspace resources', columns, rows },
		DashboardLayout: {
			metrics: dashboardMetrics,
			panels: dashboardPanels,
			primaryAction,
			secondaryAction
		},
		SettingsPage: { sections: settingsSections, primaryAction, secondaryAction },
		CrudPage: {
			columns,
			rows,
			rowActions,
			filters,
			activeFilters: { status: 'growth' },
			page: 2,
			pageCount: 5,
			primaryAction
		},
		Combobox: { options: comboboxOptions, value: 'ryo', query: 'ry', onSelect: noopValue },
		ComboboxField: {
			label: 'Owner',
			options: comboboxOptions,
			value: 'ryo',
			description: 'Search people and teams.'
		},
		MultiSelectField: { label: 'Tags', options: selectOptions, values: ['starter', 'growth'] },
		DateField: {
			label: 'Start date',
			value: '2026-05-16',
			description: 'Used for reports and scheduling.'
		},
		DateRangeField: { label: 'Billing period', start: '2026-05-01', end: '2026-05-31' },
		Stepper: { steps, currentStepId: 'map', onStepSelect: noopValue },
		WizardLayout: {
			title: 'Import customers',
			description: 'Guide users through a constrained workflow.',
			steps,
			currentStepId: 'map',
			primaryAction,
			secondaryAction
		},
		ChartCard: {
			title: 'Activation',
			value: '68%',
			description: 'Weekly activation trend',
			data: chartData
		},
		TrendChart: { title: 'Runs', data: chartData },
		BarChart: { title: 'Top workflows', data: chartData },
		AuditLog: { events: auditEvents },
		PermissionMatrix: {
			roles: permissionRoles,
			permissions,
			values: { admin: ['members', 'billing', 'content'], editor: ['content'], viewer: [] }
		},
		DetailPage: {
			title: 'Customer import',
			description: 'Production workflow detail.',
			status: 'Live',
			items: keyValueItems,
			actions
		},
		ImportPanel: { formats: ['CSV', 'JSON', 'XLSX'], action: primaryAction },
		ExportPanel: { formats: ['CSV', 'JSON'], action: primaryAction },
		CsvImportWizard: { currentStepId: 'review', issues: importIssues, onStepSelect: noopValue },
		DataImportReview: { issues: importIssues },
		PageState: {
			title: 'No results',
			description: 'Adjust filters or create a new resource.',
			tone: 'empty',
			action: primaryAction
		},
		LoadingPage: { action: secondaryAction },
		NotFoundPage: { action: secondaryAction },
		ForbiddenPage: { action: secondaryAction },
		MaintenancePage: { action: secondaryAction },
		JsonViewer: { title: 'Payload', value: { id: 'evt_1', status: 'live', owner: 'ryo' } },
		KeyValueList: { title: 'Resource facts', items: keyValueItems },
		DataInspector: {
			summary: keyValueItems,
			value: { plan: 'Growth', limits: { seats: 24, imports: 1000 } }
		},
		MetadataPanel: { items: keyValueItems },
		ActivityFeed: { items: genericItems, actions },
		Timeline: { items: genericItems },
		CommandPalette: {
			open: true,
			query: '',
			actions: commandActions,
			onQueryChange: noopValue,
			onSelect: noopValue,
			onClose: noop
		},
		ResourceList: { items: genericItems, primaryAction, actions, onSelect: noopValue },
		ResourceGrid: { items: genericItems, primaryAction, actions, onSelect: noopValue },
		ResourceDetail: { items: genericItems, actions },
		FileUploader: { accept: '.csv,.json', multiple: true, onFiles: noopValue },
		FileList: { items: genericItems, actions },
		ApiKeyManager: { items: genericItems, primaryAction, actions, onSelect: noopValue },
		IntegrationList: { items: genericItems, actions },
		JobRunList: { items: genericItems, actions },
		LogViewer: { lines: logLines, wrap: true },
		InspectorPanel: { items: genericItems, actions },
		ChatPanel: { items: genericItems, primaryAction, actions, onSelect: noopValue },
		ConversationList: { items: genericItems, actions },
		PromptComposer: { value: 'Summarize failed imports and suggest fixes.', onSubmit: noopValue },
		NotificationCenter: { items: genericItems, actions },
		KanbanBoard: { items: genericItems, primaryAction, actions, onSelect: noopValue },
		CalendarList: { items: genericItems, actions },
		ContentEditorShell: { items: genericItems, actions },
		MediaGallery: { items: genericItems, primaryAction, actions, onSelect: noopValue },
		KnowledgeBaseLayout: { items: genericItems, actions },
		DocumentList: { items: genericItems, actions },
		SignInForm: { primaryAction: { label: 'Sign in', onClick: noop }, onSubmit: noopValue },
		SignUpForm: { primaryAction: { label: 'Create account', onClick: noop }, onSubmit: noopValue },
		ForgotPasswordForm: {
			primaryAction: { label: 'Send reset link', onClick: noop },
			onSubmit: noopValue
		},
		ResetPasswordForm: {
			primaryAction: { label: 'Reset password', onClick: noop },
			onSubmit: noopValue
		},
		ProfileSettings: { items: genericItems, actions },
		WorkspaceSettings: { items: genericItems, actions },
		BillingSettings: { items: genericItems, actions },
		PricingTable: { items: genericItems, primaryAction, actions, onSelect: noopValue },
		CheckoutSummary: { items: genericItems, actions },
		OrderList: { items: genericItems, actions },
		DataTable: { columns, rows, rowActions }
	};

	function getShowcaseProps(componentName: string): ComponentProps {
		return {
			title: readableName(componentName),
			description: `Representative ${readableName(componentName)} preview using semantic Appcraft UI props.`,
			label: readableName(componentName),
			value: 'growth',
			placeholder: 'Search or enter a value',
			name: componentName.toLowerCase(),
			items: genericItems,
			actions,
			primaryAction,
			secondaryAction,
			columns,
			rows,
			rowActions,
			options: selectOptions,
			filters,
			activeFilters: { status: 'growth' },
			resultCount: rows.length,
			page: 1,
			pageCount: 4,
			roles: permissionRoles,
			users,
			currentUserId: 'u_1',
			permissions,
			values: { admin: ['members', 'billing'], editor: ['content'] },
			steps,
			currentStepId: 'map',
			data: chartData,
			events: auditEvents,
			issues: importIssues,
			lines: logLines,
			summary: keyValueItems,
			open: false,
			onClick: noop,
			onChange: noopValue,
			onInput: noopValue,
			onSelect: noopValue,
			onSubmit: noopValue,
			onCancel: noop,
			onConfirm: noop,
			onClose: noop,
			onQueryChange: noopValue,
			onFilterChange: noopValue,
			onClear: noop,
			onPageChange: noopValue,
			onRetry: noop,
			onOpenChange: noopValue,
			onStepSelect: noopValue,
			onInvite: noopValue,
			onChangeRole: noopValue,
			onRemove: noopValue,
			...(componentSpecificProps[componentName] ?? {})
		};
	}

	function readableName(componentName: string) {
		return componentName.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
	}
</script>

<div class="showcase aui-root" data-component={name}>
	{#if name === 'Tooltip'}
		<Tooltip label="Use semantic Appcraft props" placement="bottom">
			<button class="tooltip-demo" type="button">Hover or focus for guidance</button>
		</Tooltip>
	{:else if ShowcaseComponent}
		<ShowcaseComponent {...showcaseProps} />
	{:else}
		<div class="preview-placeholder">
			<strong>Preview unavailable</strong>
			<p>{name} is listed in metadata but is not exported by the appcraft-ui package.</p>
		</div>
	{/if}
</div>

<style>
	.showcase {
		position: relative;
		display: grid;
		gap: 1rem;
		min-height: 8rem;
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-lg);
		background:
			linear-gradient(135deg, color-mix(in srgb, var(--aui-brand) 5%, transparent), transparent),
			var(--aui-surface);
		box-shadow: var(--aui-shadow-sm);
		padding: 1.25rem;
		overflow: auto;
	}

	.preview-placeholder {
		border: 1px dashed var(--aui-border-strong);
		border-radius: var(--aui-radius-md);
		background: var(--aui-surface-muted);
		color: var(--aui-text-muted);
		padding: 1rem;
	}

	.preview-placeholder strong {
		display: block;
		color: var(--aui-text);
		margin-bottom: 0.35rem;
	}

	.preview-placeholder p {
		line-height: 1.6;
		margin: 0;
	}

	.tooltip-demo {
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-md);
		background: var(--aui-surface);
		box-shadow: var(--aui-shadow-sm);
		color: var(--aui-text);
		cursor: pointer;
		font: inherit;
		font-weight: 650;
		padding: 0.65rem 0.9rem;
	}

	.tooltip-demo:focus-visible {
		outline: 3px solid color-mix(in srgb, var(--aui-brand) 24%, transparent);
		outline-offset: 2px;
	}
</style>
