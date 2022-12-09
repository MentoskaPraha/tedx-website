<script lang="ts" setup>
    import { computed } from "vue";
    import { useRoute } from "vue-router";
    import contentBlock  from "../components/contentBlock.vue";
    import type { projectType, contentBlockParams } from "../types";
    import content from "../assets/content.json";


    const route = useRoute();
    const projectId = computed(() => route.params.project as string);

    const list = content.projects;
    let project = list.find(element => element.share == projectId.value) as contentBlockParams;
    project.links = true;

    let projectStyle = "inherit";
    let notFoundStyle = "none";
    
    if (project == undefined){
        projectStyle = "none";
        notFoundStyle = "inherit";
    }
</script>

<template>
<main>
    <div id="project" :style="{display: projectStyle}">
        <contentBlock :params="project"/>
    </div>

    <div id="projectNotFound" :style="{display: notFoundStyle}">
        <p>
            The project you are looking for doesn't exist.
            You can see a full list of projects on the project page.
        </p>
    </div>

    <hr>
    
</main>    
</template>

<style scoped>
    #projectNotFound p{
        margin: 10px auto;
        width: 30%;
        text-align: justify;
        font-size: 20px;
    }

    @media screen and (max-width: 661px) {
        #projectNotFound p{
            text-align: center;
        }
    }
</style>