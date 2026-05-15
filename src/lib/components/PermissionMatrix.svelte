<script lang="ts">
	import type { PermissionMatrixRole, PermissionMatrixPermission } from '../types.js';
	interface Props {
		title?: string;
		roles?: PermissionMatrixRole[];
		permissions?: PermissionMatrixPermission[];
		values?: Record<string, string[]>;
		disabled?: boolean;
		onChange?: (roleId: string, permissionId: string, checked: boolean) => void;
	}
	let {
		title = 'Permissions',
		roles = [],
		permissions = [],
		values = {},
		disabled = false,
		onChange
	}: Props = $props();
</script>

<section class="matrix">
	<h3>{title}</h3>
	<div class="table">
		<div></div>
		{#each roles as role (role.id)}<strong>{role.label}</strong
			>{/each}{#each permissions as permission (permission.id)}<span
				>{permission.label}{#if permission.description}<small>{permission.description}</small
					>{/if}</span
			>{#each roles as role (role.id)}<label aria-label={`${role.label}: ${permission.label}`}
					><input
						type="checkbox"
						checked={(values[role.id] ?? []).includes(permission.id)}
						{disabled}
						onchange={(event) =>
							onChange?.(role.id, permission.id, (event.currentTarget as HTMLInputElement).checked)}
					/></label
				>{/each}{/each}
	</div>
</section>

<style>
	.matrix {
		border: 1px solid var(--ac-border, #d1d5db);
		border-radius: 1rem;
		padding: 1rem;
		background: var(--ac-surface, #fff);
		overflow: auto;
	}
	h3 {
		margin: 0 0 0.8rem;
	}
	.table {
		display: grid;
		grid-template-columns: minmax(12rem, 1.4fr) repeat(var(--cols, 3), minmax(7rem, 1fr));
		gap: 0.1rem;
	}
	.table {
		--cols: 3;
	}
	.table > * {
		padding: 0.65rem;
		border-bottom: 1px solid var(--ac-border, #e5e7eb);
	}
	span {
		display: grid;
		gap: 0.15rem;
	}
	small {
		color: var(--ac-text-muted, #6b7280);
	}
	label {
		text-align: center;
	}
</style>
