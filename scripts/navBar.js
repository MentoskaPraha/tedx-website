//Toggles the menu when screen is too small to fit nav bar
function toggleNav(){
    const menu = document.getElementById("menu");
    const menuButton = document.getElementById("menuButton");
    const banner = document.getElementById("pageBanner");

    if (menu.style.display === "block") {
        menu.style.display = "none";
        menuButton.style.borderRadius = "5px";
        banner.style.marginTop = "50px";
    } else {
        menu.style.display = "block";
        menuButton.style.borderRadius = "0px";
        banner.style.marginTop = "100px";
    }    
}