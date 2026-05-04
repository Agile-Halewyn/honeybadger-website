document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.querySelector('.nav__menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('nav__menu--open');
      toggle.setAttribute(
        'aria-expanded',
        toggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true',
      );
    });
  }
});
