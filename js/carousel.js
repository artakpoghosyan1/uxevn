


$(document).ready(function() {
    var $slider = $('.schedule-carousel');
    var $progressBar = $('.progress');

    $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        var calc = ( (nextSlide) / (slick.slideCount-1) ) * 200;

        $progressBar
            .css('background-size', calc + '% 100%')
            .attr('aria-valuenow', calc );

    });

    $('#scheduleCarousel').slick({
        dots: false,
        speed: 300,
        infinite: false,
        swipeToSlide: true,
        arrows: false,
        slidesToShow: 5.5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1681,
                settings: {
                    slidesToShow: 4.2,
                }
            },
            {
                breakpoint: 1441,
                settings: {
                    slidesToShow: 3.3,
                }
            },
            {
                breakpoint: 921,
                settings: {
                    slidesToShow: 2.5,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2.2,
                }
            },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1.3,
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1.1,
                }
            }
        ]
    });

    if ($(window).width() < 993) {
        // $('.schedule-list').removeClass('schedule-list--secondary');

        $('#scheduleCarouselSecond').slick({
            dots: false,
            speed: 300,
            rows: 2,
            infinite: false,
            swipeToSlide: true,
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2.2,
                    }
                },
                {
                    breakpoint: 577,
                    settings: {
                        slidesToShow: 1.3,
                    }
                },
                {
                    breakpoint: 375,
                    settings: {
                        slidesToShow: 1.1,
                    }
                }
            ]
        });

    }


    $('.twits-carousel').slick({
        dots: false,
        speed: 300,
        autoplay: true,
        infinite: false,
        swipeToSlide: true,
        arrows: false,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2.2,
                }
            },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1.08,
                }
            }
        ]
    });
});
