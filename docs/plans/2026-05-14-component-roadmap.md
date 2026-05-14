# Agent UI Component Roadmap

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Status:** Phase 0-6 implemented in the package surface; continue hardening depth and APIs over time.

**Goal:** Build Agent UI into a practical component SDK for broad AI-built applications, not only SaaS/admin dashboards.

**Architecture:** Keep a small set of polished primitives and patterns, then prioritize higher-level product/application components that encode complete states and safe interactions. Components should accept data, semantic intent, and callbacks; the library owns layout, interaction polish, accessibility, and visual quality.

**Tech Stack:** Svelte 5, TypeScript, scoped component CSS, `src/lib/styles.css` design tokens, Vitest metadata tests, Svelte autofixer for component changes.

---

## Product Direction

Agent UI should help agents build many kinds of apps:

- Admin/dashboard apps
- Developer tools
- Local-first tools
- AI/chat/research workspaces
- Content and media tools
- Commerce and marketplace flows
- Knowledge bases and documentation apps
- Internal tools
- Personal productivity apps
- SaaS products where relevant, but not exclusively

The component set should avoid becoming a generic style playground. It should be a catalog of safe, opinionated UI building blocks and application patterns that agents can choose from without hand-rolling fragile UI.

## Component Layers

### Layer 1: Foundation primitives

Use these sparingly. They exist to support product components and common layouts.

- `Button` — already implemented
- `TextField`
- `TextareaField`
- `SelectField`
- `CheckboxField`
- `SwitchField`
- `RadioGroupField`
- `StatusBadge`
- `Avatar`
- `ProgressBar`
- `Spinner`
- `SkeletonBlock`

### Layer 2: Application patterns

These are reusable across most applications.

- `AppShell` — already implemented
- `PageHeader` — already implemented
- `EmptyState` — already implemented
- `ErrorState` — already implemented
- `ConfirmDialog` — already implemented
- `FormSection`
- `SubmitBar`
- `DataTable`
- `Tabs`
- `CardGrid`
- `MetricCard`
- `Alert`
- `Banner`
- `ToastViewport`
- `CommandPalette`
- `SearchFilterBar`
- `Pagination`
- `Breadcrumbs`
- `ActivityFeed`
- `Timeline`

### Layer 3: Product/application components

These should be the main differentiator. They prevent agents from composing complicated flows by hand.

- `UserManagement` — already implemented
- `SettingsForm`
- `ProfileSettings`
- `WorkspaceSettings`
- `ApiKeyManager`
- `IntegrationList`
- `BillingSettings`
- `PricingTable`
- `ResourceList`
- `ResourceGrid`
- `ResourceDetail`
- `FileUploader`
- `FileList`
- `NotificationCenter`
- `ChatPanel`
- `ConversationList`
- `PromptComposer`
- `JobRunList`
- `LogViewer`
- `InspectorPanel`
- `KanbanBoard`
- `CalendarList`
- `ContentEditorShell`
- `MediaGallery`
- `CheckoutSummary`
- `OrderList`
- `KnowledgeBaseLayout`

### Layer 4: Agent-facing intelligence

These make Agent UI explicitly agent-friendly.

- richer `componentMetadata`
- component recipes
- use-case to component mapping
- forbidden pattern detector
- `agent-ui describe <component>` CLI
- `agent-ui rules` CLI
- `agent-ui suggest --use-case "..."` CLI
- demo state catalog
- copy-paste prompt snippets for agents

---

## Implementation Phases

### Phase 0: Reposition from SaaS-only to broad AI-built apps

**Objective:** Remove SaaS-only positioning without losing SaaS/admin usefulness.

**Files:**

- Modify: `README.md`
- Modify: `package.json`
- Modify: `AGENTS.md`
- Modify: `CLAUDE.md`
- Modify: `docs/philosophy.md`
- Modify: `docs/agent-usage.md`
- Modify: `src/lib/metadata.ts`
- Modify: `src/lib/metadata.test.ts`
- Modify: `src/routes/+page.svelte`

**Verification:**

