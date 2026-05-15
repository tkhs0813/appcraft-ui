import { describe, expect, it } from 'vitest';
import { componentMetadata } from './metadata.js';
import * as publicApi from './index.js';

const publicComponentNames = [
	'Button',
	'PageHeader',
	'UserManagement',
	'AppShell',
	'EmptyState',
	'ErrorState',
	'ConfirmDialog',
	'TextField',
	'TextareaField',
	'SelectField',
	'SwitchField',
	'FormSection',
	'SubmitBar',
	'StatusBadge',
	'DataTable',
	'SearchFilterBar',
	'Pagination',
	'Alert',
	'Banner',
	'ToastViewport',
	'Tabs',
	'Breadcrumbs',
	'CardGrid',
	'MetricCard',
	'ActivityFeed',
	'Timeline',
	'CommandPalette',
	'ResourceList',
	'ResourceGrid',
	'ResourceDetail',
	'FileUploader',
	'FileList',
	'ApiKeyManager',
	'IntegrationList',
	'JobRunList',
	'LogViewer',
	'InspectorPanel',
	'ChatPanel',
	'ConversationList',
	'PromptComposer',
	'NotificationCenter',
	'KanbanBoard',
	'CalendarList',
	'ContentEditorShell',
	'MediaGallery',
	'KnowledgeBaseLayout',
	'DocumentList',
	'SignInForm',
	'SignUpForm',
	'ForgotPasswordForm',
	'ResetPasswordForm',
	'ProfileSettings',
	'WorkspaceSettings',
	'BillingSettings',
	'PricingTable',
	'CheckoutSummary',
	'OrderList',
	'IconButton',
	'Badge',
	'Avatar',
	'Spinner',
	'ProgressBar',
	'Skeleton',
	'Tooltip',
	'Separator',
	'CheckboxField',
	'RadioGroupField',
	'NumberField',
	'CodeBlock',
	'CopyButton',
	'KeyboardShortcut',
	'TokenMeter',
	'AgentStatusIndicator',
	'Card',
	'Dialog',
	'DropdownMenu',
	'Popover',
	'Drawer',
	'Accordion',
	'Input',
	'Textarea',
	'Table',
	'DashboardLayout',
	'SettingsPage',
	'CrudPage',
	'Combobox',
	'ComboboxField',
	'MultiSelectField',
	'DateField',
	'DateRangeField',
	'Stepper',
	'WizardLayout',
	'ChartCard',
	'TrendChart',
	'BarChart',
	'AuditLog',
	'PermissionMatrix',
	'DetailPage',
	'ImportPanel',
	'ExportPanel',
	'CsvImportWizard',
	'DataImportReview',
	'PageState',
	'LoadingPage',
	'NotFoundPage',
	'ForbiddenPage',
	'MaintenancePage',
	'JsonViewer',
	'KeyValueList',
	'DataInspector',
	'MetadataPanel'
];

