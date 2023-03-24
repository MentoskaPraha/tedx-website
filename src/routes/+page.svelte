<script lang="ts">
	import { siteInfo } from "$lib/assets/content.json";
	import ContentList from "$lib/components/ContentList.svelte";
	import type {
		contentListEntry
	} from "$lib/assets/types";

	const mainPages = [
		{
			title: "About Me",
			description: "See who I am and what social media I have.",
			image: "/images/aboutLogo.svg",
			link: "/about",
			target: "_self"
		},
		{
			title: "Projects",
			description: "See all the projects I've worked or working on.",
			image: "/images/projectLogo.svg",
			link: "/projects",
			target: "_self"
		},
		{
			title: "Coming Soon!",
			description:
				"This feature isn't finished yet! Please come back later!",
			image: "/images/comingSoonLogo.svg",
			link: "none",
			target: "_self"
		}
	] as unknown as contentListEntry[];
</script>

<svelte:head>
	<title>{siteInfo.title}</title>

	<meta
		name="description"
		content="{siteInfo.metaDescription}"
	/>
</svelte:head>

<div>
	<h2 class="text-center text-3xl underline mb-4 font-bold">Main Pages</h2>

	<ContentList displayTitle={false} entries={mainPages} />
</div>

<hr>
