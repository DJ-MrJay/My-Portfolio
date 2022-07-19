const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.menu-item');
const mobileMenu = document.querySelector('.mobile-menu');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}

mobileMenu.addEventListener('click', toggleMenu);

menuItem.forEach(
  (menuItem) => {
    menuItem.addEventListener('click', toggleMenu);
  },
);
