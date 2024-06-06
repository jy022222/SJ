$(document).ready(function () {
  new Swiper('.mainSlider', {
    slidesPerView: '1',
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: '.mainSlider .swiper-pagination',
      clickable: true,
    },
    navigation: {
      prevEl: '.btn_prev',
      nextEl: '.btn_next',
      clickable: true,
    },
    loop: true,
    loopedSlides: 1,
  })
})
