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
const plpWrapper = document.querySelector(".swiper-wrapper--plp");
// const favouritesWrapper = document.querySelector(".swiper-wrapper--favourites");
const wrapperChecker = (wrapper, html) => {
  if (wrapper) {
    wrapper.insertAdjacentHTML("beforeend", html);
  }
};
const productData = [
  {
    img: "product-1.png",
    name: "Gucci",
    description: "Zipper mini dress",
    price: 100,
    new: true,
    sale: false,
  },
  {
    img: "product-2.png",
    name: "Gucci",
    description: "Zipper mini dress",
    price: 100,
    new: false,
    sale: false,
  },
  {
    img: "product-3.png",
    name: "Gucci",
    description: "Zipper mini dress",
    price: 100,
    new: false,
    sale: false,
  },
  {
    img: "product-1.png",
    name: "Anton",
    description: "Mix Pattern Leather Jascet",
    price: 100,
    new: false,
    sale: true,
  },
  {
    img: "product-1.png",
    name: "Gucci",
    description: "Zipper mini dress",
    price: 100,
    new: false,
    sale: false,
  },
  {
    img: "product-2.png",
    name: "Gucci",
    description: "Zipper mini dress",
    price: 100,
    new: false,
    sale: false,
  },
  {
    img: "product-3.png",
    name: "Gucci",
    description: "Zipper mini dress",
    price: 100,
    new: false,
    sale: false,
  },
  {
    img: "product-1.png",
    name: "Anton",
    description: "Mix Pattern Leather Jascet",
    price: 100,
    new: false,
    sale: false,
  },
];
productData.forEach((data) => {
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
  wrapperChecker(seasonalWrapper, html);
  wrapperChecker(editionWrapper, html);
  // wrapperChecker(plpWrapper, html);
  // seasonalWrapper.insertAdjacentHTML("beforeend", html);
  // editionWrapper.insertAdjacentHTML("beforeend", html);
});
productData.forEach((data) => {
  const html = `
  <div class="swiper-slide swiper-slide--seasonal">
  <div class="product-card product-card--plp">
    <div class="product__img product__img--seasonal">
    ${
      data.new === true
        ? `<div class="product__label product__label--new">New</div>`
        : ""
    }
    ${
      data.sale
        ? `<div class="product__label product__label--sale">Sale</div>`
        : ""
    }
      <div
        class="like-btn like-btn--seasonal like-filled like-filled"
      ></div>
      <img src="./public/${data.img}" alt="" />
    </div>
    <div class="product__icons-box">
                  <div class="product__icon">
                    <img src="./public/icons/icon-recycle.png" alt="" />
                  </div>
                  <div class="product__icon">
                    <img src="./public/icons/icon-leaf.png" alt="" />
                  </div>
                  <div class="product__icon">
                    <img src="./public/icons/icon-rabbit.png" alt="" />
                  </div>
                </div>
    <div class="product__name">${data.name}</div>
    <div class="product__description">${data.description}</div>
    <div class="product__price">$${data.price}.00</div>
    <div class="product__swatches-box product__swatches-box--plp">
                  <div class="checkbox-label checkbox-label--checked">
                    <div class="checkbox checkbox--white">&nbsp;</div>
                  </div>
                  <div class="checkbox-label">
                    <div class="checkbox checkbox--black">&nbsp;</div>
                  </div>
                  <div class="checkbox-label">
                    <div class="checkbox checkbox--red">&nbsp;</div>
                  </div>
                </div>
  </div>
</div>`;

  wrapperChecker(plpWrapper, html);
  // seasonalWrapper.insertAdjacentHTML("beforeend", html);
  // editionWrapper.insertAdjacentHTML("beforeend", html);
});

// -------------- DROP DOWN MENU ----------------
const dropDownMenuMaker = (id) => {
  const menu = document.getElementById(`${id}`);
  if (menu) {
    const instance = NiceSelect.bind(document.getElementById(`${id}`));
    instance.update();
  }
};
dropDownMenuMaker("categories");
dropDownMenuMaker("color");
dropDownMenuMaker("brands");
dropDownMenuMaker("sustainablility");
dropDownMenuMaker("price");
dropDownMenuMaker("size");

// ------------ RADIO BUTTONS FUNCTUALITY ------------
const window = document.querySelector("body");

window.addEventListener("click", function (e) {
  const btn = e.target.closest(".checkbox");
  console.log("e.target: ", e.target);
  console.log("btn: ", btn);
  if (!btn) return;
  const swatchesBox = btn.parentElement.parentElement;
  const allLabels = swatchesBox.querySelectorAll(".checkbox-label");
  allLabels.forEach((eachLabel) =>
    eachLabel.classList.remove("checkbox-label--checked")
  );
  btn.parentElement.classList.add("checkbox-label--checked");
});
// window.addEventListener("click", function (e) {
//   const btn = e.target.closest(".checkbox--pdp");
//   if (!btn) return;
//   const swatchesBox = btn.parentElement.parentElement;
//   const allLabels = swatchesBox.querySelectorAll(".checkbox");
//   allLabels.forEach((eachLabel) =>
//     eachLabel.classList.remove("checkbox--black")
//   );
//   btn.classList.add("checkbox--black");
// });
