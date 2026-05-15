import type { ComponentRecipe } from './types.js';

export const componentRecipes: ComponentRecipe[] = [
	{
		useCase: 'low-level HTML replacement primitives',
		keywords: ['raw', 'input', 'textarea', 'static table', 'compact form', 'primitive field'],
		components: ['Input', 'Textarea', 'Table'],
		notes:
			'Use low-level Appcraft primitives when a larger labeled field or interactive DataTable is too much, but avoid raw HTML controls and table chrome.'
	},
	{
		useCase: 'complete application page scaffolds',
		keywords: ['dashboard', 'settings page', 'crud page', 'admin page', 'overview page'],
		components: ['DashboardLayout', 'SettingsPage', 'CrudPage'],
		notes:
			'Use product page components before composing dashboards, settings pages, or CRUD screens from loose sections and primitives.'
	},
	{
		useCase: 'basic composition and overlays',
		keywords: [
			'card',
			'dialog',
			'modal',
			'drawer',
			'dropdown',
			'menu',
			'popover',
			'accordion',
			'disclosure'
		],
		components: ['Card', 'Dialog', 'Drawer', 'DropdownMenu', 'Popover', 'Accordion'],
		notes:
			'Use basic composition primitives for cards, modal overlays, side panels, menus, popovers, and progressive disclosure instead of loose divs and bespoke JS.'
	},
	{
		useCase: 'settings and account screens',
		keywords: ['settings', 'profile', 'workspace', 'account', 'preferences'],
		components: [
			'FormSection',
			'TextField',
			'SelectField',
			'SwitchField',
			'SubmitBar',
			'ProfileSettings',
			'WorkspaceSettings'
		],
		notes:
			'Use semantic form controls and product settings components instead of loose form markup.'
	},
	{
		useCase: 'resource management and CRUD',
		keywords: ['resource', 'crud', 'list', 'table', 'admin', 'inventory'],
		components: [
			'SearchFilterBar',
			'DataTable',
			'ResourceList',
			'ResourceGrid',
			'ResourceDetail',
			'Pagination'
		],
		notes: 'Use built-in search, empty, loading, error, row action, and pagination states.'
	},
	{
		useCase: 'developer tools',
		keywords: ['developer', 'api', 'key', 'logs', 'job', 'files', 'inspector'],
		components: [
			'ApiKeyManager',
			'FileList',
			'FileUploader',
			'JobRunList',
			'LogViewer',
			'InspectorPanel'
		],
		notes: 'Keep data and callbacks provider-agnostic; the app owns backend behavior.'
	},
	{
		useCase: 'AI chat and prompt workspaces',
		keywords: ['chat', 'prompt', 'conversation', 'llm', 'ai', 'workspace'],
		components: [
			'ChatPanel',
			'ConversationList',
			'PromptComposer',
			'CommandPalette',
			'NotificationCenter'
		],
		notes: 'Do not bake in a specific LLM provider; pass messages, prompts, actions, and callbacks.'
	},
	{
		useCase: 'content, knowledge, and media apps',
		keywords: ['content', 'document', 'knowledge', 'media', 'editor', 'gallery'],
		components: [
			'ContentEditorShell',
			'DocumentList',
			'KnowledgeBaseLayout',
			'MediaGallery',
			'CardGrid'
		],
		notes: 'Use product shells for layout and metadata rather than raw editor scaffolding.'
	},
	{
		useCase: 'commerce and billing',
		keywords: ['pricing', 'checkout', 'billing', 'order', 'plan', 'commerce'],
		components: ['PricingTable', 'CheckoutSummary', 'BillingSettings', 'OrderList'],
		notes: 'Keep billing provider logic outside UI; components emit callbacks.'
	},
	{
		useCase: 'agent atoms and compact composition',
		keywords: ['agent', 'token', 'usage', 'status', 'copy', 'code', 'shortcut', 'loading'],
		components: [
			'IconButton',
			'Badge',
			'Avatar',
			'Spinner',
			'ProgressBar',
			'Skeleton',
			'CodeBlock',
			'CopyButton',
			'KeyboardShortcut',
			'TokenMeter',
			'AgentStatusIndicator'
		],
		notes:
			'Use Atom Pack primitives for compact actions, identity, loading, code, copy, token usage, and agent status instead of raw HTML.'
	}
];

export function suggestComponents(useCase: string): string[] {
	const normalized = useCase.toLowerCase();
	const matches = componentRecipes.filter((recipe) =>
		recipe.keywords.some((keyword) => normalized.includes(keyword))
	);
	const selected = matches.length > 0 ? matches : componentRecipes.slice(0, 2);
	return [...new Set(selected.flatMap((recipe) => recipe.components))];
}
