import { describe, expect, it } from 'vitest';
import { componentRecipes, suggestComponents } from './recipes.js';

describe('componentRecipes', () => {
	it('maps broad use cases to component choices for AI agents', () => {
		expect(componentRecipes.length).toBeGreaterThanOrEqual(6);
		expect(suggestComponents('build a chat workspace with prompt input')).toContain('ChatPanel');
		expect(suggestComponents('show files, logs, and api keys for a developer tool')).toEqual(
			expect.arrayContaining(['FileList', 'LogViewer', 'ApiKeyManager'])
		);
		expect(suggestComponents('pricing and checkout flow')).toEqual(
			expect.arrayContaining(['PricingTable', 'CheckoutSummary'])
		);
		expect(suggestComponents('agent token usage status with copyable code')).toEqual(
			expect.arrayContaining(['TokenMeter', 'AgentStatusIndicator', 'CodeBlock', 'CopyButton'])
		);
	});
});
