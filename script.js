// Pre-fill form logic on service click
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card h4");
  const formBaseURL = "https://docs.google.com/forms/d/e/1FAIpQLSfHCJacbHbZ0TDgQx6xGXc1haJQxggLaA7FpWpsm3OKWQdGuQ/viewform";
  const entryID = "entry.1902269632"; // Replace with your actual entry ID
  // entry.1902269632=Hello

  cards.forEach(card => {
    card.style.cursor = "pointer";
    card.addEventListener("click", function () {
      const service = card.textContent.trim();
      const prefillURL = `${formBaseURL}?${entryID}=${encodeURIComponent(service)}`;
      window.open(prefillURL, '_blank');
    });
  });

  // Optional: remove error if contact form doesn't exist
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thanks for reaching out! We will get back to you shortly.');
      this.reset();
    });
  }
});
