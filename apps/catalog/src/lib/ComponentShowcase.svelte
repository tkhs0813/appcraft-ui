<script lang="ts">
	import {
		Button,
		DataTable,
		TextField,
		UserManagement,
		type DataTableColumn,
		type DataTableRow,
		type DataTableRowAction,
		type UserManagementRole,
		type UserManagementUser
	} from 'appcraft-ui';

	interface Props {
		name: string;
	}

	let { name }: Props = $props();

	const tableColumns: DataTableColumn[] = [
		{ key: 'name', label: 'Name' },
		{ key: 'status', label: 'Status', kind: 'badge', tone: () => 'success' },
		{ key: 'owner', label: 'Owner' }
	];
	const tableRows: DataTableRow[] = [
		{ id: 'api', name: 'API keys', status: 'Live', owner: 'Platform' },
		{ id: 'billing', name: 'Billing sync', status: 'Live', owner: 'Finance' }
	];
	const rowActions: DataTableRowAction[] = [
		{ label: 'Open', onSelect: () => undefined },
		{ label: 'Archive', tone: 'danger', onSelect: () => undefined }
	];

	const roles: UserManagementRole[] = [
		{ value: 'admin', label: 'Admin' },
		{ value: 'member', label: 'Member' },
		{ value: 'viewer', label: 'Viewer' }
	];
	const users: UserManagementUser[] = [
		{ id: 'u_1', name: 'Ryo Takahashi', email: 'ryo@example.com', role: 'admin', status: 'active' },
		{ id: 'u_2', name: 'Mina Sato', email: 'mina@example.com', role: 'member', status: 'invited' }
	];
</script>

<div class="showcase aui-root">
	{#if name === 'Button'}
		<section class="preview-group" aria-label="Button variants">
			<div class="preview-row">
				<Button label="Create project" />
				<Button variant="secondary" label="Cancel" />
				<Button variant="danger" label="Delete" />
				<Button variant="ghost" label="Dismiss" />
			</div>
			<div class="preview-row">
				<Button size="sm" label="Small" />
				<Button size="md" label="Medium" />
				<Button size="lg" label="Large" />
			</div>
			<div class="preview-row">
				<Button loading label="Saving" />
				<Button disabled label="Disabled" />
			</div>
		</section>
	{:else if name === 'TextField'}
		<section class="preview-stack" aria-label="TextField examples">
			<TextField
				label="Workspace name"
				value="Acme workspace"
				description="Shown in navigation and billing screens."
			/>
			<TextField
				label="Owner email"
				type="email"
				value="ryo@example.com"
				error="Use a company email address."
			/>
		</section>
	{:else if name === 'DataTable'}
		<DataTable columns={tableColumns} rows={tableRows} {rowActions} />
	{:else if name === 'UserManagement'}
		<UserManagement
			{users}
			{roles}
			currentUserId="u_1"
			onInvite={() => undefined}
			onChangeRole={() => undefined}
			onRemove={() => undefined}
		/>
	{:else}
		<div class="preview-placeholder">
			<strong>Preview not authored yet</strong>
			<p>
				Props are generated from the Svelte component source. Add an example in
				<code>component-docs.ts</code> and a matching branch in
				<code>ComponentShowcase.svelte</code>
				to make this component visual.
			</p>
		</div>
	{/if}
</div>

<style>
	.showcase {
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-lg);
		background:
			linear-gradient(135deg, color-mix(in srgb, var(--aui-brand) 5%, transparent), transparent),
			var(--aui-surface);
		box-shadow: var(--aui-shadow-sm);
		padding: 1.25rem;
	}

	.preview-group,
	.preview-stack {
		display: grid;
		gap: 1rem;
	}

	.preview-row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		align-items: center;
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

	code {
		border-radius: 0.35rem;
		background: var(--aui-surface);
		color: var(--aui-text);
		font-size: 0.85em;
		padding: 0.1rem 0.25rem;
	}
</style>
