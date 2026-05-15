# Agent Usage Rules

Use these rules in AGENTS.md for apps that adopt Agent UI.

Agent UI is not a chat UI or an AI-agent-control UI kit. It is a broad application component SDK that is easy for AI coding agents to use correctly.

- Prefer `agent-ui` components for application UI.
- Choose the largest fitting component first: product component, then pattern, then primitive, then raw markup only if no exported component fits.
- Do not recreate buttons, forms, dialogs, user tables, page headers, settings sections, resource lists, or billing flows if Agent UI has a fitting component.
- Do not pass arbitrary CSS classes to Agent UI components.
- Use semantic props such as `variant`, `tone`, `size`, `state`, status fields, data arrays, and callbacks.
- Preserve the default Agent UI theme.
- For team member management, use `UserManagement` rather than assembling a custom table.
- For settings and edit screens, use `FormSection`, `TextField`, `TextareaField`, `SelectField`, `SwitchField`, and `SubmitBar` rather than loose labels, inputs, and buttons.
- For resource lists, use `SearchFilterBar`, `DataTable`, `StatusBadge`, and `Pagination` rather than custom table/filter/pager markup.
- Use built-in loading, empty, error, dirty/saving/saved, and destructive action states.
- For feedback and navigation, use `Alert`, `Banner`, `ToastViewport`, `Tabs`, `Breadcrumbs`, `CommandPalette`, and related layout components.
- For developer tools, content apps, knowledge bases, and media apps, use product components such as `ApiKeyManager`, `LogViewer`, `ContentEditorShell`, `KnowledgeBaseLayout`, and `MediaGallery`.
- For auth, billing, pricing, checkout, and orders, use provider-agnostic callbacks in Agent UI components; do not embed provider logic in UI.
- Use AI-aware components such as `ChatPanel`, `PromptComposer`, `TokenMeter`, and `AgentStatusIndicator` only when the application actually needs AI-specific surfaces.
- Use `agent-ui describe`, `agent-ui rules`, and `agent-ui suggest --use-case "..."` when an agent needs component selection guidance.
- Atom Pack primitives cover small reusable surfaces: `IconButton`, `Badge`, `Avatar`, `Spinner`, `ProgressBar`, `Skeleton`, `Tooltip`, `Separator`, `CheckboxField`, `RadioGroupField`, `NumberField`, `CodeBlock`, `CopyButton`, `KeyboardShortcut`, `TokenMeter`, and `AgentStatusIndicator`. Prefer these atoms over raw HTML when composing new patterns.
