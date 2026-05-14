export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export type ActionConfig = {
	label: string;
	onClick: () => void;
	disabled?: boolean;
};

export type PageHeaderAction = ActionConfig;

export type EmptyStateTone = 'neutral' | 'brand';
export type EmptyStateAction = ActionConfig;

export type ErrorStateSeverity = 'section' | 'page';
export type ErrorStateAction = ActionConfig;

export type ConfirmDialogTone = 'danger' | 'primary';

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
