/** @type {import('@sveltejs/kit').Config['compilerOptions']} */
const compilerOptions = {
	// Storybook internals use legacy syntax while Appcraft components use Svelte 5 runes.
	runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
};

export default { compilerOptions };
