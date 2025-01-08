// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const targetId = link.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 60, // Offset for sticky navbar
          behavior: "smooth",
        });
      }
    });
  });

  // Contact form submission handler
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      alert(`Thank you for reaching out, ${name}! I'll get back to you at ${email}.`);
      contactForm.reset();
    } else {
      alert("Please fill out all fields before submitting.");
    }
  });

  // Animation for cards (fade-in effect)
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => {
    card.classList.add("hidden");
    observer.observe(card);
  });
});
