# Agent UI Philosophy

Agent UI is an AI-native UI SDK, not a design sandbox.

## Product stance

- Package-based SDK, not shadcn-style copy/paste.
- Broad AI-built applications are in scope: admin tools, developer tools, AI workspaces, content apps, commerce flows, knowledge bases, internal tools, personal productivity apps, and SaaS products where relevant.
- The library owns visual quality, spacing, typography, states, and interaction polish.
- Consumers pass data, intent, and callbacks.
- The initial release has exactly one theme.
- Arbitrary styling and `class` overrides are not part of the public API by default.

## Why constraints matter

AI coding agents are good at wiring data and intent, but unreliable at maintaining visual systems. Agent UI gives agents a small, semantic API surface so apps stay consistent even when generated or edited by AI.

## API rule

Expose semantic choices such as `variant`, `size`, `tone`, `status`, and callbacks. Avoid exposing raw CSS escape hatches.
