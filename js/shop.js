const swiper = new Swiper('.swiper-container', {
  loop: true,

  navigation: {
    nextEl: '.shopHeader_next',
    prevEl: '.shopHeader_prev',
  },

  pagination: {
    el: '.shopHeader_number',
    type: 'fraction',
  },
})
