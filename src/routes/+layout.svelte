<script>
	import "$lib/assets/styles.css";
	import { fly, fade } from "svelte/transition";
	import { quintOut } from "svelte/easing";
	import { afterNavigate, beforeNavigate } from "$app/navigation";
	import { quotes, siteInfo, legal } from "$lib/assets/content.json";
	import { page } from "$app/stores";

	const navLinks = [
		{
			location: "/",
			name: "Home"
		},
		{
			location: "/about",
			name: "About Me"
		},
		{
			location: "/projects",
			name: "Projects"
		}
	];

	//update navbar
	let navbar = {
		title: siteInfo.title,
		image: "/images/siteLogo.svg"
	};
	
	afterNavigate(() => {
		switch($page.route.id){
			default: {
				navbar = {
					title: siteInfo.title,
					image: "/images/siteLogo.svg"
				};

				break;
			}
			case "/about": {
				navbar = {
					title: `About | ${siteInfo.title}`,
					image: "/images/aboutLogo.svg"
				};

				break;
			}
			case "/projects": {
				navbar = {
					title: `Projects | ${siteInfo.title}`,
					image: "/images/projectLogo.svg"
				};

				break;
			}
		}

		if($page.route.id?.includes("/projects/")){
			navbar = {
				title: `Projects | ${siteInfo.title}`,
				image: "/images/projectLogo.svg"
			};
		}
	});

	//functions for menu toggle
	let menuState = false;

	beforeNavigate(() => toggleMenu());

	function toggleMenu() {
		if (menuState) {
			menuState = false;
		}
	}

	//functions to handle quotes
	const quoteNum = Math.floor(Math.random() * quotes.length);
	const quote = quotes[quoteNum];
</script>

<header>
	<nav id="navBar" class="fixed top-0 z-50 w-full">
		<div class="flex flex-wrap bg-gray-300 relative z-50 h-14">
			<ul class="flex place-items-center m-1">
				<li class="inline">
					<img
						src="{navbar.image}"
						alt="Page logo."
						class="bg-white w-8 h-8 mr-1 md:ml-2"
					/>
				</li>
				<li class="inline">
					<h1 class="font-bold text-black text-sm sm:text-xl">
						{navbar.title}
					</h1>
				</li>
			</ul>

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
						class="nav-button block bg-gray-900 absolute h-1 w-8 rounded-sm before:block before:bg-gray-900 before:absolute before:h-1 before:w-8 before:rounded-sm after:block after:bg-gray-900 after:absolute after:h-1 after:w-8 after:rounded-sm"
					/>
				</label>
			</div>
		</div>
		{#if menuState}
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
			{siteInfo.title}
		</h1>
	</div>

	<hr />
	<p class="mx-5 text-justify md:w-1/2 md:mx-auto xl:w-1/3 2xl:w-1/4">
		{siteInfo.description}
	</p>
	<hr />
</header>

<main>
	<slot />
</main>

<footer class="bg-black pb-4">
	<ul class="p-4">
		<li>
			<p class="text-center text-2xl">"{quote.content}"</p>
		</li>
		<li>
			<p class="text-center text-lg">- {quote.author}</p>
		</li>
	</ul>

	<ul class="md:grid md:grid-cols-2 md:gap-4 md:mx-4">
		<li class="grid auto-rows-auto gap-1 m-4">
			<h2 class="text-center text-3xl font-bold">Privacy Policy</h2>
			<p class="text-justify">
				{legal.privacy_policy}
			</p>
		</li>

		<li class="grid auto-rows-auto gap-1 m-4">
			<h2 class="text-center text-3xl font-bold">Copyright</h2>
			<p class="text-justify">
				{legal.copyright}
			</p>
		</li>
	</ul>
</footer>

<style>
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
</style>
