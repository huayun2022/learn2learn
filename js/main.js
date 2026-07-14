// Fade-in animation on scroll
document.addEventListener('DOMContentLoaded', function() {
  const fadeElements = document.querySelectorAll('.problem-card, .knowledge-card, .strategy-card, .plan-item');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  fadeElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

  // Entrance card click hint
  const cards = document.querySelectorAll('.entrance-card');
  cards.forEach(card => {
    card.addEventListener('click', function(e) {
      // Natural navigation via <a> tag
    });
  });
});
