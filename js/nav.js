window.addEventListener('scroll', function() {
    var nav = document.querySelector(".nav-container");
    var scrollArrows = document.querySelector('.scroll-arrows');
    let scroll = window.scrollY;
    if (scroll > 100) {
        {
            nav.classList.add('nav-scroll')
            scrollArrows.classList.remove('arrows-visible');
        }

    } else {
        nav.classList.remove('nav-scroll');
        scrollArrows.classList.add('arrows-visible');
    }
});


const mobileOpen = document.querySelector('.open-nav');
const mobileClose = document.querySelector('.close-nav');
const navOverlay = document.querySelector('.nav-overlay');



mobileOpen.addEventListener('click', () => {
    navOverlay.classList.add('nav-visible');
    mobileOpen.style.visibility = "hidden";
});


mobileClose.addEventListener('click', () => {
    navOverlay.classList.remove('nav-visible');
    mobileOpen.style.visibility = "visible";
});