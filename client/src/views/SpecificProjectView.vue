<script lang="ts" setup>
    //copy link function
    function copyLink(){
        window.alert("Success");
    }
</script>

<template>
<main>
    <div id="pageTitle">
        <h1>Specific Project View</h1>
    </div>

    <hr>
        <p id="pageDescription">
            This is a special view that only show one specific project.
            This feature makes it easy to share projects with other people.
        </p>
    <hr>

    <div id="project">
        <div class="contentBlock">
            <img src="/placeholderV2.png" alt="Project Logo.">
            <h2>Project Title</h2>
            <section>
                <p>
                    Project Desc
                </p>
                <ul class="shareLinkContainer">
                    <li><button class="shareLink" v-on:click="copyLink();"><img src="/placeholderV3.png" alt="Copy link icon."></button></li>
                    <li><a class="shareLink" href="#" target="_blank"><img src="/placeholderV3.png" alt="Copy link icon."></a></li>
                    <li><a class="shareLink" href="#" target="_blank"><img src="/placeholderV3.png" alt="Copy link icon."></a></li>
                </ul>
            </section>
        </div>
    </div>

    <hr>
    
</main>    
</template>

<style scoped>
    @import "../assets/pageTitle.css";
    @import "../assets/contentBlock.css";

    .shareLinkContainer{
        margin: 10px 10px;
        list-style: none;
        text-align: center;
    }

    .shareLinkContainer li{
        display: inline-block;
        border-radius: 50px;
    }

    .shareLink{
        border: 0px;
        background-color: white;
        margin: 0px 10px;
        transition: box-shadow 0.2s ease-in-out;
    }

    .shareLink img{
        width: 50px;
        height: 50px;
        margin-bottom: 0px;
    }

    .shareLink:hover{
        cursor: pointer;
        box-shadow: 3px 2px gray;
    }
</style>