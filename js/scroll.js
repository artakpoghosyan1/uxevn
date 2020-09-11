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
                $('.page-wrapper').addClass('main-page');
            }
            if (curLink.attr('href') !== '#homeSection') {
                $('.page-wrapper').removeClass('main-page');
            }

            if ($(window).width() < 993) {
                if (curLink.attr('href') === '#aboutSection' || curLink.attr('href') === '#workshopSection'
                        || curLink.attr('href') === '#sponsorSection') {
                    $('.page-wrapper').addClass('dark-theme');
                    $('.page-wrapper').removeClass('main-page');
                }
                else {
                    $('.page-wrapper').removeClass('dark-theme');
                }
            }

        } else {
            curLink.removeClass('active');
        }
    });

    // $('a.def-button').each(function() {
    //     var curLink = $(this);
    //     var refElement = $(curLink.attr('href'));
    //
    //     if (refElement.position().top <= scrollPos + 60) {
    //         if ($(window).width() < 993) {
    //             if (curLink.attr('href') === '#buyTicketSection') {
    //                 $('.page-wrapper').addClass('dark-theme');
    //             }
    //         }
    //     }
    // });
});

