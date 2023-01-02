<script lang="ts" setup>
    import { createApp, createVNode, onMounted } from "vue";
    import contentBlock from "../components/contentBlock.vue";
    import contentList from "../components/contentList.vue";
    import { getProjects } from "../firebase";
    import type { contentBlockParams, contentListParams, projectObject } from "../types";


    let favProject:contentBlockParams;
    let featProject:contentBlockParams;
    let projectsList:contentListParams[] = [];
    const list = getProjects();


    favProject = list.find(element => element.share == "big-chungus-bot") as unknown as contentBlockParams;
    favProject.links = true;

    const featProjectNum = Math.floor(Math.random()*list.length);
    featProject = list[featProjectNum] as unknown as contentBlockParams;
    featProject.links = true;


    for(let i = 0; i < list.length; i = i + 3){
        let row:contentListParams = {
            title: "",
            displayTitle: false,
            displayImages: true,
            entries: []
        };

        for(let j = 0; j < 3; j++){
            if((i + j) >= list.length){
                row.entries.push({
                    title: "Empty",
                    description: "An empty entry. There's not much more to it.",
                    image: "/images/comingSoonLogo.svg",
                    link: "#",
                    target: "_self",
                });
            } else{
                const project = list[i + j];
                row.entries.push({
                    title: project.title,
                    description: project.shortDesc,
                    image: project.image,
                    link: "/projects/" + project.share,
                    target: "_self"
                });
            }
        }

        projectsList.push(row);
    }

    const projectListElement = createVNode(
        "div",
        {id: "rendered-list"},
        projectsList.map(row => {
            return createVNode(
                contentList,
                {params: row}
            );
        })
    );
    
    const projectListApp = createApp(projectListElement);
    
    onMounted(() => {
        try {
            projectListApp.mount("#list-mount");
        } catch (error) {
            //nothing will happen lol
        }
    });
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
        <div id="list-mount"></div>
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