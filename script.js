// Mobile Navbar Toggle (Menu Icon kaam karega ab)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Scroll Animation Init
AOS.init();

// Typing Animation
const typed = new Typed('.typing-text', {
    strings: ['Software Developer', 'Web Developer', 'MCA Student'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});