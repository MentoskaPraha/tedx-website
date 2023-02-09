<script lang="ts" setup>
	import contentList from "../components/contentList.vue";
	import { mainPages } from "../assets/content.json";

	const listParams = {
		title: "Nothing",
		displayTitle: false,
		displayImages: true,
		entries: mainPages
	}
</script>

<template>
	<div>
		<h2 class="text-center text-3xl underline mb-4 font-bold">
			Main Pages
		</h2>

		<contentList :params="listParams" />
	</div>
</template>
