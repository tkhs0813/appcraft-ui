# Appcraft UI Philosophy

Appcraft UI is an AI-agent-friendly application UI SDK, not a UI kit for AI agents.

## Product stance

- Package-based SDK, not shadcn-style copy/paste.
- Broad AI-built applications are in scope: admin tools, developer tools, content apps, commerce flows, knowledge bases, internal tools, personal productivity apps, AI-powered workspaces, and SaaS products where relevant.
- Chat and agent-operation interfaces are optional use cases, not the center of the product.
- The library owns visual quality, spacing, typography, states, accessibility defaults, and interaction polish.
- Consumers pass data, intent, state, and callbacks.
- The initial release has exactly one theme.
- Arbitrary styling and `class` overrides are not part of the public API by default.

## Why constraints matter

AI coding agents are good at wiring data and intent, but unreliable at maintaining visual systems. Appcraft UI gives agents a small, semantic API surface so normal product apps stay consistent even when generated or edited by AI.

## API rule

Expose semantic choices such as `variant`, `size`, `tone`, `status`, and callbacks. Avoid exposing raw CSS escape hatches.
