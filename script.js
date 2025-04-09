document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.header__nav');
    const body = document.body;

    // Asegurarse de que los elementos existen
    if (!hamburger || !nav) return;

    hamburger.addEventListener('click', function() {
        console.log('Botón clickeado'); // Para debug
        this.classList.toggle('active');
        nav.classList.toggle('active');
        body.classList.toggle('menu-open');
    });

    // Cerrar menú al hacer clic en enlaces
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });
});