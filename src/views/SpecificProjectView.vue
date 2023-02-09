<script lang="ts" setup>
	import contentList from "../components/contentList.vue";
	import { ref, watch } from "vue";
	import { useRouter } from "vue-router";
	import contentBlock from "../components/contentBlock.vue";
	import type { contentBlockParams, contentListParams } from "../types";
	import { projects } from "../assets/content.json";

	const projectsList: contentListParams[] = [];
	const notFound = ref(false);
	const image = ref("/images/comingSoonLogo.svg");
	const route = useRouter().currentRoute;
	const projectId = ref(useRouter().currentRoute.value.params.project);
	const project = ref({
		title: "",
		description: "",
		image: "",
		links: true,
		share: "",
		git: "",
		external: ""
	});

	watch(route, checkProject);
	checkProject();

	function checkProject(){
		projectId.value = route.value.params.project as string;
		const potentialProject = projects.find(
			(element) => element.share == projectId.value
		) as unknown as contentBlockParams;

		if (potentialProject == undefined) {
			notFound.value = true;
			let XHR = new XMLHttpRequest();

			XHR.onreadystatechange = function () {
				if (XHR.readyState == 4 && XHR.status == 200) {
					image.value = JSON.parse(XHR.responseText).file;
				}
			};
			XHR.open("GET", "https://aws.random.cat/meow");
			XHR.send();
		} else{
			notFound.value = false;

			project.value = potentialProject;
			project.value.links = true;
		}

		console.log(projectId.value, project);
	}

	//project list
	for (let i = 0; i < projects.length; i = i + 3) {
		let row: contentListParams = {
			title: "Row_" + i,
			displayTitle: false,
			displayImages: true,
			entries: [],
		};

		for (let j = 0; j < 3; j++) {
			if (i + j >= projects.length) {
				row.entries.push({
					title: "Empty",
					description: "An empty entry. There's not much more to it.",
					image: "/images/comingSoonLogo.svg",
					link: "none",
					target: "_self",
				});
			} else {
				const project = projects[i + j];
				row.entries.push({
					title: project.title,
					description: project.shortDesc,
					image: project.image,
					link: (project.share == "none") ? "none" : "/projects/" + project.share,
					target: "_self",
				});
			}
		}

		projectsList.push(row);
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

	<hr />

	<div>
		<h2 class="text-center underline text-3xl font-bold mb-4">
			Project List
		</h2>
		<ul>
			<contentList
				v-for="item in projectsList"
				:key="item.title"
				:params="item"
				class="my-4"
			/>
		</ul>
	</div>
</template>
