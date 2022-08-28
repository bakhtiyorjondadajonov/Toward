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
const edition = new Swiper(".edition-carousel", {
  slidesPerView: 2,
  grid: {
    rows: 2,
  },
  spaceBetween: 30,

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
const favouritesCarousel = new Swiper(".swiper--favourites", {
  slidesPerView: 4,
  spaceBetween: 30,
  freeMode: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const plpSwiper = new Swiper(".swiper--plp", {
  slidesPerView: 3,
  grid: {
    rows: 2,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
  },

  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});
const pdpSwiper = new Swiper(".swiper--pdp", {
  direction: "horizontal",

  breakpoints: {
    0: {
      direction: "horizontal",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },
  },
});
