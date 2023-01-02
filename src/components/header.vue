<script lang="ts" setup>
    import { onMounted, reactive } from "vue";
    import type { headerParams } from "../types";


    const pageDesc = [
        {
            "location": "/",
            "title": "MP's Official Website",
            "description": "Welcome to my website, here you can see all the projects I've worked on, some information about me, how to contact me and my blog in which I post updates about my projects. Enjoy your stay!",
            "image": "/images/siteLogo.svg"
        },
        {
            "location": "/home",
            "title": "MP's Official Website",
            "description": "Welcome to my website, here you can see all the projects I've worked on, some information about me, how to contact me and my blog in which I post updates about my projects. Enjoy your stay!",
            "image": "/images/siteLogo.svg"
        },
        {
            "location": "/about-me",
            "title": "About Me",
            "description": "Here you can see all the information about me and my contact information.",
            "image": "/images/aboutMeLogo.svg"
        },
        {
            "location": "/projects",
            "title": "Projects",
            "description": "Here you can see all the projects I've worked on including my favourite one.",
            "image": "/images/projectLogo.svg"
        },
        {
            "location":"projects-view" ,
            "title": "Specific Project View",
            "description": "Here you can see a specific project and only that project.",
            "image": "/images/projectLogo.svg"
        },
        {
            "location": "/blog",
            "title": "Coming Soon!",
            "description": "The blog feature is not yet finished.",
            "image": "/images/comingSoonLogo.svg"
        },
        {
            "location": "/error_404",
            "title": "Error 404",
            "description": "The page you're looking for was not found.",
            "image": "/images/siteLogo.svg"
        }
    ];


    let params = reactive({
        title: "Error 404",
        description: "The page you're looking for was not found.",
        image: "/images/siteLogo.svg"
    });

    onMounted(() => {
        const location = window.location.pathname;

        let page:headerParams = pageDesc.find(element => element.location == location) as headerParams;
        if(page == undefined && location.includes("/projects/")){
            page = pageDesc.find(element => element.location == "projects-view") as headerParams;
        } 

        params.title = page.title;
        params.description = page.description;
        params.image = page.image;
    });


    //change navBar color depending on size and state
    function updateNavColor(){
        const footer = document.getElementsByTagName("footer")[0];
        const rect = footer.getBoundingClientRect();
        const navBar = document.getElementsByTagName("nav")[0];

        if(rect.bottom > 0 && rect.top <= 60){
            navBar.style.backgroundColor = "silver";
        } else{
            navBar.style.backgroundColor = "black";
        }
    }
    document.addEventListener("scroll", updateNavColor);
    document.addEventListener("resize", updateNavColor);
</script>

<template>
<header>
    <nav>
        <ul id="navLogoTitle">
            <li><img :src="params.image" alt="Page logo."></li>
            <li><h1>{{params.title}}</h1></li>
        </ul>
            
        <ul id="navButtons">
            <li><a href="/home">Home</a></li>
            <li><a href="/about-me">About Me</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/blog">Blog</a></li>
        </ul>
    </nav>

    <div id="pageTitle">
        <h1>{{params.title}}</h1>
    </div>

    <hr>
        <p id="pageDescription">{{params.description}}</p>
    <hr>
</header>
</template>

<style scoped>
header{
    position: relative;
    z-index: 999;
}

#pageTitle{
    margin-top: 60px;
    background-image: url(/images/banner.png);
    background-color: gray;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}    

#pageTitle h1{
    text-align: center;
    font-size: 75px;
    padding: 150px 10px;
    color: white;
}

#pageDescription{
    margin: 10px auto;
    width: 40%;
    text-align: justify;
    font-size: 20px;
}

@media screen and (max-width: 661px) {
    #pageDescription{
        text-align: center;
    }
}

nav{
    background-color: black;
    color: white;
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0px;
}

#navLogoTitle{
    margin-top: 10px;
    margin-left: 20px;
    margin-bottom: 10px;
    float: left;
}

#navLogoTitle li{
    display: inline-block;
}

#navLogoTitle img{
    margin-bottom: 2px;
    margin-right: 5px;
    height: 35px;
    width: 35px;
    display: inline-block;
    vertical-align: middle;
    background-color: white;
}

#navLogoTitle h1{
    display: inline-block;
    vertical-align: middle;
    font-size: 35px;
}

#navButtons{
    margin-top: 20px;
    margin-right: 20px;
    margin-bottom: 10px;
    vertical-align: middle;
    float: right;
}

#navButtons li{
    display: inline-block;
}

#navButtons a{
    margin: 5px;
    padding: 5px 10px;
    text-decoration: none;
    color: black;
    background-color: white;
    border: 5px solid white;
    border-radius: 5px;
    transition: color .2s ease-in-out, background-color .2s ease-in-out, border-color .2s ease-in-out;
}

#navButtons a:hover{
    background-color: gray;
    border-color: gray;
    color: white;
}

@media screen and (max-width: 839px) {
    #navLogoTitle h1{
        display: none;
    }

    #navLogoTitle img{
        margin-top: 2px;
    }

    #pageTitle h1{
        font-size: 50px;
        padding: 100px 10px;
    }    
}

@media screen and (max-width: 479px) {
    #navLogoTitle img{
        display: none;
    }

    #navButtons{
        float: none;
        text-align: center;
    }
}

@media screen and (max-width: 430px) {
    #navButtons{
        display: flex;
        justify-content: center;
    }

    #navButtons a{
        margin: 5px 0px;
        border-radius: 0px;
    }
}

@media screen and (max-width: 376px) {
    #navButtons a{
        padding: 5px 2px;
    }
}
</style>