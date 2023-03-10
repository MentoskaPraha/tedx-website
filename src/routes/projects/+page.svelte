<script lang="ts">
	import ContentBlock from "$lib/components/ContentBlock.svelte";
	import ContentList from "$lib/components/ContentList.svelte";
	import { projects } from "$lib/assets/content.json";
	import type {
		contentBlockParams,
		contentListParams
	} from "$lib/assets/types";

	let favProject = projects.find(
		(element) => element.share == "big-chungus-bot"
	) as unknown as contentBlockParams;
	favProject.links = true;

	let featProject = projects.find(
		(element) => element.share == "mp-website"
	) as unknown as contentBlockParams;
	////featProject = projects[(Math.floor(Math.random() * projects.length))] as unknown as contentBlockParams;
	featProject.links = true;

	let projectsList: contentListParams[] = [];

	for (let i = 0; i < projects.length; i = i + 3) {
		let row: contentListParams = {
			title: "Row_" + i,
			displayTitle: false,
			displayImages: true,
			entries: []
		};

		for (let j = 0; j < 3; j++) {
			if (i + j >= projects.length) {
				row.entries.push({
					title: "Empty",
					description: "An empty entry. There's not much more to it.",
					image: "/images/comingSoonLogo.svg",
					link: "none",
					target: "_self"
				});
			} else {
				const project = projects[i + j];
				row.entries.push({
					title: project.title,
					description: project.shortDesc,
					image: project.image,
					link:
						project.share == "none"
							? "none"
							: "/projects/" + project.share,
					target: "_self"
				});
			}
		}
		projectsList.push(row);
	}
</script>

<svelte:head>
	<title>Projects | MP's Official Website</title>

	<meta
		name="description"
		content="This is the projects page of MentoskaPraha's official website. Here you can view all the information about all of his projects."
	/>
</svelte:head>

<div>
	<h2 class="text-center underline text-3xl font-bold mb-4">
		My Favorite Project
	</h2>
	<ContentBlock params={favProject} />
</div>

<hr />

<div>
	<h2 class="text-center underline text-3xl font-bold mb-4">
		Random Project
	</h2>
	<ContentBlock params={featProject} />
</div>

<hr />

<div>
	<h2 class="text-center underline text-3xl font-bold mb-4">Project List</h2>
	<ul>
		{#each projectsList as item}
			<li class="my-4">
				<ContentList params={item} />
			</li>
		{/each}
	</ul>
</div>
