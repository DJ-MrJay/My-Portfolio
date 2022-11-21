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

// 'Works' Section Details

const projectDetail = [{
  title: 'Space Traveler\'s Hub',
  experience: ['HUB', 'Back End Dev', '2022'],
  desription: 'A single page app to view and read about the SpaceX latest rockets and missions.',
  popDescription: 'This educational project\'s requirements include building a web application for a company that provides commercial and scientific space travel services. The application allows users to book rockets and join selected space missions.',
  technologies: ['javascript', 'tailwind css', 'react', 'redux'],
  popupTech: ['javascript', 'tailwind css', 'react', 'redux', 'github'],
  image: 'images/Screenshot-18.png',
  seeLive: 'https://dj-mrjay.github.io/space-travelers-hub/',
  seeSource: 'https://github.com/DJ-MrJay/space-travelers-hub',
},
{
  title: 'Math Magicians',
  experience: ['Back End Dev', '2022'],
  desription: 'A web app for all fans of mathematics.',
  popDescription: 'Math Magicians is a website for all fans of mathematics. It allows users to do simple calculations, and read a random math-related quote.',
  technologies: ['javascript', 'css3', 'react', 'redux'],
  popupTech: ['javascript', 'css3', 'react', 'redux', 'github'],
  image: 'images/Screenshot-19.png',
  seeLive: 'https://github.com/DJ-MrJay/math-magicians',
  seeSource: 'https://github.com/DJ-MrJay/math-magicians',
},
{
  title: 'Bookstore CMS',
  experience: ['BOOKSTORE', 'Back End Dev', '2022'],
  desription: 'A web app that allows you to display a list of books.',
  popDescription: 'Bookstore is a web app that allows you to display a list of books, add and remove books to and from the list. It is built using react and redux.',
  technologies: ['javascript', 'css3', 'react', 'redux'],
  popupTech: ['javascript', 'css3', 'react', 'redux', 'github'],
  image: 'images/Screenshot-20.png',
  seeLive: 'https://dj-mrjay.github.io/bookstore/',
  seeSource: 'https://github.com/DJ-MrJay/bookstore',
},
{
  title: 'Peace Concert',
  experience: ['CONCERT', 'Lead Developer', '2022'],
  desription: 'A promotion and booking website for the upcoming music concert to promote world peace.',
  popDescription: 'This website is a promotion website for the upcoming music concert to promote world peace. The concert will be held in Nairobi. Information about the concert schedule, performances and ticketing can be found throughout the site. The website content is entirely fictional.',
  technologies: ['html', 'css', 'javascript'],
  popupTech: ['html', 'css', 'javaScript', 'github'],
  image: 'images/Screenshot-21.png',
  seeLive: 'https://dj-mrjay.github.io/Capstone-1/',
  seeSource: 'https://github.com/DJ-MrJay/Capstone-1',
},
];

// Push 'Works' Content

for (let i = 0; i < projectDetail.length; i += 1) {
  let tech = '';
  let experienceList = '';

  for (let j = 0; j < projectDetail[i].technologies.length; j += 1) {
    tech += `<li class="technology"><a href="#">${projectDetail[i].technologies[j]}</a></li>`;
  }

  for (let k = 0; k < projectDetail[i].experience.length; k += 1) {
    experienceList += (k === 0) ? `<li><a href="#" class="canopy">${projectDetail[i].experience[k]}</a></li>` : `<li><a href="#">${projectDetail[i].experience[k]}</a></li>`;
    if (k !== projectDetail[i].experience.length - 1) experienceList += '<li><a href="#"><img src="images/dot.svg" alt="dot"></a></li>';
  }
  document.querySelector('#portfolio').innerHTML += `
  <div class="card">
    <div class="image-container">
      <div><img src="${projectDetail[i].image}" alt="Project Screenshot"></div>
    </div>
    <div class="card-text" >
      <div>
        <h2>${projectDetail[i].title}</h2>
      </div>
      <ul class="flex-breadcrumbs">
        ${experienceList}
      </ul>
      <p>${projectDetail[i].desription}</p>
      <div class="categories">
        <ul>
          ${tech}
        </ul>
      </div>
      <button data-index="${i}" class="see-project">Read More</button>
    </div>
  </div>`;
}

