<script lang="ts" setup>
	import type { specificViewEntry } from "$lib/assets/types";
	import ContentListEntry from "$lib/components/ContentListEntry.svelte";
	import { fade } from "svelte/transition";
	import ContentBlock from "./ContentBlock.svelte";
	import ContentListButtons from "./ContentListButtons.svelte";

	export let title = "Specific View";
	export let entries: specificViewEntry[] = [];

	//carousel navigation
	let index = 0;
	let width: number;
	let errorLeft = false;
	let errorRight = false;

	function buttonInteraction(event: CustomEvent<{ leftButton: boolean }>) {
		if (!event.detail.leftButton) {
			let newIndex = index + 1;

			if (newIndex > entries.length - 1) {
				errorRight = true;
				setTimeout(() => {
					errorRight = false;
				}, 350);
				return;
			}

			index = newIndex;
			return;
		} else {
			let newIndex = index - 1;

			if (newIndex < 0) {
				errorLeft = true;
				setTimeout(() => {
					errorLeft = false;
				}, 350);
				return;
			}

			index = newIndex;
			return;
		}
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
					<ContentListEntry
						title={item.title}
						description={item.description}
						image={item.image}
					/>
				{/key}
			{/each}

			<ContentListButtons
				{errorLeft}
				{errorRight}
				on:clicked={buttonInteraction}
			/>
		</div>

		<div>
			{#each [entries[index]] as item (index)}
				{#key index}
					<div in:fade={{ delay: 0, duration: 500 }}>
						<ContentBlock
							title={item.title}
							description={item.description}
							image={item.image}
							links={item.links}
							git={item.git}
							external={item.external}
						/>
					</div>
				{/key}
			{/each}
		</div>
	</div>
</div>
