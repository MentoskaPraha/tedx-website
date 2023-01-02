<script lang="ts" setup>
    import { computed } from "vue";
    import { useRoute } from "vue-router";
    import contentBlock  from "../components/contentBlock.vue";
    import type { contentBlockParams } from "../types";
    import { getProjects } from "../firebase";


    const route = useRoute();
    const projectId = computed(() => route.params.project as string);

    const list = getProjects();
    let project = list.find(element => element.share == projectId.value) as unknown as contentBlockParams;

    let projectStyle = "inherit";
    let notFoundStyle = "none";
    
    if (project == undefined){
        projectStyle = "none";
        notFoundStyle = "inherit";
        project = list[0] as unknown as contentBlockParams;
    }else{
        project.links = true;
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