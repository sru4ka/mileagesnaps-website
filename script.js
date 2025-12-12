// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards and steps
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.feature-card, .step, .benefit-item');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Carousel dots functionality
    const carousel = document.querySelector('.steps-carousel');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    const steps = document.querySelectorAll('.steps-track .step');

    if (carousel && dots.length > 0 && steps.length > 0) {
        carousel.addEventListener('scroll', function() {
            const scrollLeft = carousel.scrollLeft;
            const stepWidth = steps[0].offsetWidth + 24; // width + gap
            const currentStep = Math.round(scrollLeft / stepWidth);

            dots.forEach((dot, index) => {
                dot.classList.remove('active');
                if (index === currentStep) {
                    dot.classList.add('active');
                }
            });
        });

        // Click on dots to scroll
        dots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                const stepWidth = steps[0].offsetWidth + 24;
                carousel.scrollTo({
                    left: index * stepWidth,
                    behavior: 'smooth'
                });
            });
        });
    }
});
