<template>
<main>
  <div id="pageTitle">
    <h1>MP's Official Website</h1>
  </div>

  <hr>
    <p id="pageDescription">
      Welcome to MentoskaPraha's Official Website!
      Below you can see a list of interesting pages to check out,
      a featured project and an inspiring quote.
      Enjoy your stay!
    </p>
  <hr>

  <div class="contentList">
    <h2>Main Pages</h2>

    <ul>
      <li><a href="/about-me">
        <img src="/images/placeholderV2.png" alt="About me page icon.">
        <section>
          <h3>About Me</h3>
            <p>See all the information about me.</p>
        </section>
      </a></li>

      <li><a href="/projects">
          <img src="/images/placeholderV2.png" alt="Projects page icon.">
          <section>
            <h3>Projects</h3>
            <p>See all the projects I've worked on or I'm working on.</p>
          </section>
      </a></li>

      <li><a href="social">
        <img src="/images/placeholderV2.png" alt="Social page icon.">
          <section>
            <h3>Social</h3>
            <p>See how you can contact me or view my social media.</p>
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