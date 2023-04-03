<script lang="ts" setup>
	import type { contentListEntry } from "$lib/assets/types";
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";

	export let title = "";
	export let displayTitle = true;
	export let displayImages = true;
	export let entries: contentListEntry[] = [];

	//carousel navigation
	let index = 0;
	let width: number;
	let extraLeft = false;
	let extraRight = false;
	let buttons = false;
	let errorLeft = false;
	let errorRight = false;

	onMount(() => {
		if(width >= 1024){
			if(entries.length == 2) {
				index = 1;
				extraLeft = true;
				buttons = false;
				return;
			}
			if(entries.length >= 3) {
				index = 1;
				extraLeft = true;
				extraRight = true;
				if(entries.length > 3) buttons = true;
				return;
			}
		} else{
			extraLeft = false;
			extraRight = false;
			buttons = true;
		}
	});

	function listResize(){
		if(width >= 1024){
			if(entries.length == 2) {
				index = 1;
				extraLeft = true;
				buttons = false;
				return;
			}
			if(entries.length >= 3) {
				if(index == entries.length - 1) index -= 1;
				if(index == 0) index += 1;

				extraLeft = true;
				extraRight = true;
				if(entries.length > 3) buttons = true;
				return;
			}
		} else{
			extraLeft = false;
			extraRight = false;
			buttons = true;
		}
	}

	function nextEntry() {
		let newIndex = index + 1;

		if(width >= 1024){
			if (newIndex + 1 > entries.length - 1) {
				errorRight = true;
				setTimeout(() => {errorRight = false}, 350);
				return;
			}

			index = newIndex;

			return;
		}

		if (newIndex > entries.length - 1){
			errorRight = true;
			setTimeout(() => {errorRight = false}, 350);
			return;
		}

		index = newIndex;
	}

	function prevEntry() {
		let newIndex = index - 1;

		if(width >= 1024){
			if (newIndex - 1 < 0){
				errorLeft = true;
				setTimeout(() => {errorLeft = false}, 350);
				return;
			}

			index = newIndex;

			return;
		}

		if (newIndex < 0){
			errorLeft = true;
			setTimeout(() => {errorLeft = false}, 350);
			return;
		}

		index = newIndex;
	}
</script>

<svelte:window bind:innerWidth={width} on:resize={() => listResize()} />

<div>
	{#if displayTitle}
		<h3 class="text-center text-3xl underline mb-4 font-bold">
			{title}
		</h3>
	{/if}

	<ul
		class="lg:text-center select-none flex justify-center"
		draggable="false"
	>
		{#if extraLeft}
			{#each [entries[index - 1]] as item (index)}
				{#key index}
					<li
						class="my-4 mx-2 inline-block"
						draggable="false"
						in:fade={{ delay: 0, duration: 1000 }}
					>
						{#if item.link != "none"}
							<a
								class="block w-72 border-neutral-700 border-solid border-4 rounded-md hover:opacity-50 transition-opacity"
								href={item.link}
								target={item.target}
								rel="noreferrer"
								draggable="false"
							>
								{#if displayImages}
									<img
										class="h-72 w-72 bg-white border-neutral-700 border-solid border-4 mb-3"
										src={item.image}
										alt="Representation of entry in content list."
										draggable="false"
									/>
								{/if}
								<section
									class="p-2 border-neutral-700 border-solid border-4 bg-black text-center h-32 overflow-hidden"
									draggable="false"
								>
									<h4 class="mb-1 text-xl font-bold">
										{item.title}
									</h4>
									<p class="line-clamp-3">{item.description}</p>
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
									class="p-2 border-neutral-700 border-solid border-4 bg-black text-center h-32 overflow-hidden"
								>
									<h4 class="mb-1 text-xl font-bold">
										{item.title}
									</h4>
									<p class="line-clamp-3">{item.description}</p>
								</section>
							</div>
						{/if}
					</li>
				{/key}
			{/each}
		{/if}

		{#each [entries[index]] as item (index)}
			{#key index}
				<li
					class="my-4 mx-2 inline-block"
					draggable="false"
					in:fade={{ delay: 0, duration: 1000 }}
				>
					{#if item.link != "none"}
						<a
							class="block w-72 border-neutral-700 border-solid border-4 rounded-md hover:opacity-50 transition-opacity"
							href={item.link}
							target={item.target}
							rel="noreferrer"
							draggable="false"
						>
							{#if displayImages}
								<img
									class="h-72 w-72 bg-white border-neutral-700 border-solid border-4 mb-3"
									src={item.image}
									alt="Representation of entry in content list."
									draggable="false"
								/>
							{/if}
							<section
								class="p-2 border-neutral-700 border-solid border-4 bg-black text-center h-32 overflow-hidden"
								draggable="false"
							>
								<h4 class="mb-1 text-xl font-bold">
									{item.title}
								</h4>
								<p class="line-clamp-3">{item.description}</p>
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
								class="p-2 border-neutral-700 border-solid border-4 bg-black text-center h-32 overflow-hidden"
							>
								<h4 class="mb-1 text-xl font-bold">
									{item.title}
								</h4>
								<p class="line-clamp-3">{item.description}</p>
							</section>
						</div>
					{/if}
				</li>
			{/key}
		{/each}

		{#if extraRight}
			{#each [entries[index + 1]] as item (index)}
				{#key index}
					<li
						class="my-4 mx-2 inline-block"
						draggable="false"
						in:fade={{ delay: 0, duration: 1000 }}
					>
						{#if item.link != "none"}
							<a
								class="block w-72 border-neutral-700 border-solid border-4 rounded-md hover:opacity-50 transition-opacity"
								href={item.link}
								target={item.target}
								rel="noreferrer"
								draggable="false"
							>
								{#if displayImages}
									<img
										class="h-72 w-72 bg-white border-neutral-700 border-solid border-4 mb-3"
										src={item.image}
										alt="Representation of entry in content list."
										draggable="false"
									/>
								{/if}
								<section
									class="p-2 border-neutral-700 border-solid border-4 bg-black text-center h-32 overflow-hidden"
									draggable="false"
								>
									<h4 class="mb-1 text-xl font-bold">
										{item.title}
									</h4>
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
									class="p-2 border-neutral-700 border-solid border-4 bg-black text-center h-32 overflow-hidden"
								>
									<h4 class="mb-1 text-xl font-bold">
										{item.title}
									</h4>
									<p>{item.description}</p>
								</section>
							</div>
						{/if}
					</li>
				{/key}
			{/each}
		{/if}
	</ul>

	{#if buttons}
		<div class="flex place-content-center m-4">
			<button
				class="m-4 w-16 h-16 bg-white rounded-full hover:opacity-50 transition-all {errorLeft ? "bg-red-600 hover:opacity-100":""}"
				name="Previous entry."
				on:click={prevEntry}
			>
				<img
					class="w-16 h-16"
					src="/images/arrow-left.svg"
					alt="Left arrow."
				/>
			</button>
			<button
				class="m-4 w-16 h-16 bg-white rounded-full hover:opacity-50 transition-all {errorRight ? "bg-red-600 hover:opacity-100":""}"
				name="Next entry"
				on:click={nextEntry}
			>
				<img
					class="w-16 h-16"
					src="/images/arrow-right.svg"
					alt="Left arrow."
				/>
			</button>
		</div>
	{/if}
</div>
