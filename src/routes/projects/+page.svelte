<script lang="ts">
	import ContentBlock from "$lib/components/ContentBlock.svelte";
	import ContentList from "$lib/components/ContentList.svelte";
	import { projects, siteInfo } from "$lib/assets/content.json";
	import type { contentListEntry, projectObject } from "$lib/assets/types";

	let favProject = projects.list.find(
		(element) => element.share == projects.favProject
	) as projectObject;

	let featProject = projects.list.find(
		(element) => element.share == "mp-website"
	) as projectObject;
	featProject =
		projects.list[Math.floor(Math.random() * projects.list.length)];

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
	<title>Projects | {siteInfo.title}</title>

	<meta name="description" content={siteInfo.projects.metaDescription} />
</svelte:head>

<div>
	<h2 class="text-center underline text-3xl font-bold mb-4">
		My Favorite Project
	</h2>
	<ContentBlock
		title={favProject.title}
		description={favProject.description}
		image={favProject.image}
		links={true}
		share={favProject.share}
		git={favProject.git}
		external={favProject.external}
	/>
</div>

<hr />

<div>
	<h2 class="text-center underline text-3xl font-bold mb-4">
		Random Project
	</h2>
	<ContentBlock
		title={featProject.title}
		description={featProject.description}
		image={featProject.image}
		links={true}
		share={featProject.share}
		git={featProject.git}
		external={featProject.external}
	/>
</div>

<hr />

<div>
	<h2 class="text-center underline text-3xl font-bold mb-4">Project List</h2>
	<ul>
		{#each projectsList as item}
			<li class="my-4">
				<ContentList entries={item} displayTitle={false} />
			</li>
		{/each}
	</ul>
</div>
