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
