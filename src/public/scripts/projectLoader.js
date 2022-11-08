//when the window is loaded run the following
window.onload = function(){
    //get the project file
    const location = window.location.pathname;
    const project = location.split("/").pop();
    const projectFile = "/projects/" + project + ".html";

    //update the page
    const embed = document.getElementsByTagName("iframe")[0]
    embed.src = projectFile;
}
