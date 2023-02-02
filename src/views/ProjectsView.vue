<script lang="ts" setup>
import contentBlock from "../components/contentBlock.vue";
import contentList from "../components/contentList.vue";
import type { contentBlockParams, contentListParams } from "../types";
import content from "../assets/content.json";

let favProject: contentBlockParams;
let featProject: contentBlockParams;
let projectsList: contentListParams[] = [];
const list = content.projects;

favProject = list.find(
	(element) => element.share == "big-chungus-bot"
) as unknown as contentBlockParams;
favProject.links = true;

const featProjectNum = Math.floor(Math.random() * list.length);
featProject = list[featProjectNum] as unknown as contentBlockParams;
featProject.links = true;

for (let i = 0; i < list.length; i = i + 3) {
	let row: contentListParams = {
		title: "Row_" + i,
		displayTitle: false,
		displayImages: true,
		entries: [],
	};

	for (let j = 0; j < 3; j++) {
		if (i + j >= list.length) {
			row.entries.push({
				title: "Empty",
				description: "An empty entry. There's not much more to it.",
				image: "/images/comingSoonLogo.svg",
				link: "#",
				target: "_self",
			});
		} else {
			const project = list[i + j];
			row.entries.push({
				title: project.title,
				description: project.shortDesc,
				image: project.image,
				link: "/projects/" + project.share,
				target: "_self",
			});
		}
	}

	projectsList.push(row);
}
</script>

<template>
	<div>
		<h2>My Favorite Project</h2>
		<contentBlock :params="favProject" />
	</div>

	<hr />

	<div>
		<h2>Random Project</h2>
		<contentBlock :params="featProject" />
	</div>

	<hr />

	<div>
		<h2>Project List</h2>
		<ul>
			<contentList
				:params="item"
				v-for="item in projectsList"
				:key="item.title"
			/>
		</ul>
	</div>

	<hr />
</template>

<style scoped>
h2 {
	font-size: 30px;
	text-align: center;
	margin-bottom: 15px;
	text-decoration: underline;
}
</style>
