<template>
	<Card
		style="width: 25rem; overflow: hidden"
		class="border-solid rounded-xl bg-stone bg-stoneBg bg-cover bg-no-repeat"
	>
		<template #header>
			<div class="flex p justify-center items-center border-b-2 border-white">
				<img alt="user header" :src="image" />
			</div>
		</template>
		<template #title>
			<h2 class="text-5xl text-white font-markscript text-center mb-4 mx-2">
				{{ sheet }}
			</h2>
			<Divider />
		</template>
		<template #content>
			<SheetItems :result="result" />
		</template>
		<template #footer>
			<div class="flex gap-3 mt-1"></div>
		</template>
	</Card>
</template>

<script setup>
	import { reactive, computed } from "vue";

	const props = defineProps({
		sheet: String,
		picture: String,
	});

	const image = computed(
		() =>
			`/assets/img/${props.picture}` ||
			"https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
	);

	const headings = ref(null);
	const result = ref([]);

	const getVars = () => {
		const SPREAD_SHEET_ID = useRuntimeConfig().public.SPREAD_SHEET_ID;
		const GOOGLE_API_KEY = useRuntimeConfig().public.GOOGLE_API_KEY;

		return { SPREAD_SHEET_ID, GOOGLE_API_KEY };
	};
	const { SPREAD_SHEET_ID, GOOGLE_API_KEY } = getVars();
	const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${
		props.sheet + "!A2:D20"
	}?key=${GOOGLE_API_KEY}`;

	const { data, error, refresh } = await useFetch(url);
	headings.value = data.value.values[0];
	result.value = [...data.value.values];
</script>
