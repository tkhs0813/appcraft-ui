<script lang="ts">
	import '../lib/styles.css';
	import {
		Alert,
		AppShell,
		AgentStatusIndicator,
		Avatar,
		Badge,
		CheckboxField,
		CodeBlock,
		CopyButton,
		IconButton,
		KeyboardShortcut,
		NumberField,
		ProgressBar,
		RadioGroupField,
		Separator,
		Skeleton,
		Spinner,
		TokenMeter,
		Tooltip,
		Banner,
		Button,
		ChatPanel,
		CommandPalette,
		ConfirmDialog,
		DataTable,
		EmptyState,
		ErrorState,
		FormSection,
		MetricCard,
		Pagination,
		PageHeader,
		PricingTable,
		ResourceList,
		SearchFilterBar,
		SelectField,
		StatusBadge,
		SubmitBar,
		SwitchField,
		TextareaField,
		TextField,
		UserManagement,
		type AppShellNavItem,
		type DataTableColumn,
		type DataTableRow,
		type SearchFilter,
		type UserManagementUser
	} from '$lib/index.js';

	const navItems: AppShellNavItem[] = [
		{ label: 'Overview', href: '/', icon: '⌘', current: true },
		{ label: 'Members', href: '/members', icon: '👥' },
		{ label: 'Billing', href: '/billing', icon: '◇' },
		{ label: 'Settings', href: '/settings', icon: '⚙' }
	];

	let showDialog = $state(false);
	let workspaceName = $state('Acme Workspace');
	let workspaceDescription = $state('A workspace for AI-built application experiments.');
	let visibility = $state('private');
	let automationsEnabled = $state(true);
	let query = $state('');
	let resourceType = $state('all');
	let page = $state(1);
	let commandPaletteOpen = $state(false);

	const filters: SearchFilter[] = [
		{
			key: 'type',
			label: 'Type',
			options: [
				{ value: 'workflow', label: 'Workflow' },
				{ value: 'document', label: 'Document' },
				{ value: 'dataset', label: 'Dataset' }
			]
		}
	];

	const resourceColumns: DataTableColumn[] = [
		{ key: 'name', label: 'Name', sortable: true },
		{ key: 'type', label: 'Type' },
		{
			key: 'status',
			label: 'Status',
			kind: 'badge',
			tone: (value) => (value === 'Ready' ? 'success' : 'warning')
		},
		{ key: 'updated', label: 'Updated', align: 'right' }
	];

	const resources: DataTableRow[] = [
		{ id: 'r1', name: 'Research assistant', type: 'Workflow', status: 'Ready', updated: '2m ago' },
		{ id: 'r2', name: 'Launch notes', type: 'Document', status: 'Draft', updated: '1h ago' },
		{ id: 'r3', name: 'Evaluation set', type: 'Dataset', status: 'Ready', updated: 'Yesterday' }
	];

	const users: UserManagementUser[] = [
		{
			id: '1',
			name: 'Ryo Takahashi',
			email: 'ryo@example.com',
			role: 'owner',
			status: 'active'
		},
		{
			id: '2',
			name: 'Mina Sato',
			email: 'mina@example.com',
			role: 'admin',
			status: 'active'
		},
		{
			id: '3',
			name: 'Kai Ito',
			email: 'kai@example.com',
			role: 'member',
			status: 'invited'
		}
	];
</script>

<svelte:head>
	<title>Appcraft UI</title>
	<meta
		name="description"
		content="Production-grade Svelte components for AI-built applications."
	/>
</svelte:head>

<AppShell
	productName="Appcraft UI"
	workspaceName="Acme Workspace"
	userName="Ryo"
	{navItems}
	primaryAction={{ label: 'New project', onClick: () => undefined }}
