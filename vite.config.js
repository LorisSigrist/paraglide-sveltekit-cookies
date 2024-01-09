import { sveltekit } from '@sveltejs/kit/vite';
import { paraglide } from '@inlang/paraglide-js-adapter-vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), paraglide({
		project: "./project.inlang",
		outdir: "./src/paraglide"
	})]
});
