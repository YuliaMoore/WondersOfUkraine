import Swiper from "swiper";
// https://swiperjs.com/get-started

const prev = document.querySelector(".gallery-prev");
const next = document.querySelector(".gallery-next");

const gallerySwiper = new Swiper(".gallerySwiper", {
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    835: {
      slidesPerView: 2,
    },
    1440: {
      cssWidthAndHeight: true,
      slidesPerView: "auto",
      freeMode: true,
      visibilityFullFit: true,
      autoResize: false,
      loop: true,
    },
  },
  on: {
    slideChange: () => handleInactive2(),
    init: () => navigation2(),
  },
});

function handleInactive2() {
  gallerySwiper.isBeginning
    ? prev.classList.add("inactive")
    : prev.classList.remove("inactive");
  gallerySwiper.isEnd
    ? next.classList.add("inactive")
    : next.classList.remove("inactive");
}

function navigation2() {
  next.addEventListener("click", () => gallerySwiper.slideNext());
  prev.addEventListener("click", () => gallerySwiper.slidePrev());
}
