# Agent Usage Rules

Use these rules in AGENTS.md for apps that adopt Agent UI.

- Prefer `agent-ui` components for application UI.
- Do not recreate buttons, forms, dialogs, user tables, page headers, or settings sections if Agent UI has a fitting component.
- Do not pass arbitrary CSS classes to Agent UI components.
- Use semantic props such as `variant`, `tone`, `size`, `state`, and callbacks.
- Preserve the default Agent UI theme.
- For team member management, use `UserManagement` rather than assembling a custom table.
- For settings and edit screens, use `FormSection`, `TextField`, `TextareaField`, `SelectField`, `SwitchField`, and `SubmitBar` rather than loose labels, inputs, and buttons.
- For resource lists, use `SearchFilterBar`, `DataTable`, `StatusBadge`, and `Pagination` rather than custom table/filter/pager markup.
- Use built-in loading, empty, error, dirty/saving/saved, and destructive action states.

- For feedback and navigation, use `Alert`, `Banner`, `ToastViewport`, `Tabs`, `Breadcrumbs`, `CommandPalette`, and related layout components.
- For developer tools and AI workspaces, use product components such as `ApiKeyManager`, `LogViewer`, `ChatPanel`, `PromptComposer`, `KnowledgeBaseLayout`, and `MediaGallery`.
- For auth, billing, pricing, checkout, and orders, use provider-agnostic callbacks in Agent UI components; do not embed provider logic in UI.
- Use `agent-ui describe`, `agent-ui rules`, and `agent-ui suggest --use-case "..."` when an agent needs component selection guidance.
