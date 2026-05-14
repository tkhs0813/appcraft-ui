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
