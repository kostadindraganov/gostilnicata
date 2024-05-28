<template>
	<Card style="width: 25rem; overflow: hidden">
		<template #header>
			<img alt="user header" src="/assets/img/card-vue.jpg" />
		</template>
		<template #title>
			<h2 v-if="headings.length > 1">{{ sheet }}</h2>
			<Skeleton v-else width="8rem" class="mb-2"></Skeleton>
		</template>
		<template #subtitle>Card subtitle</template>
		<template #content>
			<div v-if="result.length > 1">
				<div v-for="item in result">
					<div class="flex justify-between items-center">
						<span>{{ item[0] }} </span>
						<span>{{ item[1] }} </span>
						<span>{{ item[2] }} </span>
					</div>
				</div>
			</div>
			<Skeleton v-else width="100%" height="150px"></Skeleton>
		</template>
		<template #footer>
			<div class="flex gap-3 mt-1">
				<Button label="Cancel" severity="secondary" outlined class="w-full" />
				<Button label="Save" class="w-full" />
			</div>
		</template>
	</Card>
</template>

<script setup>
	const props = defineProps({
		sheet: String,
	});

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
