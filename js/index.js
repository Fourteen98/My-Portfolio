// Targetting  body tag
const body = document.querySelector('body');
const close = document.querySelector('.x-icon');
const closePortfolio = document.querySelector('.portfolio');
const closeAbout = document.querySelector('.about');
const closeContact = document.querySelector('.contact');
const button = document.querySelector('.menu');
const menu = document.querySelector('.desktop');

close.addEventListener('click', () => {
  menu.classList.toggle('active');
  body.classList.toggle('click');
});

closePortfolio.addEventListener('click', () => {
  menu.classList.toggle('active');
  body.classList.toggle('active');
});

closeAbout.addEventListener('click', () => {
  menu.classList.toggle('active');
  body.classList.toggle('active');
});

closeContact.addEventListener('click', () => {
  menu.classList.toggle('active');
  body.classList.toggle('active');
});

button.addEventListener('click', () => {
  menu.classList.toggle('active');
  body.classList.toggle('active');
});

// Targetting see-project buttom
const seeProject = document.querySelectorAll('.toggle-popup');
// Targetting modal
const popupContainer = document.querySelector('.project-pop-up');
// Targetting close button
const closePopupBtn = document.querySelector('.close-modal');
// showing popup modal
seeProject.forEach((project) => {
  project.addEventListener('click', (e) => {
    e.preventDefault();
    popupContainer.classList.add('display-active');
    // body.style.overflowY = 'hidden';
  });
});

closePopupBtn.addEventListener('click', () => {
  popupContainer.classList.remove('display-active');
  // body.style.overflowY = 'visible';
});

const form = document.querySelector('.contact-form');
const formEmail = document.getElementById('formEmail');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
  const messages = [];
  const isUpperCase = (string) => /[A-Z]/.test(string);

  if (isUpperCase(formEmail.value) === true) {
    messages.push('Email must be in lowercase!');
    errorMessage.innerText = messages.join(', ');
    e.preventDefault();
  }
  if (formEmail.value === '' || formEmail.value === null) {
    messages.push('Email field can not be empty!');
    errorMessage.innerText = messages.join(', ');
    e.preventDefault();
  }
});

// Local storage functionality
let formData = {
  full_name: '',
  email: '',
  message: '',
};

if (localStorage.getItem('formData') !== null) {
  const data = localStorage.getItem('formData');
  formData = JSON.parse(data);
}

const formElements = document.querySelectorAll('input, textarea');
formElements.forEach((element) => {
  element.value = formData[element.name];
  element.addEventListener('input', (e) => {
    formData[e.target.name] = e.target.value;
    localStorage.setItem('formData', JSON.stringify(formData));
  });
});