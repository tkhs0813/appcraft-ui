import { describe, expect, it } from 'vitest';
import { componentMetadata } from './metadata.js';
import * as publicApi from './index.js';

const publicComponentNames = [
	'Button',
	'PageHeader',
	'UserManagement',
	'AppShell',
	'EmptyState',
	'ErrorState',
	'ConfirmDialog'
];

describe('componentMetadata', () => {
	it('documents every public component for AI agents', () => {
		expect(componentMetadata.map((item) => item.name)).toEqual(publicComponentNames);
	});

	it('exports every documented public component from the package entrypoint', () => {
		for (const name of publicComponentNames) {
			expect(publicApi).toHaveProperty(name);
		}
	});

	it('marks UserManagement as a product component with guardrails', () => {
		const userManagement = componentMetadata.find((item) => item.name === 'UserManagement');

		expect(userManagement?.category).toBe('product');
		expect(userManagement?.forbiddenPatterns).toContain('Do not pass custom CSS classes.');
	});

	it('marks shell and state components with anti-reimplementation guardrails', () => {
		const appShell = componentMetadata.find((item) => item.name === 'AppShell');
		const emptyState = componentMetadata.find((item) => item.name === 'EmptyState');
		const errorState = componentMetadata.find((item) => item.name === 'ErrorState');
		const confirmDialog = componentMetadata.find((item) => item.name === 'ConfirmDialog');

		expect(appShell?.category).toBe('pattern');
		expect(appShell?.forbiddenPatterns).toContain(
			'Do not hand-roll application navigation shells.'
		);
		expect(emptyState?.forbiddenPatterns).toContain('Do not render ad-hoc empty panels.');
		expect(errorState?.forbiddenPatterns).toContain('Do not hide retry actions in plain text.');
		expect(confirmDialog?.forbiddenPatterns).toContain(
			'Do not use window.confirm for destructive product flows.'
		);
	});
});
