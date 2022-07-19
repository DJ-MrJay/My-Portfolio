const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.menu-item');
const mobileMenu = document.querySelector('.mobile-menu');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const openMobileModal = document.querySelectorAll('[data-modal-target]')
const closeMobileModal = document.querySelectorAll('[data-close-button]')
const overlay = document.querySelector('#overlay')

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

openMobileModal.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal-container.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeMobileModal.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal-container')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}