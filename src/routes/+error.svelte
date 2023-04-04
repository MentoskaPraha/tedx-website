<script lang="ts">
	import { siteInfo } from "$lib/assets/content.json";
	import { page } from "$app/stores";
	import Banner from "$lib/components/Banner.svelte";
</script>

<svelte:head>
	<title>Error: {$page.status} | {siteInfo.title}</title>

	<meta
		name="description"
		content="{siteInfo.title} has experienced an error. Error: {$page.status}, {$page
			.error?.message}"
	/>
</svelte:head>

<Banner title="Error: {$page.status}" description={$page.error?.message} />
