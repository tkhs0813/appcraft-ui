import type { ComponentPropDoc } from './component-docs.js';

export const generatedComponentProps = {
	Accordion: [
		{ name: 'items', type: 'AccordionItem[]', required: true, defaultValue: '', description: '' },
		{ name: 'openIds', type: 'string[]', required: false, defaultValue: '[]', description: '' },
		{
			name: 'allowMultiple',
			type: 'boolean',
			required: false,
			defaultValue: 'false',
			description: ''
		},
		{
			name: 'onOpenChange',
			type: '(openIds: string[]) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	ActivityFeed: [
		{
			name: 'title',
			type: 'string',
			required: false,
			defaultValue: "'ActivityFeed'",
			description: ''
		},
		{
			name: 'description',
			type: 'string',
			required: false,
			defaultValue: "'Chronological activity feed for product events.'",
			description: ''
		},
		{
			name: 'items',
			type: 'ActivityFeedItem[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'emptyMessage',
			type: 'string',
			required: false,
			defaultValue: "'No items to show.'",
			description: ''
		},
		{
			name: 'actions',
			type: 'ActionConfig[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'children',
			type: 'Snippet',
			required: false,
			defaultValue: '',
			description: 'Rendered child content.'
		}
	],
	AgentStatusIndicator: [
		{ name: 'status', type: 'AgentStatus', required: true, defaultValue: '', description: '' },
		{ name: 'label', type: 'string', required: false, defaultValue: 'status', description: '' }
	],
	Alert: [
		{ name: 'title', type: 'string', required: false, defaultValue: "'Alert'", description: '' },
		{
			name: 'description',
			type: 'string',
			required: false,
			defaultValue: "'Accessible inline alert with tone and action.'",
			description: ''
		},
		{ name: 'items', type: 'AlertItem[]', required: false, defaultValue: '[]', description: '' },
		{
			name: 'emptyMessage',
			type: 'string',
			required: false,
			defaultValue: "'No items to show.'",
			description: ''
		},
		{
			name: 'actions',
			type: 'ActionConfig[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'children',
			type: 'Snippet',
			required: false,
			defaultValue: '',
			description: 'Rendered child content.'
		}
	],
	ApiKeyManager: [
		{ name: 'title', type: 'string', required: false, defaultValue: "'API keys'", description: '' },
		{
			name: 'description',
			type: 'string',
			required: false,
			defaultValue: "'Provider-agnostic API key manager UI.'",
			description: ''
		},
		{
			name: 'items',
			type: 'ApiKeyManagerItem[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'actions',
			type: 'ActionConfig[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'primaryAction',
			type: 'ActionConfig',
			required: false,
			defaultValue: '',
			description: ''
		},
		{
			name: 'onSelect',
			type: '(item: ApiKeyManagerItem) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	AppShell: [
		{ name: 'productName', type: 'string', required: true, defaultValue: '', description: '' },
		{
			name: 'navItems',
			type: 'AppShellNavItem[]',
			required: true,
			defaultValue: '',
			description: ''
		},
		{ name: 'currentPath', type: 'string', required: false, defaultValue: '', description: '' },
		{ name: 'workspaceName', type: 'string', required: false, defaultValue: '', description: '' },
		{ name: 'userName', type: 'string', required: false, defaultValue: '', description: '' },
		{
			name: 'primaryAction',
			type: 'PageHeaderAction',
			required: false,
			defaultValue: '',
			description: ''
		},
		{
			name: 'children',
			type: 'Snippet',
			required: false,
			defaultValue: '',
			description: 'Rendered child content.'
		}
	],
	AuditLog: [
		{
			name: 'title',
			type: 'string',
			required: false,
			defaultValue: "'Audit log'",
			description: ''
		},
		{
			name: 'events',
			type: 'AuditLogEvent[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'emptyMessage',
			type: 'string',
			required: false,
			defaultValue: "'No events yet'",
			description: ''
		}
	],
	Avatar: [
		{ name: 'name', type: 'string', required: true, defaultValue: '', description: '' },
		{ name: 'src', type: 'string', required: false, defaultValue: '', description: '' },
		{
			name: 'size',
			type: "'sm' | 'md' | 'lg'",
			required: false,
			defaultValue: "'md'",
			description: ''
		},
		{
			name: 'status',
			type: "'online' | 'offline' | 'busy'",
			required: false,
			defaultValue: '',
			description: ''
		}
	],
	Badge: [
		{ name: 'label', type: 'string', required: true, defaultValue: '', description: '' },
		{
			name: 'tone',
			type: 'StatusBadgeTone',
			required: false,
			defaultValue: "'neutral'",
			description: ''
		},
		{ name: 'size', type: "'sm' | 'md'", required: false, defaultValue: "'md'", description: '' }
	],
	Banner: [
		{ name: 'title', type: 'string', required: false, defaultValue: "'Banner'", description: '' },
		{
			name: 'description',
			type: 'string',
			required: false,
			defaultValue: "'Prominent page banner for announcements and upgrade prompts.'",
			description: ''
		},
		{ name: 'items', type: 'BannerItem[]', required: false, defaultValue: '[]', description: '' },
		{
			name: 'emptyMessage',
			type: 'string',
			required: false,
			defaultValue: "'No items to show.'",
			description: ''
		},
		{
			name: 'actions',
			type: 'ActionConfig[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'children',
			type: 'Snippet',
			required: false,
			defaultValue: '',
			description: 'Rendered child content.'
		}
	],
	BarChart: [
		{ name: 'title', type: 'string', required: true, defaultValue: '', description: '' },
		{ name: 'data', type: 'ChartDatum[]', required: false, defaultValue: '[]', description: '' }
	],
	BillingSettings: [
		{
			name: 'title',
			type: 'string',
			required: false,
			defaultValue: "'BillingSettings'",
			description: ''
		},
		{
			name: 'description',
			type: 'string',
			required: false,
			defaultValue: "'Billing settings summary with plan",
			description: ''
		},
		{
			name: 'items',
			type: 'BillingSettingsItem[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'emptyMessage',
			type: 'string',
			required: false,
			defaultValue: "'No items to show.'",
			description: ''
		},
		{
			name: 'actions',
			type: 'ActionConfig[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'children',
			type: 'Snippet',
			required: false,
			defaultValue: '',
			description: 'Rendered child content.'
		}
	],
	Breadcrumbs: [
		{ name: 'items', type: 'BreadcrumbItem[]', required: true, defaultValue: '', description: '' },
		{
			name: 'label',
			type: 'string',
			required: false,
			defaultValue: "'Breadcrumbs'",
			description: ''
		},
		{
			name: 'onNavigate',
			type: '(item: BreadcrumbItem) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	Button: [
		{
			name: 'variant',
			type: 'ButtonVariant',
			required: false,
			defaultValue: "'primary'",
			description: ''
		},
		{ name: 'size', type: 'ButtonSize', required: false, defaultValue: "'md'", description: '' },
		{
			name: 'type',
			type: "'button' | 'submit' | 'reset'",
			required: false,
			defaultValue: "'button'",
			description: ''
		},
		{ name: 'disabled', type: 'boolean', required: false, defaultValue: 'false', description: '' },
		{ name: 'loading', type: 'boolean', required: false, defaultValue: 'false', description: '' },
		{ name: 'label', type: 'string', required: false, defaultValue: '', description: '' },
		{
			name: 'onClick',
			type: '() => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		},
		{
			name: 'children',
			type: 'Snippet',
			required: false,
			defaultValue: '',
			description: 'Rendered child content.'
		}
	],
	CalendarList: [
		{
			name: 'title',
			type: 'string',
			required: false,
			defaultValue: "'CalendarList'",
			description: ''
		},
		{
			name: 'description',
			type: 'string',
			required: false,
			defaultValue: "'Calendar/event list for productivity apps.'",
			description: ''
		},
		{
			name: 'items',
			type: 'CalendarListItem[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'emptyMessage',
			type: 'string',
			required: false,
			defaultValue: "'No items to show.'",
			description: ''
		},
		{
			name: 'actions',
			type: 'ActionConfig[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'children',
			type: 'Snippet',
			required: false,
			defaultValue: '',
			description: 'Rendered child content.'
		}
	],
	Card: [
		{ name: 'title', type: 'string', required: false, defaultValue: '', description: '' },
		{ name: 'description', type: 'string', required: false, defaultValue: '', description: '' },
		{ name: 'meta', type: 'string', required: false, defaultValue: '', description: '' },
		{ name: 'tone', type: 'CardTone', required: false, defaultValue: "'default'", description: '' },
		{ name: 'padded', type: 'boolean', required: false, defaultValue: 'true', description: '' },
		{ name: 'actions', type: 'CardAction[]', required: false, defaultValue: '[]', description: '' },
		{ name: 'footer', type: 'string', required: false, defaultValue: '', description: '' },
		{
			name: 'children',
			type: 'Snippet',
			required: false,
			defaultValue: '',
			description: 'Rendered child content.'
		}
	],
	CardGrid: [
		{ name: 'title', type: 'string', required: false, defaultValue: "'Cards'", description: '' },
		{ name: 'items', type: 'CardGridItem[]', required: true, defaultValue: '', description: '' },
		{ name: 'columns', type: '2 | 3 | 4', required: false, defaultValue: '3', description: '' },
		{
			name: 'onSelect',
			type: '(item: CardGridItem) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	ChartCard: [
		{ name: 'title', type: 'string', required: true, defaultValue: '', description: '' },
		{ name: 'value', type: 'string', required: false, defaultValue: '', description: '' },
		{ name: 'description', type: 'string', required: false, defaultValue: '', description: '' },
		{ name: 'data', type: 'ChartDatum[]', required: false, defaultValue: '[]', description: '' },
		{
			name: 'tone',
			type: 'StatusBadgeTone',
			required: false,
			defaultValue: "'brand'",
			description: ''
		}
	],
	ChatPanel: [
		{ name: 'title', type: 'string', required: false, defaultValue: "'Chat'", description: '' },
		{
			name: 'description',
			type: 'string',
			required: false,
			defaultValue: "'Provider-agnostic chat panel for AI workspaces.'",
			description: ''
		},
		{
			name: 'items',
			type: 'ChatPanelItem[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'actions',
			type: 'ActionConfig[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'primaryAction',
			type: 'ActionConfig',
			required: false,
			defaultValue: '',
			description: ''
		},
		{
			name: 'onSelect',
			type: '(item: ChatPanelItem) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	CheckboxField: [
		{ name: 'label', type: 'string', required: true, defaultValue: '', description: '' },
		{ name: 'description', type: 'string', required: false, defaultValue: '', description: '' },
		{ name: 'checked', type: 'boolean', required: false, defaultValue: 'false', description: '' },
		{ name: 'disabled', type: 'boolean', required: false, defaultValue: 'false', description: '' },
		{ name: 'error', type: 'string', required: false, defaultValue: '', description: '' },
		{
			name: 'onChange',
			type: '(checked: boolean) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	CheckoutSummary: [
		{
			name: 'title',
			type: 'string',
			required: false,
			defaultValue: "'CheckoutSummary'",
			description: ''
		},
		{
			name: 'description',
			type: 'string',
			required: false,
			defaultValue: "'Checkout summary with line items",
			description: ''
		},
		{
			name: 'items',
			type: 'CheckoutSummaryItem[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'emptyMessage',
			type: 'string',
			required: false,
			defaultValue: "'No items to show.'",
			description: ''
		},
		{
			name: 'actions',
			type: 'ActionConfig[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'children',
			type: 'Snippet',
			required: false,
			defaultValue: '',
			description: 'Rendered child content.'
		}
	],
	CodeBlock: [
		{ name: 'code', type: 'string', required: true, defaultValue: '', description: '' },
		{ name: 'language', type: 'string', required: false, defaultValue: "'text'", description: '' },
		{ name: 'title', type: 'string', required: false, defaultValue: '', description: '' },
		{
			name: 'copyLabel',
			type: 'string',
			required: false,
			defaultValue: "'Copy code'",
			description: ''
		}
	],
	Combobox: [
		{
			name: 'label',
			type: 'string',
			required: false,
			defaultValue: "'Choose option'",
			description: ''
		},
		{
			name: 'placeholder',
			type: 'string',
			required: false,
			defaultValue: "'Search options…'",
			description: ''
		},
		{
			name: 'options',
			type: 'ComboboxOption[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{ name: 'value', type: 'string', required: false, defaultValue: "''", description: '' },
		{ name: 'query', type: 'string', required: false, defaultValue: "''", description: '' },
		{ name: 'loading', type: 'boolean', required: false, defaultValue: 'false', description: '' },
		{ name: 'disabled', type: 'boolean', required: false, defaultValue: 'false', description: '' },
		{
			name: 'emptyMessage',
			type: 'string',
			required: false,
			defaultValue: "'No options found'",
			description: ''
		},
		{
			name: 'onQueryChange',
			type: '(query: string) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		},
		{
			name: 'onSelect',
			type: '(value: string) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	ComboboxField: [
		{ name: 'label', type: 'string', required: true, defaultValue: '', description: '' },
		{ name: 'description', type: 'string', required: false, defaultValue: '', description: '' },
		{ name: 'error', type: 'string', required: false, defaultValue: '', description: '' },
		{ name: 'placeholder', type: 'string', required: false, defaultValue: '', description: '' },
		{
			name: 'options',
			type: 'ComboboxOption[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{ name: 'value', type: 'string', required: false, defaultValue: "''", description: '' },
		{ name: 'loading', type: 'boolean', required: false, defaultValue: 'false', description: '' },
		{ name: 'disabled', type: 'boolean', required: false, defaultValue: 'false', description: '' },
		{
			name: 'onSelect',
			type: '(value: string) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	CommandPalette: [
		{ name: 'open', type: 'boolean', required: false, defaultValue: 'false', description: '' },
		{ name: 'query', type: 'string', required: false, defaultValue: "''", description: '' },
		{
			name: 'actions',
			type: 'CommandPaletteAction[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'onQueryChange',
			type: '(query: string) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		},
		{
			name: 'onSelect',
			type: '(action: CommandPaletteAction) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		},
		{
			name: 'onClose',
			type: '() => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	ConfirmDialog: [
		{ name: 'open', type: 'boolean', required: true, defaultValue: '', description: '' },
		{ name: 'title', type: 'string', required: true, defaultValue: '', description: '' },
		{ name: 'description', type: 'string', required: true, defaultValue: '', description: '' },
		{
			name: 'confirmLabel',
			type: 'string',
			required: false,
			defaultValue: "'Confirm'",
			description: ''
		},
		{
			name: 'cancelLabel',
			type: 'string',
			required: false,
			defaultValue: "'Cancel'",
			description: ''
		},
		{
			name: 'tone',
			type: 'ConfirmDialogTone',
			required: false,
			defaultValue: "'danger'",
			description: ''
		},
		{
			name: 'confirming',
			type: 'boolean',
			required: false,
			defaultValue: 'false',
			description: ''
		},
		{
			name: 'onConfirm',
			type: '() => void',
			required: true,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		},
		{
			name: 'onCancel',
			type: '() => void',
			required: true,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	ContentEditorShell: [
		{
			name: 'title',
			type: 'string',
			required: false,
			defaultValue: "'ContentEditorShell'",
			description: ''
		},
		{
			name: 'description',
			type: 'string',
			required: false,
			defaultValue: "'Structured editor shell with title",
			description: ''
		},
		{
			name: 'items',
			type: 'ContentEditorShellItem[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'emptyMessage',
			type: 'string',
			required: false,
			defaultValue: "'No items to show.'",
			description: ''
		},
		{
			name: 'actions',
			type: 'ActionConfig[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'children',
			type: 'Snippet',
			required: false,
			defaultValue: '',
			description: 'Rendered child content.'
		}
	],
	ConversationList: [
		{
			name: 'title',
			type: 'string',
			required: false,
			defaultValue: "'ConversationList'",
			description: ''
		},
		{
			name: 'description',
			type: 'string',
			required: false,
			defaultValue: "'Conversation list for chat/research workspaces.'",
			description: ''
		},
		{
			name: 'items',
			type: 'ConversationListItem[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'emptyMessage',
			type: 'string',
			required: false,
			defaultValue: "'No items to show.'",
			description: ''
		},
		{
			name: 'actions',
			type: 'ActionConfig[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'children',
			type: 'Snippet',
			required: false,
			defaultValue: '',
			description: 'Rendered child content.'
		}
	],
	CopyButton: [
		{ name: 'value', type: 'string', required: true, defaultValue: '', description: '' },
		{ name: 'label', type: 'string', required: false, defaultValue: "'Copy'", description: '' },
		{
			name: 'copiedLabel',
			type: 'string',
			required: false,
			defaultValue: "'Copied'",
			description: ''
		},
		{
			name: 'onCopied',
			type: '() => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	CrudPage: [
		{
			name: 'title',
			type: 'string',
			required: false,
			defaultValue: "'Resources'",
			description: ''
		},
		{
			name: 'description',
			type: 'string',
			required: false,
			defaultValue: "'Search",
			description: ''
		},
		{
			name: 'columns',
			type: 'DataTableColumn[]',
			required: true,
			defaultValue: '',
			description: ''
		},
		{ name: 'rows', type: 'DataTableRow[]', required: true, defaultValue: '', description: '' },
		{
			name: 'rowActions',
			type: 'DataTableRowAction[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'filters',
			type: 'SearchFilter[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{ name: 'query', type: 'string', required: false, defaultValue: "''", description: '' },
		{
			name: 'activeFilters',
			type: 'Record<string, string>',
			required: false,
			defaultValue: '{}',
			description: ''
		},
		{
			name: 'resultCount',
			type: 'number',
			required: false,
			defaultValue: 'rows.length',
			description: ''
		},
		{ name: 'page', type: 'number', required: false, defaultValue: '1', description: '' },
		{ name: 'pageCount', type: 'number', required: false, defaultValue: '1', description: '' },
		{ name: 'loading', type: 'boolean', required: false, defaultValue: 'false', description: '' },
		{
			name: 'error',
			type: 'string | null',
			required: false,
			defaultValue: 'null',
			description: ''
		},
		{
			name: 'primaryAction',
			type: 'ActionConfig',
			required: false,
			defaultValue: '',
			description: ''
		},
		{
			name: 'secondaryAction',
			type: 'ActionConfig',
			required: false,
			defaultValue: '',
			description: ''
		},
		{
			name: 'onQueryChange',
			type: '(value: string) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		},
		{
			name: 'onFilterChange',
			type: '(key: string, value: string) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		},
		{
			name: 'onClear',
			type: '() => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		},
		{
			name: 'onPageChange',
			type: '(page: number) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		},
		{
			name: 'onRetry',
			type: '() => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	CsvImportWizard: [
		{
			name: 'title',
			type: 'string',
			required: false,
			defaultValue: "'CSV import wizard'",
			description: ''
		},
		{
			name: 'currentStepId',
			type: 'string',
			required: false,
			defaultValue: "'upload'",
			description: ''
		},
		{
			name: 'issues',
			type: 'ImportReviewIssue[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'onStepSelect',
			type: '(id: string) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	DashboardLayout: [
		{
			name: 'title',
			type: 'string',
			required: false,
			defaultValue: "'Dashboard'",
			description: ''
		},
		{
			name: 'description',
			type: 'string',
			required: false,
			defaultValue: "'Monitor the most important application signals in one polished page.'",
			description: ''
		},
		{
			name: 'metrics',
			type: 'DashboardMetric[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'panels',
			type: 'DashboardPanel[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'primaryAction',
			type: 'ActionConfig',
			required: false,
			defaultValue: '',
			description: ''
		},
		{
			name: 'secondaryAction',
			type: 'ActionConfig',
			required: false,
			defaultValue: '',
			description: ''
		}
	],
	DataImportReview: [
		{
			name: 'title',
			type: 'string',
			required: false,
			defaultValue: "'Import review'",
			description: ''
		},
		{
			name: 'issues',
			type: 'ImportReviewIssue[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'emptyMessage',
			type: 'string',
			required: false,
			defaultValue: "'No import issues found'",
			description: ''
		}
	],
	DataInspector: [
		{
			name: 'title',
			type: 'string',
			required: false,
			defaultValue: "'Data inspector'",
			description: ''
		},
		{
			name: 'summary',
			type: 'KeyValueItem[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{ name: 'value', type: 'unknown', required: false, defaultValue: '{}', description: '' }
	],
	DataTable: [
		{
			name: 'columns',
			type: 'DataTableColumn[]',
			required: true,
			defaultValue: '',
			description: ''
		},
		{ name: 'rows', type: 'DataTableRow[]', required: true, defaultValue: '', description: '' },
		{
			name: 'rowActions',
			type: 'DataTableRowAction[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{ name: 'loading', type: 'boolean', required: false, defaultValue: 'false', description: '' },
		{
			name: 'error',
			type: 'string | null',
			required: false,
			defaultValue: 'null',
			description: ''
		},
		{
			name: 'emptyTitle',
			type: 'string',
			required: false,
			defaultValue: "'No results'",
			description: ''
		},
		{
			name: 'emptyDescription',
			type: 'string',
			required: false,
			defaultValue: "'Try changing filters or create a new item.'",
			description: ''
		},
		{
			name: 'onRetry',
			type: '() => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		},
		{
			name: 'onSort',
			type: '(key: string) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		},
		{ name: 'sortKey', type: 'string', required: false, defaultValue: '', description: '' },
		{
			name: 'sortDirection',
			type: "'asc' | 'desc'",
			required: false,
			defaultValue: "'asc'",
			description: ''
		}
	],
	DateField: [
		{ name: 'label', type: 'string', required: true, defaultValue: '', description: '' },
		{ name: 'value', type: 'string', required: false, defaultValue: "''", description: '' },
		{ name: 'description', type: 'string', required: false, defaultValue: '', description: '' },
		{ name: 'error', type: 'string', required: false, defaultValue: '', description: '' },
		{ name: 'min', type: 'string', required: false, defaultValue: '', description: '' },
		{ name: 'max', type: 'string', required: false, defaultValue: '', description: '' },
		{ name: 'disabled', type: 'boolean', required: false, defaultValue: 'false', description: '' },
		{
			name: 'onChange',
			type: '(value: string) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	DateRangeField: [
		{ name: 'label', type: 'string', required: true, defaultValue: '', description: '' },
		{ name: 'start', type: 'string', required: false, defaultValue: "''", description: '' },
		{ name: 'end', type: 'string', required: false, defaultValue: "''", description: '' },
		{ name: 'description', type: 'string', required: false, defaultValue: '', description: '' },
		{ name: 'error', type: 'string', required: false, defaultValue: '', description: '' },
		{ name: 'disabled', type: 'boolean', required: false, defaultValue: 'false', description: '' },
		{
			name: 'onChange',
			type: '(range: { start: string; end: string }) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	DetailPage: [
		{ name: 'title', type: 'string', required: true, defaultValue: '', description: '' },
		{ name: 'description', type: 'string', required: false, defaultValue: '', description: '' },
		{ name: 'status', type: 'string', required: false, defaultValue: '', description: '' },
		{ name: 'items', type: 'KeyValueItem[]', required: false, defaultValue: '[]', description: '' },
		{
			name: 'actions',
			type: 'ActionConfig[]',
			required: false,
			defaultValue: '[]',
			description: ''
		}
	],
	Dialog: [
		{ name: 'open', type: 'boolean', required: true, defaultValue: '', description: '' },
		{ name: 'title', type: 'string', required: true, defaultValue: '', description: '' },
		{ name: 'description', type: 'string', required: false, defaultValue: '', description: '' },
		{ name: 'size', type: 'DialogSize', required: false, defaultValue: "'md'", description: '' },
		{
			name: 'primaryAction',
			type: 'DialogAction',
			required: false,
			defaultValue: '',
			description: ''
		},
		{
			name: 'secondaryAction',
			type: 'DialogAction',
			required: false,
			defaultValue: '',
			description: ''
		},
		{
			name: 'closeLabel',
			type: 'string',
			required: false,
			defaultValue: "'Close dialog'",
			description: ''
		},
		{
			name: 'closeOnBackdrop',
			type: 'boolean',
			required: false,
			defaultValue: 'true',
			description: ''
		},
		{
			name: 'onClose',
			type: '() => void',
			required: true,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		},
		{
			name: 'children',
			type: 'Snippet',
			required: false,
			defaultValue: '',
			description: 'Rendered child content.'
		}
	],
	DocumentList: [
		{
			name: 'title',
			type: 'string',
			required: false,
			defaultValue: "'DocumentList'",
			description: ''
		},
		{
			name: 'description',
			type: 'string',
			required: false,
			defaultValue: "'Document list with owners",
			description: ''
		},
		{
			name: 'items',
			type: 'DocumentListItem[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'emptyMessage',
			type: 'string',
			required: false,
			defaultValue: "'No items to show.'",
			description: ''
		},
		{
			name: 'actions',
			type: 'ActionConfig[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'children',
			type: 'Snippet',
			required: false,
			defaultValue: '',
			description: 'Rendered child content.'
		}
	],
	Drawer: [
		{ name: 'open', type: 'boolean', required: true, defaultValue: '', description: '' },
		{ name: 'title', type: 'string', required: true, defaultValue: '', description: '' },
		{ name: 'description', type: 'string', required: false, defaultValue: '', description: '' },
		{ name: 'side', type: 'DrawerSide', required: false, defaultValue: "'right'", description: '' },
		{
			name: 'primaryAction',
			type: 'DrawerAction',
			required: false,
			defaultValue: '',
			description: ''
		},
		{
			name: 'secondaryAction',
			type: 'DrawerAction',
			required: false,
			defaultValue: '',
			description: ''
		},
		{
			name: 'closeLabel',
			type: 'string',
			required: false,
			defaultValue: "'Close drawer'",
			description: ''
		},
		{
			name: 'onClose',
			type: '() => void',
			required: true,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		},
		{
			name: 'children',
			type: 'Snippet',
			required: false,
			defaultValue: '',
			description: 'Rendered child content.'
		}
	],
	DropdownMenu: [
		{ name: 'label', type: 'string', required: true, defaultValue: '', description: '' },
		{
			name: 'items',
			type: 'DropdownMenuItem[]',
			required: true,
			defaultValue: '',
			description: ''
		},
		{ name: 'open', type: 'boolean', required: false, defaultValue: 'false', description: '' },
		{
			name: 'align',
			type: "'start' | 'end'",
			required: false,
			defaultValue: "'end'",
			description: ''
		},
		{
			name: 'onOpenChange',
			type: '(open: boolean) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	EmptyState: [
		{ name: 'title', type: 'string', required: true, defaultValue: '', description: '' },
		{ name: 'description', type: 'string', required: false, defaultValue: '', description: '' },
		{
			name: 'tone',
			type: 'EmptyStateTone',
			required: false,
			defaultValue: "'neutral'",
			description: ''
		},
		{
			name: 'action',
			type: 'EmptyStateAction',
			required: false,
			defaultValue: '',
			description: ''
		},
		{
			name: 'secondaryAction',
			type: 'EmptyStateAction',
			required: false,
			defaultValue: '',
			description: ''
		}
	],
	ErrorState: [
		{
			name: 'title',
			type: 'string',
			required: false,
			defaultValue: "'Something went wrong'",
			description: ''
		},
		{ name: 'message', type: 'string', required: true, defaultValue: '', description: '' },
		{
			name: 'severity',
			type: 'ErrorStateSeverity',
			required: false,
			defaultValue: "'section'",
			description: ''
		},
		{
			name: 'retryAction',
			type: 'ErrorStateAction',
			required: false,
			defaultValue: '',
			description: ''
		},
		{
			name: 'supportAction',
			type: 'ErrorStateAction',
			required: false,
			defaultValue: '',
			description: ''
		}
	],
	ExportPanel: [
		{
			name: 'title',
			type: 'string',
			required: false,
			defaultValue: "'Export data'",
			description: ''
		},
		{
			name: 'description',
			type: 'string',
			required: false,
			defaultValue: "'Move structured data safely without hand-rolled file workflows.'",
			description: ''
		},
		{ name: 'formats', type: 'string[]', required: false, defaultValue: "['CSV'", description: '' },
		{ name: 'action', type: 'ActionConfig', required: false, defaultValue: '', description: '' }
	],
	FileList: [
		{ name: 'title', type: 'string', required: false, defaultValue: "'FileList'", description: '' },
		{
			name: 'description',
			type: 'string',
			required: false,
			defaultValue: "'File list with names",
			description: ''
		},
		{ name: 'items', type: 'FileListItem[]', required: false, defaultValue: '[]', description: '' },
		{
			name: 'emptyMessage',
			type: 'string',
			required: false,
			defaultValue: "'No items to show.'",
			description: ''
		},
		{
			name: 'actions',
			type: 'ActionConfig[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'children',
			type: 'Snippet',
			required: false,
			defaultValue: '',
			description: 'Rendered child content.'
		}
	],
	FileUploader: [
		{
			name: 'title',
			type: 'string',
			required: false,
			defaultValue: "'Upload files'",
			description: ''
		},
		{
			name: 'description',
			type: 'string',
			required: false,
			defaultValue: "'Drop files into a safe",
			description: ''
		},
		{ name: 'accept', type: 'string', required: false, defaultValue: '', description: '' },
		{ name: 'multiple', type: 'boolean', required: false, defaultValue: 'true', description: '' },
		{ name: 'disabled', type: 'boolean', required: false, defaultValue: 'false', description: '' },
		{
			name: 'onFiles',
			type: '(files: File[]) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	ForbiddenPage: [
		{
			name: 'title',
			type: 'string',
			required: false,
			defaultValue: "'Access restricted'",
			description: ''
		},
		{
			name: 'description',
			type: 'string',
			required: false,
			defaultValue: "'You do not have permission to view this page.'",
			description: ''
		},
		{ name: 'action', type: 'ActionConfig', required: false, defaultValue: '', description: '' }
	],
	ForgotPasswordForm: [
		{
			name: 'title',
			type: 'string',
			required: false,
			defaultValue: "'Forgot password'",
			description: ''
		},
		{
			name: 'description',
			type: 'string',
			required: false,
			defaultValue: "'Provider-agnostic password reset request form.'",
			description: ''
		},
		{
			name: 'primaryAction',
			type: 'ActionConfig',
			required: false,
			defaultValue: '',
			description: ''
		},
		{
			name: 'onSubmit',
			type: '(values: Record<string, string>) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	FormSection: [
		{ name: 'title', type: 'string', required: true, defaultValue: '', description: '' },
		{ name: 'description', type: 'string', required: false, defaultValue: '', description: '' },
		{ name: 'status', type: 'string', required: false, defaultValue: '', description: '' },
		{
			name: 'action',
			type: 'FormSectionAction',
			required: false,
			defaultValue: '',
			description: ''
		},
		{
			name: 'children',
			type: 'Snippet',
			required: false,
			defaultValue: '',
			description: 'Rendered child content.'
		}
	],
	IconButton: [
		{ name: 'label', type: 'string', required: true, defaultValue: '', description: '' },
		{ name: 'icon', type: 'string', required: true, defaultValue: '', description: '' },
		{
			name: 'variant',
			type: "'primary' | 'secondary' | 'danger' | 'ghost'",
			required: false,
			defaultValue: "'secondary'",
			description: ''
		},
		{
			name: 'size',
			type: "'sm' | 'md' | 'lg'",
			required: false,
			defaultValue: "'md'",
			description: ''
		},
		{ name: 'disabled', type: 'boolean', required: false, defaultValue: 'false', description: '' },
		{ name: 'loading', type: 'boolean', required: false, defaultValue: 'false', description: '' },
		{
			name: 'onClick',
			type: '() => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	ImportPanel: [
		{
			name: 'title',
			type: 'string',
			required: false,
			defaultValue: "'Import data'",
			description: ''
		},
		{
			name: 'description',
			type: 'string',
			required: false,
			defaultValue: "'Move structured data safely without hand-rolled file workflows.'",
			description: ''
		},
		{ name: 'formats', type: 'string[]', required: false, defaultValue: "['CSV'", description: '' },
		{ name: 'action', type: 'ActionConfig', required: false, defaultValue: '', description: '' }
	],
	Input: [
		{ name: 'value', type: 'string', required: false, defaultValue: "''", description: '' },
		{
			name: 'type',
			type: 'TextInputType',
			required: false,
			defaultValue: "'text'",
			description: ''
		},
		{ name: 'placeholder', type: 'string', required: false, defaultValue: '', description: '' },
		{ name: 'name', type: 'string', required: false, defaultValue: '', description: '' },
		{ name: 'ariaLabel', type: 'string', required: false, defaultValue: '', description: '' },
		{ name: 'disabled', type: 'boolean', required: false, defaultValue: 'false', description: '' },
		{ name: 'readonly', type: 'boolean', required: false, defaultValue: 'false', description: '' },
		{ name: 'required', type: 'boolean', required: false, defaultValue: 'false', description: '' },
		{ name: 'invalid', type: 'boolean', required: false, defaultValue: 'false', description: '' },
		{
			name: 'tone',
			type: 'FieldTone',
			required: false,
			defaultValue: "'default'",
			description: ''
		},
		{
			name: 'onInput',
			type: '(value: string) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	InspectorPanel: [
		{
			name: 'title',
			type: 'string',
			required: false,
			defaultValue: "'InspectorPanel'",
			description: ''
		},
		{
			name: 'description',
			type: 'string',
			required: false,
			defaultValue: "'Inspector side panel for selected objects.'",
			description: ''
		},
		{
			name: 'items',
			type: 'InspectorPanelItem[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'emptyMessage',
			type: 'string',
			required: false,
			defaultValue: "'No items to show.'",
			description: ''
		},
		{
			name: 'actions',
			type: 'ActionConfig[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'children',
			type: 'Snippet',
			required: false,
			defaultValue: '',
			description: 'Rendered child content.'
		}
	],
	IntegrationList: [
		{
			name: 'title',
			type: 'string',
			required: false,
			defaultValue: "'IntegrationList'",
			description: ''
		},
		{
			name: 'description',
			type: 'string',
			required: false,
			defaultValue: "'Integration catalog/list with status and actions.'",
			description: ''
		},
		{
			name: 'items',
			type: 'IntegrationListItem[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'emptyMessage',
			type: 'string',
			required: false,
			defaultValue: "'No items to show.'",
			description: ''
		},
		{
			name: 'actions',
			type: 'ActionConfig[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'children',
			type: 'Snippet',
			required: false,
			defaultValue: '',
			description: 'Rendered child content.'
		}
	],
	JobRunList: [
		{
			name: 'title',
			type: 'string',
			required: false,
			defaultValue: "'JobRunList'",
			description: ''
		},
		{
			name: 'description',
			type: 'string',
			required: false,
			defaultValue: "'Job run history with status and timestamps.'",
			description: ''
		},
		{
			name: 'items',
			type: 'JobRunListItem[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'emptyMessage',
			type: 'string',
			required: false,
			defaultValue: "'No items to show.'",
			description: ''
		},
		{
			name: 'actions',
			type: 'ActionConfig[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'children',
			type: 'Snippet',
			required: false,
			defaultValue: '',
			description: 'Rendered child content.'
		}
	],
	JsonViewer: [
		{ name: 'title', type: 'string', required: false, defaultValue: "'JSON'", description: '' },
		{ name: 'value', type: 'unknown', required: false, defaultValue: '{}', description: '' },
		{ name: 'collapsed', type: 'boolean', required: false, defaultValue: 'false', description: '' }
	],
	KanbanBoard: [
		{
			name: 'title',
			type: 'string',
			required: false,
			defaultValue: "'Kanban board'",
			description: ''
		},
		{
			name: 'description',
			type: 'string',
			required: false,
			defaultValue: "'Simple kanban board for workflow apps.'",
			description: ''
		},
		{
			name: 'items',
			type: 'KanbanBoardItem[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'actions',
			type: 'ActionConfig[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'primaryAction',
			type: 'ActionConfig',
			required: false,
			defaultValue: '',
			description: ''
		},
		{
			name: 'onSelect',
			type: '(item: KanbanBoardItem) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	KeyValueList: [
		{ name: 'title', type: 'string', required: false, defaultValue: '', description: '' },
		{ name: 'items', type: 'KeyValueItem[]', required: false, defaultValue: '[]', description: '' }
	],
	KeyboardShortcut: [
		{ name: 'keys', type: 'string[]', required: true, defaultValue: '', description: '' },
		{
			name: 'label',
			type: 'string',
			required: false,
			defaultValue: "keys.join(' + ')",
			description: ''
		}
	],
	KnowledgeBaseLayout: [
		{
			name: 'title',
			type: 'string',
			required: false,
			defaultValue: "'KnowledgeBaseLayout'",
			description: ''
		},
		{
			name: 'description',
			type: 'string',
			required: false,
			defaultValue: "'Knowledge base layout with sections and article content.'",
			description: ''
		},
		{
			name: 'items',
			type: 'KnowledgeBaseLayoutItem[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'emptyMessage',
			type: 'string',
			required: false,
			defaultValue: "'No items to show.'",
			description: ''
		},
		{
			name: 'actions',
			type: 'ActionConfig[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'children',
			type: 'Snippet',
			required: false,
			defaultValue: '',
			description: 'Rendered child content.'
		}
	],
	LoadingPage: [
		{
			name: 'title',
			type: 'string',
			required: false,
			defaultValue: "'Loading page'",
			description: ''
		},
		{
			name: 'description',
			type: 'string',
			required: false,
			defaultValue: "'We are preparing this screen.'",
			description: ''
		},
		{ name: 'action', type: 'ActionConfig', required: false, defaultValue: '', description: '' }
	],
	LogViewer: [
		{ name: 'title', type: 'string', required: false, defaultValue: "'Logs'", description: '' },
		{
			name: 'lines',
			type: 'LogViewerLine[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'emptyMessage',
			type: 'string',
			required: false,
			defaultValue: "'No logs yet.'",
			description: ''
		},
		{ name: 'wrap', type: 'boolean', required: false, defaultValue: 'false', description: '' }
	],
	MaintenancePage: [
		{
			name: 'title',
			type: 'string',
			required: false,
			defaultValue: "'Maintenance in progress'",
			description: ''
		},
		{
			name: 'description',
			type: 'string',
			required: false,
			defaultValue: "'This area is temporarily unavailable.'",
			description: ''
		},
		{ name: 'action', type: 'ActionConfig', required: false, defaultValue: '', description: '' }
	],
	MediaGallery: [
		{
			name: 'title',
			type: 'string',
			required: false,
			defaultValue: "'Media gallery'",
			description: ''
		},
		{
			name: 'description',
			type: 'string',
			required: false,
			defaultValue: "'Media gallery for images",
			description: ''
		},
		{
			name: 'items',
			type: 'MediaGalleryItem[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'actions',
			type: 'ActionConfig[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'primaryAction',
			type: 'ActionConfig',
			required: false,
			defaultValue: '',
			description: ''
		},
		{
			name: 'onSelect',
			type: '(item: MediaGalleryItem) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	MetadataPanel: [
		{ name: 'title', type: 'string', required: false, defaultValue: "'Metadata'", description: '' },
		{ name: 'items', type: 'KeyValueItem[]', required: false, defaultValue: '[]', description: '' }
	],
	MetricCard: [
		{
			name: 'title',
			type: 'string',
			required: false,
			defaultValue: "'MetricCard'",
			description: ''
		},
		{
			name: 'description',
			type: 'string',
			required: false,
			defaultValue: "'Metric card with value",
			description: ''
		},
		{
			name: 'items',
			type: 'MetricCardItem[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'emptyMessage',
			type: 'string',
			required: false,
			defaultValue: "'No items to show.'",
			description: ''
		},
		{
			name: 'actions',
			type: 'ActionConfig[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'children',
			type: 'Snippet',
			required: false,
			defaultValue: '',
			description: 'Rendered child content.'
		}
	],
	MultiSelectField: [
		{ name: 'label', type: 'string', required: true, defaultValue: '', description: '' },
		{ name: 'description', type: 'string', required: false, defaultValue: '', description: '' },
		{
			name: 'options',
			type: 'SelectOption[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{ name: 'values', type: 'string[]', required: false, defaultValue: '[]', description: '' },
		{ name: 'error', type: 'string', required: false, defaultValue: '', description: '' },
		{ name: 'disabled', type: 'boolean', required: false, defaultValue: 'false', description: '' },
		{
			name: 'onChange',
			type: '(values: string[]) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	NotFoundPage: [
		{
			name: 'title',
			type: 'string',
			required: false,
			defaultValue: "'Page not found'",
			description: ''
		},
		{
			name: 'description',
			type: 'string',
			required: false,
			defaultValue: "'The requested resource could not be found.'",
			description: ''
		},
		{ name: 'action', type: 'ActionConfig', required: false, defaultValue: '', description: '' }
	],
	NotificationCenter: [
		{
			name: 'title',
			type: 'string',
			required: false,
			defaultValue: "'NotificationCenter'",
			description: ''
		},
		{
			name: 'description',
			type: 'string',
			required: false,
			defaultValue: "'Notification center with read/unread states.'",
			description: ''
		},
		{
			name: 'items',
			type: 'NotificationCenterItem[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'emptyMessage',
			type: 'string',
			required: false,
			defaultValue: "'No items to show.'",
			description: ''
		},
		{
			name: 'actions',
			type: 'ActionConfig[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'children',
			type: 'Snippet',
			required: false,
			defaultValue: '',
			description: 'Rendered child content.'
		}
	],
	NumberField: [
		{ name: 'label', type: 'string', required: true, defaultValue: '', description: '' },
		{ name: 'value', type: 'number', required: false, defaultValue: '', description: '' },
		{ name: 'min', type: 'number', required: false, defaultValue: '', description: '' },
		{ name: 'max', type: 'number', required: false, defaultValue: '', description: '' },
		{ name: 'step', type: 'number', required: false, defaultValue: '1', description: '' },
		{ name: 'description', type: 'string', required: false, defaultValue: '', description: '' },
		{ name: 'error', type: 'string', required: false, defaultValue: '', description: '' },
		{ name: 'disabled', type: 'boolean', required: false, defaultValue: 'false', description: '' },
		{
			name: 'onInput',
			type: '(value: number | undefined) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	OrderList: [
		{
			name: 'title',
			type: 'string',
			required: false,
			defaultValue: "'OrderList'",
			description: ''
		},
		{
			name: 'description',
			type: 'string',
			required: false,
			defaultValue: "'Order list with status",
			description: ''
		},
		{
			name: 'items',
			type: 'OrderListItem[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'emptyMessage',
			type: 'string',
			required: false,
			defaultValue: "'No items to show.'",
			description: ''
		},
		{
			name: 'actions',
			type: 'ActionConfig[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'children',
			type: 'Snippet',
			required: false,
			defaultValue: '',
			description: 'Rendered child content.'
		}
	],
	PageHeader: [
		{ name: 'title', type: 'string', required: true, defaultValue: '', description: '' },
		{ name: 'description', type: 'string', required: false, defaultValue: '', description: '' },
		{ name: 'kicker', type: 'string', required: false, defaultValue: '', description: '' },
		{
			name: 'primaryAction',
			type: 'PageHeaderAction',
			required: false,
			defaultValue: '',
			description: ''
		},
		{
			name: 'secondaryAction',
			type: 'PageHeaderAction',
			required: false,
			defaultValue: '',
			description: ''
		}
	],
	PageState: [
		{ name: 'title', type: 'string', required: true, defaultValue: '', description: '' },
		{ name: 'description', type: 'string', required: false, defaultValue: '', description: '' },
		{
			name: 'tone',
			type: "'loading' | 'empty' | 'error' | 'forbidden' | 'maintenance'",
			required: false,
			defaultValue: "'empty'",
			description: ''
		},
		{ name: 'action', type: 'ActionConfig', required: false, defaultValue: '', description: '' }
	],
	Pagination: [
		{ name: 'page', type: 'number', required: true, defaultValue: '', description: '' },
		{ name: 'pageCount', type: 'number', required: true, defaultValue: '', description: '' },
		{
			name: 'label',
			type: 'string',
			required: false,
			defaultValue: "'Pagination'",
			description: ''
		},
		{
			name: 'onPageChange',
			type: '(page: number) => void',
			required: true,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	PermissionMatrix: [
		{
			name: 'title',
			type: 'string',
			required: false,
			defaultValue: "'Permissions'",
			description: ''
		},
		{
			name: 'roles',
			type: 'PermissionMatrixRole[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'permissions',
			type: 'PermissionMatrixPermission[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'values',
			type: 'Record<string, string[]>',
			required: false,
			defaultValue: '{}',
			description: ''
		},
		{ name: 'disabled', type: 'boolean', required: false, defaultValue: 'false', description: '' },
		{
			name: 'onChange',
			type: '(roleId: string, permissionId: string, checked: boolean) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	Popover: [
		{ name: 'triggerLabel', type: 'string', required: true, defaultValue: '', description: '' },
		{ name: 'title', type: 'string', required: false, defaultValue: '', description: '' },
		{ name: 'description', type: 'string', required: false, defaultValue: '', description: '' },
		{ name: 'open', type: 'boolean', required: false, defaultValue: 'false', description: '' },
		{
			name: 'placement',
			type: "'bottom-start' | 'bottom-end' | 'top-start' | 'top-end'",
			required: false,
			defaultValue: "'bottom-end'",
			description: ''
		},
		{
			name: 'onOpenChange',
			type: '(open: boolean) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		},
		{
			name: 'children',
			type: 'Snippet',
			required: false,
			defaultValue: '',
			description: 'Rendered child content.'
		}
	],
	PricingTable: [
		{ name: 'title', type: 'string', required: false, defaultValue: "'Pricing'", description: '' },
		{
			name: 'description',
			type: 'string',
			required: false,
			defaultValue: "'Plan cards with provider-agnostic checkout callbacks.'",
			description: ''
		},
		{
			name: 'items',
			type: 'PricingTableItem[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'actions',
			type: 'ActionConfig[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'primaryAction',
			type: 'ActionConfig',
			required: false,
			defaultValue: '',
			description: ''
		},
		{
			name: 'onSelect',
			type: '(item: PricingTableItem) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	ProfileSettings: [
		{
			name: 'title',
			type: 'string',
			required: false,
			defaultValue: "'ProfileSettings'",
			description: ''
		},
		{
			name: 'description',
			type: 'string',
			required: false,
			defaultValue: "'Profile settings panel with user information actions.'",
			description: ''
		},
		{
			name: 'items',
			type: 'ProfileSettingsItem[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'emptyMessage',
			type: 'string',
			required: false,
			defaultValue: "'No items to show.'",
			description: ''
		},
		{
			name: 'actions',
			type: 'ActionConfig[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'children',
			type: 'Snippet',
			required: false,
			defaultValue: '',
			description: 'Rendered child content.'
		}
	],
	ProgressBar: [
		{ name: 'value', type: 'number', required: true, defaultValue: '', description: '' },
		{ name: 'max', type: 'number', required: false, defaultValue: '100', description: '' },
		{ name: 'label', type: 'string', required: false, defaultValue: "'Progress'", description: '' },
		{ name: 'showValue', type: 'boolean', required: false, defaultValue: 'false', description: '' }
	],
	PromptComposer: [
		{
			name: 'title',
			type: 'string',
			required: false,
			defaultValue: "'Prompt composer'",
			description: ''
		},
		{
			name: 'description',
			type: 'string',
			required: false,
			defaultValue: "'Prompt input surface with submit callback.'",
			description: ''
		},
		{
			name: 'primaryAction',
			type: 'ActionConfig',
			required: false,
			defaultValue: '',
			description: ''
		},
		{
			name: 'onSubmit',
			type: '(values: Record<string, string>) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	RadioGroupField: [
		{ name: 'label', type: 'string', required: true, defaultValue: '', description: '' },
		{ name: 'options', type: 'SelectOption[]', required: true, defaultValue: '', description: '' },
		{ name: 'value', type: 'string', required: false, defaultValue: '', description: '' },
		{ name: 'description', type: 'string', required: false, defaultValue: '', description: '' },
		{ name: 'error', type: 'string', required: false, defaultValue: '', description: '' },
		{
			name: 'onChange',
			type: '(value: string) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	ResetPasswordForm: [
		{
			name: 'title',
			type: 'string',
			required: false,
			defaultValue: "'Reset password'",
			description: ''
		},
		{
			name: 'description',
			type: 'string',
			required: false,
			defaultValue: "'Provider-agnostic reset password form.'",
			description: ''
		},
		{
			name: 'primaryAction',
			type: 'ActionConfig',
			required: false,
			defaultValue: '',
			description: ''
		},
		{
			name: 'onSubmit',
			type: '(values: Record<string, string>) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	ResourceDetail: [
		{
			name: 'title',
			type: 'string',
			required: false,
			defaultValue: "'ResourceDetail'",
			description: ''
		},
		{
			name: 'description',
			type: 'string',
			required: false,
			defaultValue: "'Resource detail summary with properties and actions.'",
			description: ''
		},
		{
			name: 'items',
			type: 'ResourceDetailItem[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'emptyMessage',
			type: 'string',
			required: false,
			defaultValue: "'No items to show.'",
			description: ''
		},
		{
			name: 'actions',
			type: 'ActionConfig[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'children',
			type: 'Snippet',
			required: false,
			defaultValue: '',
			description: 'Rendered child content.'
		}
	],
	ResourceGrid: [
		{
			name: 'title',
			type: 'string',
			required: false,
			defaultValue: "'Resource grid'",
			description: ''
		},
		{
			name: 'description',
			type: 'string',
			required: false,
			defaultValue: "'Product resource grid for cards and inventories.'",
			description: ''
		},
		{
			name: 'items',
			type: 'ResourceGridItem[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'actions',
			type: 'ActionConfig[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'primaryAction',
			type: 'ActionConfig',
			required: false,
			defaultValue: '',
			description: ''
		},
		{
			name: 'onSelect',
			type: '(item: ResourceGridItem) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	ResourceList: [
		{
			name: 'title',
			type: 'string',
			required: false,
			defaultValue: "'Resources'",
			description: ''
		},
		{
			name: 'description',
			type: 'string',
			required: false,
			defaultValue: "'Product resource list with actions and states.'",
			description: ''
		},
		{
			name: 'items',
			type: 'ResourceListItem[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'actions',
			type: 'ActionConfig[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'primaryAction',
			type: 'ActionConfig',
			required: false,
			defaultValue: '',
			description: ''
		},
		{
			name: 'onSelect',
			type: '(item: ResourceListItem) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	SearchFilterBar: [
		{ name: 'query', type: 'string', required: false, defaultValue: "''", description: '' },
		{
			name: 'placeholder',
			type: 'string',
			required: false,
			defaultValue: "'Search'",
			description: ''
		},
		{
			name: 'filters',
			type: 'SearchFilter[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'activeFilters',
			type: 'Record<string, string>',
			required: false,
			defaultValue: '{}',
			description: ''
		},
		{ name: 'resultCount', type: 'number', required: false, defaultValue: '', description: '' },
		{
			name: 'clearLabel',
			type: 'string',
			required: false,
			defaultValue: "'Clear'",
			description: ''
		},
		{
			name: 'onQueryChange',
			type: '(query: string) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		},
		{
			name: 'onFilterChange',
			type: '(key: string, value: string) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		},
		{
			name: 'onClear',
			type: '() => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	SelectField: [
		{ name: 'label', type: 'string', required: true, defaultValue: '', description: '' },
		{ name: 'value', type: 'string', required: false, defaultValue: "''", description: '' },
		{ name: 'options', type: 'SelectOption[]', required: true, defaultValue: '', description: '' },
		{ name: 'placeholder', type: 'string', required: false, defaultValue: '', description: '' },
		{ name: 'description', type: 'string', required: false, defaultValue: '', description: '' },
		{
			name: 'error',
			type: 'string | null',
			required: false,
			defaultValue: 'null',
			description: ''
		},
		{ name: 'required', type: 'boolean', required: false, defaultValue: 'false', description: '' },
		{ name: 'disabled', type: 'boolean', required: false, defaultValue: 'false', description: '' },
		{ name: 'name', type: 'string', required: false, defaultValue: '', description: '' },
		{
			name: 'onChange',
			type: '(value: string) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	Separator: [
		{
			name: 'orientation',
			type: "'horizontal' | 'vertical'",
			required: false,
			defaultValue: "'horizontal'",
			description: ''
		},
		{ name: 'label', type: 'string', required: false, defaultValue: '', description: '' }
	],
	SettingsPage: [
		{ name: 'title', type: 'string', required: false, defaultValue: "'Settings'", description: '' },
		{
			name: 'description',
			type: 'string',
			required: false,
			defaultValue:
				"'Manage application settings with consistent section structure and save state.'",
			description: ''
		},
		{
			name: 'sections',
			type: 'SettingsPageSection[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'primaryAction',
			type: 'ActionConfig',
			required: false,
			defaultValue: '',
			description: ''
		},
		{
			name: 'status',
			type: "'idle' | 'dirty' | 'saving' | 'saved' | 'error'",
			required: false,
			defaultValue: "'idle'",
			description: ''
		},
		{ name: 'message', type: 'string', required: false, defaultValue: '', description: '' },
		{
			name: 'onSubmit',
			type: '() => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		},
		{
			name: 'onCancel',
			type: '() => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	SignInForm: [
		{ name: 'title', type: 'string', required: false, defaultValue: "'Sign in'", description: '' },
		{
			name: 'description',
			type: 'string',
			required: false,
			defaultValue: "'Provider-agnostic sign in form.'",
			description: ''
		},
		{
			name: 'primaryAction',
			type: 'ActionConfig',
			required: false,
			defaultValue: '',
			description: ''
		},
		{
			name: 'onSubmit',
			type: '(values: Record<string, string>) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	SignUpForm: [
		{ name: 'title', type: 'string', required: false, defaultValue: "'Sign up'", description: '' },
		{
			name: 'description',
			type: 'string',
			required: false,
			defaultValue: "'Provider-agnostic sign up form.'",
			description: ''
		},
		{
			name: 'primaryAction',
			type: 'ActionConfig',
			required: false,
			defaultValue: '',
			description: ''
		},
		{
			name: 'onSubmit',
			type: '(values: Record<string, string>) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	Skeleton: [
		{
			name: 'label',
			type: 'string',
			required: false,
			defaultValue: "'Loading content'",
			description: ''
		},
		{ name: 'lines', type: 'number', required: false, defaultValue: '1', description: '' },
		{
			name: 'shape',
			type: "'text' | 'block' | 'circle'",
			required: false,
			defaultValue: "'text'",
			description: ''
		}
	],
	Spinner: [
		{ name: 'label', type: 'string', required: false, defaultValue: "'Loading'", description: '' },
		{
			name: 'size',
			type: "'sm' | 'md' | 'lg'",
			required: false,
			defaultValue: "'md'",
			description: ''
		}
	],
	StatusBadge: [
		{ name: 'label', type: 'string', required: true, defaultValue: '', description: '' },
		{
			name: 'tone',
			type: 'StatusBadgeTone',
			required: false,
			defaultValue: "'neutral'",
			description: ''
		}
	],
	Stepper: [
		{ name: 'steps', type: 'StepperStep[]', required: false, defaultValue: '[]', description: '' },
		{
			name: 'currentStepId',
			type: 'string',
			required: false,
			defaultValue: 'steps[0]?.id',
			description: ''
		},
		{
			name: 'onStepSelect',
			type: '(id: string) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	SubmitBar: [
		{ name: 'message', type: 'string', required: false, defaultValue: '', description: '' },
		{
			name: 'status',
			type: "'idle' | 'dirty' | 'saving' | 'saved' | 'error'",
			required: false,
			defaultValue: "'idle'",
			description: ''
		},
		{
			name: 'submitLabel',
			type: 'string',
			required: false,
			defaultValue: "'Save changes'",
			description: ''
		},
		{
			name: 'cancelLabel',
			type: 'string',
			required: false,
			defaultValue: "'Cancel'",
			description: ''
		},
		{ name: 'saving', type: 'boolean', required: false, defaultValue: 'false', description: '' },
		{ name: 'disabled', type: 'boolean', required: false, defaultValue: 'false', description: '' },
		{
			name: 'onSubmit',
			type: '() => void',
			required: true,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		},
		{
			name: 'onCancel',
			type: '() => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		},
		{
			name: 'secondaryAction',
			type: 'SubmitBarAction',
			required: false,
			defaultValue: '',
			description: ''
		}
	],
	SwitchField: [
		{ name: 'label', type: 'string', required: true, defaultValue: '', description: '' },
		{ name: 'checked', type: 'boolean', required: false, defaultValue: 'false', description: '' },
		{ name: 'description', type: 'string', required: false, defaultValue: '', description: '' },
		{ name: 'disabled', type: 'boolean', required: false, defaultValue: 'false', description: '' },
		{ name: 'name', type: 'string', required: false, defaultValue: '', description: '' },
		{
			name: 'onChange',
			type: '(checked: boolean) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	Table: [
		{ name: 'columns', type: 'TableColumn[]', required: true, defaultValue: '', description: '' },
		{ name: 'rows', type: 'TableRow[]', required: true, defaultValue: '', description: '' },
		{ name: 'caption', type: 'string', required: false, defaultValue: '', description: '' },
		{
			name: 'emptyTitle',
			type: 'string',
			required: false,
			defaultValue: "'No rows'",
			description: ''
		},
		{
			name: 'emptyDescription',
			type: 'string',
			required: false,
			defaultValue: "'There is no table data to display yet.'",
			description: ''
		}
	],
	Tabs: [
		{ name: 'tabs', type: 'TabItem[]', required: true, defaultValue: '', description: '' },
		{
			name: 'activeId',
			type: 'string',
			required: false,
			defaultValue: 'tabs[0]?.id',
			description: ''
		},
		{
			name: 'onChange',
			type: '(id: string) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	TextField: [
		{ name: 'label', type: 'string', required: true, defaultValue: '', description: '' },
		{ name: 'value', type: 'string', required: false, defaultValue: "''", description: '' },
		{
			name: 'type',
			type: 'TextInputType',
			required: false,
			defaultValue: "'text'",
			description: ''
		},
		{ name: 'placeholder', type: 'string', required: false, defaultValue: '', description: '' },
		{ name: 'description', type: 'string', required: false, defaultValue: '', description: '' },
		{
			name: 'error',
			type: 'string | null',
			required: false,
			defaultValue: 'null',
			description: ''
		},
		{ name: 'required', type: 'boolean', required: false, defaultValue: 'false', description: '' },
		{ name: 'disabled', type: 'boolean', required: false, defaultValue: 'false', description: '' },
		{ name: 'readonly', type: 'boolean', required: false, defaultValue: 'false', description: '' },
		{ name: 'name', type: 'string', required: false, defaultValue: '', description: '' },
		{
			name: 'tone',
			type: 'FieldTone',
			required: false,
			defaultValue: "'default'",
			description: ''
		},
		{
			name: 'onInput',
			type: '(value: string) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	Textarea: [
		{ name: 'value', type: 'string', required: false, defaultValue: "''", description: '' },
		{ name: 'placeholder', type: 'string', required: false, defaultValue: '', description: '' },
		{ name: 'name', type: 'string', required: false, defaultValue: '', description: '' },
		{ name: 'ariaLabel', type: 'string', required: false, defaultValue: '', description: '' },
		{ name: 'rows', type: 'number', required: false, defaultValue: '4', description: '' },
		{ name: 'disabled', type: 'boolean', required: false, defaultValue: 'false', description: '' },
		{ name: 'readonly', type: 'boolean', required: false, defaultValue: 'false', description: '' },
		{ name: 'required', type: 'boolean', required: false, defaultValue: 'false', description: '' },
		{ name: 'invalid', type: 'boolean', required: false, defaultValue: 'false', description: '' },
		{
			name: 'tone',
			type: 'FieldTone',
			required: false,
			defaultValue: "'default'",
			description: ''
		},
		{
			name: 'onInput',
			type: '(value: string) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	TextareaField: [
		{ name: 'label', type: 'string', required: true, defaultValue: '', description: '' },
		{ name: 'value', type: 'string', required: false, defaultValue: "''", description: '' },
		{ name: 'placeholder', type: 'string', required: false, defaultValue: '', description: '' },
		{ name: 'description', type: 'string', required: false, defaultValue: '', description: '' },
		{
			name: 'error',
			type: 'string | null',
			required: false,
			defaultValue: 'null',
			description: ''
		},
		{ name: 'required', type: 'boolean', required: false, defaultValue: 'false', description: '' },
		{ name: 'disabled', type: 'boolean', required: false, defaultValue: 'false', description: '' },
		{ name: 'readonly', type: 'boolean', required: false, defaultValue: 'false', description: '' },
		{ name: 'name', type: 'string', required: false, defaultValue: '', description: '' },
		{ name: 'rows', type: 'number', required: false, defaultValue: '4', description: '' },
		{
			name: 'onInput',
			type: '(value: string) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	Timeline: [
		{ name: 'title', type: 'string', required: false, defaultValue: "'Timeline'", description: '' },
		{
			name: 'description',
			type: 'string',
			required: false,
			defaultValue: "'Timeline for progress and history.'",
			description: ''
		},
		{ name: 'items', type: 'TimelineItem[]', required: false, defaultValue: '[]', description: '' },
		{
			name: 'emptyMessage',
			type: 'string',
			required: false,
			defaultValue: "'No items to show.'",
			description: ''
		},
		{
			name: 'actions',
			type: 'ActionConfig[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'children',
			type: 'Snippet',
			required: false,
			defaultValue: '',
			description: 'Rendered child content.'
		}
	],
	ToastViewport: [
		{ name: 'toasts', type: 'ToastItem[]', required: false, defaultValue: '[]', description: '' },
		{
			name: 'position',
			type: "'top-right' | 'bottom-right'",
			required: false,
			defaultValue: "'bottom-right'",
			description: ''
		},
		{
			name: 'onDismiss',
			type: '(id: string) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	TokenMeter: [
		{ name: 'used', type: 'number', required: true, defaultValue: '', description: '' },
		{ name: 'limit', type: 'number', required: true, defaultValue: '', description: '' },
		{
			name: 'label',
			type: 'string',
			required: false,
			defaultValue: "'Token usage'",
			description: ''
		}
	],
	Tooltip: [
		{ name: 'label', type: 'string', required: true, defaultValue: '', description: '' },
		{
			name: 'placement',
			type: "'top' | 'bottom'",
			required: false,
			defaultValue: "'top'",
			description: ''
		},
		{
			name: 'children',
			type: 'Snippet',
			required: true,
			defaultValue: '',
			description: 'Rendered child content.'
		}
	],
	TrendChart: [
		{ name: 'title', type: 'string', required: true, defaultValue: '', description: '' },
		{ name: 'data', type: 'ChartDatum[]', required: false, defaultValue: '[]', description: '' },
		{ name: 'summary', type: 'string', required: false, defaultValue: '', description: '' }
	],
	UserManagement: [
		{
			name: 'users',
			type: 'UserManagementUser[]',
			required: true,
			defaultValue: '',
			description: ''
		},
		{
			name: 'roles',
			type: 'UserManagementRole[]',
			required: false,
			defaultValue: "[ { value: 'owner'",
			description: ''
		},
		{ name: 'loading', type: 'boolean', required: false, defaultValue: 'false', description: '' },
		{
			name: 'error',
			type: 'string | null',
			required: false,
			defaultValue: 'null',
			description: ''
		},
		{ name: 'currentUserId', type: 'string', required: false, defaultValue: '', description: '' },
		{
			name: 'onInvite',
			type: '() => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		},
		{
			name: 'onChangeRole',
			type: '(userId: string, role: string) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		},
		{
			name: 'onRemove',
			type: '(userId: string) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	WizardLayout: [
		{ name: 'title', type: 'string', required: true, defaultValue: '', description: '' },
		{ name: 'description', type: 'string', required: false, defaultValue: '', description: '' },
		{ name: 'steps', type: 'StepperStep[]', required: false, defaultValue: '[]', description: '' },
		{ name: 'currentStepId', type: 'string', required: false, defaultValue: '', description: '' },
		{
			name: 'primaryAction',
			type: 'ActionConfig',
			required: false,
			defaultValue: '',
			description: ''
		},
		{
			name: 'secondaryAction',
			type: 'ActionConfig',
			required: false,
			defaultValue: '',
			description: ''
		},
		{
			name: 'children',
			type: 'Snippet',
			required: false,
			defaultValue: '',
			description: 'Rendered child content.'
		},
		{
			name: 'onStepSelect',
			type: '(id: string) => void',
			required: false,
			defaultValue: '',
			description: 'Callback invoked by the component.'
		}
	],
	WorkspaceSettings: [
		{
			name: 'title',
			type: 'string',
			required: false,
			defaultValue: "'WorkspaceSettings'",
			description: ''
		},
		{
			name: 'description',
			type: 'string',
			required: false,
			defaultValue: "'Workspace settings panel with workspace details actions.'",
			description: ''
		},
		{
			name: 'items',
			type: 'WorkspaceSettingsItem[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'emptyMessage',
			type: 'string',
			required: false,
			defaultValue: "'No items to show.'",
			description: ''
		},
		{
			name: 'actions',
			type: 'ActionConfig[]',
			required: false,
			defaultValue: '[]',
			description: ''
		},
		{
			name: 'children',
			type: 'Snippet',
			required: false,
			defaultValue: '',
			description: 'Rendered child content.'
		}
	]
} satisfies Record<string, ComponentPropDoc[]>;
