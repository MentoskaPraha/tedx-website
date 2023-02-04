<script lang="ts" setup>
	import { ref } from "vue";

	let image = ref("/images/comingSoonLogo.svg");

	let XHR = new XMLHttpRequest();

	XHR.onreadystatechange = function () {
		if (XHR.readyState == 4 && XHR.status == 200) {
			image.value = JSON.parse(XHR.responseText).file;
		}
	};
	XHR.open("GET", "https://aws.random.cat/meow");
	XHR.send();
</script>

<template>
	<img
		:src="image"
		alt="Random cat picture."
		class="bg-white mx-auto w-3/4 md:w-1/2"
	/>
</template>
