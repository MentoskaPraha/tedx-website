<template>
<main>
  <div id="pageTitle">
    <h1>About Me</h1>
  </div>
  
    <hr>
      <p id="pageDescription">
        Welcome to the About Me page.
        Here you can see all the information you would want to know about me.
        There's nothing too personal though.
      </p>
    <hr>

    <div class="contentBlock">
      <img src="/images/placeholderV2.png" alt="Picture of me.">
      <h2>Basic Information</h2>
      <section>
          <p>
            <strong>Name:</strong> MentoskaPraha<br>
            <strong>Timezone:</strong> EET/EEST or GMT+2/GMT+3<br>
            <strong>Languages I know:</strong> English, Czech and French<br>
            <strong>Languages I use:</strong> HTML/CSS and Typescript<br>
            <strong>Little bit about me:</strong><br>
              I’m an amateur programmer and average gamer.
              I almost always work on websites or API applications,
              but I do occasionally work on games not related to the web in any way.
              I like to play video games with my friends and we most commonly play games like Sea of Thieves,
              Don’t Starve Together, Prison Architect and Satisfactory.
              That’s me in a nutshell, I play video games and I write code.
          </p>
      </section>
    </div>

	<hr>

    <div class="contentList">
        <h2>Social Media</h2>

        <ul>
            <li><a href="https://github.com/MentoskaPraha" target="_blank">
                <img src="/images/placeholderV2.png" alt="Github icon.">
                <section>
                    <h3>Github</h3>
                    <p>My Github page. Here you can see all my repos.</p>
                </section>
            </a></li>

            <li><a target="_blank">
                <img src="/images/placeholderV2.png" alt="Discord icon.">
                <section>
                    <h3>Discord</h3>
                    <p>If you want to contact me via Discord, join this server.</p>
                </section>
            </a></li>

            <li><a target="_blank">
                <img src="/images/placeholderV2.png" alt="Placeholder image.">
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
  @import "../assets/contentBlock.css";
  @import "../assets/contentList.css";
</style>