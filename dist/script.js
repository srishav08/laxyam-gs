document.documentElement.classList.add('js');
const menuToggle = document.querySelector('.menu-toggle');
const mainNavigation = document.getElementById('main-navigation');
function closeMenu() {
  mainNavigation.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
}
menuToggle.addEventListener('click', () => {
  const isOpen = mainNavigation.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
mainNavigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuToggle.focus();
  }
});
window.matchMedia('(max-width: 720px)').addEventListener('change', closeMenu);
document.getElementById('year').textContent = new Date().getFullYear();
document.querySelectorAll('[data-course]').forEach(link => link.addEventListener('click', () => { document.querySelector('[name="course"]').value = link.dataset.course; }));
document.getElementById('enquiry-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const subject = `Course enquiry: ${data.get('course')}`;
  const body = `Hello Laxyam GS Academy,\n\nName: ${data.get('name')}\nPhone: ${data.get('phone')}\nEmail: ${data.get('email') || 'Not provided'}\nCourse: ${data.get('course')}\n\n${data.get('message') || 'I would like to know more about this course.'}\n`;
  window.location.href = `mailto:laxyamgsacademy@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.getElementById('form-status').textContent = 'Your enquiry is ready in your email app. Please press Send there to contact us. If your email app did not open, call +91 83456 12321.';
});
