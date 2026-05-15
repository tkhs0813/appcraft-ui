# Design Principles

Appcraft UI is a UI component SDK that is easy for AI coding agents to use. It is **not** a UI kit for showing AI agents, and it is not centered on chat interfaces.

## Product definition

Appcraft UI provides polished Svelte components for normal application screens: forms, tables, settings, navigation, resource management, auth, billing, content, dashboards, and developer tools. AI-specific screens are allowed, but they are one category among many.

The user of the library should pass:

- Data
- Intent
- State
- Callbacks

The library should own:

- Layout
- Spacing
- Typography
- Component states
- Accessibility defaults
- Interaction polish
- Responsive behavior
- Visual consistency

## Core principles

### 1. AI-friendly means hard to misuse

The public API should be small, typed, semantic, and predictable. An agent should not need to invent markup or CSS to make common product screens look finished.

Prefer:

```svelte
<Button variant="primary" size="md" loading={saving}>Save</Button>
```

Avoid public APIs that encourage this by default:

```svelte
<Button class="bg-blue-500 px-3 rounded-md hover:bg-blue-600" />
```

### 2. Product components matter more than isolated atoms

Atoms are useful, but the library becomes valuable when it provides complete application patterns such as:

- `UserManagement`
- `DataTable`
- `ResourceList`
- `ProfileSettings`
- `BillingSettings`
- `PricingTable`
- `ContentEditorShell`
- `KnowledgeBaseLayout`

These components prevent AI agents from repeatedly rebuilding fragile table, form, dialog, and state logic.

### 3. One theme first

The initial product ships with one polished theme. Multi-theme support, dark mode, brand token customization, and arbitrary style escape hatches are intentionally deferred until the base system is excellent.

### 4. Semantic variants only

Expose domain-level choices such as:

- `variant="primary" | "secondary" | "danger" | "ghost"`
- `tone="neutral" | "brand" | "success" | "warning" | "danger"`
- `status="active" | "paused" | "error"`
- `loading`, `empty`, `error`, `saving`, `saved`

Do not expose raw visual implementation details unless there is a proven need.

### 5. Metadata is part of the product

`packages/ui/src/lib/metadata.ts`, `packages/ui/src/lib/recipes.ts`, and the CLI are AI-facing APIs. They help coding agents choose components and avoid reimplementing UI. Keep them in sync with every public component.

### 6. Broad application coverage

The library should serve many AI-built applications, not only SaaS and not only AI chat products:

- Admin/internal tools
- Developer tools
- Dashboards
- Commerce and billing flows
- Knowledge and content apps
- Personal productivity apps
- AI-powered workspaces as one category

## Non-goals for now

- shadcn-style copy/paste distribution
- Headless-only primitives
- Arbitrary `class` passthrough by default
- Multi-theme systems
- Dark mode
- External UI/headless dependencies such as bits-ui, Melt UI, Radix, Ark UI, or Floating UI
- Making chat or agent-operation UI the core product identity
