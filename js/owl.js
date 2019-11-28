$(function() {
    $(".owl-one").owlCarousel({
        merge: true,
        loop: true,
        margin: 10,
        video: true,
        lazyLoad: true,
        center: true,
        responsive: {
            320: {
                items: 1
            },
            560: {
                items: 2
            },
            992: {
                items: 1
            }
        }
    });

    $(".owl-three").owlCarousel({
        merge: true,
        loop: true,
        margin: 10,
        video: true,
        lazyLoad: true,
        center: true,
        responsive: {
            320: {
                items: 1
            },
            560: {
                items: 2
            },
            992: {
                items: 1
            }
        }
    });

});



$(".owl-two").owlCarousel({
    loop: true,
    responsive: {
        300: {
            items: 3,
        },
        400: {
            items: 3,
        },

        800: {
            items: 4,
        },
    }
});