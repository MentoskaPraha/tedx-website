<script lang="ts">
	import ContentBlock from "$lib/components/ContentBlock.svelte";
	import ContentList from "$lib/components/ContentList.svelte";
	import { aboutMe, siteInfo } from "$lib/assets/content.json";
	import type { contentListEntry } from "$lib/assets/types";

	const socialMedia = aboutMe.socialMedia as unknown as contentListEntry[];
	const techList: contentListEntry[][] = [];

	for (let i = 0; i < aboutMe.tech.length; i = i + 3) {
		let row: contentListEntry[] = [];

		for (let j = 0; j < 3; j++) {
			if (i + j >= aboutMe.tech.length) {
				row.push({
					title: "Empty",
					description:
						"An empty entry. This entry will be filled once I start using more things. It's also here so the rows look complete.",
					image: "",
					link: "none",
					target: "_self"
				});
			} else {
				const tech = aboutMe.tech[i + j];
				row.push({
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
</script>

<svelte:head>
	<title>About | {siteInfo.title}</title>

	<meta name="description" content={siteInfo.about.metaDescription} />
</svelte:head>

<ContentBlock
	title="About Me"
	description={aboutMe.basicInfo.description}
	image={aboutMe.basicInfo.image}
	links={false}
/>

<hr />

<div>
	<h2 class="text-center text-3xl underline mb-4 font-bold">
		Technology I use
	</h2>
	<ul>
		{#each techList as item}
			<li class="my-4">
				<ContentList
					displayTitle={false}
					displayImages={false}
					entries={item}
				/>
			</li>
		{/each}
	</ul>
</div>

<hr />

<ContentList title="Social Media" entries={socialMedia} />

<hr />
