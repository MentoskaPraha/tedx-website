<script lang="ts" setup>
	import { reactive, ref, watch } from "vue";
	import type { contentBlockParams } from "../types";

	const props = defineProps(["params"]);
	const params = reactive({
		title: props.params.title,
		description: props.params.description,
		image: props.params.image,
		links: props.params.links,
		share: props.params.share,
		git: props.params.git,
		external: props.params.external
	}) as contentBlockParams;

	//update props
	watch(props, () => {
		params.title = props.params.title;
		params.description = props.params.description;
		params.image = props.params.image;
		params.links = props.params.links;
		params.share = props.params.share;
		params.git = props.params.git;
		params.external = props.params.external
	});

	//copy link tooltip
	const toolTipText = ref("Copy link to this project.");

	function copyLink() {
		const link = window.location.origin + "/projects/" + params.share;

		navigator.clipboard.writeText(link);
		toolTipText.value = "Copied!";
		setTimeout(() => (toolTipText.value = "Copy link to this project."), 600);
	}

	console.log(params);
</script>

<template>
	<div
		class="m-4 mx-auto md:grid md:auto-cols-min md:grid-cols-2 md:items-center md:gap-4"
	>
		<img
			:src="params.image"
			alt="Content Block image."
			class="w-72 h-72 mx-auto mb-3 bg-white md:mb-0 md:mx-0 md:ml-auto"
		/>
		<section class="mx-auto w-72 md:w-80 md:mx-0 md:mr-auto">
			<h3 class="text-center text-2xl font-bold underline">
				{{ params.title }}
			</h3>
			<p class="text-justify" v-html="params.description"></p>

			<ul class="m-3 text-center" v-if="params.links">
				<li class="inline-block relative rounded-full mx-2">
					<a
						v-on:click="copyLink()"
						class="toolTip hover:cursor-pointer inline-block rounded-full bg-black"
					>
						<span
							class="toolTipText w-40 bg-black text-white absolute bottom-full left-1/2 -ml-20 mb-3 rounded-lg transition-opacity after:absolute after:top-full after:left-1/2 after:border-solid after:border-8 after:-ml-2"
							>{{ toolTipText }}</span
						>
						<img
							class="w-14 h-14 hover:opacity-50 transition-opacity border-white border-4 rounded-full"
							src="/images/shareLink.svg"
							alt="Copy link icon."
						/>
					</a>
				</li>

				<li
					class="inline-block relative rounded-full mx-2"
					v-if="params.git != `none`"
				>
					<a
						:href="params.git"
						target="_blank"
						class="toolTip hover:cursor-pointer inline-block rounded-full bg-black"
					>
						<span
							class="toolTipText w-40 bg-black text-white absolute bottom-full left-1/2 -ml-20 mb-3 rounded-lg transition-opacity after:absolute after:top-full after:left-1/2 after:border-solid after:border-8 after:-ml-2"
							>Link to the project's Github page.</span
						>
						<img
							class="w-14 h-14 hover:opacity-50 transition-opacity border-white border-4 rounded-full bg-white"
							src="/images/github-mark.svg"
							alt="Copy link icon."
						/>
					</a>
				</li>

				<li
					class="inline-block relative rounded-full mx-2"
					v-if="params.external != `none`"
				>
					<a
						:href="params.external"
						target="_blank"
						class="toolTip hover:cursor-pointer inline-block rounded-full bg-black"
					>
						<span
							class="toolTipText w-40 bg-black text-white absolute bottom-full left-1/2 -ml-20 mb-3 rounded-lg transition-opacity after:absolute after:top-full after:left-1/2 after:border-solid after:border-8 after:-ml-2"
							>Link to the project's external website.</span
						>
						<img
							class="w-14 h-14 hover:opacity-50 transition-opacity border-white border-4 rounded-full bg-white"
							src="/images/externalLink.svg"
							alt="Copy link icon."
						/>
					</a>
				</li>
			</ul>
		</section>
	</div>
</template>

<style scoped>
	.toolTipText {
		visibility: hidden;
		opacity: 0;
	}

	.toolTipText::after {
		content: " ";
		border-color: black transparent transparent transparent;
	}

	.toolTip:hover .toolTipText {
		visibility: visible;
		opacity: 1;
	}
</style>
