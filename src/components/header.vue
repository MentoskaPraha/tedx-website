<script lang="ts" setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
<header>
    <nav>
        <ul id="navLogoTitle">
            <li><img src="/placeholder.png" alt="Site Logo"></li>
            <li><h1>MP's Official Website</h1></li>
        </ul>
            
        <ul id="navButtons">
            <li><RouterLink to="/home">Home</RouterLink></li>
            <li><RouterLink to="/about-me">About Me</RouterLink></li>
            <li><RouterLink to="/project">Projects</RouterLink></li>
            <li><RouterLink to="/social">Social</RouterLink></li>
        </ul>
    </nav>
</header>
</template>

<style scoped>
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