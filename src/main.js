import './style.css'

// Typing effect for hero subtitle
const typingText = document.getElementById('typing-text');
const textToType = "Augmenting reality. Bridging the gap between flesh and machine. Welcome to the next stage of human evolution.";
let charIndex = 0;

function typeText() {
  if (charIndex < textToType.length) {
    typingText.textContent += textToType.charAt(charIndex);
    charIndex++;
    // Randomize typing speed for more realistic effect
    const delay = Math.random() * 50 + 20; 
    setTimeout(typeText, delay);
  } else {
    // Add blinking cursor at the end
    setInterval(() => {
      if (typingText.textContent.endsWith('_')) {
        typingText.textContent = typingText.textContent.slice(0, -1);
      } else {
        typingText.textContent += '_';
      }
    }, 500);
  }
}

// Start typing effect after a short delay
setTimeout(typeText, 1000);

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
document.querySelectorAll('.cyber-card').forEach((card, index) => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(50px)';
  card.style.transition = `all 0.6s ease ${index * 0.2}s`;
  observer.observe(card);
});

// Randomize data stream hex codes
const dataBlocks = document.querySelectorAll('.data-stream div');
setInterval(() => {
  dataBlocks.forEach((block, index) => {
    if (index < 3) {
      const randomHex = Math.floor(Math.random()*16777215).toString(16).toUpperCase();
      block.textContent = `DATA_BLOCK_0${index + 1}: 0x${randomHex.padStart(4, '0')}`;
    }
  });
}, 2000);
