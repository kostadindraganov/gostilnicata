// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,
	app: {
		head: {
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			meta:[
				{ hid: 'og-type', property: 'og:type', content: 'website' },
				{ hid: 'og-title', property: 'og:title', content: 'Gostilnicata - Holiday PARK Пазарджик' },
				{ hid: 'og-description', property: 'og:description', content: 'Гостилницата - Holiday PARK Пазарджик' },
				{ hid: 'og-image', property: 'og:image', content: '/assets/img/bg-hero1.jpg' },
				{ hid: 'og-url', property: 'og:url', content: 'https://gostilnicata.com' },
				{ hid: 'og-site_name', property: 'og:site_name', content: 'Gostilnicata' },
				{ hid: 'twitter-card', name: 'twitter:card', content: 'summary_large_image' },
				{ hid: 'twitter-title', name: 'twitter:title', content: 'Gostilnicata - Restaurant' },
				{ hid: 'twitter-description', name: 'twitter:description', content: 'Гостилницата - Holiday PARK Пазарджик' },
			  ]
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
