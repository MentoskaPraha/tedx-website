<script lang="ts" setup>
	import { onMounted, reactive, ref, watch } from "vue";
	import { RouterLink, useRouter } from "vue-router";
	import type { headerParams } from "../types";
	import { pageDesc, navLinks } from "../assets/content.json";

	let params = reactive({
		title: "Error",
		description: "Something went wrong wrong. Error code unavailable.",
		image: "/images/siteLogo.svg",
	});

	const route = ref(useRouter().currentRoute);

	watch(route, updateHeader);
	onMounted(updateHeader);

	function updateHeader() {
		const location = route.value.fullPath;

		let page: headerParams = pageDesc.find(
			(element) => element.location == location
		) as headerParams;
		if (page == undefined && location.includes("/projects/")) {
			page = pageDesc.find(
				(element) => element.location == "projects-view"
			) as headerParams;
		}

		params.title = page.title;
		params.description = page.description;
		params.image = page.image;

		if (menuState.show) {
			menuState.showBG = false;
			setTimeout(() => {
				menuState.show = false;
			}, 200);
			menuState.buttonText = "☰";
		}
	}

	//functions for menu toggle
	let menuState = reactive({
		show: false,
		showBG: false,
		buttonText: "☰",
	});

	function toggleMenu() {
		if (!menuState.show) {
			menuState.show = true;
			setTimeout(() => {
				menuState.showBG = true;
			}, 300);
			menuState.buttonText = "×";
		} else {
			menuState.showBG = false;
			setTimeout(() => {
				menuState.show = false;
			}, 100);
			menuState.buttonText = "☰";
		}
	}
</script>

<template>
	<header>
		<nav id="navBar" class="fixed top-0 z-50 w-full">
			<div class="flex flex-wrap bg-gray-300 relative z-50 h-14">
				<ul class="flex place-items-center m-1">
					<li class="inline">
						<img
							:src="params.image"
							alt="Page logo."
							class="bg-white w-8 h-8 mr-1 md:ml-2"
						/>
					</li>
					<li class="inline">
						<h1 class="text-xl font-bold text-black">
							{{ params.title }}
						</h1>
					</li>
				</ul>
				<button
					@click="toggleMenu()"
					class="bg-gray-900 m-2 pb-0.5 w-10 h-10 text-xl rounded hover:opacity-50 transition-opacity ml-auto sm:mr-6"
				>
					{{ menuState.buttonText }}
				</button>
			</div>

			<Transition name="navBar">
				<div
					v-if="menuState.show"
					class="flex flex-wrap place-content-center py-4 bg-gray-600 relative z-40"
				>
					<ul
						class="place-items-center flex justify-center text-white"
					>
						<li
							class="inline"
							v-for="item in navLinks"
							:key="item.name"
						>
							<RouterLink
								:to="item.location"
								class="bg-gray-900 m-1 p-2 rounded hover:opacity-50 transition-opacity"
							>
								{{ item.name }}</RouterLink
							>
						</li>
					</ul>
				</div>
			</Transition>

			<Transition name="navFocuser">
				<button
					@click="toggleMenu()"
					v-if="menuState.showBG"
					class="w-full pt-28 bg-white text-gray-100 opacity-60 h-screen relative z-30 hover:cursor-default"
				>
					This is a hidden message. Pretty cool right?
				</button>
			</Transition>
		</nav>

		<div
			class="mt-14 bg-black bg-[url('/images/banner.webp')] bg-cover bg-no-repeat bg-center"
		>
			<h1
				class="py-20 text-center text-4xl font-bold md:text-5xl lg:text-6xl lg:py-30 xl:py-40"
			>
				{{ params.title }}
			</h1>
		</div>

		<hr />
		<p class="mx-5 text-justify md:w-1/2 md:mx-auto xl:w-1/3 2xl:w-1/4">
			{{ params.description }}
		</p>
		<hr />
	</header>
</template>

<style scoped>
	.navBar-enter-active,
	.navBar-leave-active {
		transition: all 0.3s ease-out;
	}

	.navBar-enter-from,
	.navBar-leave-to {
		transform: translateY(-56px);
		opacity: 0;
	}

	.navFocuser-enter-active,
	.navFocuser-leave-active {
		transition: all 0.2s ease-out;
	}

	.navFocuser-enter-from,
	.navFocuser-leave-to {
		opacity: 0;
	}
</style>
