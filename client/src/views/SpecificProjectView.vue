<script lang="ts" setup>
    import { computed, watch, type ImgHTMLAttributes } from "vue";
    import { useRoute } from "vue-router";
    import type { projectType } from "../types";
    import projects from "../assets/projects.json";

    //function to update project
    function updateProject(project:projectType | undefined) {
        if(document.readyState != "complete"){
            return;
        }

        if (project == undefined){
            const projectSection = document.getElementById("project") as HTMLElement;
            const notFound = document.getElementById("projectNotFound") as HTMLElement;

            projectSection.style.display = "none";
            notFound.style.display = "block";

            return
        }

        const image = document.getElementById("projectImage") as HTMLImageElement;
        const title = document.getElementById("projectTitle") as HTMLElement;
        const description = document.getElementById("projectDesc") as HTMLElement;
        const share = document.getElementById("copyLink") as HTMLAnchorElement;
        const github = document.getElementById("githubLink") as HTMLAnchorElement;
        const external = document.getElementById("externalLink") as HTMLAnchorElement;

        image.src = project.image;
        title.innerHTML = project.title;
        description.innerHTML = project.description;
        share.dataset.link = window.location.origin + "/projects/" + project.share;

        if(project.git == "none"){
            github.style.display = "none";
        }else{
            github.href = project.git;
        }

        if(project.external == "none"){
            external.style.display = "none";
        }else{
            external.href = project.external;
        }
    }


    //copy link function
    function copyLink(){
        const share = document.getElementById("copyLink") as HTMLAnchorElement
        const link = share.dataset.link as string

        navigator.clipboard.writeText(link);
        const toolTip = document.getElementById("copyLinkToolTip") as HTMLElement;
        toolTip.innerHTML = "Copied!";
        setTimeout(() => toolTip.innerHTML = "Copy link to this project.", 600);
    }


    //update project function
    const route = useRoute();
    const projectId = computed(() => route.params.project as string);

    let list:projectType[] = [];
    for (let i in projects.content) list.push(projects.content[i]);
    const project = list.find(element => element.share == projectId.value);
    document.addEventListener("readystatechange", () => updateProject(project));
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
            <img id="projectImage" src="/images/placeholderV2.png" alt="Project Logo.">
            <h2 id="projectTitle">Project Title</h2>
            <section>
                <p id="projectDesc">
                    This is the default project description. If you are seeing this something went wrong.
                </p>
                <ul class="shareLinkContainer">
                    <li>
                        <span class="toolTip" id="copyLinkToolTip">Copy link to this project.</span>
                        <a data-link="#" v-on:click="copyLink();" class="shareLink" id="copyLink">
                            <img src="/images/placeholderV3.png" alt="Copy link icon.">
                        </a>
                    </li>

                    <li>
                        <span class="toolTip">Link to the Github for this project.</span>
                        <a href="#" target="_blank" class="shareLink" id="githubLink">
                            <img src="/images/placeholderV3.png" alt="Github link icon.">
                        </a>
                    </li>

                    <li>
                        <span class="toolTip">Link to this project's external website.</span>
                        <a href="#" target="_blank" class="shareLink" id="externalLink">
                            <img src="/images/placeholderV3.png" alt="External link icon.">
                        </a>
                    </li>
                </ul>
            </section>
        </div>
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
    @import "../assets/pageTitle.css";
    @import "../assets/contentBlock.css";

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