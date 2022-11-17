//on page load run
window.onload = function(){
    //get the project file
    const location = window.location.pathname;
    const project = location.split("/").pop();
    const projectFile = "/projects/" + project + ".html";

    //get the iframe and update it
    const iframe = document.getElementsByTagName("iframe")[0];
    iframe.src = projectFile;

    //set-up the height of the iframe correctly
    iframe.addEventListener("load", function() {
        iframe.height = `${iframe.contentDocument.body.scrollHeight}px`;
    });
}
