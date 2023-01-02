<script lang="ts" setup>
	import contentList from "../components/contentList.vue";

	let mainPages = {
        "title": "Main Pages",
        "displayTitle": true,
        "displayImages": true,
        "entries":[
            {
                "title": "About Me",
                "description": "See who I am and what social media I have.",
                "image": "/images/aboutMeLogo.svg",
                "link": "/about-me",
                "target": "_self"
            },
            {
                "title": "Projects",
                "description": "See all the projects I've worked or working on.",
                "image": "/images/projectLogo.svg",
                "link": "/projects",
                "target": "_self"
            },
            {
                "title": "Blog",
                "description": "A blog in which I update you on development of my projects.",
                "image": "/images/comingSoonLogo.svg",
                "link": "/blog",
                "target": "_self"
            }
        ]
    }
</script>

<template>
<main>
	<contentList :params="mainPages"/>	

	<hr>
</main>
</template>