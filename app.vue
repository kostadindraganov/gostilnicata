<template>
	<NuxtLayout>
		<main class="p-5 my-5">
			<div class="text-center md:my-12 sm:my-8">
				<p class="md:text-5xl sm:text-4xl section-title font-boldCyrillic">
					МЕНЮТО ДНЕС
				</p>
				<div class="text-dark-200 text-md my-4 px-3">
					<span>Доставката е от понеделник до петък, от 10 до 17.30. </span>
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
				<SheetCard sheet="Други" picture="other.jpg" />
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
	useHead({
		title: "Гостилницата Пазарджик",
		meta: [
			{
				name: "description",
				content: "Разнообразие от готвена храна за вкъщи.",
			},
		],
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
