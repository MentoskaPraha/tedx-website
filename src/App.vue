<script setup lang="ts">
import { RouterView } from "vue-router";
import headerVue from "./components/header.vue";
import footerVue from "./components/footer.vue";
</script>

<template>
  <headerVue/>
  <RouterView/>
  <footerVue/>
  <div id="screenSizeError">
    <h1>Can't Access Website</h1>
    <p>
      Your screen is too small for this website.
      Please return on a device with a screen size of
      at least 320px.
    </p>
  </div>
</template>

<style scoped>
  #screenSizeError{
    display: none;
    text-align: center;
  }

  @media screen and (max-width: 319px){
    #screenSizeError{
      display: block;
    }

    header{
      display: none;
    }

    main{
      display: none;
    }

    footer{
      display: none;
    }
  }
</style>