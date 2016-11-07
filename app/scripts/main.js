
$(document).ready(function () {

    $('.nav-trigger-wrap').on('click', function(e) {
        e.preventDefault();

        $(this).find('.nav-trigger').toggleClass('active');

        $('.mobile-menu').toggleClass('active');
        $('.page-wrapper').toggleClass('active');
    });


    // Дропдаун меню в каталоге

    $('.catalog-nav-list > li > a').click(function(e) {

        if ($(this).next('ul').length) {

            e.preventDefault();

            $(this).toggleClass('active');

            $(this).next().slideToggle();
        }

    });

    // триггер каталога на мобильных

    $('.js-aside-nav-trigger').click(function(e) {

        e.preventDefault();

        $(this).toggleClass('active');
        $('.catalog-nav').slideToggle();

    });

    $('.popular-items-slider .wrapper').slick({
        variableWidth: true,
        slidesToShow: 4,
        infinite: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    centerMode: true
                }
            }
        ]
    });

    $('.reviews-slider .wrapper').slick({
        autoplay: true,
        prevArrow: $('.reviews-slider .arrow-left'),
        nextArrow: $('.reviews-slider .arrow-right')
    });
});