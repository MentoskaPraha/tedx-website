<script lang="ts" setup>
	import { fly, fade } from "svelte/transition";
	import { quintOut } from "svelte/easing";
	import type { headerParams } from "$lib/assets/types";
	import { navLinks, pageDesc } from "../assets/content.json";
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import { afterNavigate } from "$app/navigation";

	let params = {
		title: "Error",
		description: "Something went wrong wrong. Check below for details.",
		image: "/images/siteLogo.svg"
	};

	onMount(() => updateHeader($page.url));
	afterNavigate(() => updateHeader($page.url));

	function updateHeader(location: URL) {
		let page: headerParams = pageDesc.find(
			(element) => element.location == location.pathname
		) as headerParams;
		if (page == undefined && location.pathname.includes("/projects/")) {
			page = pageDesc.find(
				(element) => element.location == "projects-view"
			) as headerParams;
		}
		if (page == undefined) {
			page = pageDesc.find(
				(element) => element.location == "error"
			) as headerParams;
		}

		params = page;

		if (menuState.show) {
			menuState.show = false;
			menuState.buttonText = "☰";
		}
	}

	//functions for menu toggle
	let menuState = {
		show: false,
		buttonText: "☰"
	};

	function toggleMenu() {
		if (!menuState.show) {
			menuState.show = true;
			menuState.buttonText = "×";
		} else {
			menuState.show = false;
			menuState.buttonText = "☰";
		}
	}
</script>

<header>
	<nav id="navBar" class="fixed top-0 z-50 w-full">
		<div class="flex flex-wrap bg-gray-300 relative z-50 h-14">
			<ul class="flex place-items-center m-1">
				<li class="inline">
					<img
						src={params.image}
						alt="Page logo."
						class="bg-white w-8 h-8 mr-1 md:ml-2"
					/>
				</li>
				<li class="inline">
					<h1 class="text-xl font-bold text-black">
						{params.title}
					</h1>
				</li>
			</ul>
			<button
				on:click={toggleMenu}
				class="bg-gray-900 m-2 pb-0.5 w-10 h-10 text-xl rounded hover:opacity-50 transition-opacity ml-auto sm:mr-6"
			>
				{menuState.buttonText}
			</button>
		</div>
		{#if menuState.show}
			<div
				in:fly={{
					delay: 0,
					duration: 300,
					x: 0,
					y: -56,
					opacity: 0.5,
					easing: quintOut
				}}
				out:fly={{
					delay: 100,
					duration: 300,
					x: 0,
					y: -56,
					opacity: 0.5,
					easing: quintOut
				}}
				class="flex flex-wrap place-content-center py-4 bg-gray-600 relative z-40"
			>
				<ul class="place-items-center flex justify-center text-white">
					{#each navLinks as item}
						<li class="inline">
							<a
								href={item.location}
								class="bg-gray-900 m-1 p-2 rounded hover:opacity-50 transition-opacity"
							>
								{item.name}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<button
				in:fade={{ delay: 100, duration: 150, easing: quintOut }}
				out:fade={{ delay: 0, duration: 150, easing: quintOut }}
				on:click={toggleMenu}
				class="w-full pt-28 bg-white text-gray-100 opacity-60 h-screen relative z-30 hover:cursor-default"
			>
				This is a hidden message. Pretty cool right?
			</button>
		{/if}
	</nav>

	<div
		class="mt-14 bg-black bg-[url('/images/banner.webp')] bg-cover bg-no-repeat bg-center"
	>
		<h1
			class="py-20 text-center text-4xl font-bold md:text-5xl lg:text-6xl lg:py-30 xl:py-40"
		>
			{params.title}
		</h1>
	</div>

	<hr />
	<p class="mx-5 text-justify md:w-1/2 md:mx-auto xl:w-1/3 2xl:w-1/4">
		{params.description}
	</p>
	<hr />
</header>
