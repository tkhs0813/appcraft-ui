import { error } from '@sveltejs/kit';
import { componentDocs, getComponentDoc } from '$lib/component-docs.js';
import type { EntryGenerator, PageLoad } from './$types.js';

export const prerender = true;

export const entries: EntryGenerator = () => {
	return componentDocs.map((component) => ({ slug: component.slug }));
};

export const load: PageLoad = ({ params }) => {
	const component = getComponentDoc(params.slug);

	if (!component) {
		error(404, 'Component not found');
	}

	return { component };
};
