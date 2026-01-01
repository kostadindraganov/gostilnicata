<template>
	<div v-if="data.length > 0">
		<div v-for="(item, index) in result" key="index">
			<div
				class="flex justify-between items-center font-markscript text-white my-2"
			>
				<div>
					<p class="text-3xl mr-4 text-left leading-7">
						{{ item[0] || "- - -" }}
					</p>
				</div>

				<div class="flex flex-col justify-center items-center">
					<span class="text-4xl"
						>{{ item[2] || "0" }}<span class="text-sm">€</span></span
					>
					<Divider class="menu-divider" />
					<span class="text-lg"
						>{{ item[1] || "0" }}
						<span v-if="isCount" class="text-sm">бр.</span>
						<span v-else="isCount" class="text-sm">гр.</span>
					</span>
				</div>
			</div>
			<Divider class="menu-divider" />
		</div>
	</div>
	<div v-else width="100%" height="150px"></div>
</template>

<script setup>
	import { reactive, computed } from "vue";

	const props = defineProps({
		result: {
			type: Array,
			required: true,
			default: [],
		},
		isCount: Boolean,
	});
	const data = computed(() => props.result || []);
</script>

<style scoped>
	.p-divider.p-divider-horizontal {
		margin: 0px;
	}
	.menu-divider.p-divider-horizontal:before {
		border-top: 1px solid #484a4c;
	}
</style>
