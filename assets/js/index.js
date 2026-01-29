document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
        once: true,
        offset: 50
    });

    // Navigation Scroll Effect
    const nav = document.getElementById('nav-bar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('nav-active');
        } else {
            nav.classList.remove('nav-active');
        }
    });

    // Custom Cursor Glow effect (Subtle)
    const cursorGlow = document.getElementById('cursor-glow');

    // Add style for cursor glow if not in CSS
    if (cursorGlow) {
        Object.assign(cursorGlow.style, {
            position: 'fixed',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(255, 107, 0, 0.08) 0%, transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: '-1',
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 0.3s ease',
            opacity: '0'
        });

        document.addEventListener('mousemove', (e) => {
            cursorGlow.style.left = e.clientX + 'px';
            cursorGlow.style.top = e.clientY + 'px';
            cursorGlow.style.opacity = '1';
        });

        document.addEventListener('mouseleave', () => {
            cursorGlow.style.opacity = '0';
        });
    }

    // Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.replace('fa-bars-staggered', 'fa-xmark');
            } else {
                icon.classList.replace('fa-xmark', 'fa-bars-staggered');
            }
        });

        // Close menu when clicking a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileToggle.querySelector('i').classList.replace('fa-xmark', 'fa-bars-staggered');
            });
        });
    }

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact Form Mailto Logic
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

            window.location.href = `mailto:mh399349@gmail.com?subject=${subject}&body=${body}`;
        });
    }
});
