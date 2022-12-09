<script lang="ts" setup>
    import contentBlock from "../components/contentBlock.vue";
    import contentList from "../components/contentList.vue";
    import content from "../assets/content.json";

    let basicInfo = content.aboutMe.find(element => element.title == "Basic Information");
    let contact = content.aboutMe.find(element => element.title == "Social Media");
</script>

<template>
<main>
    <contentBlock :params="basicInfo"/>

	<hr>

    <contentList :params="contact"/>

    <hr>
</main>
</template>