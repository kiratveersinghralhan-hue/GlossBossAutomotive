const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const bookingForm = document.getElementById('bookingForm');
const formNote = document.getElementById('formNote');

if (bookingForm && formNote) {
  bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(bookingForm);
    const name = data.get('name');
    const service = data.get('service');
    formNote.textContent = `Thanks ${name || ''}. Your ${service || 'booking'} request was captured in this demo form. Connect this form to email, WhatsApp, Netlify Forms, or Formspree before going live.`;
    bookingForm.reset();
  });
}
