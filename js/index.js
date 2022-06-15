const close = document.querySelector('.x-icon')
const closePortfolio = document.querySelector('.portfolio');
const closeAbout = document.querySelector('.about');
const closeContact = document.querySelector(".contact");
const button = document.querySelector('.menu')
const body = document.querySelector("body");
const menu = document.querySelector(".desktop");

close.addEventListener("click", () => {
  menu.classList.toggle("active");
  body.classList.toggle("active");
});

closePortfolio.addEventListener("click", () => {
  menu.classList.toggle("active");
  body.classList.toggle("active");
});

closeAbout.addEventListener("click", () => {
  menu.classList.toggle("active");
  body.classList.toggle("active");
});

closeContact.addEventListener("click", () => {
  menu.classList.toggle("active");
  body.classList.toggle("active");
});

button.addEventListener("click", () => {
  menu.classList.toggle("active");
  body.classList.toggle("active");
});