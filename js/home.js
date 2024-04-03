$('.anchor a').on('click', function () {
  let href = $(this).attr('href')
  $('html, body').animate(
    {
      scrollTop: $(href).offset().top,
    },
    {
      duration: 500,
      easing: 'linear',
    }
  )
  return false
})

$('.zustandsorientiert_slider').owlCarousel({
  nav: false,
  dots: false,
  items: 4.5,
})

$('.el_blog_slider').owlCarousel({
  nav: false,
  dots: false,
  items: 4.5,
})

$('.beliebteste_slider').owlCarousel({
  nav: false,
  dots: false,
  items: 2.2,
})

let fractionTotal = document.querySelector('.home_fraction-total')
fractionTotal.innerHTML = document.querySelectorAll('.home_slider-slide').length

const swiperHome = new Swiper('.home', {
  loop: true,

  navigation: {
    nextEl: '.home_navigation-next',
    prevEl: '.home_navigation-prev',
  },

  pagination: {
    el: '.home_navigation-progressbar',
    type: 'progressbar',
  },
})

let fractionCurrent = document.querySelector('.home_fraction-current')

curentSlideInHomeSlider()
swiperHome.on('slideChange', () => {
  curentSlideInHomeSlider()
})

function curentSlideInHomeSlider(argument) {
  let currentSlide = ++swiperHome.realIndex
  fractionCurrent.innerHTML = currentSlide
}

const swiper = new Swiper('.testimonials_container', {
  loop: true,

  navigation: {
    nextEl: '.testimonials_buttons-next',
    prevEl: '.testimonials_buttons-prev',
  },
})
