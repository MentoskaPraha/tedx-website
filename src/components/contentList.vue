<script lang="ts" setup>
    import { reactive } from "vue";
    import type { contentListParams } from "../types"
    

    const props = defineProps(["params"]);
    const params = reactive({
        title: props.params.title,
        displayTitle: props.params.displayTitle,
        entries: props.params.entries
    }) as contentListParams;
    

    let titleStyle = "inherit";
    if(!params.displayTitle) titleStyle = "none";
</script>

<template>
<div class="contentList">
    <h3 :style="{display: titleStyle}">{{params.title}}</h3>

    <ul>
        <li><a :href="params.entries[0].link" :target="params.entries[0].target">
            <img :src="params.entries[0].image" alt="Github icon.">
            <section>
                <h4>{{params.entries[0].title}}</h4>
                <p>{{params.entries[0].description}}</p>
            </section>
        </a></li>

        <li><a :href="params.entries[1].link" :target="params.entries[1].target">
            <img :src="params.entries[1].image" alt="Discord icon.">
            <section>
                <h4>{{params.entries[1].title}}</h4>
                <p>{{params.entries[1].description}}</p>
            </section>
        </a></li>

        <li><a :href="params.entries[2].link" :target="params.entries[2].target">
            <img :src="params.entries[2].image" alt="Placeholder image.">
            <section>
                <h4>{{params.entries[2].title}}</h4>
                <p>{{params.entries[2].description}}</p>
            </section>   
        </a></li>
    </ul>
</div>
</template>

<style scoped>
.contentList h3{
    font-size: 30px;
    text-align: center;
    margin-bottom: 10px;
}

.contentList ul{
    list-style: none;
    text-align: center;
}

.contentList li{
    display: inline-block;
}

.contentList a{
    margin: 10px;
    width: 310px;
    display: inline-block;
    border: 5px solid black;
    border-radius: 5px;
    color: black;
    text-decoration: none;
    transition: box-shadow 0.2s ease-in-out;
}

.contentList img{
    width: 300px;
    height: 300px;
    border: 5px solid black;
}

.contentList section{
    margin-top: 5px;
    padding: 10px;
    border: 5px solid black;
}

.contentList h4{
    margin-bottom: 5px;
    font-size: 25px;
}

.contentList p{
    text-align: justify;
    font-size: 20px;
}

.contentList a:hover{
    box-shadow: 10px 10px gray;
}

@media screen and (max-width: 1028px) {
    .contentList li{
        display: block;
    }
}

@media screen and (max-width: 349px) {
    .contentList img{
        width: 200px;
        height: 200px;
    }

    .contentList a{
        width: 210px;
    }

    .contentList p{
        text-align: center;
    }
}
</style>