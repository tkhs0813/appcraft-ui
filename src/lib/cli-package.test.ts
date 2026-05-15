import { describe, expect, it } from 'vitest';
import packageJson from '../../package.json' with { type: 'json' };

describe('appcraft-ui CLI package metadata', () => {
	it('exposes an appcraft-ui binary and CLI subpath export', () => {
		expect(packageJson.bin).toEqual({ 'appcraft-ui': './dist/cli.js' });
		expect(packageJson.exports).toHaveProperty('./cli');
	});
});
