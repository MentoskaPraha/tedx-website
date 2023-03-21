<script lang="ts">
	import ContentList from "$lib/components/ContentList.svelte";
	import type {
		contentListEntry,
		contentListParams
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
	] as unknown as contentListEntry;

	const listParams = {
		title: "Aero Stinks.",
		displayTitle: false,
		displayImages: true,
		entries: mainPages
	} as unknown as contentListParams;
</script>

<svelte:head>
	<title>MP's Official Website</title>

	<meta
		name="description"
		content="This is MentoskaPraha's official website. Here you can view all the information about him you need, such as his social media accounts or the projects he's worked on."
	/>
</svelte:head>

<div>
	<h2 class="text-center text-3xl underline mb-4 font-bold">Main Pages</h2>

	<ContentList params={listParams} />
</div>
