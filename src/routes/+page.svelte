<script lang="ts">
	import ContentList from "$lib/components/ContentList.svelte";
	import { mainPages } from "$lib/assets/content.json";
	import type {
		contentListEntry,
		contentListParams
	} from "$lib/assets/types";

	const listParams = {
		title: "Aero Stinks.",
		displayTitle: false,
		displayImages: true,
		entries: mainPages as unknown as contentListEntry
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
