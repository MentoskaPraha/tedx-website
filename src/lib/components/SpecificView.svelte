<script lang="ts" setup>
	import type { specificViewEntry } from "$lib/assets/types";
	import { fade } from "svelte/transition";

	export let title = "Specific View";
	export let entries: specificViewEntry[] = [];

	//carousel navigation
	let index = 0;
	let width: number;
	let errorLeft = false;
	let errorRight = false;

	function nextEntry() {
		let newIndex = index + 1;

		if (newIndex > entries.length - 1) {
			errorRight = true;
			setTimeout(() => {
				errorRight = false;
			}, 350);
			return;
		}

		index = newIndex;
	}

	function prevEntry() {
		let newIndex = index - 1;

		if (newIndex < 0) {
			errorLeft = true;
			setTimeout(() => {
				errorLeft = false;
			}, 350);
			return;
		}

		index = newIndex;
	}
</script>

<svelte:window bind:innerWidth={width} />
<div>
	<h2 class="text-center text-3xl underline mb-4 font-bold">
		{title}
	</h2>
	<div class="lg:flex lg:place-content-center">
		<div class="mx-4 lg:w-72">
			{#each [entries[index]] as item (index)}
				{#key index}
					<div
						class="hidden lg:inline-block"
						draggable="false"
						in:fade={{ delay: 0, duration: 500 }}
					>
						<div
							class="block w-72 mx-auto border-neutral-700 border-solid border-4 rounded-md"
						>
							<img
								class="h-72 w-72 bg-white border-neutral-700 border-solid border-4 mb-3"
								src={item.image}
								alt="Representation of entry in content list."
							/>
							<section
								class="p-2 border-neutral-700 border-solid border-4 bg-black text-center h-32 overflow-hidden"
							>
								<h4 class="mb-1 text-xl font-bold">
									{item.title}
								</h4>
								<p class="line-clamp-3">{item.description}</p>
							</section>
						</div>
					</div>
				{/key}
			{/each}

			<div class="flex place-content-center m-4">
				<button
					class="m-4 w-16 h-16 bg-white rounded-full hover:opacity-50 transition-all"
					name="Previous entry."
					on:click={prevEntry}
				>
					<img
						class="w-16 h-16 rounded-full {errorLeft
							? 'bg-red-600'
							: ''}"
						src="/images/arrow-left.svg"
						alt="Left arrow."
					/>
				</button>
				<button
					class="m-4 w-16 h-16 bg-white rounded-full hover:opacity-50 transition-all"
					name="Next entry"
					on:click={nextEntry}
				>
					<img
						class="w-16 h-16 rounded-full {errorRight
							? 'bg-red-600'
							: ''}"
						src="/images/arrow-right.svg"
						alt="Left arrow."
					/>
				</button>
			</div>
		</div>

		<div>
			{#each [entries[index]] as item (index)}
				{#key index}
					<div
						class="m-4 mx-auto md:grid md:auto-cols-min md:grid-cols-2 md:items-center md:gap-4"
						in:fade={{ delay: 0, duration: 500 }}
					>
						<img
							src={item.image}
							alt="Represents the content displayed in this content block."
							class="w-72 h-72 mx-auto mb-3 bg-white md:mb-0 md:mx-0 md:ml-auto"
						/>
						<section
							class="mx-auto w-72 md:w-80 md:mx-0 md:mr-auto"
						>
							<h3
								class="text-center text-2xl font-bold underline"
							>
								{item.title}
							</h3>
							<p class="text-justify">
								{@html item.description}
							</p>
							{#if item.links}
								<ul class="m-3 text-center">
									{#if item.git != "none"}
										<li
											class="inline-block relative rounded-full mx-2"
										>
											<a
												href={item.git}
												target="_blank"
												rel="noreferrer"
												class="toolTip hover:cursor-pointer inline-block rounded-full bg-black"
											>
												<span
													class="toolTipText w-40 bg-white text-black absolute bottom-full left-1/2 -ml-20 mb-3 rounded-lg transition-opacity after:absolute after:top-full after:left-1/2 after:border-solid after:border-8 after:-ml-2"
													>Link to the project's
													Github page.</span
												>
												<img
													class="w-14 h-14 hover:opacity-50 transition-opacity border-white border-4 rounded-full bg-white"
													src="/images/logos/github-mark.svg"
													alt="Copy link icon."
												/>
											</a>
										</li>
									{/if}

									{#if item.external != "none"}
										<li
											class="inline-block relative rounded-full mx-2"
										>
											<a
												href={item.external}
												target="_blank"
												rel="noreferrer"
												class="toolTip hover:cursor-pointer inline-block rounded-full bg-black"
											>
												<span
													class="toolTipText w-40 bg-white text-black absolute bottom-full left-1/2 -ml-20 mb-3 rounded-lg transition-opacity after:absolute after:top-full after:left-1/2 after:border-solid after:border-8 after:-ml-2"
													>Link to the project's
													external website.</span
												>
												<img
													class="w-14 h-14 hover:opacity-50 transition-opacity border-white border-4 rounded-full bg-white"
													src="/images/externalLink.svg"
													alt="Copy link icon."
												/>
											</a>
										</li>
									{/if}
								</ul>
							{/if}
						</section>
					</div>
				{/key}
			{/each}
		</div>
	</div>
</div>

<style scoped>
	.toolTipText {
		visibility: hidden;
		opacity: 0;
	}

	.toolTipText::after {
		content: " ";
		border-color: white transparent transparent transparent;
	}

	.toolTip:hover .toolTipText {
		visibility: visible;
		opacity: 1;
	}
</style>
