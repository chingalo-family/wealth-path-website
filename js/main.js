// Smooth scrolling for anchor links
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

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
});

// Active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 100)) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Update active link on scroll
window.addEventListener('scroll', updateActiveNavLink);

// Update active link on page load
document.addEventListener('DOMContentLoaded', updateActiveNavLink);

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .pricing-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Set current year in footer copyright
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const copyrightElements = document.querySelectorAll('.footer-copyright, .footer-bottom p');
    copyrightElements.forEach(el => {
        if (el && el.textContent.includes('©')) {
            el.textContent = `© ${currentYear} Wealth Path by Chingalo Family. All rights reserved.`;
        }
    });
});

// Mobile menu toggle function
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const toggleBtn = document.querySelector('.mobile-menu-toggle i');
    
    navLinks.classList.toggle('mobile-active');
    
    // Toggle icon between bars and times (X)
    if (navLinks.classList.contains('mobile-active')) {
        toggleBtn.classList.remove('fa-bars');
        toggleBtn.classList.add('fa-times');
    } else {
        toggleBtn.classList.remove('fa-times');
        toggleBtn.classList.add('fa-bars');
    }
}

// Close mobile menu when clicking on a link
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-links');
            const toggleBtn = document.querySelector('.mobile-menu-toggle i');
            
            if (navMenu.classList.contains('mobile-active')) {
                navMenu.classList.remove('mobile-active');
                toggleBtn.classList.remove('fa-times');
                toggleBtn.classList.add('fa-bars');
            }
        });
    });
});

console.log('Wealth Path website loaded successfully!');
