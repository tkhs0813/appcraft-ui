#!/usr/bin/env node
import { writeFileSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const repoRoot = new URL('..', import.meta.url).pathname;
const componentDir = join(repoRoot, 'packages/ui/src/lib/components');
const outputPath = join(repoRoot, 'apps/catalog/src/lib/generated-component-props.ts');

function findInterface(text) {
	const match = /interface\s+Props\s*\{/.exec(text);
	if (!match) return null;

	let index = match.index + match[0].length;
	let depth = 1;
	const start = index;

	while (index < text.length && depth > 0) {
		const char = text[index];
		if (char === '{') depth += 1;
		if (char === '}') depth -= 1;
		index += 1;
	}

	return text.slice(start, index - 1);
}

function splitPropDeclarations(body) {
	const chunks = [];
	let current = '';
	let angle = 0;
	let paren = 0;
	let brace = 0;

	for (const char of body) {
		current += char;
		if (char === '<') angle += 1;
		if (char === '>') angle = Math.max(0, angle - 1);
		if (char === '(') paren += 1;
		if (char === ')') paren = Math.max(0, paren - 1);
		if (char === '{') brace += 1;
		if (char === '}') brace = Math.max(0, brace - 1);
		if (char === ';' && angle === 0 && paren === 0 && brace === 0) {
			chunks.push(current.slice(0, -1).trim());
			current = '';
		}
	}

	return chunks.filter(Boolean).map((chunk) => chunk.replace(/\s+/g, ' '));
}

function extractDefaults(text) {
	const defaults = {};
	const match = /let\s*\{/.exec(text);
	if (!match) return defaults;

	let index = match.index + match[0].length;
	let depth = 1;
	const start = index;

	while (index < text.length && depth > 0) {
		const char = text[index];
		if (char === '{') depth += 1;
		if (char === '}') depth -= 1;
		index += 1;
	}

	const body = text.slice(start, index - 1);
	for (const part of body.split(',')) {
		const prop = /^([A-Za-z_$][\w$]*)\s*=\s*(.+)$/s.exec(part.trim());
		if (prop) defaults[prop[1]] = prop[2].trim().replace(/\s+/g, ' ');
	}

	return defaults;
}

function extractProps(text) {
	const body = findInterface(text);
	if (!body) return [];

	const defaults = extractDefaults(text);
	return splitPropDeclarations(body).flatMap((declaration) => {
		const prop = /^([A-Za-z_$][\w$]*)(\?)?:\s*(.+)$/.exec(declaration);
		if (!prop) return [];

		const name = prop[1];
		let description = '';
		if (name === 'children') description = 'Rendered child content.';
		if (name.startsWith('on')) description = 'Callback invoked by the component.';

		return {
			name,
			type: prop[3].trim(),
			required: prop[2] !== '?',
			defaultValue: defaults[name] ?? '',
			description
		};
	});
}

const records = Object.fromEntries(
	readdirSync(componentDir)
		.filter((file) => file.endsWith('.svelte'))
		.sort()
		.map((file) => {
			const name = file.replace(/\.svelte$/, '');
			const source = readFileSync(join(componentDir, file), 'utf8');
			return [name, extractProps(source)];
		})
);

const output = [
	"import type { ComponentPropDoc } from './component-docs.js';\n",
	'export const generatedComponentProps = {',
	...Object.entries(records).flatMap(([name, props]) => [
		`\t${name}: [`,
		...props.map((prop) => `\t\t${JSON.stringify(prop)},`),
		'\t],'
	]),
	'} satisfies Record<string, ComponentPropDoc[]>;\n'
].join('\n');

writeFileSync(outputPath, output);
console.log(`Generated props for ${Object.keys(records).length} components → ${outputPath}`);
