"use strict";
const navbar = document.querySelector(".navbar");
document.querySelector("#menu-icon").onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

//countdown
const labelTimer = document.querySelector(".timer");
const curPrice = document.querySelector(".cur-price");
const originalPrice = document.querySelector(".original-price");
function countdown() {
  function tick() {
    const hour = String(Math.floor(time / 3600)).padStart(2, 0);
    const minute = String(Math.floor(time / 60)).padStart(2, 0);
    const second = String(time % 60).padStart(2, 0);

    labelTimer.innerHTML = `${hour}h:${minute}m:${second}s`;

    if (time === 0) {
      clearInterval(timer);
      curPrice.style.opacity = 0;
      originalPrice.style.textDecoration = "none";
      originalPrice.style.fontSize = "2.5rem";
      originalPrice.style.fontWeight = 700;
    }

    time--;
  }
  let time = 3600;
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
}
countdown();

// swiper
const swiper = new Swiper(".course-slider", {
  slidesPerView: 1,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    650: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    900: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


