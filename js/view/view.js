// ----------- ARRIVALS CAROUSEL ------------
export const a = "a";
const arrivalsCarousel = document.querySelector(".arrivals__carousel");

// --------------------------- CAROUSEL FN-----------------//
export const carouselFn = (elem, btnLeft, btnRight, pageDots) => {
  if (elem) {
    const flkty = new Flickity(elem, {
      // options
      cellAlign: "left",
      contain: true,
      prevNextButtons: false,
      pageDots: pageDots,
    });

    // previous
    if (btnLeft && btnRight) {
      btnLeft.addEventListener("click", function () {
        flkty.previous(true);
      });
      // next
      btnRight.addEventListener("click", function () {
        flkty.next(true);
      });
    }
  }
};

carouselFn(arrivalsCarousel, [false, false], false);

//---------- RENDER PRODUCTS CARD
const seasonalWrapper = document.querySelector(".swiper-wrapper--seasonal");
const editionWrapper = document.querySelector(".swiper-wrapper--edition");
// const favouritesWrapper = document.querySelector(".swiper-wrapper--favourites");

const seasonalData = [
  {
    img: "product-1.png",
    name: "Gucci",
    description: "Zipper mini dress",
    price: 100,
  },
  {
    img: "product-2.png",
    name: "Gucci",
    description: "Zipper mini dress",
    price: 100,
  },
  {
    img: "product-3.png",
    name: "Gucci",
    description: "Zipper mini dress",
    price: 100,
  },
  {
    img: "product-1.png",
    name: "Anton",
    description: "Mix Pattern Leather Jascet",
    price: 100,
  },
  {
    img: "product-1.png",
    name: "Gucci",
    description: "Zipper mini dress",
    price: 100,
  },
  {
    img: "product-2.png",
    name: "Gucci",
    description: "Zipper mini dress",
    price: 100,
  },
  {
    img: "product-3.png",
    name: "Gucci",
    description: "Zipper mini dress",
    price: 100,
  },
  {
    img: "product-1.png",
    name: "Anton",
    description: "Mix Pattern Leather Jascet",
    price: 100,
  },
];
seasonalData.forEach((data) => {
  const html = `
  <div class="swiper-slide swiper-slide--seasonal">
  <div class="product-card product-card--seasonal">
    <div class="product__img product__img--seasonal">
      <div
        class="like-btn like-btn--seasonal like-filled like-filled"
      ></div>
      <img src="./public/${data.img}" alt="" />
    </div>
    <div class="product__name">${data.name}</div>
    <div class="product__description">${data.description}</div>
    <div class="product__price">$${data.price}.00</div>
  </div>
</div>`;
  seasonalWrapper.insertAdjacentHTML("beforeend", html);
  editionWrapper.insertAdjacentHTML("beforeend", html);
});
