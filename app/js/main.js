(function(){

$('.team__carousel').owlCarousel({
    loop: true,
    lazyLoad: true,
    nav: false,
    center: true,
    responsive:{
        0:{
            items:1,
            margin:0
        },
        1024:{
            items:3,
            margin:-30
        }
    }
})

$(window).on("scroll touchmove", function () {
    $('.nav').toggleClass("nav--small nav--scrolled", $(document).scrollTop() > 110);
    $('.nav__logo').toggleClass("nav__logo--small", $(document).scrollTop() > 110);
    $(".nav__list--mobile").toggleClass("nav__list--mobile--scrolled", $(document).scrollTop() > 70);
});

$(".nav__link--mobile").on('click', function() {
    $(".nav__hamburger").show();
    $(".nav__close-menu").hide();
    $(".nav__list--mobile").hide();
});

$(".nav__hamburger").on("click", function() {
    $(".nav__hamburger").hide();
    $(".nav__close-menu").show();
    $(".nav__list--mobile").show().attr("aria-expanded", "true");
});

$(".nav__close-menu").on("click", function() {
    $(".nav__hamburger").show();
    $(".nav__close-menu").hide();
    $(".nav__list--mobile").hide().attr("aria-expanded", "false");
});

$(".nav__link--start").on("click", function(){
    if ($(".nav__list--mobile").css("display") === "block") {
        $(".nav__list--mobile").hide();
        $(".nav__hamburger").show();
        $(".nav__close-menu").hide();
    } else {
        return;
    }
});

$(".owl-carousel").on("translated.owl.carousel", function(e) {
    $(".owl-carousel .owl-item .team__position-box").removeClass("team__position-box--active");
    $(".owl-carousel .owl-item.center .team__position-box").addClass("team__position-box--active");
});

$('.team__next').click(function() {
    $('.team__carousel').trigger('next.owl.carousel', [300]);
});

$('.team__prev').click(function() {
    $('.team__carousel').trigger('prev.owl.carousel', [300]);
});

$(document).on('click', '.nav__link--mobile', function(e) {
    var id = $(this).attr('href');
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    e.preventDefault();
    var pos = $id.offset().top -50;
    $('body, html').animate({scrollTop: pos});
    $(".nav__hamburger").show();
    $(".nav__close-menu").hide();
    $(".nav__list--mobile").hide();
});

$(document).on('click', '.nav__link', function(e) {
    var id = $(this).attr('href');
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    e.preventDefault();
    var pos = $id.offset().top -50;
    $('body, html').animate({scrollTop: pos});
});

})();