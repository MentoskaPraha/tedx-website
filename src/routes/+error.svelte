<script lang="ts">
	import { siteInfo } from "$lib/assets/content.json";
	import { page } from "$app/stores";
	import { onMount } from "svelte";

	//set banner height
	let banner: HTMLElement;
	let description: HTMLElement;

	onMount(() => setBannerHeight());

	function setBannerHeight() {
		const height = window.innerHeight - 56 - description.clientHeight - 32;
		banner.style.height = `${height}px`;
	}
</script>

<svelte:head>
	<title>Error: {$page.status} | {siteInfo.title}</title>

	<meta
		name="description"
		content="{siteInfo.title} has experienced an error. Error: {$page.status}, {$page
			.error?.message}"
	/>
</svelte:head>

<svelte:window on:resize={setBannerHeight} />

<div
	bind:this={banner}
	class="mt-14 bg-black bg-[url('/images/banner.webp')] bg-cover bg-no-repeat bg-center flex justify-center items-center"
>
	<h1 class="text-center text-4xl font-bold md:text-5xl lg:text-6xl">
		Error: {$page.status}
	</h1>
</div>

<div bind:this={description}>
	<hr />
	<p class="mx-5 text-center md:w-1/2 md:mx-auto xl:w-1/3 2xl:w-1/4">
		{$page.error?.message}
	</p>
	<hr />
</div>
