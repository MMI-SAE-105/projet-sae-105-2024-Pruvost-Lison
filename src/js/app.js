// //commande menu
// // Sélection des éléments
// const btnMenu = document.getElementById('btnmenu');
// const menuPanel = document.getElementById('panel');
// const btnClose = document.getElementById('hide-menu');

// // Ouvrir le menu
// btnMenu.addEventListener('click', () => {
//     menuPanel.classList.add('is-open');
//     menuPanel.setAttribute('aria-hidden', 'false');
//     btnMenu.setAttribute('aria-expanded', 'true');
// });

// // Fermer le menu
// btnClose.addEventListener('click', () => {
//     menuPanel.classList.remove('is-open');
//     menuPanel.setAttribute('aria-hidden', 'true');
//     btnMenu.setAttribute('aria-expanded', 'false');
// });

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
