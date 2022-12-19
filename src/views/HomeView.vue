<script lang="ts" setup>
	import contentList from "../components/contentList.vue";
	import content from "../assets/content.json";

	let mainPages = content.home.find(element => element.title == "Main Pages");
</script>

<template>
<main>
	<contentList :params="mainPages"/>	

	<hr>
</main>
</template>