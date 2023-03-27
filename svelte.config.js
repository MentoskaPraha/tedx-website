import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	outDir: "public/",

	kit: {
		adapter: adapter({
			pages: "build",
			assets: "build",
			fallback: "index.html",
			precompress: false,
			strict: true
		})
	}
};

export default config;
