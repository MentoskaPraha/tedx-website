//when the window is loaded run the following
window.onload = function(){
    //get the project file
    const location = window.location.pathname;
    const project = location.split("/").pop();
    const projectFile = "/projects/" + project + ".html";

    //update the page
    const iframe = document.getElementsByTagName("iframe")[0];
    iframe.src = projectFile;

    //get the height of the project content
    iframe.addEventListener("load", function() {
        iframe.height = `${iframe.contentDocument.body.scrollHeight}px`;
    });
}
