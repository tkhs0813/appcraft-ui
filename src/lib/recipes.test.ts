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
		expect(suggestComponents('settings card with dialog drawer dropdown and accordion')).toEqual(
			expect.arrayContaining(['Card', 'Dialog', 'Drawer', 'DropdownMenu', 'Accordion'])
		);
		expect(suggestComponents('agent token usage status with copyable code')).toEqual(
			expect.arrayContaining(['TokenMeter', 'AgentStatusIndicator', 'CodeBlock', 'CopyButton'])
		);
		expect(suggestComponents('raw input textarea and static table for a compact form')).toEqual(
			expect.arrayContaining(['Input', 'Textarea', 'Table'])
		);
		expect(suggestComponents('dashboard settings crud admin page')).toEqual(
			expect.arrayContaining(['DashboardLayout', 'SettingsPage', 'CrudPage'])
		);
	});
});
