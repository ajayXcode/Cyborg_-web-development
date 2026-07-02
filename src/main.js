import './style.css'

// Typing effect for hero subtitle
const typingText = document.getElementById('typing-text');
const textToType = "The next evolution of cybernetic enhancement. Seamless integration, infinite potential.";
let charIndex = 0;
typingText.textContent = ''; // Clear initial text

function typeText() {
  if (charIndex < textToType.length) {
    typingText.textContent += textToType.charAt(charIndex);
    charIndex++;
    const delay = Math.random() * 30 + 30; // Faster, smoother typing
    setTimeout(typeText, delay);
  }
}

// Start typing effect after a short delay
setTimeout(typeText, 800);

// Scroll Reveal using Intersection Observer
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Apply reveal to cards
document.querySelectorAll('.premium-card').forEach((card, index) => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(30px)';
  card.style.transition = `all 0.8s cubic-bezier(0.25, 1, 0.5, 1) ${index * 0.15}s`;
  observer.observe(card);
});
