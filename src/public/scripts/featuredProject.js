//on page load run
window.onload = async function(){
    //get the iframe
    const featuredProject = document.getElementsByClassName("featuredProject")[0];
    const iframe = featuredProject.children[1];
    
    //get the project files
    const projects = await fetch('/projects/_projectList.json').then((response) => response.json());

    //pick a random project
    let project = Math.floor(Math.random()*projects.list.length);
    project = '/projects/' + projects.list[project];

    //display that project
    iframe.src = project;

    //set-up the height of the iframe correctly
    iframe.addEventListener("load", function() {
        iframe.height = `${iframe.contentDocument.body.scrollHeight}px`;
    });
}
