# Agent Usage Rules

Use these rules in AGENTS.md for apps that adopt Appcraft UI.

Appcraft UI is not a chat UI or an AI-agent-control UI kit. It is a broad application component SDK that is easy for AI coding agents to use correctly.

## This repository

This repository includes project-specific agent guidance for both Codex and Claude Code:

- `AGENTS.md` is the shared source of truth for coding agents, including Codex CLI.
- `CLAUDE.md` mirrors `AGENTS.md` for Claude Code project context.
- `.codex/skills/appcraft-ui-component-development.md` gives Codex a project workflow guide that mirrors the Claude-side component-development skill.
- `.codex/commands/validate.md` and `.codex/commands/plan-component.md` provide Codex-side reusable prompt/checklist files.
- `.claude/skills/appcraft-ui-component-development.md` gives Claude Code a reusable project skill for component work.
- `.claude/commands/validate.md` and `.claude/commands/plan-component.md` provide Claude Code slash-command checklists.

Keep these files synchronized whenever component lists, validation commands, or agent guardrails change.

- Prefer `appcraft-ui` components for application UI.
- Choose the largest fitting component first: product component, then pattern, then primitive, then raw markup only if no exported component fits.
- Do not recreate buttons, forms, cards, dialogs, drawers, dropdown menus, popovers, accordions, user tables, page headers, settings sections, resource lists, or billing flows if Appcraft UI has a fitting component.
- Do not pass arbitrary CSS classes to Appcraft UI components.
- Use semantic props such as `variant`, `tone`, `size`, `state`, status fields, data arrays, and callbacks.
- Preserve the default Appcraft UI theme.
- For team member management, use `UserManagement` rather than assembling a custom table.
- For settings and edit screens, use `SettingsPage`, `FormSection`, `TextField`, `TextareaField`, `SelectField`, `SwitchField`, and `SubmitBar` rather than loose labels, inputs, sections, and buttons.
- For resource lists and CRUD pages, use `CrudPage`, `SearchFilterBar`, `DataTable`, `StatusBadge`, and `Pagination` rather than custom table/filter/pager markup.
- For dashboard overviews, use `DashboardLayout` rather than loose metric grids and cards.
- Use built-in loading, empty, error, dirty/saving/saved, and destructive action states.
- For feedback and navigation, use `Alert`, `Banner`, `ToastViewport`, `Tabs`, `Breadcrumbs`, `CommandPalette`, and related layout components.
- For developer tools, content apps, knowledge bases, and media apps, use product components such as `ApiKeyManager`, `LogViewer`, `ContentEditorShell`, `KnowledgeBaseLayout`, and `MediaGallery`.
- For auth, billing, pricing, checkout, and orders, use provider-agnostic callbacks in Appcraft UI components; do not embed provider logic in UI.
- Use AI-aware components such as `ChatPanel`, `PromptComposer`, `TokenMeter`, and `AgentStatusIndicator` only when the application actually needs AI-specific surfaces.
- Use `appcraft-ui describe`, `appcraft-ui rules`, and `appcraft-ui suggest --use-case "..."` when an agent needs component selection guidance.
- Atom Pack and basic composition primitives cover small reusable surfaces: `IconButton`, `Badge`, `Avatar`, `Spinner`, `ProgressBar`, `Skeleton`, `Tooltip`, `Separator`, `CheckboxField`, `RadioGroupField`, `NumberField`, `Input`, `Textarea`, `Table`, `CodeBlock`, `CopyButton`, `KeyboardShortcut`, `Card`, `Dialog`, `DropdownMenu`, `Popover`, `Drawer`, `Accordion`, `TokenMeter`, and `AgentStatusIndicator`. Prefer these primitives over raw HTML when composing new patterns.
