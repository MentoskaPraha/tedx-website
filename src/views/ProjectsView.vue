<script lang="ts" setup>
import contentBlock from "../components/contentBlock.vue";
import { RouterLink } from "vue-router";
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
		<h2 class="text-center underline text-3xl font-bold mb-4">
			My Favorite Project
		</h2>
		<contentBlock :params="favProject" />
	</div>

	<hr />

	<div>
		<h2 class="text-center underline text-3xl font-bold mb-4">
			Random Project
		</h2>
		<contentBlock :params="featProject" />
	</div>

	<hr />

	<div>
		<h2 class="text-center underline text-3xl font-bold mb-4">
			Project List
		</h2>
		<ul>
			<div v-for="item in projectsList" :key="item.title">
				<ul class="mx-4 lg:text-center">
					<li
						class="my-4 lg:my-0 lg:inline-block lg:mx-4"
						v-for="entry in item.entries"
						:key="entry.title"
					>
						<RouterLink
							class="block w-72 mx-auto border-neutral-700 border-solid border-4 rounded-md hover:opacity-50 transition-opacity"
							:to="entry.link"
						>
							<img
								class="h-72 w-72 bg-white border-neutral-700 border-solid border-4 mb-3"
								v-if="item.displayImages"
								:src="entry.image"
								alt="An image representing this entry."
							/>
							<section
								class="p-2 border-neutral-700 border-solid border-4 bg-black text-center"
							>
								<h4 class="mb-1 text-xl font-bold">
									{{ entry.title }}
								</h4>
								<p>{{ entry.description }}</p>
							</section>
						</RouterLink>
					</li>
				</ul>
			</div>
		</ul>
	</div>

	<hr />
</template>
