$(window).scroll(function() {
    var sticky = $('.header'),
        scroll = $(window).scrollTop();

    if (scroll >= 500) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
})

$(window).scroll(function() {
    var sticky = $('.goto-top'),
        scroll = $(window).scrollTop();

    if (scroll >= 500) sticky.addClass('fixed1');
    else sticky.removeClass('fixed1');
})

$(document).ready(function(){
    $('.my-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 3000,
        arrows: true,
    });
  });