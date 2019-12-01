let tabs = document.querySelectorAll(".tab");
tabs.forEach(function(element) {
    element.addEventListener('click', function(e) {
        e.preventDefault();
        let active = document.querySelector('.selected');
        if (active) {
            active.classList.remove('selected');
            this.classList.add('selected');
        }
        let previousActive = document.querySelectorAll('.tab-content')
        for (let i = 0; i < previousActive.length; ++i) {
            if (previousActive[i].classList.contains('visible'))
                previousActive[i].classList.remove('visible');
        }
        active = document.querySelector('.selected');
        let sibling = active.nextElementSibling;
        sibling.classList.add('visible');
    });
});