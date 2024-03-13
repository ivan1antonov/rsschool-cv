$(function () {
  $('.slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/svg/arrow-left.svg" alt="стрелка"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/svg/arrow-right.svg" alt="стрелка"></button>',
  });

  $('.slider-choice').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $('.work-slider').slick({
    dots: true,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/svg/arrow-left.svg" alt="стрелка"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/svg/arrow-right.svg" alt="стрелка"></button>',
  });

  $('.menu-btn__nav').on('click', function(){
    $('.main, .try, .news, .choice, .each, .work, .characteristics, .footer, .prices').toggleClass('main-active');
  });

  $('.news-images1').hover(
      function () {
        $('.news-link__btn01').addClass('news-link__btn01--active'); },
      function () { $('.news-link__btn01').removeClass('news-link__btn01--active').removeAttr('news-link__btn01'); }
  );
  $('.news-images1').hover(
    function () {
      $('.news-link__button-line01').addClass('news-link__button-line01--active');
    },
    function () { $('.news-link__button-line01').removeClass('news-link__button-line01--active').removeAttr('news-link__button-line01'); }
  );

  $('.news-images2').hover(
    function () {
      $('.news-link__btn02').addClass('news-link__btn02--active');
    },
    function () { $('.news-link__btn02').removeClass('news-link__btn02--active').removeAttr('news-link__btn02'); }
  );
  $('.news-images2').hover(
    function () {
      $('.news-link__button-line02').addClass('news-link__button-line02--active');
    },
    function () { $('.news-link__button-line02').removeClass('news-link__button-line02--active').removeAttr('news-link__button-line02'); }
  );

})

