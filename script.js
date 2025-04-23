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
// FAQ Toggle
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.closest('.faq-item');
        faqItem.classList.toggle('active');
    });
});

// Show More/Less
const showMoreBtn = document.getElementById('showMoreBtn');
const faqContainer = document.querySelector('.faq-container');

if (showMoreBtn && faqContainer) {
    showMoreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const isExpanded = faqContainer.classList.toggle('show-all');
        
        // Animación suave al finalizar la transición
        const handleTransitionEnd = () => {
            faqContainer.removeEventListener('transitionend', handleTransitionEnd);
        };
        
        faqContainer.addEventListener('transitionend', handleTransitionEnd);
        
        // Cambiar texto después de la transición
        showMoreBtn.querySelector('span').textContent = isExpanded ? 'Show Less' : 'Show More';
    });
}