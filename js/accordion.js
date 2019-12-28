const items = document.querySelectorAll(".accordion-link");

function toggleAccordion() {
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');
}

items.forEach(item => item.addEventListener('click', toggleAccordion));