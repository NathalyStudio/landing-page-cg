document.addEventListener('DOMContentLoaded', function() {
    // Cargar Header y Footer primero
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
            initializeMenu();
        })
        .catch(error => console.error('Error loading header:', error));

    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));

    // Función del menú hamburguesa
    function initializeMenu() {
        const hamburger = document.querySelector('.hamburger');
        const nav = document.querySelector('.header__nav');
        const body = document.body;

        if (!hamburger || !nav) {
            console.error('Elementos del menú no encontrados');
            return;
        }

        hamburger.addEventListener('click', function() {
            console.log('Botón clickeado');
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
    }

    // Resto de funcionalidades
    function initializeFAQ() {
        document.querySelectorAll('.faq-question').forEach(button => {
            button.addEventListener('click', () => {
                const faqItem = button.closest('.faq-item');
                faqItem.classList.toggle('active');
            });
        });

        const showMoreBtn = document.getElementById('showMoreBtn');
        const faqContainer = document.querySelector('.faq-container');

        if (showMoreBtn && faqContainer) {
            showMoreBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const isExpanded = faqContainer.classList.toggle('show-all');
                showMoreBtn.querySelector('span').textContent = isExpanded ? 'Show Less' : 'Show More';
            });
        }
    }

    function initializeVideoPlayers() {
        document.querySelectorAll('.video-container').forEach(container => {
            const video = container.querySelector('video');
            const overlay = container.querySelector('.video-overlay');
            const playBtn = container.querySelector('.play-button');
            
            const togglePlay = () => {
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
                    overlay.style.opacity = '0';
                } else {
                    video.pause();
                    playBtn.style.display = 'flex';
                    overlay.style.opacity = '1';
                }
            };

            overlay.addEventListener('click', togglePlay);
            video.addEventListener('click', (e) => {
                e.stopPropagation();
                togglePlay();
            });
            
            video.addEventListener('ended', () => {
                playBtn.style.display = 'flex';
                overlay.style.opacity = '1';
            });
        });
    }
});