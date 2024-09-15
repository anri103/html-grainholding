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

  $('.isotope-nav li button').click(function () {

    $('.isotope-nav li button').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.isotope-grid').isotope({
      filter: selector
    });
    return false;
  });

})(jQuery);

// Sliders

const historySwiper = new Swiper('.historySwiper', {
  slidesPerView: 'auto',
  freeMode: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // breakpoints: {
  //   768: {
  //     slidesPerView: 2,
  //   },
  //   992: {
  //     slidesPerView: 3,
  //   },
  // },
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