<script lang="ts" setup>
    import contentBlock from "../components/projectContentBlock.vue";
    import projects from "../assets/projects.json";
    import type { projectType } from "../types";

    let favProject:projectType;
    let featProject:projectType;


    //setup
    let list:projectType[] = [];
    for (let i in projects.content) list.push(projects.content[i]);

    favProject = list.find(element => element.share == "big-chungus-bot") as projectType;
    const featProjectNum = Math.floor(Math.random()*list.length);
    featProject = list[featProjectNum] as projectType;
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
        <div class="contentList" id="list">
            <h2>Project List</h2>

            <ul>
                <li><a href="/projects/mp-website">
                    <img src="/images/placeholderV2.png" alt="Project icon.">
                    <section>
                        <h3>MP's Website</h3>
                        <p>My epic personal website that you're viewing right now.</p>
                    </section>
                </a></li>

                <li><a href="/projects/big-chungus-bot">
                    <img src="/images/placeholderV2.png" alt="Project icon.">
                    <section>
                        <h3>Big Chungus Bot</h3>
                        <p>A Big Chungus themed Discord bot. Yep.</p>
                    </section>
                </a></li>

                <li><a>
                    <img src="/images/placeholderV2.png" alt="Placeholder image.">
                    <section>
                        <h3>Empty</h3>
                        <p>An empty entry. There's not much more to it.</p>
                    </section>   
                </a></li>
            </ul>
        </div>
    </div>

    <hr>
    
</main>    
</template>

<style scoped>
    @import "../assets/contentList.css";

    h2{
        font-size: 30px;
        text-align: center;
        margin-bottom: 15px;
    }
</style>