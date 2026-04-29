// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	socialShare: {
		baseUrl: 'https://gostilnicata.com' // required!
		// other optional module options
	},
	ssr: false,
	app: {
		head: {
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			title: "Гостилницата Пазарджик - Holiday PARK",
			meta: [
				{ name: "description", content: "Гостилницата в Holiday PARK Пазарджик - вкусна храна, доставка до дома, качествено обслужване от понеделник до петък" },
				{ property: "og:type", content: "website" },
				{ property: "og:title", content: "Гостилницата Пазарджик - Holiday PARK" },
				{ property: "og:description", content: "Вкусна храна и качествено обслужване в Пазарджик. Доставка до дома от понеделник до петък, 10:00-17:00ч." },
				{ property: "og:image", content: "https://gostilnicata.com/assets/img/bg-hero1.jpg" },
				{ property: "og:image:width", content: "1200" },
				{ property: "og:image:height", content: "630" },
				{ property: "og:image:type", content: "image/jpeg" },
				{ property: "og:image:alt", content: "Гостилницата Пазарджик - Holiday PARK ресторант" },
				{ property: "og:url", content: "https://gostilnicata.com" },
				{ property: "og:site_name", content: "Гостилницата" },
				{ property: "og:locale", content: "bg_BG" },
				{ name: "twitter:card", content: "summary_large_image" },
				{ name: "twitter:title", content: "Гостилницата Пазарджик - Holiday PARK" },
				{ name: "twitter:description", content: "Вкусна храна и качествено обслужване в Пазарджик. Доставка до дома." },
				{ name: "twitter:image", content: "https://gostilnicata.com/assets/img/bg-hero1.jpg" },
				{ name: "twitter:image:alt", content: "Гостилницата Пазарджик" },
			]
		},
	},
	devtools: { enabled: false },
	modules: [
		"@nuxtjs/tailwindcss",
		"nuxt-primevue",
		"@stefanobartoletti/nuxt-social-share",
		"@nuxtjs/seo",
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
