<script lang="ts" setup>
    import { createApp, createVNode, onMounted } from "vue";
    import contentList from "../components/contentList.vue";
    import { getAboutMe } from "../firebase";
    import type { contentListParams, aboutMeObject } from "../types";
    
    const aboutMe = getAboutMe();

    let basicInfo = aboutMe.basicInfo
    let socialMedia = aboutMe.socialMedia as contentListParams;
    let techList:contentListParams[] = [];
    const list = aboutMe.tech;


    for(let i = 0; i < list.length; i = i + 3){
        let row:contentListParams = {
            title: "",
            displayTitle: false,
            displayImages: false,
            entries: []
        };

        for(let j = 0; j < 3; j++){
            if((i + j) >= list.length){
                row.entries.push({
                    title: "Empty",
                    description: "An empty entry. This entry will be filled once I start using more things. It's also so the rows look complete.",
                    image: "",
                    link: "#",
                    target: "_self",
                });
            } else{
                const tech = list[i + j];
                row.entries.push({
                    title: tech.title,
                    description: tech.description,
                    image: "",
                    link: tech.link,
                    target: "_blank"
                });
            }
        }

        techList.push(row);
    }

    const projectListElement = createVNode(
        "div",
        {id: "rendered-list"},
        techList.map(row => {
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
    <div class="basicInfo">
        <img :src="basicInfo.image" alt="Content Block image.">
        <h3>{{basicInfo.title}}</h3>
        <section>
            <p>
                <strong>My name is: </strong>{{basicInfo.name}}.<br>
                <strong>I speak: </strong>{{basicInfo.languages}}.<br>
                <strong>My time zone is: </strong>{{basicInfo.timezone}}.<br>
                <strong>A little bit more about me: </strong><br>
                {{basicInfo.description}}
            </p>
        </section>
    </div>

    <hr>

    <div id="techList">
        <h2>Technology I use</h2>
        <div id="list-mount"></div>
    </div>

	<hr>

    <contentList :params="socialMedia"/>

    <hr>
</main>
</template>

<style scoped>
h2{
    font-size: 30px;
    text-align: center;
    margin-bottom: 15px;
}

.basicInfo{
    display: grid;
    grid-template-columns: 300px 500px;
    grid-template-rows: 50px 250px;
    justify-content: center; 
}

.basicInfo img{
    width: 300px;
    height: 300px;
    grid-column: 1;
    grid-row: 1;
}

.basicInfo h3{
    grid-column: 2;
    grid-row: 1;
    margin: auto 0px;
    text-align: center;
    font-size: 30px;
}

.basicInfo section{
    grid-column: 2;
    grid-row: 2;
}

.basicInfo p{
    margin: 0px 10px;
    font-size: 18px;
    text-align: justify;
}

@media screen and (max-width: 835px) {
    .basicInfo{
        grid-template-columns: 500px;
    }

    .basicInfo h3{
        grid-column: 1;
        grid-row: 1;
    }
    
    .basicInfo section{
        grid-column: 1;
        grid-row: 2;
    }

    .basicInfo img{
        display: none;
    }
}

@media screen and (max-width: 524px) {
    .basicInfo{
        grid-template-columns: 300px;
        grid-template-rows: 50px 450px;
    }

    .basicInfo p{
        text-align: center;
    }
}
</style>