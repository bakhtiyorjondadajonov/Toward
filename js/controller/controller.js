import { a } from "../view/view.js";
console.log("a: ", a);
const seasonalCarousel = document.querySelector(".seasonal__carousel");
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  grid: {
    rows: 2,
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      grid: {
        rows: 1,
      },
    },
    800: {
      grid: {
        rows: 2,
      },
    },
  },
});
const swiperParfumes = new Swiper(".swiper__parfumes", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
