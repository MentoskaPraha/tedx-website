<script lang="ts" setup>
    import contentBlock from "../components/contentBlock.vue";
    import contentList from "../components/contentList.vue";
    import content from "../assets/content.json";
    import type { contentBlockParams, contentListParams } from "../types";

    let favProject:contentBlockParams;
    let featProject:contentBlockParams;


    const list = content.projects;

    favProject = list.find(element => element.share == "big-chungus-bot") as contentBlockParams;
    const featProjectNum = Math.floor(Math.random()*list.length);
    featProject = list[featProjectNum] as contentBlockParams;

    favProject.links = true;
    featProject.links = true;

    let projectsList:contentListParams[] = [];
    projectsList.push(content.projectsList.find(element => element.title == "row1") as contentListParams);
</script>

<template>
<main>
    <div id="favProject">
        <h2>My Favorite Project</h2>
        <contentBlock :params="favProject"/>
    </div>

    <hr>

    <div id="featuredProject">
        <h2>Featured Project</h2>
        <contentBlock :params="featProject"/>
    </div>

    <hr>
    
    <div id="projectsList">
        <h2>Project List</h2>
        <contentList :params="projectsList[0]"/>
    </div>

    <hr>
    
</main>    
</template>

<style scoped>
    h2{
        font-size: 30px;
        text-align: center;
        margin-bottom: 15px;
        text-decoration: underline;
    }
</style>