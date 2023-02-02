<script lang="ts" setup>
import contentList from "../components/contentList.vue";
import type { contentListParams } from "../types";
import { aboutMe } from "../assets/content.json";

let basicInfo = aboutMe.basicInfo;
let socialMedia = aboutMe.socialMedia as contentListParams;
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
				link: "#",
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
	<div
		class="m-4 mx-auto md:grid md:auto-cols-min md:grid-cols-2 md:items-center md:gap-4"
	>
		<img
			:src="basicInfo.image"
			alt="Content Block image."
			class="w-72 h-72 mx-auto mb-3 bg-white md:mb-0 md:mx-0 md:ml-auto"
		/>
		<section class="mx-auto w-72 md:w-80 md:mx-0 md:mr-auto">
			<h2 class="text-center text-2xl font-bold underline">
				Basic Information
			</h2>

			<p>
				<strong>My name is: </strong> {{ basicInfo.name }} <br />
				<strong>I speak: </strong> {{ basicInfo.languages }} <br />
				<strong>My time zone is: </strong> {{ basicInfo.timezone }}
				<br />
			</p>
			<br />
			<p class="text-center">
				<strong>A little bit more about me: </strong><br />
			</p>
			<p class="text-justify">{{ basicInfo.description }}</p>
		</section>
	</div>

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

	<hr />
</template>
