<script lang="ts" setup>
    import { reactive } from "vue";
    import type {contentBlockParams} from "../types";
    
    const props = defineProps(["params"]);
    const params = reactive({
        title: props.params.title,
        description: props.params.description,
        image: props.params.image,
        links: props.params.links,
        share: props.params.share,
        git: props.params.git,
        external: props.params.external
    }) as contentBlockParams;

    let linksStyle = "inherit";
    let gitStyle = "inline-block";
    let externalStyle = "inline-block";

    if(params.git == "none") gitStyle = "none";
    if(params.external == "none") externalStyle = "none";
    if(!params.links) linksStyle = "none";


    function copyLink(){
        const link = window.location.origin + "/projects/" + params.share

        navigator.clipboard.writeText(link);
        const toolTip = document.getElementById("copyLinkToolTip") as HTMLElement;
        toolTip.innerHTML = "Copied!";
        setTimeout(() => toolTip.innerHTML = "Copy link to this project.", 600);
    }
</script>

<template>
<div class="contentBlock">
    <img :src="params.image" alt="Content Block image.">
    <h3>{{params.title}}</h3>
    <section>
        <p> {{params.description}} </p>
        <ul class="shareLinkContainer" :style="{display: linksStyle}">
            <li>
                <span class="toolTip" id="copyLinkToolTip">Copy link to this project.</span>
                <a v-on:click="copyLink();" class="shareLink">
                    <img src="/images/placeholderV3.png" alt="Copy link icon.">
                </a>
            </li>

            <li :style="{display: gitStyle}">
                <span class="toolTip">Link to the Github for this project.</span>
                <a :href="params.git" target="_blank" class="shareLink" >
                    <img src="/images/placeholderV3.png" alt="Github link icon.">
                </a>
            </li>

            <li :style="{display: externalStyle}">
                <span class="toolTip">Link to this project's external website.</span>
                <a :href="params.external" target="_blank" class="shareLink">
                    <img src="/images/placeholderV3.png" alt="External link icon.">
                </a>
            </li>
        </ul>
    </section>
</div>  
</template>

<style scoped>
.contentBlock{
    display: grid;
    grid-template-columns: 300px 500px;
    grid-template-rows: 50px 250px;
    justify-content: center; 
}

.contentBlock img{
    width: 300px;
    height: 300px;
    grid-column: 1;
    grid-row: 1;
}

.contentBlock h3{
    grid-column: 2;
    grid-row: 1;
    margin: auto 0px;
    text-align: center;
    font-size: 30px;
}

.contentBlock section{
    grid-column: 2;
    grid-row: 2;
}

.contentBlock p{
    margin: 0px 10px;
    font-size: 18px;
    text-align: justify;
}

@media screen and (max-width: 835px) {
    .contentBlock{
        grid-template-columns: 500px;
    }

    .contentBlock h3{
        grid-column: 1;
        grid-row: 1;
    }
    
    .contentBlock section{
        grid-column: 1;
        grid-row: 2;
    }

    .contentBlock img{
        display: none;
    }
}

@media screen and (max-width: 524px) {
    .contentBlock{
        grid-template-columns: 300px;
        grid-template-rows: 50px 450px;
    }

    .contentBlock p{
        text-align: center;
    }
}

.shareLinkContainer{
    margin: 10px 10px;
    list-style: none;
    text-align: center;
}

.shareLink{
    border: 0px;
    background-color: white;
}

.shareLink img{
    width: 50px;
    height: 50px;
    margin-bottom: 0px;
    display: inline-block;
    border: 3px solid black;
    border-radius: 200px;
    transition: box-shadow 0.2s ease-in-out;
}

.shareLink img:hover{
    cursor: pointer;
    box-shadow: 3px 3px gray;
}

.shareLinkContainer li{
    position: relative;
    display: inline-block;
    border-radius: 100px;
    margin: 0px 10px;
}
  
.shareLinkContainer li .toolTip {
    visibility: hidden;
    width: 140px;
    background-color: black;
    color: white;
    text-align: center;
    border-radius: 6px;
    padding: 5px;
    position: absolute;
    bottom: 110%;
    left: 50%;
    margin-left: -75px;
    opacity: 0;
    transition: opacity 0.3s;
}
  
.shareLinkContainer li .toolTip::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
}
  
.shareLinkContainer li:hover .toolTip {
    visibility: visible;
    opacity: 1;
}
</style>