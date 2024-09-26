



document.addEventListener("DOMContentLoaded", function () {
  // Initialize the map when DOM is fully loaded
  var map = L.map('map').setView([-8.3405, 115.092], 13); // Bali, Indonesia

  // Add OpenStreetMap tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
});



  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });



  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;

      // Close all other open FAQ items
      document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
          item.classList.remove('active');
          item.querySelector('.faq-answer').style.maxHeight = null;
          item.querySelector('.faq-toggle').textContent = '+';
        }
      });

      // Toggle the clicked FAQ item
      faqItem.classList.toggle('active');

      const faqAnswer = faqItem.querySelector('.faq-answer');
      const faqToggle = faqItem.querySelector('.faq-toggle');

      if (faqItem.classList.contains('active')) {
        faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
        faqToggle.textContent = '-';
      } else {
        faqAnswer.style.maxHeight = null;
        faqToggle.textContent = '+';
      }
    });
  });

  
  // Get the modal
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalText = document.getElementById('modal-text');

  // Get all cards
  const cards = document.querySelectorAll('.card');

  // Add click event to each card to open modal
  cards.forEach(card => {
    card.addEventListener('click', function () {
      // Set modal content
      modalImg.src = card.querySelector('img').src;
      modalTitle.textContent = card.getAttribute('data-title');
      modalText.textContent = card.getAttribute('data-text');

          // Show the modal with animation
  modal.classList.add('show');

// Trigger reflow for smooth animation
requestAnimationFrame(() => {
modal.style.opacity = 1;
modal.querySelector('.modal-content').style.transform = 'scale(1)';
});
});
});

// Close modal when clicking the close button
const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', function () {
modal.style.opacity = 0;
modal.querySelector('.modal-content').style.transform = 'scale(0.7)';

// Wait for the animation to finish before hiding
setTimeout(() => {
modal.classList.remove('show');
}, 500);
});

// Close modal when clicking outside the modal content
window.addEventListener('click', function (event) {
if (event.target === modal) {
modal.style.opacity = 0;
modal.querySelector('.modal-content').style.transform = 'scale(0.7)';

// Wait for the animation to finish before hiding
setTimeout(() => {
modal.classList.remove('show');
}, 500);
}
});