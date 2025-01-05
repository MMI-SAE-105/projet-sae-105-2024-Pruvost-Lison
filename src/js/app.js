// commande accordéon
document.querySelectorAll('.accordion__header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
        header.classList.toggle('active');
    });
});
