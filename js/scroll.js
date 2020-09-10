$(function() {
    $('.scroll-page').on('click', function() {
        var offset = 0;
        var speed = 800;
        var target = $(this.hash);

        $('.navigation a').each(function() {
            $(this).removeClass('active');
            $('.navigation').removeClass('show');
            $('html').removeClass('no-scroll');
        });

        $(this).addClass('active');

        $('html, body').animate({
            scrollTop: target.offset().top - offset}, speed, 'swing');
    });
});

$(window).scroll(function(event) {
    var scrollPos = $(document).scrollTop();

    $('.header .menu-list a').each(function() {
        var curLink = $(this);

        var refElement = $(curLink.attr('href'));

        if (refElement.position().top <= scrollPos + 60) {
            $('.header .menu-list a').removeClass('active');
            curLink.addClass('active');

            if (curLink.attr('href') === '#homeSection') {
                $('.page-wrapper').addClass('main-page').removeClass('dark-theme');
            }
            else if (curLink.attr('href') === '#aboutSection' || curLink.attr('href') === '#workshopSection'
                    || curLink.attr('href') === '#contactSection' || curLink.attr('href') === '#sponsorSection') {
                $('.page-wrapper').removeClass('main-page');
                $('.page-wrapper').addClass('dark-theme');
            }
            else {
                $('.page-wrapper').removeClass('main-page');
                $('.page-wrapper').removeClass('dark-theme');
            }

        } else {
            curLink.removeClass('active');
        }
    });

    $('a.def-button').each(function() {
        var curLink = $(this);
        var refElement = $(curLink.attr('href'));

        if (refElement.position().top <= scrollPos + 60) {
            if (curLink.attr('href') === '#buyTicketSection') {
                $('.page-wrapper').addClass('dark-theme');
            }
        }
    });
});

