<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { mainPages } from "../assets/content.json";
</script>

<template>
	<div>
		<h3 class="text-center text-3xl underline mb-4">Main Pages</h3>

		<ul class="mx-4 lg:text-center">
			<li
				class="my-4 lg:my-0 lg:inline-block lg:mx-4"
				v-for="item in mainPages"
				:key="item.title"
			>
				<RouterLink
					class="block w-72 mx-auto border-neutral-700 border-solid border-4 rounded-md hover:opacity-50 transition-opacity"
					:to="item.link"
				>
					<img
						class="h-72 bg-white border-neutral-700 border-solid border-4 mb-3"
						:src="item.image"
						alt="Entry image."
					/>
					<section
						class="p-2 border-neutral-700 border-solid border-4 bg-black text-center"
					>
						<h4 class="mb-1 text-xl font-bold">
							{{ item.title }}
						</h4>
						<p>{{ item.description }}</p>
					</section>
				</RouterLink>
			</li>
		</ul>
	</div>

	<hr />
</template>
