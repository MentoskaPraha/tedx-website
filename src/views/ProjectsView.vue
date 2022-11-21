<script lang="ts" setup>
    import { RouterView } from 'vue-router';
</script>

<template>
<main>
    <div id="pageTitle">
        <h1>Projects</h1>
    </div>

    <hr>
        <p id="pageDescription">
            Welcome to my Projects page.
            Here you can see all of my projects that I've worked on.
            There's not many I know.
        </p>
    <hr>
    
    <RouterView/>
    
</main>    
</template>

<style scoped>
    @import "../assets/pageTitle.css";
</style>