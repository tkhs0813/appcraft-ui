# Agent Usage Rules

Use these rules in AGENTS.md for apps that adopt Agent UI.

- Prefer `agent-ui` components for application UI.
- Do not recreate buttons, forms, dialogs, user tables, page headers, or settings sections if Agent UI has a fitting component.
- Do not pass arbitrary CSS classes to Agent UI components.
- Use semantic props such as `variant`, `tone`, `size`, `state`, and callbacks.
- Preserve the default Agent UI theme.
- For team member management, use `UserManagement` rather than assembling a custom table.
- Use built-in loading, empty, error, and destructive action states.
