<script lang="ts" setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import contentBlock from "../components/contentBlock.vue";
import type { contentBlockParams } from "../types";
import content from "../assets/content.json";

const route = useRoute();
const projectId = computed(() => route.params.project as string);
let notFound = false;
let image = ref("/images/comingSoonLogo.svg");

const list = content.projects;
let project = list.find(
	(element) => element.share == projectId.value
) as unknown as contentBlockParams;

if (project == undefined) {
	notFound = true;
	let XHR = new XMLHttpRequest();

	XHR.onreadystatechange = function () {
		if (XHR.readyState == 4 && XHR.status == 200) {
			image.value = JSON.parse(XHR.responseText).file;
		}
	};
	XHR.open("GET", "https://aws.random.cat/meow");
	XHR.send();
} else {
	project.links = true;
}
</script>

<template>
	<div v-if="!notFound">
		<contentBlock :params="project" />
	</div>

	<div v-if="notFound">
		<p class="text-center text-2xl font-bold underline mb-2">
			The project you are looking for was not found. Here is a cat
			instead.
		</p>

		<img
			:src="image"
			alt="Random cat picture."
			class="bg-white mx-auto w-3/4 md:w-1/2"
		/>
	</div>
</template>
