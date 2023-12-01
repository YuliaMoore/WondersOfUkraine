import Swiper from "swiper"; // https://swiperjs.com/get-started

const next = document.querySelector(".review-next");
const prev = document.querySelector(".review-prev");

const reviewSwiper = new Swiper(".reviewSwiper", {
  // spaceBetween: 16,
  // cssWidthAndHeight: true,
  // slidesPerView: 1,

  // breakpoints: {
  //   325: {
  //     spaceBetween: 16,
  //     cssWidthAndHeight: true,
  //     slidesPerView: 1,
  //     speed: 600,
  //     loop: false,
  //   },
  //   835: {
  //     loop: false,
  //     cssWidthAndHeight: true,
  //     slidesPerView: 2,
  //     visibilityFullFit: true,
  //     autoResize: false,
  //     spaceBetween: 32,
  //     speed: 600,
  //   },
  //   1440: {
  //     cssWidthAndHeight: true,
  //     slidesPerView: 4,
  //     speed: 600,
  //   },
  // },
  // on: {
  //   slideChange: () => handleInactive(),
  //   init: () => navigation(),
  // },
  // loop: true,

  slidesPerView: 1,
  breakpoints: {
    835: {
      slidesPerView: 2.37,
      spaceBetween: 32,
    },
    1440: {
      spaceBetween: 32,
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".review-next",
    prevEl: ".review-prev",
  },
});

// function handleInactive() {
//   reviewSwiper.isBeginning
//     ? prev.classList.add("inactive")
//     : prev.classList.remove("inactive");
//   reviewSwiper.isEnd
//     ? next.classList.add("inactive")
//     : next.classList.remove("inactive");
// }

// function navigation() {
//   next.addEventListener("click", () => reviewSwiper.slideNext());
//   prev.addEventListener("click", () => reviewSwiper.slidePrev());
// }
