<script lang="ts" setup>
    import projects from "../assets/projects.json";
    import type { projectType } from "../types";

    //function to update project
    function updateProject(project:projectType, section: string) {
        if(document.readyState != "complete") return;

        const image = document.getElementById(section + "-projectImage") as HTMLImageElement;
        const title = document.getElementById(section + "-projectTitle") as HTMLElement;
        const description = document.getElementById(section + "-projectDesc") as HTMLElement;
        const share = document.getElementById(section + "-copyLink") as HTMLAnchorElement;
        const github = document.getElementById(section + "-githubLink") as HTMLAnchorElement;
        const external = document.getElementById(section + "-externalLink") as HTMLAnchorElement;

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
    function copyLink(section: string){
        const share = document.getElementById(section + "-copyLink") as HTMLAnchorElement
        const link = share.dataset.link as string

        navigator.clipboard.writeText(link);
        const toolTip = document.getElementById(section + "-copyLinkToolTip") as HTMLElement;
        toolTip.innerHTML = "Copied!";
        setTimeout(() => toolTip.innerHTML = "Copy link to this project.", 600);
    }

    
    //update project list to have URLs
    function updateProjectList(){
        if(document.readyState != "complete") return;

        const htmlList = document.getElementById("list")?.children as HTMLCollection;
        const linkList: HTMLAnchorElement[] = [];
        for(let i = 0; i < htmlList.length; i++){
            const row = htmlList[i];
            if(row.localName == "h2") continue;

            const entries = row.children;

            for(let i = 0; i < entries.length; i++) linkList.push(entries.item(i)?.children[0] as HTMLAnchorElement);
        }

        for(let i = 0; i < linkList.length; i++) linkList[i].href = window.location.origin + "/projects/" + linkList[i].dataset.link;
    }

    //setup
    let list:projectType[] = [];
    for (let i in projects.content) list.push(projects.content[i]);

    const favProject = list.find(element => element.share == "big-chungus-bot") as projectType;
    const featProjectNum = Math.floor(Math.random()*list.length);
    const featProject = list[featProjectNum];

    document.addEventListener("readystatechange", () => updateProject(favProject, "fav"));
    document.addEventListener("readystatechange", () => updateProject(featProject, "feat"));
    document.addEventListener("readystatechange", updateProjectList);
</script>

<template>
<main>
    <div id="pageTitle">
        <h1>Projects</h1>
    </div>

    <hr>
        <p id="pageDescription">
            Welcome to my Projects page.
            Here you can see all of my projects that I've worked on.
            There's not many I know.
        </p>
    <hr>

    <div id="favProject">
        <h2>My Favorite Project</h2>

        <div class="contentBlock">
            <img id="fav-projectImage" src="/images/placeholderV2.png" alt="Project Logo.">
            <h2 id="fav-projectTitle">Project Title</h2>
            <section>
                <p id="fav-projectDesc">
                    This is the default project description. If you are seeing this something went wrong.
                </p>
                <ul class="shareLinkContainer">
                    <li>
                        <span class="toolTip" id="fav-copyLinkToolTip">Copy link to this project.</span>
                        <a data-link="#" v-on:click="copyLink(`fav`);" class="shareLink" id="fav-copyLink">
                            <img src="/images/placeholderV3.png" alt="Copy link icon.">
                        </a>
                    </li>

                    <li>
                        <span class="toolTip">Link to the Github for this project.</span>
                        <a href="#" target="_blank" class="shareLink" id="fav-githubLink">
                            <img src="/images/placeholderV3.png" alt="Github link icon.">
                        </a>
                    </li>

                    <li>
                        <span class="toolTip">Link to this project's external website.</span>
                        <a href="#" target="_blank" class="shareLink" id="fav-externalLink">
                            <img src="/images/placeholderV3.png" alt="External link icon.">
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    </div>

    <hr>

    <div id="featuredProject">
        <h2>Featured Project</h2>

        <div class="contentBlock">
            <img id="feat-projectImage" src="/images/placeholderV2.png" alt="Project Logo.">
            <h2 id="feat-projectTitle">Project Title</h2>
            <section>
                <p id="feat-projectDesc">
                    This is the default project description. If you are seeing this something went wrong.
                </p>
                <ul class="shareLinkContainer">
                    <li>
                        <span class="toolTip" id="feat-copyLinkToolTip">Copy link to this project.</span>
                        <a data-link="#" v-on:click="copyLink(`feat`);" class="shareLink" id="feat-copyLink">
                            <img src="/images/placeholderV3.png" alt="Copy link icon.">
                        </a>
                    </li>

                    <li>
                        <span class="toolTip">Link to the Github for this project.</span>
                        <a href="#" target="_blank" class="shareLink" id="feat-githubLink">
                            <img src="/images/placeholderV3.png" alt="Github link icon.">
                        </a>
                    </li>

                    <li>
                        <span class="toolTip">Link to this project's external website.</span>
                        <a href="#" target="_blank" class="shareLink" id="feat-externalLink">
                            <img src="/images/placeholderV3.png" alt="External link icon.">
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    </div>

    <hr>
    
    <div id="projectsList">
        <div class="contentList" id="list">
            <h2>Project List</h2>

            <ul>
                <li><a href="#" data-link="mp-website">
                    <img src="/images/placeholderV2.png" alt="Project icon.">
                    <section>
                        <h3>MP's Website</h3>
                        <p>My epic personal website that you're viewing right now.</p>
                    </section>
                </a></li>

                <li><a href="#" data-link="big-chungus-bot">
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
    @import "../assets/pageTitle.css";
    @import "../assets/contentBlock.css";
    @import "../assets/contentList.css";

    h2{
        font-size: 30px;
        text-align: center;
        margin-bottom: 15px;
    }
</style>