<script lang="ts" setup>
    import { reactive } from "vue";
    import type {contentListEntry, contentListParams} from "../types"
    
    const props = defineProps(["params"]);
    const params = reactive({
        title: props.params.title,
        displayTitle: props.params.displayTitle,
        image: props.params.image,
        entry1: props.params.entry1 as contentListEntry,
        entry2: props.params.entry2 as contentListEntry,
        entry3: props.params.entry3 as contentListEntry
    }) as contentListParams;

    let titleStyle = "inherit";
    if(!params.displayTitle) titleStyle = "none";
</script>

<template>
<div class="contentList">
    <h3 :style="{display: titleStyle}">{{params.title}}</h3>

    <ul>
        <li><a :href="params.entry1.link" :target="params.entry1.target">
            <img :src="params.entry1.image" alt="Github icon.">
            <section>
                <h4>{{params.entry1.title}}</h4>
                <p>{{params.entry1.description}}</p>
            </section>
        </a></li>

        <li><a :href="params.entry2.link" :target="params.entry2.target">
            <img :src="params.entry2.image" alt="Discord icon.">
            <section>
                <h4>{{params.entry2.title}}</h4>
                <p>{{params.entry2.description}}</p>
            </section>
        </a></li>

        <li><a :href="params.entry3.link" :target="params.entry3.target">
            <img :src="params.entry3.image" alt="Placeholder image.">
            <section>
                <h4>{{params.entry3.title}}</h4>
                <p>{{params.entry3.description}}</p>
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