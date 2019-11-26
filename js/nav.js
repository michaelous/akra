window.addEventListener('scroll', function() {
    var nav = document.querySelector(".nav-container");
    let scroll = window.scrollY;
    if (scroll > 100) {
        nav.classList.add('nav-scroll')
    } else {
        nav.classList.remove('nav-scroll');
    }
});
const numbers = document.querySelectorAll('.js-count');
for (i = 0; i < numbers.length; ++i) {
    let val = numbers[i].innerHTML;

};