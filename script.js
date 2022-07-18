let menu = document.querySelector(".menu");
let menuItem = document.querySelectorAll(".menu-item");
let mobileMenu = document.querySelector(".mobile-menu");
let menuIcon = document.querySelector(".menu-icon");
let closeIcon = document.querySelector(".close-icon");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

mobileMenu.addEventListener("click", toggleMenu);

menuItem.forEach(
    function (menuItem) {
        menuItem.addEventListener("click", toggleMenu);
    }
)