```bash
pnpm format
pnpm lint
pnpm check
pnpm test
pnpm build
```

Expected: all pass.

### Phase 1: Forms and data tables

**Objective:** Make common data-entry and data-display screens reliable.

**Components:**

1. `TextField`
2. `TextareaField`
3. `SelectField`
4. `SwitchField`
5. `FormSection`
6. `SubmitBar`
7. `StatusBadge`
8. `DataTable`
9. `SearchFilterBar`
10. `Pagination`

**Why first:** Agents frequently break forms and tables: labels, validation, disabled/loading states, responsive layout, and destructive row actions.

**TDD gate:** metadata/export tests fail first for all new components, then implementation makes them pass.

### Phase 2: Feedback, navigation, and layout polish

**Objective:** Cover application-level communication and navigation patterns.

**Components:**

1. `Alert`
2. `Banner`
3. `ToastViewport`
4. `Tabs`
5. `Breadcrumbs`
6. `CardGrid`
7. `MetricCard`
8. `ActivityFeed`
9. `Timeline`
10. `CommandPalette`

**Notes:** `CommandPalette` should be implemented in-house and kept simple at first: open state, query, grouped actions, keyboard navigation, callbacks.

### Phase 3: Resource and developer-tool components

**Objective:** Make CRUD, files, logs, jobs, and API/admin tooling practical.

**Components:**

1. `ResourceList`
2. `ResourceGrid`
3. `ResourceDetail`
4. `FileUploader`
5. `FileList`
6. `ApiKeyManager`
7. `IntegrationList`
8. `JobRunList`
9. `LogViewer`
10. `InspectorPanel`

**Notes:** These should be product components with built-in empty/loading/error/destructive states.

### Phase 4: Collaboration, content, and AI workspace components

**Objective:** Support apps beyond classic admin dashboards.

**Components:**

1. `ChatPanel`
2. `ConversationList`
3. `PromptComposer`
4. `NotificationCenter`
5. `KanbanBoard`
6. `CalendarList`
7. `ContentEditorShell`
8. `MediaGallery`
9. `KnowledgeBaseLayout`
10. `DocumentList`

**Notes:** Keep AI/chat components data-driven and provider-agnostic. Do not bake in LLM provider assumptions.

### Phase 5: Commerce, billing, and account flows

**Objective:** Cover monetized and account-based apps where useful, without making the whole library SaaS-only.

**Components:**

1. `SignInForm`
2. `SignUpForm`
3. `ForgotPasswordForm`
4. `ResetPasswordForm`
5. `ProfileSettings`
6. `WorkspaceSettings`
7. `BillingSettings`
8. `PricingTable`
9. `CheckoutSummary`
10. `OrderList`

**Notes:** Keep auth and billing provider-agnostic. Components call callbacks; apps own business logic.

### Phase 6: Agent-facing CLI and recipes

**Objective:** Make it easy for agents to choose the right component instead of hand-rolling UI.

**Features:**

1. `agent-ui describe <component>`
2. `agent-ui rules`
3. `agent-ui suggest --use-case "..."`
4. machine-readable recipes
5. forbidden-pattern checks
6. example state catalog
7. docs generated from metadata

---

## Per-Batch Implementation Template

For every component batch:

1. Update metadata/export tests first and run focused tests to verify RED.
2. Implement components with Svelte 5 typed `$props()`.
3. Use Svelte MCP autofixer for every new or significantly changed Svelte component.
4. Update `src/lib/index.ts`, `src/lib/types.ts`, `src/lib/metadata.ts`, and demo usage.
5. Run:

```bash
pnpm format
pnpm lint
pnpm check
pnpm test
pnpm build
```

6. Commit one coherent batch.

---

## Recommended Next Batch

Implement Phase 1 first:

```txt
TextField
TextareaField
SelectField
SwitchField
FormSection
SubmitBar
StatusBadge
DataTable
SearchFilterBar
Pagination
```

This creates the practical base for forms, settings screens, resource lists, admin pages, developer tools, media libraries, and knowledge apps.
