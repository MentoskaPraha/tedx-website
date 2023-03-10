<script lang="ts">
	import ContentBlock from "$lib/components/ContentBlock.svelte";
	import ContentList from "$lib/components/ContentList.svelte";
	import { aboutMe } from "$lib/assets/content.json";
	import type {
		contentBlockParams,
		contentListParams
	} from "$lib/assets/types";

	const about = {
		title: aboutMe.basicInfo.title,
		description: aboutMe.basicInfo.description,
		image: aboutMe.basicInfo.image,
		links: false,
		share: "empty",
		git: "empty",
		external: "empty"
	} as contentBlockParams;

	const social = aboutMe.socialMedia as unknown as contentListParams;

	const techList: contentListParams[] = [];

	for (let i = 0; i < aboutMe.tech.length; i = i + 3) {
		let row: contentListParams = {
			title: "Row_" + i,
			displayTitle: false,
			displayImages: false,
			entries: []
		};

		for (let j = 0; j < 3; j++) {
			if (i + j >= aboutMe.tech.length) {
				row.entries.push({
					title: "Empty",
					description:
						"An empty entry. This entry will be filled once I start using more things. It's also here so the rows look complete.",
					image: "",
					link: "none",
					target: "_self"
				});
			} else {
				const tech = aboutMe.tech[i + j];
				row.entries.push({
					title: tech.title,
					description: tech.description,
					image: "",
					link: tech.link,
					target: "_blank"
				});
			}
		}
		techList.push(row);
	}

	console.log(techList);
</script>

<svelte:head>
	<title>About | MP's Official Website</title>

	<meta
		name="description"
		content="This is the about page of MentoskaPraha's official website. Here you can view all the information about him you need, such as his social media accounts and who he is."
	/>
</svelte:head>

<ContentBlock params={about} />

<hr />

<div>
	<h2 class="text-center text-3xl underline mb-4 font-bold">
		Technology I use
	</h2>
	<ul>
		{#each techList as item}
			<li class="my-4">
				<ContentList params={item} />
			</li>
		{/each}
	</ul>
</div>

<hr />

<ContentList params={social} />
