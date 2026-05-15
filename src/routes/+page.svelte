<script lang="ts">
	import '../lib/styles.css';
	import { resolve } from '$app/paths';
	import {
		Accordion,
		Alert,
		AppShell,
		AgentStatusIndicator,
		Avatar,
		Badge,
		CheckboxField,
		CodeBlock,
		CopyButton,
		IconButton,
		Input,
		KeyboardShortcut,
		NumberField,
		Popover,
		ProgressBar,
		RadioGroupField,
		Separator,
		Skeleton,
		Spinner,
		TokenMeter,
		Tooltip,
		Banner,
		Card,
		Button,
		ChatPanel,
		CommandPalette,
		ConfirmDialog,
		CrudPage,
		DataTable,
		DashboardLayout,
		Dialog,
		Drawer,
		DropdownMenu,
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
		SettingsPage,
		StatusBadge,
		SubmitBar,
		SwitchField,
		Table,
		Textarea,
		TextareaField,
		TextField,
		UserManagement,
		ComboboxField,
		MultiSelectField,
		DateRangeField,
		WizardLayout,
		ChartCard,
		TrendChart,
		BarChart,
		PermissionMatrix,
		AuditLog,
		DetailPage,
		ImportPanel,
		ExportPanel,
		CsvImportWizard,
		DataImportReview,
		PageState,
		JsonViewer,
		KeyValueList,
		DataInspector,
		type AppShellNavItem,
		type DataTableColumn,
		type DataTableRow,
		type SearchFilter,
		type SettingsPageSection,
		type TableColumn,
		type TableRow,
		type UserManagementUser
	} from '$lib/index.js';

	const navItems: AppShellNavItem[] = [
		{ label: 'Demo', href: resolve('/'), icon: '⌘', current: true },
		{ label: 'Components', href: resolve('/components'), icon: '▦' },
		{ label: 'Recipes', href: '#recipes', icon: '✦' },
		{ label: 'Metadata', href: '#metadata', icon: '{}' }
	];

	let showDialog = $state(false);
	let showGeneralDialog = $state(false);
	let showDrawer = $state(false);
	let openAccordionIds = $state(['usage']);
	let workspaceName = $state('Acme Workspace');
	let workspaceDescription = $state('A workspace for AI-built application experiments.');
	let visibility = $state('private');
	let automationsEnabled = $state(true);
	let query = $state('');
	let resourceType = $state('all');
	let page = $state(1);
	let commandPaletteOpen = $state(false);
	let compactName = $state('Compact primitive');
	let compactNotes = $state(
		'Use Input/Textarea/Table when a larger field or DataTable is too much.'
	);
	let selectedOwner = $state('ryo');
	let selectedTags = $state(['agent-safe', 'admin']);
	let reportingRange = $state({ start: '2026-05-01', end: '2026-05-15' });

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

	const summaryColumns: TableColumn[] = [
		{ key: 'component', label: 'Component' },
		{ key: 'fit', label: 'Best fit' },
		{ key: 'status', label: 'Status', kind: 'badge', tone: () => 'success' }
	];

	const summaryRows: TableRow[] = [
		{ id: 'input', component: 'Input', fit: 'Compact custom field', status: 'Ready' },
		{ id: 'textarea', component: 'Textarea', fit: 'Compact multiline editor', status: 'Ready' },
		{ id: 'table', component: 'Table', fit: 'Static read-only data', status: 'Ready' }
	];

	const settingsSections: SettingsPageSection[] = [
		{
			id: 'workspace',
			title: 'Workspace',
			description: 'Semantic settings rows with status and save state.',
			status: 'Saved',
			tone: 'success',
			items: [
				{ id: 'name', label: 'Workspace name', description: 'Acme Workspace', value: 'Editable' },
				{
					id: 'visibility',
					label: 'Visibility',
					description: 'Controls who can access resources.',
					value: 'Private'
				}
			]
		},
		{
			id: 'automation',
			title: 'Automation',
			description: 'Keep product settings consistent without loose section markup.',
			items: [
				{
					id: 'approval',
					label: 'Approval gates',
					description: 'Required for destructive tool calls.',
					value: 'On'
				}
			]
		}
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
				items={[{ id: 'components', title: '85 public exports', status: 'Ready', tone: 'success' }]}
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

		<section class="composition-panel" aria-label="Basic composition examples">
			<Card
				meta="Basic composition"
				title="Cards, overlays, menus, popovers, and disclosure"
				description="These primitives fill the common gaps that make agents hand-roll fragile UI."
				tone="brand"
				actions={[{ label: 'Open dialog', onClick: () => (showGeneralDialog = true) }]}
				footer="Use these before raw divs when building new app surfaces."
			>
				<div class="composition-grid">
					<div class="composition-actions">
						<DropdownMenu
							label="Actions"
							align="start"
							items={[
								{ id: 'edit', label: 'Edit project', description: 'Open details', shortcut: 'E' },
								{ id: 'duplicate', label: 'Duplicate', shortcut: 'D' },
								{ id: 'delete', label: 'Delete', tone: 'danger', shortcut: '⌫' }
							]}
						/>
						<Popover
							triggerLabel="Usage notes"
							title="Popover"
							description="For compact help, quick filters, and previews without introducing custom floating UI."
							placement="bottom-start"
						>
							<p class="composition-note">
								Semantic trigger, title, description, placement, and snippet content.
							</p>
						</Popover>
						<Button variant="secondary" label="Open drawer" onClick={() => (showDrawer = true)} />
					</div>

					<Accordion
						items={[
							{
								id: 'usage',
								title: 'When should agents use Card?',
								description: 'Reusable sections and panels',
								content:
									'Use Card for bounded content regions with title, description, actions, semantic tone, body, and footer.'
							},
							{
								id: 'overlay',
								title: 'When should agents use Dialog or Drawer?',
								description: 'Focused modal or side-panel workflows',
								content:
									'Use Dialog for modal tasks and Drawer for side-panel editing or inspection instead of rebuilding overlays.'
							}
						]}
						openIds={openAccordionIds}
						allowMultiple
						onOpenChange={(ids) => (openAccordionIds = ids)}
					/>
				</div>
			</Card>
		</section>

		<section
			id="recipes"
			class="primitive-product-panel"
			aria-label="Low-level and product page expansion"
		>
			<Card
				meta="Both layers"
				title="Low-level primitives + complete product pages"
				description="Agents can now choose safe tiny controls or a whole page scaffold instead of raw HTML."
			>
				<div class="primitive-grid">
					<div class="primitive-card">
						<Input
							ariaLabel="Compact primitive name"
							value={compactName}
							onInput={(value) => (compactName = value)}
						/>
						<Textarea
							ariaLabel="Compact primitive notes"
							value={compactNotes}
							rows={3}
							onInput={(value) => (compactNotes = value)}
						/>
						<Table caption="Low-level primitive fit" columns={summaryColumns} rows={summaryRows} />
					</div>
					<DashboardLayout
						title="Overview page"
						description="Use DashboardLayout before hand-rolling metric grids."
						metrics={[
							{ id: 'exports', label: 'Exports', value: '111', delta: '+26', tone: 'success' },
							{ id: 'recipes', label: 'Recipes', value: '17', delta: 'Agent-ready', tone: 'brand' }
						]}
						panels={[
							{
								id: 'crud',
								title: 'CRUD coverage',
								description: 'Search, filter, table, actions, pagination.',
								status: 'Ready',
								tone: 'success'
							},
							{
								id: 'settings',
								title: 'Settings coverage',
								description: 'Sections, rows, statuses, submit state.',
								status: 'Ready',
								tone: 'success'
							}
						]}
					/>
				</div>
			</Card>
			<div class="product-grid">
				<SettingsPage
					title="Product settings page"
					description="A complete settings surface from semantic section data."
					sections={settingsSections}
					status="saved"
					message="All demo settings are saved."
				/>
				<CrudPage
					title="Resource CRUD page"
					description="A full list-management page from columns, rows, filters, actions, and pagination."
					columns={resourceColumns}
					rows={resources}
					{filters}
					{query}
					activeFilters={{ type: resourceType }}
					resultCount={resources.length}
					{page}
					pageCount={4}
					onQueryChange={(value) => (query = value)}
					onFilterChange={(_, value) => (resourceType = value || 'all')}
					onClear={() => {
						query = '';
						resourceType = 'all';
					}}
					onPageChange={(value) => (page = value)}
					rowActions={[{ label: 'Open', onSelect: () => undefined }]}
				/>
			</div>
		</section>

		<section class="advanced-pack-panel" aria-label="Advanced workflow and governance expansion">
			<Card
				meta="Advanced pack"
				title="Search, dates, workflows, charts, governance, import, and inspection"
				description="These cover the places where AI agents usually hand-roll fragile UI: comboboxes, date ranges, multi-step flows, charts, permissions, audit logs, import review, page states, and JSON inspectors."
			>
				<div class="primitive-grid">
					<ComboboxField
						label="Owner"
						description="Searchable selection without custom listbox markup."
						value={selectedOwner}
						options={[
							{ value: 'ryo', label: 'Ryo', description: 'Workspace owner' },
							{ value: 'ops', label: 'Operations', description: 'Shared admin group' }
						]}
						onSelect={(value) => (selectedOwner = value)}
					/>
					<MultiSelectField
						label="Tags"
						description="Multi-select chips for filters and metadata."
						values={selectedTags}
						options={[
							{ value: 'agent-safe', label: 'Agent-safe' },
							{ value: 'admin', label: 'Admin' },
							{ value: 'analytics', label: 'Analytics' }
						]}
						onChange={(values) => (selectedTags = values)}
					/>
					<DateRangeField
						label="Reporting range"
						description="Semantic date range control for filters and reports."
						start={reportingRange.start}
						end={reportingRange.end}
						onChange={(range) => (reportingRange = range)}
					/>
				</div>
				<div class="product-grid">
					<WizardLayout
						title="Integration setup"
						description="Stepper plus body and actions for onboarding/import/connect flows."
						currentStepId="map"
						steps={[
							{ id: 'connect', label: 'Connect' },
							{ id: 'map', label: 'Map fields' },
							{ id: 'review', label: 'Review' }
						]}
						primaryAction={{ label: 'Continue', onClick: () => undefined }}
					>
						<p class="composition-note">
							Agents pass steps and actions instead of inventing wizard state UI.
						</p>
					</WizardLayout>
					<ChartCard
						title="Usage"
						value="12.4k"
						description="Constrained chart card for dashboards."
						data={[
							{ label: 'Mon', value: 32 },
							{ label: 'Tue', value: 48 },
							{ label: 'Wed', value: 41 }
						]}
					/>
					<TrendChart
						title="Trend"
						summary="No custom SVG required."
						data={[
							{ label: '1', value: 20 },
							{ label: '2', value: 44 },
							{ label: '3', value: 36 }
						]}
					/>
					<BarChart
						title="Top workflows"
						data={[
							{ label: 'Research', value: 12 },
							{ label: 'Review', value: 9 },
							{ label: 'Import', value: 6 }
						]}
					/>
				</div>
				<div class="product-grid">
					<PermissionMatrix
						roles={[
							{ id: 'owner', label: 'Owner' },
							{ id: 'member', label: 'Member' },
							{ id: 'viewer', label: 'Viewer' }
						]}
						permissions={[
							{ id: 'read', label: 'Read' },
							{ id: 'write', label: 'Write' },
							{ id: 'admin', label: 'Admin' }
						]}
						values={{
							owner: ['read', 'write', 'admin'],
							member: ['read', 'write'],
							viewer: ['read']
						}}
					/>
					<AuditLog
						events={[
							{
								id: 'a1',
								actor: 'Ryo',
								action: 'updated',
								target: 'Permission policy',
								timestamp: '2m ago',
								severity: 'info'
							}
						]}
					/>
					<DetailPage
						title="Research assistant"
						description="Resource detail scaffold."
						status="Ready"
						items={[
							{ key: 'owner', label: 'Owner', value: 'Ryo' },
							{ key: 'updated', label: 'Updated', value: '2m ago' }
						]}
					/>
				</div>
				<div class="product-grid">
					<ImportPanel action={{ label: 'Import CSV', onClick: () => undefined }} />
					<ExportPanel action={{ label: 'Export JSON', onClick: () => undefined }} />
					<CsvImportWizard
						currentStepId="review"
						issues={[{ id: 'i1', row: 8, field: 'email', message: 'Invalid email address' }]}
					/>
					<DataImportReview
						issues={[{ id: 'i1', row: 8, field: 'email', message: 'Invalid email address' }]}
					/>
				</div>
				<div id="metadata" class="product-grid">
					<PageState
						title="No matching records"
						description="Page-level states prevent ad-hoc centered empty/error screens."
					/>
					<KeyValueList
						title="Metadata"
						items={[
							{ key: 'version', label: 'Version', value: '0.0.1' },
							{ key: 'exports', label: 'Exports', value: '111' }
						]}
					/>
					<JsonViewer title="Payload" value={{ selectedOwner, selectedTags, reportingRange }} />
					<DataInspector
						title="Inspector"
						summary={[{ key: 'component', label: 'Component', value: 'DataInspector' }]}
						value={{ status: 'ready' }}
					/>
				</div>
			</Card>
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

<Dialog
	open={showGeneralDialog}
	title="General dialog"
	description="Use Dialog for modal forms, previews, and high-attention workflows without hand-rolled overlays."
	primaryAction={{ label: 'Save changes', onClick: () => (showGeneralDialog = false) }}
	secondaryAction={{ label: 'Cancel', onClick: () => (showGeneralDialog = false) }}
	onClose={() => (showGeneralDialog = false)}
>
	<p class="composition-note">
		Dialog supports semantic sizing, actions, backdrop close, Escape handling, and snippet content.
	</p>
</Dialog>

<Drawer
	open={showDrawer}
	title="Inspector drawer"
	description="Use Drawer for edit panels, inspectors, and side-panel workflows."
	primaryAction={{ label: 'Apply', onClick: () => (showDrawer = false) }}
	secondaryAction={{ label: 'Close', onClick: () => (showDrawer = false) }}
	onClose={() => (showDrawer = false)}
>
	<Alert
		title="Drawer content"
		items={[{ id: 'drawer', title: 'Provider-agnostic content', status: 'Ready', tone: 'success' }]}
	/>
</Drawer>

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

	.composition-panel,
	.primitive-product-panel,
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

	.atom-grid,
	.primitive-grid,
	.product-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1rem;
	}

	.atom-card,
	.primitive-card {
		display: grid;
		align-content: start;
		gap: 0.85rem;
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-lg);
		background: var(--aui-surface-subtle);
		padding: 1rem;
	}

	.composition-grid {
		display: grid;
		grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
		gap: 1rem;
		align-items: start;
	}

	.composition-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		align-items: center;
	}

	.composition-note {
		margin: 0;
		color: var(--aui-text-muted);
		font-size: 0.9rem;
		line-height: 1.55;
	}

	@media (max-width: 720px) {
		.form-grid,
		.metric-grid,
		.atom-grid,
		.primitive-grid,
		.product-grid,
		.atom-panel-header,
		.composition-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
