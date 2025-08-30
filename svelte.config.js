// Minimal adapter for development without dependencies
const adapter = () => ({
  name: 'minimal-adapter',
  async adapt() {
    // Minimal implementation for development
  }
});
// Minimal preprocessor for development without dependencies
const vitePreprocess = () => ({
  name: 'minimal-preprocess'
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;