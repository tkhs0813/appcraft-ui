# Component Map

This document defines the intended shape of Appcraft UI: a broad, AI-agent-friendly application component library. The key point is that these are ordinary product UI components with constrained APIs, not components only for AI agent interfaces.

## Foundation primitives

Use these when a screen needs small reusable controls.

- `Button`
- `IconButton`
- `Badge`
- `StatusBadge`
- `Avatar`
- `Spinner`
- `ProgressBar`
- `Skeleton`
- `Tooltip`
- `Separator`
- `KeyboardShortcut`
- `CodeBlock`
- `CopyButton`
- `Card`
- `Dialog`
- `DropdownMenu`
- `Popover`
- `Drawer`
- `Accordion`
- `Input`
- `Textarea`
- `Table`
- `JsonViewer`
- `KeyValueList`

## Forms and settings

These should be the default for edit screens, onboarding, preferences, and account configuration.

- `TextField`
- `TextareaField`
- `SelectField`
- `SwitchField`
- `CheckboxField`
- `RadioGroupField`
- `NumberField`
- `Combobox`
- `ComboboxField`
- `MultiSelectField`
- `DateField`
- `DateRangeField`
- `FormSection`
- `SubmitBar`
- `SettingsPage`
- `ProfileSettings`
- `WorkspaceSettings`

## Layout and navigation

These prevent AI agents from hand-rolling inconsistent shells and page structure.

- `AppShell`
- `DashboardLayout`
- `PageHeader`
- `Tabs`
- `Breadcrumbs`
- `CommandPalette`
- `CardGrid`
- `MetricCard`
- `Stepper`
- `WizardLayout`
- `ChartCard`
- `TrendChart`
- `BarChart`

## Feedback and state

Every app needs loading, empty, error, confirmation, notification, and activity states.

- `EmptyState`
- `ErrorState`
- `ConfirmDialog`
- `Alert`
- `Banner`
- `ToastViewport`
- `NotificationCenter`
- `ActivityFeed`
- `Timeline`
- `PageState`
- `LoadingPage`
- `NotFoundPage`
- `ForbiddenPage`
- `MaintenancePage`

## Data and resource workflows

These are the core product components for internal tools, admin surfaces, CRUD apps, and developer dashboards.

- `SearchFilterBar`
- `DataTable`
- `CrudPage`
- `Pagination`
- `ResourceList`
- `ResourceGrid`
- `ResourceDetail`
- `UserManagement`
- `DetailPage`
- `PermissionMatrix`
- `AuditLog`
- `ImportPanel`
- `ExportPanel`
- `CsvImportWizard`
- `DataImportReview`
- `DataInspector`
- `MetadataPanel`
- `IntegrationList`
- `ApiKeyManager`
- `JobRunList`
- `LogViewer`
- `InspectorPanel`
- `FileUploader`
- `FileList`

## Content, knowledge, and media

These support docs, media libraries, knowledge bases, editors, and structured content applications.

- `ContentEditorShell`
- `DocumentList`
- `KnowledgeBaseLayout`
- `MediaGallery`
- `CalendarList`
- `KanbanBoard`

## Account, auth, billing, and commerce

Provider logic stays in the app. Components expose provider-agnostic data and callbacks.

- `SignInForm`
- `SignUpForm`
- `ForgotPasswordForm`
- `ResetPasswordForm`
- `BillingSettings`
- `PricingTable`
- `CheckoutSummary`
- `OrderList`

## AI-aware components

These are optional components for AI-powered applications. They should not define the whole library identity.

- `ChatPanel`
- `ConversationList`
- `PromptComposer`
- `TokenMeter`
- `AgentStatusIndicator`

## Component selection rule for agents

When building a screen, choose the largest fitting component first:

1. Product component, e.g. `CrudPage`, `DashboardLayout`, `SettingsPage`, `UserManagement`
2. Pattern component, e.g. `DataTable`, `FormSection`, `PageHeader`
3. Primitive component, e.g. `Button`, `Input`, `TextField`, `Badge`
4. Raw markup only when no exported component fits

This rule is what makes the library useful for AI coding agents: it reduces surface area and avoids accidental design drift.
