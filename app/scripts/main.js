
$(document).ready(function () {

    $('.nav-trigger-wrap').on('click', function(e) {
        e.preventDefault();

        $(this).find('.nav-trigger').toggleClass('active');

        $('.mobile-menu').toggleClass('active');
        $('.page-wrapper').toggleClass('active');
    });
    
});