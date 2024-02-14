// IMPORT BOOTSTRAP FROM MODULES
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

// IMPORT SWIPER JS FROM MODULES
// import Swiper from "../node_modules/swiper/swiper-bundle.min.mjs";

// 🔴@@@@@@@@@@@@@@@@ BOOTSTRAP JS BEGIN @@@@@@@@@@@@@@@@
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
// @@@@@@@@@@@@@@@@ BOOTSTRAP JS END @@@@@@@@@@@@@@@@



// 🔴@@@@@@@@@@@@@@@@ SWIPER JS BEGIN @@@@@@@@@@@@@@@@
// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     freeMode: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     breakpoints: {
//       // 320px এর উপরে কাজ করবে...
//       320: {
//         slidesPerView: 1,
//         spaceBetween: 20,
//       },
//       // 480px এর উপরে কাজ করবে...
//       480: {
//         slidesPerView: 1,
//         spaceBetween: 10,
//       },
//       // 640px এর উপরে কাজ করবে...
//       640: {
//         slidesPerView: 2,
//         spaceBetween: 20,
//       },
//       // 740px এর উপরে কাজ করবে...
//       768: {
//         slidesPerView: 2,
//         spaceBetween: 30,
//       },
//       // 992px এর উপরে কাজ করবে...
//       992: {
//         slidesPerView: 3,
//         spaceBetween: 15,
//       },
//       // 1200px এর উপরে কাজ করবে...
//       1200: {
//         slidesPerView: 2,
//         spaceBetween: 20,
//       },
//     },
//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });
//  @@@@@@@@@@@@@@@@ SEIPER JS END @@@@@@@@@@@@@@@@



// 🔴@@@@@@@@@@@@@@@@ CUSTOM JS BEGIN @@@@@@@@@@@@@@@@

// hamburer manu toggle begin

const navLink = document.querySelectorAll(".nav-link");
const navbar_toggler = document.querySelector(".navbar-toggler");
const navManue = document.querySelector(".navManue");
const navbarCollapse = document.querySelector(".navbar-collapse");

navbar_toggler.addEventListener("click", () => {
  handlBarToggler();
});

function handlBarToggler() {
  for (const iterator of navbar_toggler.children) {
    iterator.classList.toggle("d-none");
  }
}

navLink.forEach((vlu) => handleNavMenuToggler(vlu));

function handleNavMenuToggler(params) {
  params.addEventListener("click", () => {
    navbarCollapse.classList.toggle("show");
    handlBarToggler();
  });
}

// hamburer manu toggle end

//  @@@@@@@@@@@@@@@@ CUSTOM JS END @@@@@@@@@@@@@@@@
