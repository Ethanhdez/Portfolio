// Animaciones de scroll con ScrollReveal
if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal();

    sr.reveal('.hero-content', {
        delay: 200,
        distance: '50px',
        origin: 'left',
        duration: 1000
    });

    sr.reveal('.product-card', {
        delay: 300,
        interval: 200,
        distance: '50px',
        origin: 'bottom',
        duration: 1000
    });

    sr.reveal('.about, .contact', {
        delay: 400,
        distance: '50px',
        origin: 'top',
        duration: 1000
    });
}

// Smooth scroll para navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