// Popup Modal

const popupModal = document.querySelector('#portfolioPopup');
const displayPopupModal = (i) => {
  let tech = '';

  let experienceList = '';

  for (let j = 0; j < projectDetail[i].technologies.length; j += 1) {
    tech += `<li class="technology"><a href="#">${projectDetail[i].technologies[j]}</a></li>`;
  }

  for (let k = 0; k < projectDetail[i].experience.length; k += 1) {
    experienceList += (k === 0) ? `<li><a href="#" class="canopy">${projectDetail[i].experience[k]}</a></li>` : `<li><a href="#">${projectDetail[i].experience[k]}</a></li>`;
    if (k !== projectDetail[i].experience.length - 1) experienceList += '<li><a href="#"><img src="images/dot.svg" alt="dot"></a></li>';
  }
  document.querySelector('#portfolioPopup').innerHTML = `

    <div class="modal">
      <div class="modal-content">
        <h2>${projectDetail[i].title}</h2>
        <span><a onclick="closePopupModal()" href="" class="close-popup"><i class="fa-solid fa-xmark fa-2x" id="closemodal"></i></a></span>

        <ul class="flex-breadcrumbs">
          ${experienceList}
        </ul>
        <div class="modal-image-container">
          <div><img src="${projectDetail[i].image}" alt="Portfolio Screenshot"></div>
        </div>
        <div class="flex-bottom">
          <p class="desc-desk">${projectDetail[i].popDescription}</p>

          <div class="tech-and-buttons">
            <div class="categories">
              <ul>
                ${tech}
              </ul>
            </div>
            <hr/>
            <div class="modal-buttons">
              <button>
              <a href="${projectDetail[i].seeLive}">See Live<i class="fas fa-external-link"></i></a>
              </button>
              <button>
              <a href="${projectDetail[i].seeSource}">See Source<i class="fab fa-github" aria-hidden="true"></i></a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>  `;
  popupModal.style.display = 'block';
};
document.querySelectorAll('.see-project').forEach((row) => row.addEventListener('click', () => displayPopupModal(row.getAttribute('data-index'))));

// Form Validation

function errorMessage(elemId, requiredMessage) {
  document.getElementById(elemId).innerHTML = requiredMessage;
}

/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */

function validationForm() {
  const fullname = document.form.fullname.value;
  const email = document.form.email.value;
  const message = document.form.message.value;

  let nameError = true;
  let emailError = true;
  let messageError = true;

  if (fullname === '') {
    errorMessage('nameError', '*Please enter your full name');
  } else {
    const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if (!nameRegex.test(fullname)) {
      errorMessage('nameError', '*Please enter first and last names');
    } else {
      errorMessage('nameError', '');
      nameError = false;
    }
  }

  if (email === '') {
    errorMessage('emailError', '*Please enter your email address');
  } else {
    const emailRegex = /^[a-z]+@[a-z0-9-]+\.[a-z0-9-.]+$/;
    if (!emailRegex.test(email)) {
      errorMessage('emailError', '*Email address MUST be in lower case.');
    } else {
      errorMessage('emailError', '');
      emailError = false;
    }
  }

  if (message === '') {
    errorMessage('messageError', '*Please type a message');
  } else {
    const messageRegex = /[\s\S]+/g;
    if (!messageRegex.test(message)) {
      errorMessage('messageError', '*Please type a valid message');
    } else {
      errorMessage('messageError', '');
      messageError = false;
    }
  }

  if ((nameError || emailError || messageError === true)) {
    return false;
  }
}

// Store Form Data Locally

const form = document.querySelector('form');
const userData = {
  name: document.getElementById('fname').value,
  email: document.getElementById('email').value,
  message: document.getElementById('msg').value,
};

localStorage.setItem('userData', JSON.stringify(userData));
form.reset();

// Retrieve Form Data

if (localStorage.getItem('userData') !== undefined) {
  const userData = JSON.parse(localStorage.getItem('userData'));

  form.elements.fullname.value = userData.name;
  form.elements.email.value = userData.email;
  form.elements.message.value = userData.message;
}
