<script lang="ts">
	import ContentList from "$lib/components/ContentList.svelte";
	import { projects, siteInfo } from "$lib/assets/content.json";
	import type { contentListEntry, projectObject } from "$lib/assets/types";
	import ContentBlock from "$lib/components/ContentBlock.svelte";

	export let data;

	let project = data as projectObject;

	let projectsList: contentListEntry[][] = [];

	for (let i = 0; i < projects.list.length; i = i + 3) {
		let row: contentListEntry[] = [];

		for (let j = 0; j < 3; j++) {
			if (i + j >= projects.list.length) {
				row.push({
					title: "Empty",
					description: "An empty entry. There's not much more to it.",
					image: "/images/comingSoonLogo.svg",
					link: "none",
					target: "_self"
				});
			} else {
				const project = projects.list[i + j];
				row.push({
					title: project.title,
					description: "Placeholder description, for now.",
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
	<title>{project.title} | {siteInfo.title}</title>

	<meta name="description" content={project.description} />
</svelte:head>

<ContentBlock
	title={project.title}
	description={project.description}
	image={project.image}
	links={true}
	share={project.share}
	git={project.git}
	external={project.external}
/>

<div>
	<h2 class="text-center underline text-3xl font-bold mb-4">Project List</h2>
	<ul>
		{#each projectsList as item}
			<li class="my-4">
				<ContentList displayTitle={false} entries={item} />
			</li>
		{/each}
	</ul>
</div>
