"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnCloseModal = document.querySelector(".btn--close-modal");
const nav = document.querySelector(".nav");
const navLinks = document.querySelector(".nav__links");
const header = document.querySelector(".header");
const toggleBtn = document.querySelector(".nav__toggle");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const allSections = document.querySelectorAll(".section");
const section1 = document.querySelector("#section--1");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContent = document.querySelectorAll(".operations__content");
const cookieBody = document.querySelector(".cookie");
const cookieCloseBtn = document.querySelector(".cookie__close");
const imgTargets = document.querySelectorAll("img[data-src]");
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const dotContainer = document.querySelector(".dots");

let currentSlide = 0;
const maxSlide = slides.length - 1;

const changeSlide = function (cs) {
  slides.forEach((sl, i) => {
    sl.style.transform = `translateX(${100 * (i - cs)}%)`;
  });
};

changeSlide(0);

function previousSlide() {
  if (currentSlide === 0) currentSlide = maxSlide;
  else currentSlide--;
  changeSlide(currentSlide);
  activateDots(currentSlide);
}

function nextSlide() {
  if (currentSlide === maxSlide) currentSlide = 0;
  else currentSlide++;
  changeSlide(currentSlide);
  activateDots(currentSlide);
}

btnLeft.addEventListener("click", previousSlide);
btnRight.addEventListener("click", nextSlide);

// dots
function creatingDots() {}
slides.forEach((_, i) => {
  const dot = `<button class="dots__dot" data-slide="${i}"><button>`;
  dotContainer.insertAdjacentHTML("beforeend", dot);
});
creatingDots();

// activate dots
function activateDots(slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
}
activateDots(0);

// dots handler
dotContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("dots__dot")) {
    activateDots(event.target.dataset.slide);
    changeSlide(event.target.dataset.slide);
  }
});

// arrow key
document.addEventListener("keydown", function (event) {
  event.key === "ArrowLeft" && previousSlide();
  event.key === "ArrowRight" && nextSlide();
});

toggleBtn.addEventListener("click", function (event) {
  if (navLinks.classList.contains("nav__open")) {
    navLinks.classList.remove("nav__open");
    document.querySelector("html").style.overflow = "visible";
  } else {
    navLinks.classList.add("nav__open");
    document.querySelector("html").style.overflow = "hidden";
  }
});

// navLinks.addEventListener("click", function () {
//   navLinks.classList.contains("nav__open") &&
//     navLinks.classList.remove("nav__open");
//   document.querySelector("html").style.overflow = "visible";
// });

// const btn = document.querySelector("button.mobile-menu-button");
// const menu = document.querySelector(".mobile-menu");

// btn.addEventListener("click", () => {
//   menu.classList.toggle("hidden");
// });

// function myFunction() {
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
