<script lang="ts">
	import Button from './Button.svelte';
	import type { UserManagementRole, UserManagementUser } from '../types.js';

	interface Props {
		users: UserManagementUser[];
		roles?: UserManagementRole[];
		loading?: boolean;
		error?: string | null;
		currentUserId?: string;
		onInvite?: () => void;
		onChangeRole?: (userId: string, role: string) => void;
		onRemove?: (userId: string) => void;
	}

	let {
		users,
		roles = [
			{ value: 'owner', label: 'Owner' },
			{ value: 'admin', label: 'Admin' },
			{ value: 'member', label: 'Member' }
		],
		loading = false,
		error = null,
		currentUserId,
		onInvite,
		onChangeRole,
		onRemove
	}: Props = $props();

	const initials = (name: string) =>
		name
			.split(' ')
			.map((part) => part[0])
			.join('')
			.slice(0, 2)
			.toUpperCase();

	const roleLabel = (role: string) => roles.find((item) => item.value === role)?.label ?? role;
</script>

<section class="aui-user-management aui-root" aria-busy={loading}>
	<div class="aui-user-management__header">
		<div>
			<h2>Team members</h2>
			<p>Manage access, roles, and invitations for your workspace.</p>
		</div>
		{#if onInvite}
			<Button variant="primary" label="Invite member" onClick={onInvite} />
		{/if}
	</div>

	{#if error}
		<div class="aui-state aui-state--error" role="alert">
			<strong>Could not load members</strong>
			<span>{error}</span>
		</div>
	{:else if loading}
		<div class="aui-skeleton-list" aria-label="Loading members">
			{#each [1, 2, 3] as item (item)}
				<div class="aui-skeleton-row">
					<span></span><span></span><span></span>
				</div>
			{/each}
		</div>
	{:else if users.length === 0}
		<div class="aui-state">
			<strong>No members yet</strong>
			<span>Invite your first team member to collaborate in this workspace.</span>
			{#if onInvite}
				<Button variant="secondary" label="Invite member" onClick={onInvite} />
			{/if}
		</div>
	{:else}
		<div class="aui-table-wrap">
			<table>
				<thead>
					<tr>
						<th scope="col">Member</th>
						<th scope="col">Role</th>
						<th scope="col">Status</th>
						<th scope="col"><span class="aui-sr-only">Actions</span></th>
					</tr>
				</thead>
				<tbody>
					{#each users as user (user.id)}
						<tr>
							<td>
								<div class="aui-member">
									{#if user.avatarUrl}
										<img src={user.avatarUrl} alt="" />
									{:else}
										<span aria-hidden="true">{initials(user.name)}</span>
									{/if}
									<div>
										<strong>{user.name}</strong>
										<small>{user.email}</small>
									</div>
								</div>
							</td>
							<td>
								{#if onChangeRole && user.id !== currentUserId}
									<label>
										<span class="aui-sr-only">Change role for {user.name}</span>
										<select
											value={user.role}
											onchange={(event) => onChangeRole?.(user.id, event.currentTarget.value)}
										>
											{#each roles as role (role.value)}
												<option value={role.value}>{role.label}</option>
											{/each}
										</select>
									</label>
								{:else}
									<span class="aui-role">{roleLabel(user.role)}</span>
								{/if}
							</td>
							<td>
								<span class="aui-status" data-status={user.status ?? 'active'}
									>{user.status ?? 'active'}</span
								>
							</td>
							<td class="aui-actions">
								{#if onRemove && user.id !== currentUserId}
									<Button
										variant="ghost"
										size="sm"
										label="Remove"
										onClick={() => onRemove?.(user.id)}
									/>
								{:else if user.id === currentUserId}
									<span class="aui-current-user">You</span>
								{/if}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{/if}
</section>

<style>
	.aui-user-management {
		background: var(--aui-surface);
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-lg);
		box-shadow: var(--aui-shadow-sm);
		overflow: hidden;
	}

	.aui-user-management__header {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 1rem;
		padding: 1.25rem 1.5rem;
		border-bottom: 1px solid var(--aui-border);
	}

	h2 {
		margin: 0;
		font-size: 1rem;
		letter-spacing: -0.015em;
		color: var(--aui-text);
	}

	p {
		margin: 0.25rem 0 0;
		font-size: 0.875rem;
		line-height: 1.5;
		color: var(--aui-text-muted);
	}

	.aui-table-wrap {
		overflow-x: auto;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.875rem;
	}

	th {
		padding: 0.75rem 1rem;
		text-align: left;
		font-size: 0.75rem;
		font-weight: 750;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--aui-text-muted);
		background: var(--aui-surface-subtle);
	}

	td {
		padding: 0.875rem 1rem;
		border-top: 1px solid var(--aui-border);
		vertical-align: middle;
	}

	.aui-member {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		min-width: 14rem;
	}

	.aui-member img,
	.aui-member > span {
		width: 2.25rem;
		height: 2.25rem;
		border-radius: 999px;
		flex: none;
	}

	.aui-member > span {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background: var(--aui-brand-soft);
		color: var(--aui-brand-strong);
		font-size: 0.75rem;
		font-weight: 800;
	}

	.aui-member strong {
		display: block;
		font-size: 0.9rem;
		color: var(--aui-text);
	}

	.aui-member small {
		display: block;
		margin-top: 0.125rem;
		color: var(--aui-text-muted);
	}

	select {
		height: 2rem;
		min-width: 7.25rem;
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-sm);
		background: var(--aui-surface);
		color: var(--aui-text);
		font: inherit;
		padding: 0 0.5rem;
	}

	select:focus-visible {
		outline: 3px solid color-mix(in srgb, var(--aui-brand) 20%, transparent);
		outline-offset: 2px;
	}

	.aui-role,
	.aui-status,
	.aui-current-user {
		display: inline-flex;
		align-items: center;
		border-radius: 999px;
		padding: 0.25rem 0.55rem;
		font-size: 0.75rem;
		font-weight: 700;
	}

	.aui-role,
	.aui-current-user {
		background: var(--aui-surface-subtle);
		color: var(--aui-text-muted);
	}

	.aui-status {
		background: var(--aui-success-soft);
		color: var(--aui-success);
		text-transform: capitalize;
	}

	.aui-status[data-status='invited'] {
		background: var(--aui-warning-soft);
		color: var(--aui-warning);
	}

	.aui-status[data-status='suspended'] {
		background: var(--aui-danger-soft);
		color: var(--aui-danger);
	}

	.aui-actions {
		text-align: right;
	}

	.aui-state {
		display: grid;
		place-items: center;
		gap: 0.55rem;
		padding: 3rem 1.5rem;
		text-align: center;
		color: var(--aui-text-muted);
	}

	.aui-state strong {
		color: var(--aui-text);
	}

	.aui-state--error {
		background: var(--aui-danger-soft);
		color: var(--aui-danger);
	}

	.aui-skeleton-list {
		display: grid;
		gap: 1px;
		background: var(--aui-border);
	}

	.aui-skeleton-row {
		display: grid;
		grid-template-columns: 1.5fr 0.75fr 0.5fr;
		gap: 1rem;
		padding: 1rem 1.5rem;
		background: var(--aui-surface);
	}

	.aui-skeleton-row span {
		height: 1.75rem;
		border-radius: var(--aui-radius-sm);
		background: linear-gradient(
			90deg,
			var(--aui-surface-subtle),
			#e2e8f0,
			var(--aui-surface-subtle)
		);
		background-size: 200% 100%;
		animation: aui-shimmer 1.2s ease-in-out infinite;
	}

	.aui-sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	@keyframes aui-shimmer {
		to {
			background-position: -200% 0;
		}
	}

	@media (max-width: 720px) {
		.aui-user-management__header {
			flex-direction: column;
		}

		th:nth-child(3),
		td:nth-child(3) {
			display: none;
		}
	}
</style>
