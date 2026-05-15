import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');
const base = dev ? '' : process.env.BASE_PATH || '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		// Force runes mode for the catalog, except for libraries.
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		alias: {
			'appcraft-ui/styles.css': '../../packages/ui/src/lib/styles.css',
			'appcraft-ui': '../../packages/ui/src/lib/index.ts'
		},
		paths: {
			base
		}
	}
};

export default config;
