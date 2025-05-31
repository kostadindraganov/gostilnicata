// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,
	app: {
		head: {
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			meta: [
				// Open Graph / Facebook
				{ property: "og:type", content: "website" },
				{ property: "og:title", content: "Gostilnicata - Restaurant" },
				{ property: "og:description", content: "Гостилницата - Holiday PARK Пазарджик" },
				{ property: "og:image", content: "/assets/img/bg-hero1.jpg" },
				{ property: "og:url", content: "https://gostilnicata.com" }, // Replace with your actual URL
				{ property: "og:site_name", content: "Gostilnicata" },
				
				// Twitter Cards
				{ name: "twitter:card", content: "summary_large_image" },
				{ name: "twitter:title", content: "Gostilnicata - Restaurant" },
				{ name: "twitter:description", content: "Гостилницата - Holiday PARK Пазарджик" },
				{ name: "twitter:image", content: "/assets/img/bg-hero1.jpg" },
			],
		},
	},
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
