<template>
<main>
  <div id="pageTitle">
    <h1>Social</h1>
  </div>

  <hr>
    <p id="pageDescription">
        Welcome to my Social page. Here you can see all of my social media accounts.
        There's not many I know.
    </p>
  <hr>

    <div class="contentList">
        <h2>Social Media</h2>

        <ul>
            <li><a href="https://github.com/MentoskaPraha" target="_blank">
                <img src="/placeholderV2.png" alt="Github icon.">
                <section>
                    <h3>Github</h3>
                    <p>My Github page. Here you can see all my repos.</p>
                </section>
            </a></li>

            <li><a target="_blank">
                <img src="/placeholderV2.png" alt="Discord icon.">
                <section>
                    <h3>Discord</h3>
                    <p>If you want to contact me via Discord, join this server.</p>
                </section>
            </a></li>

            <li><a target="_blank">
                <img src="/placeholderV2.png" alt="Placeholder image.">
                <section>
                    <h3>Empty</h3>
                    <p>An empty entry. There's not much more to it.</p>
                </section>   
            </a></li>
        </ul>
    </div>

  <hr>
</main>
</template>

<style scoped>
    @import "../assets/pageTitle.css";
    @import "../assets/contentList.css";
</style>