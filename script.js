let menu = document.querySelector('.desktop-menu');
let menuItems = document.querySelectorAll('.menuItem');
let hamburger = document.querySelector('.mobile-menu');
let menuIcon = document.querySelector('.menuIcon');
let closeIcon = document.querySelector('.closeIcon');

function mobileMenu() {
    if (menu.classList.contains("show-menu")){
        menu.classList.remove("show-menu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("show-menu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", mobileMenu);

menuItems.forEach(
    function(menuItem){
        menuItem.addEventListener("click", mobileMenu);
    }
)