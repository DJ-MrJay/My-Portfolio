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
  title: 'Tonic',
  exprience: ['CANOPY', 'Back End Dev', '2015'],
  desription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  popDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['html', 'css', 'javascript'],
  popupTech: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
  image: 'images/snapshoot-portfolio-5.svg',
  imageMobile: 'images/snapshoot-portfolio-1.svg',
  imagePopup: 'images/snapshoot-portfolio-5.svg',
  imageMobilePopup: 'images/snapshoot-portfolio-1.svg',
  seeLive: 'https://dj-mrjay.github.io/My-Portfolio/',
  seeSource: 'https://github.com/DJ-MrJay/My-Portfolio',
},
{
  title: 'Multi-Post Stories',
  exprience: ['FACEBOOK', 'Back End Dev', '2015'],
  desription: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
  popDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
  popupTech: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
  image: 'images/snapshoot-portfolio-6.svg',
  imageMobile: 'images/snapshoot-portfolio-2.svg',
  imagePopup: 'images/snapshoot-portfolio-6.svg',
  imageMobilePopup: 'images/snapshoot-portfolio-2.svg',
  seeLive: 'https://dj-mrjay.github.io/My-Portfolio/',
  seeSource: 'https://github.com/DJ-MrJay/My-Portfolio',
},
{
  title: 'Facebook 360',
  exprience: ['FACEBOOK', 'Back End Dev', '2015'],
  desription: 'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
  popDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
  popupTech: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
  image: 'images/snapshoot-portfolio-7.svg',
  imageMobile: 'images/snapshoot-portfolio-3.svg',
  imagePopup: 'images/snapshoot-portfolio-7.svg',
  imageMobilePopup: 'images/snapshoot-portfolio-3.svg',
  seeLive: 'https://dj-mrjay.github.io/My-Portfolio/',
  seeSource: 'https://github.com/DJ-MrJay/My-Portfolio',
},
{
  title: 'Uber Navigation',
  exprience: ['UBER', 'Lead Developer', '2018'],
  desription: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
  popDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea.',
  technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
  popupTech: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
  image: 'images/snapshoot-portfolio-8.svg',
  imageMobile: 'images/snapshoot-portfolio-4.svg',
  imagePopup: 'images/snapshoot-portfolio-8.svg',
  imageMobilePopup: 'images/snapshoot-portfolio-4.svg',
  seeLive: 'https://dj-mrjay.github.io/My-Portfolio/',
  seeSource: 'https://github.com/DJ-MrJay/My-Portfolio',
},
];

// Push 'Works' Content

for (let i = 0; i < projectDetail.length; i += 1) {
  let tech = '';
  let experienceList = '';

  for (let j = 0; j < projectDetail[i].technologies.length; j += 1) {
    tech += `<li class="technology"><a href="#">${projectDetail[i].technologies[j]}</a></li>`;
  }

  for (let k = 0; k < projectDetail[i].exprience.length; k += 1) {
    experienceList += (k === 0) ? `<li><a href="#" class="canopy">${projectDetail[i].exprience[k]}</a></li>` : `<li><a href="#">${projectDetail[i].exprience[k]}</a></li>`;
    if (k !== projectDetail[i].exprience.length - 1) experienceList += '<li><a href="#"><img src="images/dot.svg" alt="dot"></a></li>';
  }
  document.querySelector('#portfolio').innerHTML += `
  <div class="card">
    <div class="one"><img src="${projectDetail[i].imageMobile}" alt="Portfolio Screenshot"></div>
    <div class="two"><img src="${projectDetail[i].image}" alt="Portfolio Screenshot"></div>
    <div class="card-text" >
      <div class="one">
        <h2>${projectDetail[i].title}</h2>
      </div>
      <div class="two">
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
      <button data-index="${i}" class="see-project">See Project</button>
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

  for (let k = 0; k < projectDetail[i].exprience.length; k += 1) {
    experienceList += (k === 0) ? `<li><a href="#" class="canopy">${projectDetail[i].exprience[k]}</a></li>` : `<li><a href="#">${projectDetail[i].exprience[k]}</a></li>`;
    if (k !== projectDetail[i].exprience.length - 1) experienceList += '<li><a href="#"><img src="images/dot.svg" alt="dot"></a></li>';
  }
  document.querySelector('#portfolioPopup').innerHTML = `
  
    <div class="modal">
      <div class="modal-content">
        <h2>${projectDetail[i].title}</h2>
        <span><a onclick="closePopupModal()" href="" class="close-popup"><i class="fa-solid fa-xmark fa-2x" id="closemodal"></i></a></span>
                      
        <ul class="flex-breadcrumbs">
          ${experienceList}
        </ul>
        <div class="one"><img src="${projectDetail[i].imageMobile}" alt="Portfolio Screenshot"></div>
        <div class="two"><img src="${projectDetail[i].image}" alt="Portfolio Screenshot"></div>
        
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

function validationForm() {
  const fname = document.form.fullname.value;
  const email = document.form.email.value;
  const message = document.form.message.value;

  let nameError = true;
  let emailError = true;
  let messageError = true;

  if (fname === '') {
    errorMessage('nameError', '*Please enter your full name');
  } else {
    const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if (!nameRegex.test(fname)) {
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
    const messageRegex = /^[a-zA-Z\s]+$/;
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
