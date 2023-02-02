<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./components/headerComponent.vue";
import Footer from "./components/footerComponent.vue";
</script>

<template>
	<Header />
	<main>
		<RouterView />
	</main>
	<Footer />
</template>
