<script lang="ts">
	import { siteInfo, aboutMe, projects } from "$lib/assets/content.json";
	import type {
		contentListEntry,
		projectObject,
		specificViewEntry
	} from "$lib/assets/types";
	import ContentBlock from "$lib/components/ContentBlock.svelte";
	import ContentList from "$lib/components/ContentList.svelte";
	import SpecificView from "$lib/components/SpecificView.svelte";
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
	const socialMedia: contentListEntry[] = [];
	const techList: contentListEntry[] = [];

	for (let i = 0; i < aboutMe.tech.length; i++) {
		let entry: contentListEntry;

		const tech = aboutMe.tech[i];

		entry = {
			title: tech.title,
			description: tech.description,
			image: tech.image,
			link: tech.link,
			target: "_blank"
		};

		techList.push(entry);
	}

	for (let i = 0; i < aboutMe.socialMedia.length; i++) {
		let entry: contentListEntry;

		const social = aboutMe.socialMedia[i];

		entry = {
			title: social.title,
			description: social.description,
			image: social.image,
			link: social.link,
			target: "_blank"
		};

		socialMedia.push(entry);
	}

	//setup projects section
	let favProject = projects.list.find(
		(element) => element.id == projects.favProject
	) as projectObject;

	let featProject: projectObject;
	do {
		featProject =
			projects.list[Math.floor(Math.random() * projects.list.length)];

		if (featProject.id != projects.favProject) break;
	} while (featProject);

	let projectsList: contentListEntry[] = [];

	for (let i = 0; i < projects.list.length; i++) {
		let entry: contentListEntry;

		const project = projects.list[i];

		entry = {
			title: project.title,
			description: project.description,
			image: project.image,
			link: "none",
			target: "_blank"
		};

		projectsList.push(entry);
	}

	let specificViewList: specificViewEntry[] = [];

	for (let i = 0; i < projects.list.length; i++) {
		let entry: specificViewEntry;

		const project = projects.list[i];

		entry = {
			title: project.title,
			description: project.description,
			image: project.image,
			links: true,
			git: project.git,
			external: project.external
		};

		specificViewList.push(entry);
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

	<ContentList title={"Technology I use"} entries={techList} />

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

	<ContentList title="Project List" entries={projectsList} />

	<hr />

	<SpecificView title="Specific Project View" entries={specificViewList} />
</div>

<hr />
