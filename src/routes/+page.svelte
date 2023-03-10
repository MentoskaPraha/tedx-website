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

<div>
	<h2 class="text-center text-3xl underline mb-4 font-bold">Main Pages</h2>

	<ContentList params={listParams} />
</div>
