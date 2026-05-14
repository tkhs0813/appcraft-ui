import { describe, expect, it } from 'vitest';
import packageJson from '../../package.json' with { type: 'json' };

describe('agent-ui CLI package metadata', () => {
	it('exposes an agent-ui binary and CLI subpath export', () => {
		expect(packageJson.bin).toEqual({ 'agent-ui': './dist/cli.js' });
		expect(packageJson.exports).toHaveProperty('./cli');
	});
});
