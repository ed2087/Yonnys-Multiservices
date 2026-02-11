/* ============================================
   INTERSECTION OBSERVER - Animate on Scroll
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  
  // Observe service cards
  const cards = document.querySelectorAll('.fade-in-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 100);
      }
    });
  }, {
    threshold: 0.2
  });
  
  cards.forEach(card => {
    observer.observe(card);
  });
  
  
  // Smooth scroll for anchor links
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
  
});


/* ============================================
   PARALLAX EFFECT
   ============================================ */

window.addEventListener('scroll', () => {
  const parallax = document.querySelector('.hero-parallax');
  const scrolled = window.pageYOffset;
  
  if (parallax && window.innerWidth > 768) {
    parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});