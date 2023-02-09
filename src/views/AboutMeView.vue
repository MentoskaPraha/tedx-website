<script lang="ts" setup>
	import contentBlock from "../components/contentBlock.vue";
	import contentList from "../components/contentList.vue";
	import type { contentListParams } from "../types";
	import { aboutMe } from "../assets/content.json";

	const basicInfo = aboutMe.basicInfo;
	const socialMedia = aboutMe.socialMedia as contentListParams;
	const techList: contentListParams[] = [];
	const list = aboutMe.tech;

	for (let i = 0; i < list.length; i = i + 3) {
		let row: contentListParams = {
			title: "Row_" + i,
			displayTitle: false,
			displayImages: false,
			entries: [],
		};

		for (let j = 0; j < 3; j++) {
			if (i + j >= list.length) {
				row.entries.push({
					title: "Empty",
					description:
						"An empty entry. This entry will be filled once I start using more things. It's also here so the rows look complete.",
					image: "",
					link: "none",
					target: "_self",
				});
			} else {
				const tech = list[i + j];
				row.entries.push({
					title: tech.title,
					description: tech.description,
					image: "",
					link: tech.link,
					target: "_blank",
				});
			}
		}

		techList.push(row);
	}
</script>

<template>
	<contentBlock :params="basicInfo" />

	<hr />

	<div>
		<h2 class="text-center text-3xl underline mb-4 font-bold">
			Technology I use
		</h2>
		<ul>
			<contentList
				v-for="item in techList"
				:key="item.title"
				class="my-4"
				:params="item"
			/>
		</ul>
	</div>

	<hr />

	<contentList :params="socialMedia" />
</template>
