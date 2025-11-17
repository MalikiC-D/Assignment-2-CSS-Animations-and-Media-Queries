// assignment2_MalikiCornwallDouglas.js
// Simple scroll reveal for elements with .fade-up
document.addEventListener("DOMContentLoaded", () => {
  const revealEls = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18
    }
  );

  revealEls.forEach(el => observer.observe(el));

  // Prevent default form submit for demo
  const form = document.querySelector(".cta-form");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Thanks! A launch checklist would be sent here in a real app.");
    });
  }
});
