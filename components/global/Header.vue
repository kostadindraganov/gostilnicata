<template>
	<MegaMenu
		:unstyled="false"
		class="p-3 surface-0 flex flex-row align-items-center justify-between bg-transparent border-transparent w-full absolute"
	>
		<template #start class="mr-5">
			<img
				src="~/assets/img/logo.jpg"
				class="h-16 me-3 rounded-xl"
				alt="FlowBite Logo"
			/>
		</template>
		<template #end>
			<a href="tel:0878785695">
				<Button
					rounded
					class="bg-white text-orange-700 border-none"
					type="button"
					label="ПОРЪЧАЙ"
					icon="pi pi-phone"
					severity="warning"
				/>
			</a>
		</template>
	</MegaMenu>
	<img src="~/assets/img/bg-hero1.jpg" class="w-full me-3" alt="hero Logo" />
	<!-- <Card class="hero-header bg-white border-transparent mx-5 border-none">
		<template #title>
			<MegaMenu
				:unstyled="false"
				class="p-3 surface-0 flex flex-row align-items-center justify-between bg-transparent border-transparent"
			>
				<template #start class="mr-5">
					<img
						src="~/assets/img/logo.jpg"
						class="h-16 me-3 rounded-xl"
						alt="FlowBite Logo"
					/>
				</template>
				<template #end>
					<a href="tel:0878785695">
						<Button
							type="button"
							label="Обади се"
							icon="pi pi-phone"
							severity="warning"
						/>
					</a>
				</template>
			</MegaMenu>
		</template>
		<template #content>
			<div
				class="flex flex-nowrap flex-row justify-between items-center h-full w-full p-5"
			>
				<div
					class="flex flex-wrap flex-col justify-center items-center text-white"
				>
					<h4 class="text-7xl my-5 font-markscript">
						Вкусно хапване в Пазарджик
					</h4>
					<h4 class="text-4xl my-5 font-bg">HOLIDAY PARK PAZARDZHIK</h4>
				</div>
				<div class="flex flex-wrap flex-col justify-center items-center">
					<img
						src="~/assets/img/hero.png"
						class="spinerimg w-3/4 me-3"
						alt="hero Logo"
					/>
					<h4 class="text-4xl my-5 font-boldCyrillic">
						HOLIDAY PARK PAZARDZHIK
					</h4>
				</div>
			</div>
		</template>
		<template #footer></template>
	</Card> -->
</template>
