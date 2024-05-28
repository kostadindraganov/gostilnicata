// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,
	devtools: { enabled: false },
	modules: [
		"@nuxtjs/tailwindcss",
		"nuxt-primevue",
		"@stefanobartoletti/nuxt-social-share",
	],
	primevue: {
		cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
		components: {
			include: [
				"Card",
				"MegaMenu",
				"Button",
				"Skeleton",
				"Divider",
				"ScrollTop",
			],
			exclude: ["Editor", "Chart"],
		},
		options: {
			ripple: true,
			unstyled: false,
		},
	},
	css: [
		"primevue/resources/themes/lara-light-green/theme.css",
		// "primevue/resources/themes/lara-dark-pink/theme.css",
		// "primevue/resources/themes/lara-dark-indigo/theme.css",
		"primeicons/primeicons.css",
	],
	runtimeConfig: {
		public: {
			GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
			SPREAD_SHEET_ID: process.env.SPREAD_SHEET_ID,
		},
	},
	build: {
		transpile: ["nuxt", "primevue"],
	},
	sourcemap: {
		client: false,
		server: true,
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
});
