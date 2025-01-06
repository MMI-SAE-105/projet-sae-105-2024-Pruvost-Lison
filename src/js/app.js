//commande menu
document.addEventListener('DOMContentLoaded', function () {
    const panel = document.getElementById('panel');
    const openMenuButton = document.getElementById('btnmenu');
    const closeMenuButton = document.getElementById('hide-menu');

    // Ouvrir le menu
    openMenuButton.addEventListener('click', function () {
        panel.classList.add('go-right');
        panel.setAttribute('aria-hidden', 'false'); // Accessibilité
    });

    // Fermer le menu
    closeMenuButton.addEventListener('click', function () {
        panel.classList.remove('go-right');
        panel.setAttribute('aria-hidden', 'true'); // Accessibilité
    });
});


// commande accordéon
document.querySelectorAll('.accordion__header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
        header.classList.toggle('active');
    });
});

// commande caroussel

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const wrapper = document.querySelector('.wrapper');
let currentIndex = 0;

const totalItems = document.querySelectorAll('.wrapper .element').length;

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
    updateCaroussel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
    updateCaroussel();
});

function updateCaroussel() {
    const offset = -currentIndex * 100; // Calcule l'offset pour faire défiler les images
    wrapper.style.transform = `translateX(${offset}%)`; // Applique l'offset à la wrapper
}



