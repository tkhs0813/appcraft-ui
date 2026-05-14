export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

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

export type PageHeaderAction = {
	label: string;
	onClick: () => void;
	disabled?: boolean;
};

export type ComponentMetadata = {
	name: string;
	category: 'primitive' | 'pattern' | 'product';
	description: string;
	useCases: string[];
	forbiddenPatterns: string[];
};
