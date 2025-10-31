// script.js - simple animation helpers, feather init, accessibility helpers

document.addEventListener('DOMContentLoaded', () => {
  // replace feather icons
  if (window.feather) feather.replace();

  // animate elements into view using IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target;
      if (entry.isIntersecting) {
        el.classList.add('in-view');
        // optional delay read from attribute
        const d = el.getAttribute('data-animate-delay');
        if (d) {
          el.style.transitionDelay = (parseInt(d) / 1000) + 's';
        }
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

  // navbar background handled in components/navbar.js (it listens to scroll)

  // simple keyboard accessibility: close mobile menu with Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const mm = document.getElementById('mobile-menu');
      if (mm && !mm.classList.contains('hidden')) mm.classList.add('hidden');
    }
  });

  // prefilling or small UI niceties could go here
});

document.addEventListener("DOMContentLoaded", () => {
  const underlines = document.querySelectorAll(".underline-draw");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.5 }
  );

  underlines.forEach((el) => observer.observe(el));
});

