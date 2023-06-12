<script lang="ts">
	import { fly, fade } from "svelte/transition";
	import { quintOut } from "svelte/easing";
	import { about } from "../content.json";

	const navLinks = [
		{
			location: `${import.meta.env.BASE_URL}`,
			name: "Home"
		},
		{
			location: `${import.meta.env.BASE_URL}about`,
			name: "About"
		},
		{
			location: `${import.meta.env.BASE_URL}speakers`,
			name: "Speakers"
		}
	];

	//functions for menu toggle
	let menuState = false;
	$: document.body.classList[menuState ? "add" : "remove"]("scroll-lock");
</script>

<nav class="fixed top-0 z-50 w-screen">
	<div class="flex flex-wrap bg-black relative z-50 h-17">
		<img
			src="{import.meta.env.BASE_URL}images/siteLogo.svg"
			alt="Page logo."
			width="200"
			height="68"
			draggable="false"
			class="bg-black mr-1 md:ml-2"
		/>

		<div class="flex place-items-center ml-auto mr-3 sm:mr-6">
			<input
				id="nav-toggle"
				class="hidden"
				type="checkbox"
				bind:checked={menuState}
			/>
			<label
				class="nav-button-container w-8 h-5 inline-block cursor-pointer"
				for="nav-toggle"
			>
				<div
					class="nav-button block bg-gray-100 absolute h-1 w-8 rounded-sm before:block before:bg-gray-100 before:absolute before:h-1 before:w-8 before:rounded-sm after:block after:bg-gray-100 after:absolute after:h-1 after:w-8 after:rounded-sm"
				/>
			</label>
		</div>
	</div>
	{#if menuState}
		<div class="flex flex-wrap h-screen w-screen">
			<button
				in:fade={{ delay: 0, duration: 150, easing: quintOut }}
				out:fade={{
					delay: 150 + 50 * navLinks.length,
					duration: 150,
					easing: quintOut
				}}
				on:click={() => (menuState = false)}
				class="pt-28 bg-white text-gray-100 opacity-60 z-50 fixed w-full h-full hover:cursor-default transition-opacity"
			>
				This is a hidden message. Pretty cool right?
			</button>
			<div
				in:fly={{
					delay: 0,
					duration: 300,
					x: 224,
					y: 0,
					opacity: 0,
					easing: quintOut
				}}
				out:fly={{
					delay: 150 + 50 * navLinks.length,
					duration: 300,
					x: 224,
					y: 0,
					opacity: 0,
					easing: quintOut
				}}
				class="bg-tedRed z-50 ml-auto"
			>
				<ul>
					{#each navLinks as item, index}
						<li class="block">
							<a
								transition:fly={{
									delay: 150 + 50 * index,
									duration: 300,
									x: 56,
									y: 0,
									opacity: 0,
									easing: quintOut
								}}
								href={item.location}
								class="navLinkContainer inline-block pr-8 m-2 w-full"
							>
								<p
									class="navLink inline-block relative text-white font-bold text-lg xl:text-3xl 2xl:text-4xl after:absolute after:w-full after:bottom-0 after:left-0 after:bg-white after:h-1 after:rounded"
								>
									{item.name}
								</p>
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	{/if}

	<div
		title="Social media."
		class="fixed top-3/4 w-36 bg-white z-50 shadow-2xl rounded-r"
		id="social-media"
	>
		<div class="flex m-2">
			<h1 class="font-bold text-tedRed">Follow Us:</h1>
			<a
				class="ml-4"
				href={about.instagram}
				target="_blank"
				rel="noopener noreferrer"
				><img
					src="{import.meta.env.BASE_URL}images/logos/instagram.svg"
					alt="Instagram Icon"
					width="25"
					height="25"
				/></a
			>
		</div>
	</div>
</nav>

<style scoped>
	#social-media{
		left: -135px;
		transition: left;
		transition-duration: 0.25s;
	}

	#social-media:focus{
		left: 0px;
	}

	#social-media:hover{
		left: 0px;
	}

	.nav-button,
	.nav-button::before,
	.nav-button::after {
		transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
		border-radius: 2px;
	}

	.nav-button::before {
		content: " ";
		margin-top: -8px;
	}

	.nav-button {
		margin-top: 8px;
	}

	.nav-button::after {
		content: " ";
		margin-top: 8px;
	}

	#nav-toggle:checked + .nav-button-container .nav-button::before {
		margin-top: 0px;
		transform: rotate(405deg);
	}

	#nav-toggle:checked + .nav-button-container .nav-button {
		background: rgba(255, 255, 255, 0);
	}

	#nav-toggle:checked + .nav-button-container .nav-button::after {
		margin-top: 0px;
		transform: rotate(-405deg);
	}

	.navLink::after {
		content: "";
		transform: scaleX(0);
		transform-origin: bottom right;
		transition: transform 0.25s ease-out;
	}

	.navLinkContainer:hover .navLink::after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}
</style>
