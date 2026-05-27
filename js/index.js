const swiper = new Swiper(".swiper", {
  loop: true,

  slidesPerView: 1,

  spaceBetween: 20,

  centeredSlides: true,

  autoplay: {
    delay: 3000,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
