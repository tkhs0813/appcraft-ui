Validate Appcraft UI before finishing a Codex task.

Run these commands in order and fix any failures:

```bash
pnpm format
pnpm lint
pnpm check
pnpm test
pnpm build
```

Expected result:

- Prettier and ESLint pass.
- `svelte-check` reports 0 errors and 0 warnings.
- Vitest passes.
- `svelte-package` succeeds.
- `publint` reports `All good!`.

If only documentation or agent-rule files changed, still run at least `pnpm format` and `pnpm lint`. For component, metadata, recipe, type, export, package, or demo changes, run the full sequence.
