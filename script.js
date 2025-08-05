// Mobile Nav Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Slider Logic
const slides = [
  {
    title: 'Spring Season',
    description: 'Spring is a season of renewal and awakening. After the long slumber of winter, nature begins to bloom with vibrant colors and fresh scents.',
    bgColor: '#ff6f61'
  },
  {
    title: 'Winter Season',
    description: 'Winter casts a quiet, magical spell on the world. Blankets of snow cover the earth, turning landscapes into serene wonderlands.',
    bgColor: '#6b5b95'
  },
  {
    title: 'Winter Season',
    description: 'Winter arrives with a sharp, biting wind and a landscape stripped to its bare bones. It is a season that tests resilience.',
    bgColor: '#88b04b'
  }
];

let currentIndex = 0;
const slideEl = document.getElementById('slide');
const prevBtn = document.getElementById('prevSlide');
const nextBtn = document.getElementById('nextSlide');

function renderSlide(index) {
  slideEl.style.backgroundColor = slides[index].bgColor;
  slideEl.innerHTML = `
    <h3>${slides[index].title}</h3>
    <p>${slides[index].description}</p>
  `;
}

prevBtn.addEventListener('click', () => {
  currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
  renderSlide(currentIndex);
});
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  renderSlide(currentIndex);
});
renderSlide(currentIndex);

// Contact Form Validation
const form = document.querySelector('.contact-form');
const nameInput = form.name;
const emailInput = form.email;
const messageInput = form.message;
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const successMessage = document.getElementById('successMessage');

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  successMessage.style.display = 'none';

  let valid = true;

  if (!nameInput.value.trim()) {
    nameError.textContent = 'Name is required';
    valid = false;
  }
  if (!emailInput.value.trim()) {
    emailError.textContent = 'Email is required';
    valid = false;
  } else if (!isValidEmail(emailInput.value.trim())) {
    emailError.textContent = 'Email is invalid';
    valid = false;
  }
  if (!messageInput.value.trim()) {
    messageError.textContent = 'Message is required';
    valid = false;
  }

  if (valid) {
    successMessage.style.display = 'block';
    form.reset();
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 4000);
  }
});