>
	<section class="demo aui-root">
		<section class="hero">
			<p class="eyebrow">Appcraft UI</p>
			<h1>Production-grade Svelte components for AI-built applications.</h1>
			<p>
				A constrained UI SDK with one polished theme, semantic props, built-in states, and
				machine-readable component metadata.
			</p>
			<div class="actions">
				<Button label="Get started" />
				<Button variant="secondary" label="View metadata" />
				<Button
					variant="ghost"
					label="Open command palette"
					onClick={() => (commandPaletteOpen = true)}
				/>
			</div>
		</section>

		<Banner
			title="All roadmap phases are represented"
			description="Feedback, navigation, resource management, AI workspace, account, commerce, recipes, and CLI surfaces now exist as package components."
		/>

		<div class="metric-grid">
			<MetricCard
				title="Components"
				items={[{ id: 'components', title: '73 public exports', status: 'Ready', tone: 'success' }]}
			/>
			<Alert
				title="Agent guardrails"
				items={[
					{ id: 'guardrails', title: 'Metadata + recipes + CLI', status: 'Ready', tone: 'brand' }
				]}
			/>
		</div>

		<section class="atom-panel" aria-label="Atom Pack examples">
			<div class="atom-panel-header">
				<div>
					<p class="eyebrow">Atom Pack</p>
					<h2>Small primitives for AI-safe composition</h2>
					<p>
						Atoms cover compact actions, identity, loading, forms, code, shortcuts, and AI
						usage/status UI.
					</p>
				</div>
				<div class="atom-row">
					<IconButton label="Run agent" icon="▶" variant="primary" />
					<CopyButton value="appcraft-ui" />
					<Tooltip label="Keyboard shortcut atom"><KeyboardShortcut keys={['⌘', 'K']} /></Tooltip>
				</div>
			</div>

			<div class="atom-grid">
				<div class="atom-card">
					<Avatar name="Ryo Takahashi" status="online" /><Badge
						label="Owner"
						tone="brand"
					/><AgentStatusIndicator status="running" label="Agent running" />
				</div>
				<div class="atom-card">
					<Spinner label="Loading run" /><ProgressBar
						value={64}
						label="Run progress"
						showValue
					/><TokenMeter used={1280} limit={4096} />
				</div>
				<div class="atom-card">
					<CheckboxField
						label="Require approval"
						description="Gate destructive tool calls."
						checked
					/><RadioGroupField
						label="Mode"
						value="auto"
						options={[
							{ value: 'auto', label: 'Auto' },
							{ value: 'manual', label: 'Manual' }
						]}
					/><NumberField label="Max steps" value={12} min={1} max={50} />
				</div>
				<div class="atom-card">
					<Skeleton lines={2} /><Separator label="Artifact" /><CodeBlock
						language="ts"
						code={`import { Button } from 'appcraft-ui';`}
					/>
				</div>
			</div>
		</section>

		<PageHeader
			title="Team members"
			description="Manage members and roles for your workspace."
			primaryAction={{ label: 'Invite member', onClick: () => undefined }}
			secondaryAction={{ label: 'Export', onClick: () => undefined }}
		/>

		<FormSection
			title="Workspace profile"
			description="Phase 1 form components keep labels, help text, validation, and submit states consistent."
			status="Autosaved"
		>
			<div class="form-grid">
				<TextField
					label="Workspace name"
					value={workspaceName}
					description="Shown in navigation and shared resources."
					required
					onInput={(value) => (workspaceName = value)}
				/>
				<SelectField
					label="Visibility"
					value={visibility}
					options={[
						{ value: 'private', label: 'Private' },
						{ value: 'team', label: 'Team' },
						{ value: 'public', label: 'Public' }
					]}
					onChange={(value) => (visibility = value)}
				/>
			</div>
			<TextareaField
				label="Description"
				value={workspaceDescription}
				description="Use multiline fields for prompts, notes, summaries, and content metadata."
				onInput={(value) => (workspaceDescription = value)}
			/>
			<SwitchField
				label="Enable automations"
				description="Switches stay accessible and consistent without hand-rolled toggle UI."
				checked={automationsEnabled}
				onChange={(value) => (automationsEnabled = value)}
			/>
			<SubmitBar
				status="dirty"
				message="Demo changes are local only."
				onSubmit={() => undefined}
				onCancel={() => undefined}
			/>
		</FormSection>

		<SearchFilterBar
			{query}
			{filters}
			activeFilters={{ type: resourceType }}
			resultCount={resources.length}
			onQueryChange={(value) => (query = value)}
			onFilterChange={(_, value) => (resourceType = value || 'all')}
			onClear={() => {
				query = '';
				resourceType = 'all';
			}}
		/>

		<DataTable
			columns={resourceColumns}
			rows={resources}
			sortKey="name"
			rowActions={[
				{ label: 'Open', onSelect: () => undefined },
				{ label: 'Delete', tone: 'danger', onSelect: () => (showDialog = true) }
			]}
		/>
		<Pagination {page} pageCount={4} onPageChange={(value) => (page = value)} />

		<ResourceList
			title="Resource management"
			description="Phase 3 product components cover CRUD, developer tools, files, jobs, logs, and inspectors."
			items={resources.map((resource) => ({
				id: String(resource.id),
				title: String(resource.name),
				description: String(resource.type),
				status: String(resource.status),
				tone: resource.status === 'Ready' ? 'success' : 'warning',
				meta: String(resource.updated)
			}))}
		/>

		<ChatPanel
			title="AI workspace"
			description="Phase 4 components stay provider-agnostic for chat, prompts, knowledge, media, and collaboration apps."
			items={[
				{
					id: 'm1',
					title: 'User',
					description: 'Summarize this research note.',
					status: 'sent',
					tone: 'brand'
				},
				{
					id: 'm2',
					title: 'Assistant',
					description: 'Here is a structured summary...',
					status: 'ready',
					tone: 'success'
				}
			]}
		/>

		<PricingTable
			title="Commerce flows"
			description="Phase 5 components model auth, account, billing, pricing, checkout, and orders without provider lock-in."
			items={[
				{
					id: 'starter',
					title: 'Starter',
					description: '$19 / month',
					status: 'Current',
					tone: 'success'
				},
				{ id: 'pro', title: 'Pro', description: '$49 / month', status: 'Popular', tone: 'brand' }
			]}
		/>

		<div class="badge-row" aria-label="Status badge examples">
			<StatusBadge label="Ready" tone="success" />
			<StatusBadge label="Draft" tone="warning" />
			<StatusBadge label="Blocked" tone="danger" />
		</div>

		<UserManagement
			{users}
			currentUserId="1"
			onInvite={() => undefined}
			onChangeRole={() => undefined}
			onRemove={() => (showDialog = true)}
		/>

		<section class="state-grid" aria-label="State components">
			<EmptyState
				tone="brand"
				title="No automations yet"
				description="Create your first workflow and Appcraft UI will keep the empty state polished for every app."
				action={{ label: 'Create workflow', onClick: () => undefined }}
			/>
			<ErrorState
				message="The latest audit events could not be loaded. Retry without rebuilding the error layout by hand."
				retryAction={{ label: 'Retry', onClick: () => undefined }}
				supportAction={{ label: 'Contact support', onClick: () => undefined }}
			/>
		</section>
	</section>
