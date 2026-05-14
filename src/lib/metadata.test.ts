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
	'OrderList'
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
});
