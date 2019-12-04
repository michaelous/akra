$(function() {
    $(".owl-one").owlCarousel({
        margin: 10,
        lazyLoad: true,
        center: true,
        responsive: {
            992: {
                items: 1
            }
        }
    });

    $(".owl-two").owlCarousel({
        loop: true,
        lazyLoad: true,
        margin: 100,
        responsive: {
            800: {
                items: 4,
            },
        }
    });

    $(".owl-three").owlCarousel({
        loop: true,
        margin: 10,
        center: true,
        responsive: {
            992: {
                items: 1
            }
        }
    });

});