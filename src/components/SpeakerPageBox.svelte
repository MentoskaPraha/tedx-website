<script lang="ts">
	import { quintOut } from "svelte/easing";
	import { fade } from "svelte/transition";

	let viewMoreState = false;

	export let id = "";
	export let name = "";
	export let about = "";
	export let instagram = "";
	export let other = "";

    $: document.body.classList[viewMoreState ? "add" : "remove"]("scroll-lock");
</script>

<div
	class="shadow-box bg-tedRed rounded w-64 mx-auto sm:mx-0 sm:w-96 p-4 my-6 lg:my-0"
>
	<img
		src="{import.meta.env.BASE_URL}images/speakers/{id}.webp"
		alt="Image of the speaker {name}."
		width="192"
		height="192"
		class="bg-white mx-auto mb-4"
	/>
	<h1 class="text-center font-bold text-2xl underline mb-2">{name}</h1>
	<p class="text-justify line-clamp-2">
		{about}
	</p>
	<br />
	<div class="flex">
		{#if instagram != "none"}
			<a
				href={instagram}
				target="_blank"
				class="bg-white rounded-md p-1 mx-auto shadow"
			>
				<img
					src="{import.meta.env.BASE_URL}images/logos/instagram.svg"
					alt="Icon for external link."
					width="32"
					height="32"
				/>
			</a>
		{/if}

		{#if other != "none"}
			<a
				href={other}
				target="_blank"
				class="bg-white rounded-md pt-0.5 px-0.5 mx-auto shadow"
			>
				<img
					src="{import.meta.env.BASE_URL}images/externalLink.svg"
					alt="Icon for external link."
					width="36"
					height="36"
				/>
			</a>
		{/if}

		<button
			class="underline mx-auto"
			on:click={() => (viewMoreState = true)}>View More</button
		>
	</div>
</div>

{#if viewMoreState}
	<div class="fixed top-0 left-0 flex flex-wrap h-screen w-screen items-center">
		<button
			transition:fade={{ delay: 0, duration: 350, easing: quintOut }}
			on:click={() => (viewMoreState = false)}
			class="pt-28 bg-white text-gray-100 opacity-60 z-30 fixed w-full h-full hover:cursor-default transition-opacity"
		>
			This is a hidden message. Pretty cool right?
		</button>

		<div
			transition:fade={{ delay: 0, duration: 350, easing: quintOut }}
			class="mt-17 bg-tedRed rounded z-40 mx-auto"
		>
			<button
				on:click={() => (viewMoreState = false)}
				class="w-8 h-8 pb-1 absolute m-1 bg-black rounded hover:opacity-50 transition-opacity"
				><div
					class="back-button before:block before:bg-white before:absolute before:h-1 before:w-8 before:rounded-sm after:block after:bg-white after:absolute after:h-1 after:w-8 after:rounded-sm"
				/></button
			>
			<div class="m-4">
				<div
					class="m-4 mx-auto md:grid md:auto-cols-min md:grid-cols-2 md:items-center md:gap-4"
				>
					<img
						src="{import.meta.env
							.BASE_URL}images/speakers/{id}.webp"
						alt="Image of the speaker {name}."
						class="w-48 h-48 md:w-72 md:h-72 mx-auto mb-3 bg-white md:mb-0 md:mx-0 md:ml-auto"
					/>
					<section class="mx-auto w-72 md:w-80 md:mx-0 md:mr-auto">
						<h1 class="text-center text-2xl font-bold underline">
							{name}
						</h1>
						<p class="text-justify">
							{about}
						</p>
						<ul class="m-3 text-center flex">
							{#if instagram != "none"}
								<a
									href={instagram}
									target="_blank"
									class="bg-white rounded-md p-1 mx-auto shadow"
								>
									<img
										src="{import.meta.env
											.BASE_URL}images/logos/instagram.svg"
										alt="Icon for external link."
										width="32"
										height="32"
									/>
								</a>
							{/if}

							{#if other != "none"}
								<a
									href={other}
									target="_blank"
									class="bg-white rounded-md pt-0.5 px-0.5 mx-auto shadow"
								>
									<img
										src="{import.meta.env
											.BASE_URL}images/externalLink.svg"
										alt="Icon for external link."
										width="36"
										height="36"
									/>
								</a>
							{/if}
						</ul>
					</section>
				</div>
			</div>
		</div>
	</div>
{/if}

<style scoped>
	.shadow:hover {
		box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
		transition-property: box-shadow;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 150ms;
	}

	.shadow-box:hover {
		box-shadow: 7px 6px 5px 0px rgba(0, 0, 0, 0.75);
		transition-property: box-shadow;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 150ms;
	}

	.back-button::before {
		content: " ";
		transform: rotate(405deg);
	}

	.back-button {
		background: rgba(255, 255, 255, 0);
	}

	.back-button::after {
		content: " ";
		transform: rotate(-405deg);
	}
</style>
