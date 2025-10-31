// 🌟 Page fade-in when loaded
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
  feather.replace(); // if using Feather icons
});

// 🌟 Fade-in on scroll for elements with [data-animate]
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("[data-animate]");

  function revealOnScroll() {
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100 && !el.classList.contains("visible")) {
        const delay = el.dataset.animateDelay ? parseInt(el.dataset.animateDelay) : 0;
        setTimeout(() => {
          el.classList.add("visible");
        }, delay);
      }
    });
  }

  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll);
});
