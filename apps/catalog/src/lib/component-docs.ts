import { componentMetadata, type ComponentMetadata } from 'appcraft-ui';
import { generatedComponentProps } from './generated-component-props.js';

export type ComponentPropDoc = {
	name: string;
	type: string;
	required: boolean;
	defaultValue?: string;
	description?: string;
};

export type ComponentExampleDoc = {
	id: string;
	title: string;
	description: string;
	code: string;
};

export type ComponentDoc = {
	slug: string;
	name: string;
	category: 'primitive' | 'pattern' | 'product';
	description: string;
	useCases: string[];
	forbiddenPatterns: string[];
	props: ComponentPropDoc[];
	examples: ComponentExampleDoc[];
	status: 'documented' | 'generated';
};

type ComponentDocOverride = {
	props?: Record<string, Partial<ComponentPropDoc> & { description: string }>;
	examples?: ComponentExampleDoc[];
};

export function slugifyComponentName(name: string) {
	return name
		.replace(/([a-z0-9])([A-Z])/g, '$1-$2')
		.replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
		.toLowerCase();
}

const overrides: Record<string, ComponentDocOverride> = {
	Button: {
		props: {
			variant: {
				description:
					'Visual intent. Use primary for the main action, secondary for normal alternatives, danger for destructive actions, and ghost for low-emphasis actions.'
			},
			size: {
				description: 'Button height and horizontal padding. Keep md as the default in product UI.'
			},
			type: {
				description:
					'Native button type. Use submit inside forms only when the button should submit the form.'
			},
			disabled: {
				description: 'Prevents interaction and applies the disabled visual state.'
			},
			loading: {
				description:
					'Shows the built-in spinner, sets aria-busy, and disables the button while work is in progress.'
			},
			label: {
				description: 'Text content used when no children snippet is provided.'
			},
			onClick: {
				description:
					'Callback for click handling. Prefer this over attaching custom DOM event plumbing in app code.'
			},
			children: {
				description:
					'Optional custom snippet content for cases where plain label text is not enough.'
			}
		},
		examples: [
			{
				id: 'variants',
				title: 'Variants',
				description:
					'The semantic variants cover primary, secondary, destructive, and quiet actions without custom classes.',
				code: `<Button label="Create project" />
<Button variant="secondary" label="Cancel" />
<Button variant="danger" label="Delete" />
<Button variant="ghost" label="Dismiss" />`
			},
			{
				id: 'sizes',
				title: 'Sizes',
				description:
					'Use size only for density. Do not invent custom padding or font-size overrides.',
				code: `<Button size="sm" label="Small" />
<Button size="md" label="Medium" />
<Button size="lg" label="Large" />`
			},
			{
				id: 'states',
				title: 'States',
				description:
					'Loading and disabled states are built in so app code does not need bespoke spinners or opacity classes.',
				code: `<Button loading label="Saving" />
<Button disabled label="Disabled" />`
			}
		]
	},
	TextField: {
		examples: [
			{
				id: 'basic',
				title: 'Labeled input states',
				description:
					'TextField owns label, help text, validation, required, disabled, and readonly styling.',
				code: `<TextField label="Workspace name" value="Acme" description="Shown in navigation and invoices." />
<TextField label="Email" type="email" value="ryo@example.com" error="Use a company email." />`
			}
		]
	},
	DataTable: {
		examples: [
			{
				id: 'basic',
				title: 'Structured rows',
				description: 'Use DataTable for product data instead of hand-rolled table markup.',
				code: `<DataTable
	columns={columns}
	rows={rows}
	rowActions={rowActions}
/>`
			}
		]
	},
	UserManagement: {
		examples: [
			{
				id: 'product-surface',
				title: 'Complete product component',
				description:
					'UserManagement bundles roles, member rows, loading, empty, error, invite, and remove flows.',
				code: `<UserManagement
	users={users}
	roles={roles}
	currentUserId="u_1"
	onInvite={inviteMember}
	onChangeRole={changeRole}
	onRemove={removeUser}
/>`
			}
		]
	}
};

function applyPropOverrides(name: string, props: ComponentPropDoc[]) {
	const propOverrides = overrides[name]?.props ?? {};

	return props.map((prop) => ({
		...prop,
		...(propOverrides[prop.name] ?? {})
	}));
}

const metadata = componentMetadata as ComponentMetadata[];

export const componentDocs = metadata.map((component) => {
	const examples = overrides[component.name]?.examples ?? [];
	const props = applyPropOverrides(
		component.name,
		generatedComponentProps[component.name as keyof typeof generatedComponentProps] ?? []
	);

	return {
		slug: slugifyComponentName(component.name),
		name: component.name,
		category: component.category,
		description: component.description,
		useCases: component.useCases,
		forbiddenPatterns: component.forbiddenPatterns,
		props,
		examples,
		status: examples.length > 0 ? 'documented' : 'generated'
	} satisfies ComponentDoc;
});

export function getComponentDoc(slug: string) {
	return componentDocs.find((component) => component.slug === slug);
}
