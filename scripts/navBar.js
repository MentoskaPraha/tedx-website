//Toggles the menu when screen is too small to fit nav bar
function toggleNav(){
    var menu = document.getElementById("menu");
    var menuButton = document.getElementById("menuButton")

    if (menu.style.display === "block") {
        menu.style.display = "none";
        menuButton.style.borderRadius = "5px"
    } else {
        menu.style.display = "block";
        menuButton.style.borderRadius = "0px"
    }
}