describe('componentMetadata', () => {
	it('documents every public component for AI agents', () => {
		expect(componentMetadata.map((item) => item.name)).toEqual(publicComponentNames);
	});

	it('exports every documented public component from the package entrypoint', () => {
		for (const name of publicComponentNames) {
			expect(publicApi).toHaveProperty(name);
		}
	});

	it('marks UserManagement as a product component with guardrails', () => {
		const userManagement = componentMetadata.find((item) => item.name === 'UserManagement');

		expect(userManagement?.category).toBe('product');
		expect(userManagement?.forbiddenPatterns).toContain('Do not pass custom CSS classes.');
	});

	it('marks shell and state components with anti-reimplementation guardrails', () => {
		const appShell = componentMetadata.find((item) => item.name === 'AppShell');
		const emptyState = componentMetadata.find((item) => item.name === 'EmptyState');
		const errorState = componentMetadata.find((item) => item.name === 'ErrorState');
		const confirmDialog = componentMetadata.find((item) => item.name === 'ConfirmDialog');

		expect(appShell?.category).toBe('pattern');
		expect(appShell?.forbiddenPatterns).toContain(
			'Do not hand-roll application navigation shells.'
		);
		expect(emptyState?.forbiddenPatterns).toContain('Do not render ad-hoc empty panels.');
		expect(errorState?.forbiddenPatterns).toContain('Do not hide retry actions in plain text.');
		expect(confirmDialog?.forbiddenPatterns).toContain(
			'Do not use window.confirm for destructive product flows.'
		);
	});

	it('marks Phase 1 form and data components with anti-reimplementation guardrails', () => {
		const textField = componentMetadata.find((item) => item.name === 'TextField');
		const formSection = componentMetadata.find((item) => item.name === 'FormSection');
		const dataTable = componentMetadata.find((item) => item.name === 'DataTable');
		const searchFilterBar = componentMetadata.find((item) => item.name === 'SearchFilterBar');
		const pagination = componentMetadata.find((item) => item.name === 'Pagination');

		expect(textField?.forbiddenPatterns).toContain('Do not hand-roll labeled inputs.');
		expect(formSection?.forbiddenPatterns).toContain(
			'Do not compose settings forms from loose divs.'
		);
		expect(dataTable?.forbiddenPatterns).toContain('Do not recreate sortable data tables by hand.');
		expect(searchFilterBar?.forbiddenPatterns).toContain(
			'Do not scatter search and filter controls across the page.'
		);
		expect(pagination?.forbiddenPatterns).toContain('Do not hand-roll pagination controls.');
	});

	it('marks later phase components with anti-reimplementation guardrails', () => {
		const commandPalette = componentMetadata.find((item) => item.name === 'CommandPalette');
		const resourceList = componentMetadata.find((item) => item.name === 'ResourceList');
		const chatPanel = componentMetadata.find((item) => item.name === 'ChatPanel');
		const pricingTable = componentMetadata.find((item) => item.name === 'PricingTable');

		expect(commandPalette?.forbiddenPatterns).toContain(
			'Do not hand-roll command palette keyboard interactions.'
		);
		expect(resourceList?.category).toBe('product');
		expect(resourceList?.forbiddenPatterns).toContain(
			'Do not compose resource CRUD lists from loose cards and buttons.'
		);
		expect(chatPanel?.forbiddenPatterns).toContain('Do not bake in a specific LLM provider.');
		expect(pricingTable?.forbiddenPatterns).toContain(
			'Do not hard-code billing provider logic inside UI.'
		);
	});

	it('marks Atom Pack components as primitives with agent-safe guardrails', () => {
		const atomNames = [
			'IconButton',
			'Badge',
			'Avatar',
			'Spinner',
			'ProgressBar',
			'Skeleton',
			'Tooltip',
			'Separator',
			'CheckboxField',
			'RadioGroupField',
			'NumberField',
			'CodeBlock',
			'CopyButton',
			'KeyboardShortcut',
			'TokenMeter',
			'AgentStatusIndicator'
		];

		for (const name of atomNames) {
			const atom = componentMetadata.find((item) => item.name === name);
			expect(atom?.category).toBe('primitive');
			expect(atom?.forbiddenPatterns).toContain('Do not pass custom CSS classes.');
		}
	});

	it('marks basic composition components with anti-reimplementation guardrails', () => {
		const basicNames = ['Card', 'Dialog', 'DropdownMenu', 'Popover', 'Drawer', 'Accordion'];

		for (const name of basicNames) {
			const component = componentMetadata.find((item) => item.name === name);
			expect(component?.category).toBe('primitive');
			expect(component?.forbiddenPatterns).toContain('Do not pass custom CSS classes.');
		}

		expect(componentMetadata.find((item) => item.name === 'Dialog')?.forbiddenPatterns).toContain(
			'Do not hand-roll modal overlays.'
		);
		expect(
			componentMetadata.find((item) => item.name === 'DropdownMenu')?.forbiddenPatterns
		).toContain('Do not recreate menu keyboard and action structure by hand.');
	});

	it('marks low-level HTML replacement primitives with safe guardrails', () => {
		const lowLevelNames = ['Input', 'Textarea', 'Table'];

		for (const name of lowLevelNames) {
			const component = componentMetadata.find((item) => item.name === name);
			expect(component?.category).toBe('primitive');
			expect(component?.forbiddenPatterns).toContain('Do not pass custom CSS classes.');
		}

		expect(componentMetadata.find((item) => item.name === 'Input')?.forbiddenPatterns).toContain(
			'Do not use raw inputs when a semantic Appcraft primitive fits.'
		);
		expect(componentMetadata.find((item) => item.name === 'Table')?.forbiddenPatterns).toContain(
			'Do not hand-roll table chrome for static data.'
		);
	});

	it('marks larger product page components with anti-composition guardrails', () => {
		const dashboardLayout = componentMetadata.find((item) => item.name === 'DashboardLayout');
		const settingsPage = componentMetadata.find((item) => item.name === 'SettingsPage');
		const crudPage = componentMetadata.find((item) => item.name === 'CrudPage');

		expect(dashboardLayout?.category).toBe('product');
		expect(settingsPage?.category).toBe('product');
		expect(crudPage?.category).toBe('product');
		expect(dashboardLayout?.forbiddenPatterns).toContain(
			'Do not compose dashboard pages from loose grids and metric cards.'
		);
		expect(settingsPage?.forbiddenPatterns).toContain(
			'Do not compose settings pages from loose section markup.'
		);
		expect(crudPage?.forbiddenPatterns).toContain(
			'Do not rebuild CRUD screens from raw filters, tables, and pagination.'
		);
	});
});