</AppShell>

<ConfirmDialog
	open={showDialog}
	title="Remove this member?"
	description="This action revokes workspace access immediately. You can invite the member again later."
	confirmLabel="Remove member"
	onConfirm={() => (showDialog = false)}
	onCancel={() => (showDialog = false)}
/>

<CommandPalette
	open={commandPaletteOpen}
	actions={[
		{ id: 'describe', label: 'appcraft-ui describe ResourceList', hint: 'CLI' },
		{ id: 'rules', label: 'appcraft-ui rules', hint: 'CLI' },
		{ id: 'suggest', label: 'appcraft-ui suggest --use-case chat workspace', hint: 'CLI' }
	]}
	onSelect={() => (commandPaletteOpen = false)}
	onClose={() => (commandPaletteOpen = false)}
/>

<style>
	:global(body) {
		margin: 0;
		background: var(--aui-bg);
	}

	.demo {
		display: grid;
		gap: 1.5rem;
	}

	.hero {
		padding: 3rem 1.5rem;
		border-radius: 1.5rem;
		background:
			radial-gradient(
				circle at top left,
				color-mix(in srgb, var(--aui-brand) 18%, transparent),
				transparent 28rem
			),
			var(--aui-surface);
		border: 1px solid var(--aui-border);
		box-shadow: var(--aui-shadow-md);
	}

	.eyebrow {
		margin: 0 0 0.75rem;
		font-size: 0.8rem;
		font-weight: 800;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--aui-brand);
	}

	.hero h1 {
		max-width: 820px;
		margin: 0;
		font-size: clamp(2.25rem, 6vw, 4.75rem);
		line-height: 0.95;
		letter-spacing: -0.07em;
		color: var(--aui-text);
	}

	.hero p:not(.eyebrow) {
		max-width: 680px;
		margin: 1.25rem 0 0;
		font-size: 1.08rem;
		line-height: 1.7;
		color: var(--aui-text-muted);
	}

	.actions,
	.state-grid,
	.badge-row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.form-grid,
	.metric-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1rem;
	}

	.actions {
		margin-top: 1.5rem;
	}

	.state-grid {
		align-items: stretch;
	}

	.state-grid > :global(*) {
		flex: 1 1 22rem;
	}

	.atom-panel {
		display: grid;
		gap: 1rem;
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-xl);
		background: var(--aui-surface);
		box-shadow: var(--aui-shadow-sm);
		padding: 1.2rem;
	}

	.atom-panel-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1rem;
	}

	.atom-panel h2,
	.atom-panel p {
		margin: 0;
	}

	.atom-panel h2 {
		color: var(--aui-text);
		font-size: 1.15rem;
		letter-spacing: -0.03em;
	}

	.atom-panel p:not(.eyebrow) {
		margin-top: 0.35rem;
		color: var(--aui-text-muted);
		font-size: 0.88rem;
		line-height: 1.55;
	}

	.atom-row {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.65rem;
	}

	.atom-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1rem;
	}

	.atom-card {
		display: grid;
		align-content: start;
		gap: 0.85rem;
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-lg);
		background: var(--aui-surface-subtle);
		padding: 1rem;
	}

	@media (max-width: 720px) {
		.form-grid,
		.metric-grid,
		.atom-grid,
		.atom-panel-header {
			grid-template-columns: 1fr;
		}
	}
</style>
