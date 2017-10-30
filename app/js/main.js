(function(){

$('.team__carousel').slick({
    centerMode: true,
    centerPadding: '220px',
    slidesToShow: 3,
    responsive: [
        {
        breakpoint: 768,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
        }
        },
        {
        breakpoint: 480,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
        }
        }
    ]
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
})();