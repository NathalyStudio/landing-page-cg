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

// video player mejorado
document.querySelectorAll('.video-container').forEach(container => {
    const video = container.querySelector('video');
    const overlay = container.querySelector('.video-overlay');
    const playBtn = container.querySelector('.play-button');
    
    const togglePlay = () => {
        // Pausar todos los demás videos
        document.querySelectorAll('.video-container video').forEach(otherVideo => {
            if(otherVideo !== video) {
                otherVideo.pause();
                otherVideo.parentElement.querySelector('.play-button').style.display = 'flex';
                otherVideo.parentElement.querySelector('.video-overlay').style.opacity = '1';
            }
        });

        if(video.paused) {
            video.play();
            playBtn.style.display = 'none';
            overlay.style.opacity = '0'; // Ocultar overlay
        } else {
            video.pause();
            playBtn.style.display = 'flex';
            overlay.style.opacity = '1'; // Mostrar overlay
        }
    };

    // Control de clic en overlay y botón
    overlay.addEventListener('click', togglePlay);
    
    // Control de clic directo en el video
    video.addEventListener('click', (e) => {
        e.stopPropagation(); // Evitar que active el clic del overlay
        togglePlay();
    });
    
    // Restaurar controles al terminar el video
    video.addEventListener('ended', () => {
        playBtn.style.display = 'flex';
        overlay.style.opacity = '1';
    });
});
