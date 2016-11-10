$(document).ready(function () {

    $('.nav-trigger-wrap').on('click', function (e) {
        e.preventDefault();

        $(this).find('.nav-trigger').toggleClass('active');

        $('.mobile-menu').toggleClass('active');
        $('.page-wrapper').toggleClass('active');
    });


    // Дропдаун меню в каталоге

    $('.catalog-nav-list > li > a').click(function (e) {

        if ($(this).next('ul').length) {

            e.preventDefault();

            $(this).toggleClass('active');

            $(this).next().slideToggle();
        }

    });

    // триггер каталога на мобильных

    $('.js-aside-nav-trigger').click(function (e) {

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

    // слайдер товара

    $('.full-item-preview-slider').slick({
        asNavFor: '.thumbnails-slider .wrapper',
        dots: false,
        arrows: false,
        infinite: false,
    });


    $('.full-item-preview-slider').on('beforeChange', function(e, slick, cur, next) {

        $('.thumbnails-slider')
            .find('.slide')
            .removeClass('slick-current')
            .eq(next)
            .addClass('slick-current');

    });



    // миниатюры в товаре.
    $('.thumbnails-slider .wrapper').slick({
        slidesToShow: 3,
        initialSlide: 2,
        asNavFor: '.full-item-preview-slider',
        focusOnSelect: true,
        variableWidth: true,
        mobileFirst: true,
        centerMode: true,
        infinite: false,
        prevArrow: $('.thumbnails-slider .arrow-left'),
        nextArrow: $('.thumbnails-slider .arrow-right'),
        responsive: [{
            breakpoint: 880,
            settings: {
                slidesToShow: 4,
                variableWidth: false,
                vertical: true,
                initialSlide: 0,
                centerMode: false,
                verticalSwiping: true
            }
        }]
    });


    // слайдер новостей (на мобильном)

    $('.news-section-slider .row').slick({
        autoplay: true,
        variableWidth: true,
        mobileFirst: true,
        centerMode: true,
        prevArrow: $('.news-section-slider .square-arrow-left'),
        nextArrow: $('.news-section-slider .square-arrow-right'),
        responsive: [
            {
                breakpoint: 880,
                settings: 'unslick'
            }
        ]
    });

    $('.fancybox-modal').fancybox({
        closeBtn: false,
        fitToView: false,
        scrolling: 'visible',
        padding: 0
    });

    $('.fancybox').fancybox();
    
    initTabs();

    // Простая реализация табов

    // pane-tab - это наш триггер табов.
    // tab-content - содержание таба

    function initTabs() {

        $('.tab-pane').click(onPaneClick);

    }

    function onPaneClick(e) {
        e.preventDefault();

        // таргет по которому кликнули
        var $clickedPane = $(this),

        // все триггеры табов
            tabgroup = $clickedPane.data('grouptrigger'),
            $panes = $('[data-grouptrigger="' + tabgroup + '"]'),

        // содержимое всех табов
            $tabContents = $('[data-tabgroup="' + tabgroup + '"]'),



            href = $clickedPane.data('href'),

        // нужное содержимое таба
            $targetTabContent = $('#' + href);

        console.log($targetTabContent);

        $panes.removeClass('active');

        $clickedPane.addClass('active');

        $tabContents.removeClass('active');

        $targetTabContent.addClass('active');
    }
});