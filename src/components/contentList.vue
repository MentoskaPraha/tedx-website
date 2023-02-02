<script lang="ts" setup>
import { reactive } from "vue";
import type { contentListParams } from "../types";

const props = defineProps(["params"]);
const params = reactive({
	title: props.params.title,
	displayTitle: props.params.displayTitle,
	displayImages: props.params.displayImages,
	entries: props.params.entries,
}) as contentListParams;
</script>

<template>
	<div>
		<h3
			class="text-center text-3xl underline mb-4"
			v-if="params.displayTitle"
		>
			{{ params.title }}
		</h3>

		<ul class="mx-4 lg:text-center">
			<li
				class="my-4 lg:my-0 lg:inline-block lg:mx-4"
				v-for="item in params.entries"
				:key="item.title"
			>
				<a
					class="block w-72 mx-auto border-neutral-700 border-solid border-4 rounded-md hover:opacity-50 transition-opacity"
					:href="item.link"
					:target="item.target"
				>
					<img
						class="h-72 w-72 bg-white border-neutral-700 border-solid border-4 mb-3"
						v-if="params.displayImages"
						:src="item.image"
						alt="An image representing this entry."
					/>
					<section
						class="p-2 border-neutral-700 border-solid border-4 bg-black text-center"
					>
						<h4 class="mb-1 text-xl font-bold">{{ item.title }}</h4>
						<p>{{ item.description }}</p>
					</section>
				</a>
			</li>
		</ul>
	</div>
</template>
