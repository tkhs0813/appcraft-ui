export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export type ActionConfig = {
	label: string;
	onClick: () => void;
	disabled?: boolean;
	loading?: boolean;
};

export type PageHeaderAction = ActionConfig;

export type EmptyStateTone = 'neutral' | 'brand';
export type EmptyStateAction = ActionConfig;

export type ErrorStateSeverity = 'section' | 'page';
export type ErrorStateAction = ActionConfig;

export type ConfirmDialogTone = 'danger' | 'primary';

export type TextInputType = 'text' | 'email' | 'password' | 'url' | 'search' | 'tel' | 'number';
export type FieldTone = 'default' | 'compact';

export type SelectOption = {
	value: string;
	label: string;
	disabled?: boolean;
};

export type FormSectionAction = ActionConfig;
export type SubmitBarAction = ActionConfig;

export type CardTone = 'default' | 'brand' | 'success' | 'warning' | 'danger';
export type CardAction = ActionConfig & { variant?: ButtonVariant };

export type DialogSize = 'sm' | 'md' | 'lg';
export type DialogAction = ActionConfig & { variant?: ButtonVariant };

export type DrawerSide = 'left' | 'right';
export type DrawerAction = DialogAction;

export type DropdownMenuItem = {
	id: string;
	label: string;
	description?: string;
	shortcut?: string;
	tone?: 'default' | 'danger';
	disabled?: boolean;
	onSelect?: (id: string) => void;
};

export type AccordionItem = {
	id: string;
	title: string;
	description?: string;
	content: string;
	disabled?: boolean;
};

export type TableRow = {
	id: string;
	[key: string]: unknown;
};

export type TableColumn = {
	key: string;
	label: string;
	width?: string;
	align?: 'left' | 'center' | 'right';
	kind?: 'text' | 'badge';
	format?: (value: unknown, row: TableRow) => string;
	tone?: (value: unknown, row: TableRow) => StatusBadgeTone;
};

export type DashboardMetric = {
	id: string;
	label: string;
	value: string;
	description?: string;
	delta?: string;
	tone?: StatusBadgeTone;
};

export type DashboardPanel = {
	id: string;
	title: string;
	description?: string;
	status?: string;
	tone?: StatusBadgeTone;
};

export type SettingsPageItem = {
	id: string;
	label: string;
	description?: string;
	value?: string;
};

export type SettingsPageSection = {
	id: string;
	title: string;
	description?: string;
	status?: string;
	tone?: StatusBadgeTone;
	items: SettingsPageItem[];
};

export type StatusBadgeTone = 'neutral' | 'brand' | 'success' | 'warning' | 'danger';

export type DataTableRow = {
	id: string;
	[key: string]: unknown;
};

export type DataTableColumn = {
	key: string;
	label: string;
	width?: string;
	align?: 'left' | 'center' | 'right';
	sortable?: boolean;
	kind?: 'text' | 'badge';
	format?: (value: unknown, row: DataTableRow) => string;
	tone?: (value: unknown, row: DataTableRow) => StatusBadgeTone;
};

export type DataTableRowAction = {
	label: string;
	tone?: 'default' | 'danger';
	onSelect: (row: DataTableRow) => void;
	disabled?: (row: DataTableRow) => boolean;
};

export type SearchFilter = {
	key: string;
	label: string;
	options: SelectOption[];
};

export type AppShellNavItem = {
	label: string;
	href: string;
	icon?: string;
	current?: boolean;
};

export type UserManagementRole = {
	value: string;
	label: string;
};

export type UserManagementUser = {
	id: string;
	name: string;
	email: string;
	role: string;
	status?: 'active' | 'invited' | 'suspended';
	avatarUrl?: string;
};

export type ComponentMetadata = {
	name: string;
	category: 'primitive' | 'pattern' | 'product';
	description: string;
	useCases: string[];
	forbiddenPatterns: string[];
};

export type ComponentRecipe = {
	useCase: string;
	keywords: string[];
	components: string[];
	notes: string;
};

export type AgentStatus = 'idle' | 'thinking' | 'running' | 'waiting' | 'failed' | 'completed';

export type ComboboxOption = SelectOption & {
	description?: string;
};

export type StepperStep = {
	id: string;
	label: string;
	description?: string;
	disabled?: boolean;
};

export type ChartDatum = {
	label: string;
	value: number;
	tone?: StatusBadgeTone;
};

export type AuditLogEvent = {
	id: string;
	actor: string;
	action: string;
	target: string;
	timestamp: string;
	severity?: 'info' | 'warning' | 'danger';
};

export type PermissionMatrixRole = {
	id: string;
	label: string;
	description?: string;
};

export type PermissionMatrixPermission = {
	id: string;
	label: string;
	description?: string;
};

export type ImportReviewIssue = {
	id: string;
	row: number;
	field: string;
	message: string;
	severity?: 'warning' | 'error';
};

export type KeyValueItem = {
	key: string;
	label: string;
	value: string;
};
