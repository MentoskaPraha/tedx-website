<script lang="ts" setup>
    import { computed, onMounted } from "vue";
    import { useRoute } from "vue-router";
    import contentBlock  from "../components/projectContentBlock.vue";
    import type { projectType } from "../types";
    import projects from "../assets/projects.json";


    const route = useRoute();
    const projectId = computed(() => route.params.project as string);

    let list:projectType[] = [];
    for (let i in projects.content) list.push(projects.content[i]);
    let project = list.find(element => element.share == projectId.value);

    const contentBlockParams = {
        title: project?.title,
        description: project?.description,
        image: project?.image,
        links: true,
        share: project?.share,
        git: project?.git,
        external: project?.external
    };


    function onload(){
        if (project == undefined){
            const projectSection = document.getElementById("project") as HTMLElement;
            const notFound = document.getElementById("projectNotFound") as HTMLElement;

            projectSection.style.display = "none";
            notFound.style.display = "block";
        }
    }
    onMounted(onload);
</script>

<template>
<main>
    <div id="project">
        <contentBlock :params="contentBlockParams"/>
    </div>

    <div id="projectNotFound">
        <p>
            The project you are looking for doesn't exist.
            You can see a full list of projects on the project page.
        </p>
    </div>

    <hr>
    
</main>    
</template>

<style scoped>
    #projectNotFound{
        display: none;
    }

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