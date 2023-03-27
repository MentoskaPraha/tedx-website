<script lang="ts">
	import { siteInfo, aboutMe, projects } from "$lib/assets/content.json";
	import type { contentListEntry, projectObject } from "$lib/assets/types";
	import ContentBlock from "$lib/components/ContentBlock.svelte";
	import ContentList from "$lib/components/ContentList.svelte";
	import { onMount } from "svelte";

	//set banner height
	let banner: HTMLElement;
	let description: HTMLElement;

	onMount(() => setBannerHeight());

	function setBannerHeight() {
		const height = window.innerHeight - 56 - description.clientHeight - 32;
		banner.style.height = `${height}px`;
	}

	//setup about section
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

	//setup projects section
	let favProject = projects.list.find(
		(element) => element.id == projects.favProject
	) as projectObject;

	let featProject = projects.list.find(
		(element) => element.id == "mp-website"
	) as projectObject;
	featProject =
		projects.list[Math.floor(Math.random() * projects.list.length)];

	let projectsList: contentListEntry[][] = [];

	for (let i = 0; i < projects.list.length; i = i + 3) {
		let row: contentListEntry[] = [];

		for (let j = 0; j < 3; j++) {
			if (i + j >= projects.list.length) {
				row.push({
					title: "Empty",
					description: "An empty entry. There's not much more to it.",
					image: "/images/comingSoonLogo.svg",
					link: "none",
					target: "_self"
				});
			} else {
				const project = projects.list[i + j];
				row.push({
					title: project.title,
					description: "Placeholder description, for now.",
					image: project.image,
					link:
						project.id == "none"
							? "none"
							: "/projects/" + project.id,
					target: "_self"
				});
			}
		}
		projectsList.push(row);
	}
</script>

<svelte:window on:resize={setBannerHeight} />

<div id="home">
	<div
		bind:this={banner}
		class="mt-14 bg-black bg-[url('/images/banner.webp')] bg-cover bg-no-repeat bg-center flex justify-center items-center"
	>
		<h1
			class="text-center text-4xl font-bold md:text-5xl lg:text-6xl lg:py-30 xl:py-40"
		>
			{siteInfo.title}
		</h1>
	</div>

	<div bind:this={description}>
		<hr />
		<p class="mx-5 text-justify md:w-1/2 md:mx-auto xl:w-1/3 2xl:w-1/4">
			{siteInfo.description}
		</p>
		<hr id="/about" />
	</div>
</div>

<div id="about">
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
</div>

<div id="projects">
	<hr id="/projects" />

	<div>
		<h2 class="text-center underline text-3xl font-bold mb-4">
			My Favorite Project
		</h2>
		<ContentBlock
			title={favProject.title}
			description={favProject.description}
			image={favProject.image}
			links={true}
			git={favProject.git}
			external={favProject.external}
		/>
	</div>

	<hr />

	<div>
		<h2 class="text-center underline text-3xl font-bold mb-4">
			Random Project
		</h2>
		<ContentBlock
			title={featProject.title}
			description={featProject.description}
			image={featProject.image}
			links={true}
			git={featProject.git}
			external={featProject.external}
		/>
	</div>

	<hr />

	<div>
		<h2 class="text-center underline text-3xl font-bold mb-4">
			Project List
		</h2>
		<ul>
			{#each projectsList as item}
				<li class="my-4">
					<ContentList entries={item} displayTitle={false} />
				</li>
			{/each}
		</ul>
	</div>
</div>
