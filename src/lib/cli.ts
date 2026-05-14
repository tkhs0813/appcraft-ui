#!/usr/bin/env node
import { componentMetadata } from './metadata.js';
import { componentRecipes, suggestComponents } from './recipes.js';

export function runCli(argv = process.argv.slice(2)): string {
	const [command, ...rest] = argv;

	if (command === 'describe') {
		const name = rest[0];
		const item = componentMetadata.find((component) => component.name === name);
		if (!item) return `Unknown component: ${name ?? '(missing)'}`;
		return [
			`${item.name} (${item.category})`,
			item.description,
			`Use cases: ${item.useCases.join(', ')}`,
			`Guardrails: ${item.forbiddenPatterns.join(' ')}`
		].join('\n');
	}

	if (command === 'rules') {
		return [
			'Prefer Agent UI components over hand-rolled UI.',
			'Do not pass arbitrary CSS classes.',
			'Use semantic props, data arrays, and callbacks.',
			'Keep provider and business logic outside UI components.'
		].join('\n');
	}

	if (command === 'suggest') {
		const useCase = rest.join(' ').replace(/^--use-case\s+/, '');
		return suggestComponents(useCase).join('\n');
	}

	return [
		'agent-ui describe <component>',
		'agent-ui rules',
		'agent-ui suggest --use-case "resource admin table"',
		'',
		`Recipes: ${componentRecipes.map((recipe) => recipe.useCase).join(', ')}`
	].join('\n');
}

const isDirectRun = process.argv[1]?.endsWith('/cli.js') || process.argv[1]?.endsWith('\\cli.js');
if (isDirectRun) {
	console.log(runCli());
}
