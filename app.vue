<template>
	<NuxtLayout>
		<main class="p-5 my-5">
			<div class="text-center md:my-12 sm:my-8">
				<p class="md:text-5xl sm:text-4xl section-title font-boldCyrillic">
					МЕНЮТО ДНЕС
				</p>
				<div class="text-dark-200 text-md my-4 px-3">
					<span>Доставката е от понеделник до петък, от 10:00 до 17:00 ч. </span>
					<p>В рамките на града под 10 лв. Доставка <b>3 лв.</b></p>
					<p>
						Доставка извън града <b>6 лв.</b> за селата : Добровница, Главиница,
						Драгор, Огняново, Мирянци, Мало Конаре, Ивайло.
					</p>
				</div>
			</div>

			<div class="flex justify-center gap-5 flex-row flex-wrap my-5">
				<SheetCard sheet="Супи" picture="soups.jpg" />
				<SheetCard sheet="Аламинути" picture="alaminutes.jpg" />
				<SheetCard sheet="Основни ястия" picture="mainfood.jpg" />
				<SheetCard sheet="Салати" picture="salad.jpg" />
				<SheetCard sheet="Скара" picture="grill.jpg" />
				<SheetCard sheet="Десерти" picture="desert.jpg" />
				<SheetCard sheet="Други" picture="other.jpg" :is-count="true" />
			</div>
			<div class="text-center">
				<span class="text-red-600"
					>Посочените грамажи са преди термична обработка на скара.</span
				>
			</div>
			<div class="flex justify-center items-center gap-3 mt-14 mb-8">
				<p class="font-pacifico text-2xl text-orange-500 mr-2">Сподели</p>
				<!-- Customization with props -->
				<SocialShare network="facebook" :styled="true" :label="false" />
				<SocialShare network="twitter" :styled="true" :label="false" />
				<SocialShare network="linkedin" :styled="true" :label="false" />
				<SocialShare network="whatsapp" :styled="true" :label="false" />
				<SocialShare network="telegram" :styled="true" :label="false" />

			</div>
		</main>
	</NuxtLayout>
</template>

<script setup>
	// Enhanced Facebook sharing setup
	useSeoMeta({
		title: "Гостилницата Пазарджик - Holiday PARK",
		description: "Гостилницата в Holiday PARK Пазарджик - вкусна храна, доставка до дома, качествено обслужване от понеделник до петък",
		keywords: "ресторант пазарджик, доставка храна, гостилница, holiday park, меню",
		
		// Enhanced Open Graph for Facebook
		ogTitle: "Гостилницата Пазарджик - Holiday PARK",
		ogDescription: "Вкусна храна и качествено обслужване в Пазарджик. Доставка до дома от понеделник до петък, 10:00-17:00ч.",
		ogImage: "https://gostilnicata.com/assets/img/bg-hero1.jpg", // Full URL for social sharing
		ogImageWidth: "1200",
		ogImageHeight: "630",
		ogImageAlt: "Гостилницата Пазарджик - Holiday PARK ресторант",
		ogUrl: "https://gostilnicata.com",
		ogType: "website",
		ogSiteName: "Гостилницата",
		ogLocale: "bg_BG",
		
		// Facebook specific
		fbAppId: "", // Add your Facebook App ID if you have one
		
		// Enhanced Twitter Cards  
		twitterCard: "summary_large_image",
		twitterSite: "@gostilnicata", // Add your Twitter handle
		twitterTitle: "Гостилницата Пазарджик - Holiday PARK",
		twitterDescription: "Вкусна храна и качествено обслужване в Пазарджик. Доставка до дома.",
		twitterImage: "https://gostilnicata.com/assets/img/bg-hero1.jpg",
		twitterImageAlt: "Гостилницата Пазарджик",
		
		// Additional SEO
		robots: "index, follow",
		author: "Гостилницата Пазарджик",
		publisher: "https://gostilnicata.com",
	});

	// Explicit meta tags for Facebook validation
	useHead({
		meta: [
			{ property: 'og:image', content: 'https://gostilnicata.com/assets/img/bg-hero1.jpg' },
			{ property: 'og:image:width', content: '1200' },
			{ property: 'og:image:height', content: '630' },
			{ property: 'og:image:alt', content: 'Гостилницата Пазарджик - Holiday PARK ресторант' },
			{ property: 'og:image:type', content: 'image/jpeg' },
			{ property: 'og:title', content: 'Гостилницата Пазарджик - Holiday PARK' },
			{ property: 'og:description', content: 'Вкусна храна и качествено обслужване в Пазарджик. Доставка до дома от понеделник до петък, 10:00-17:00ч.' },
			{ property: 'og:url', content: 'https://gostilnicata.com' },
			{ property: 'og:type', content: 'website' },
			{ property: 'og:site_name', content: 'Гостилницата' },
			{ property: 'og:locale', content: 'bg_BG' },
		],
		script: [
			{
				type: 'application/ld+json',
				innerHTML: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Restaurant",
					"name": "Гостилницата",
					"description": "Ресторант в Holiday PARK Пазарджик",
					"url": "https://gostilnicata.com",
					"telephone": "+359...", // Add your actual phone
					"address": {
						"@type": "PostalAddress",
						"streetAddress": "Holiday PARK",
						"addressLocality": "Пазарджик",
						"postalCode": "4400",
						"addressCountry": "BG"
					},
					"servesCuisine": "Българска кухня",
					"priceRange": "$$",
					"openingHours": ["Mo-Fr 10:00-17:00"],
					"hasMenu": "https://gostilnicata.com",
					"serviceArea": {
						"@type": "GeoCircle",
						"geoMidpoint": {
							"@type": "GeoCoordinates",
							"addressLocality": "Пазарджик"
						}
					}
				})
			}
		]
	});
</script>

<style>
	.section-title {
		position: relative;
		display: inline-block;
		color: #f97316;
	}
	.section-title::after {
		position: absolute;
		content: "";
		width: 45px;
		height: 2px;
		top: 50%;
		right: -55px;
		margin-top: -1px;
		background: #f97316;
	}
	.section-title::before {
		position: absolute;
		content: "";
		width: 45px;
		height: 2px;
		top: 50%;
		left: -55px;
		margin-top: -1px;
		background: #f97316;
	}
</style>
