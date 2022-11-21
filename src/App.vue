<script setup lang="ts">
import { RouterView } from "vue-router";
import headerVue from "./components/header.vue";
import footerVue from "./components/footer.vue";
</script>

<template>
  <headerVue/>
  <RouterView/>
  <footerVue/>
</template>