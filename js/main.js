(function ($) {
  'use strict';

  /*==================================================================
    [ Isotope ]*/
  $('.isotope-grid').isotope({
    itemSelector: '.isotope-item',
    layoutMode: 'fitRows'
  });

  $('.isotope-nav li button').click(function () {
    //ACTIVE CLASS
    $('.isotope-nav li button').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.isotope-grid').isotope({
      filter: selector
    });
    return false;
  });

  /*==================================================================
    [ Show / hide modal search ]*/

  $('.js-search-open').click(function (e) {
    e.preventDefault();
    $('.modal-search').addClass('show');
  });

  $('.js-search-close').click(function () {
    $('.modal-search').removeClass('show');
  });

  $('.modal-wrap').click(function (e) {
    e.stopPropagation();
  });

})(jQuery);


document.addEventListener('DOMContentLoaded', function () {

  window.addEventListener('scroll', function () {
    if (window.scrollY > 150) {
      document.getElementById('navbar-main').classList.add('js-fixed');
    } else {
      document.getElementById('navbar-main').classList.remove('js-fixed');
    }
  });

  // Back to Top Button
  //Get the button
  const mybutton = document.getElementById('back-top');

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 400 ||
      document.documentElement.scrollTop > 400
    ) {
      mybutton.classList.add('show');
    } else {
      mybutton.classList.remove('show');
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  mybutton.addEventListener('click', backToTop);

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  // Sliders

  const companyGallerySwiper = new Swiper('.historySwiper', {
    slidesPerView: 1,
    freeMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });

  const blogSwiper = new Swiper('.blogSwiper', {
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  const jobSwiper = new Swiper('.jobSwiper', {
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

});