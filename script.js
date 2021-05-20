const switchSideBtns = document.querySelectorAll('.switch-side-btn');
const navbar = document.querySelector('.navbar');
const hamburgerMenu = document.querySelector('.hamburger-menu');

[...switchSideBtns].forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.parentElement.parentElement.classList.toggle('change');
  });
});

hamburgerMenu.addEventListener('click', () => {
  navbar.classList.toggle('change');
});
