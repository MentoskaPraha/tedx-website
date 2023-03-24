<script lang="ts" setup>
	import type { contentListEntry } from "$lib/assets/types";

	export let title = "";
	export let displayTitle = true;
	export let displayImages = true;
	export let entries: contentListEntry[] = [];
</script>

<div>
	{#if displayTitle}
		<h3 class="text-center text-3xl underline mb-4 font-bold">
			{title}
		</h3>
	{/if}

	<ul class="mx-4 lg:text-center">
		{#each entries as item}
			<li class="my-4 lg:my-0 lg:inline-block lg:mx-4">
				{#if item.link != "none"}
					<a
						class="block w-72 mx-auto border-neutral-700 border-solid border-4 rounded-md hover:opacity-50 transition-opacity"
						href={item.link}
						target={item.target}
						rel="noreferrer"
					>
						{#if displayImages}
							<img
								class="h-72 w-72 bg-white border-neutral-700 border-solid border-4 mb-3"
								src={item.image}
								alt="Representation of entry in content list."
							/>
						{/if}
						<section
							class="p-2 border-neutral-700 border-solid border-4 bg-black text-center"
						>
							<h4 class="mb-1 text-xl font-bold">{item.title}</h4>
							<p>{item.description}</p>
						</section>
					</a>
				{:else}
					<div
						class="block w-72 mx-auto border-neutral-700 border-solid border-4 rounded-md hover:opacity-50 transition-opacity hover:cursor-pointer"
					>
						{#if displayImages}
							<img
								class="h-72 w-72 bg-white border-neutral-700 border-solid border-4 mb-3"
								src={item.image}
								alt="Representation of entry in content list."
							/>
						{/if}
						<section
							class="p-2 border-neutral-700 border-solid border-4 bg-black text-center"
						>
							<h4 class="mb-1 text-xl font-bold">{item.title}</h4>
							<p>{item.description}</p>
						</section>
					</div>
				{/if}
			</li>
		{/each}
	</ul>
</div>
