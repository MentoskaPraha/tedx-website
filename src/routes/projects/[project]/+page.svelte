<script lang="ts">
	import ContentList from "$lib/components/ContentList.svelte";
	import { projects } from "$lib/assets/content.json";
	import type {
		contentBlockParams,
		contentListParams
	} from "$lib/assets/types";
	import ContentBlock from "$lib/components/ContentBlock.svelte";

	export let data;

	let project = data as unknown as contentBlockParams;
	project.links = true;

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
	<title>{data.title} | MP's Official Website</title>

	<meta
		name="description"
		content="This is one of MentoskaPraha's many projects. This one is {data.title}. {data.shortDesc}"
	/>
</svelte:head>

<ContentBlock params={project} />

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
