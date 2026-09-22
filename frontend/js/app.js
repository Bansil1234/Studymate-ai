const menuButtons = document.querySelectorAll('.menu-toggle');

menuButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const menu = document.getElementById(button.getAttribute('aria-controls'));
    const isOpen = menu.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(isOpen));
  });
});

document.querySelectorAll('[data-demo-form]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = form.querySelector('.form-message');
    const action = form.dataset.demoForm === 'login' ? 'Login' : 'Registration';
    message.textContent = `${action} form is ready for backend integration.`;
  });
});
