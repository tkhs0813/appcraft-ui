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
		expect(suggestComponents('searchable user selector with tags and date range')).toEqual(
			expect.arrayContaining(['ComboboxField', 'MultiSelectField', 'DateRangeField'])
		);
		expect(suggestComponents('onboarding wizard setup with steps')).toEqual(
			expect.arrayContaining(['Stepper', 'WizardLayout'])
		);
		expect(suggestComponents('analytics dashboard with trend and bar chart')).toEqual(
			expect.arrayContaining(['ChartCard', 'TrendChart', 'BarChart'])
		);
		expect(suggestComponents('admin permissions and audit log detail page')).toEqual(
			expect.arrayContaining(['PermissionMatrix', 'AuditLog', 'DetailPage'])
		);
		expect(suggestComponents('csv import export review errors')).toEqual(
			expect.arrayContaining(['ImportPanel', 'ExportPanel', 'CsvImportWizard', 'DataImportReview'])
		);
		expect(suggestComponents('not found forbidden maintenance loading page state')).toEqual(
			expect.arrayContaining([
				'PageState',
				'LoadingPage',
				'NotFoundPage',
				'ForbiddenPage',
				'MaintenancePage'
			])
		);
		expect(suggestComponents('inspect json metadata key value data')).toEqual(
			expect.arrayContaining(['JsonViewer', 'KeyValueList', 'DataInspector', 'MetadataPanel'])
		);
	});
});
