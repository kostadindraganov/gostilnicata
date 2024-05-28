<template>
	<NuxtLayout>
		<main class="h-screen p-5">
			<div class="flex justify-center gap-3">
				<MenuItem sheet="Супи" />
				<MenuItem sheet="Десерти" />
			</div>
			<div>
				<!-- Basic use -->
				<SocialShare network="facebook" />

				<SocialShare network="twitter" />

				<SocialShare network="linkedin" />

				<!-- Customization with props -->
				<SocialShare network="facebook" :styled="true" :label="false" />
			</div>
		</main>
	</NuxtLayout>
</template>

<script setup></script>
