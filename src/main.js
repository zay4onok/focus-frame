function initSlick() {
  if ($(window).width() < 1280) {
    if (!$('.reviews__list').hasClass('slick-initialized')) {
      $('.reviews__list').slick({
        dots: true,
        arrows: false,
      });
    }
  } else {
    if ($('.reviews__list').hasClass('slick-initialized')) {
      $('.reviews__list').slick('unslick');
    }
  }
}

$(document).ready(initSlick);
$(window).on('resize', initSlick);