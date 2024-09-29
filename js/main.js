(function ($) {
  'use strict';

  // Mobile menu dropdown

  $('.mobile-menu .btn-dropdown').on('click', function () {
    const menuItem = $(this).closest('.menu-item-has-children');
    menuItem.toggleClass('dropdown-active');
    menuItem.find('.sub-menu').animate({ height: 'toggle' }, 300);
  });

  // Isotope

  $('.isotope-grid').isotope({
    itemSelector: '.isotope-item',
    layoutMode: 'fitRows'
  });

  $('.isotope-nav li a').click(function () {

    $('.isotope-nav li a').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.isotope-grid').isotope({
      filter: selector
    });
    return false;
  });

  // ScrollBalance

  var $columnBalance = $('.column-balance');

  // Проверяем наличие элемента
  if ($columnBalance.length) {
    // Инициализация ScrollBalance
    var sb = new ScrollBalance($columnBalance);
    sb.bind();  // bind window events (required)
    sb.initialize();  // call when column content changes
  }

})(jQuery);

// Sliders

const historySwiper = new Swiper('.historySwiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 'auto',
    },
    // 992: {
    //   slidesPerView: 3,
    // },
  },
});

const jobSwiper = new Swiper('.jobSwiper', {
  slidesPerView: 1.5,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

const mapSwiper = new Swiper('.mapSwiper', {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  freeMode: false,
  navigation: {
    nextEl: '.mapSwiper-area .swiper-button-next',
    prevEl: '.mapSwiper-area .swiper-button-prev',
  },
});