


const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const heroLink = document.getElementById('hero-link');
const emailLink = document.getElementById('email-link');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  
  // Hide other links, show only Our Services and Whatsapp Us
  heroLink.style.display = 'none';
  emailLink.style.display = 'none';
});
