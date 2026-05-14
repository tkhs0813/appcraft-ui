import { describe, expect, it } from 'vitest';
import { componentMetadata } from './metadata.js';

describe('componentMetadata', () => {
	it('documents the initial public components for AI agents', () => {
		expect(componentMetadata.map((item) => item.name)).toEqual([
			'Button',
			'PageHeader',
			'UserManagement'
		]);
	});

	it('marks UserManagement as a product component with guardrails', () => {
		const userManagement = componentMetadata.find((item) => item.name === 'UserManagement');

		expect(userManagement?.category).toBe('product');
		expect(userManagement?.forbiddenPatterns).toContain('Do not pass custom CSS classes.');
	});
});
