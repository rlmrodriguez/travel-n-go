const openBtn = document.querySelector("#openBtn");
const closeBtn = document.querySelector("#closeBtn");
const toggleBtns = document.querySelectorAll(".toggle");
const navMenu = document.querySelector("#navMenu");
const switchBtns = document.querySelectorAll(".switch-btn");
const navLinks = document.querySelectorAll(".nav__link");

const toggle = () => {
  openBtn.classList.toggle("hide");
  closeBtn.classList.toggle("hide");

  if (openBtn.classList.contains("hide")) {
    navMenu.style.right = "0";
    document.body.style.overflowY = "hidden";
  } else {
    navMenu.style.right = "-100vw";
    document.body.style.overflowY = "visible";
  }
};

toggleBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    toggle();
  });
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    toggle();
  });
});

switchBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.parentElement.classList.toggle("switch");
  });
});

const hiddenElems = document.querySelectorAll(".scroll");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);
    if (entry.isIntersecting) observer.unobserve(entry.target);
  });
});

hiddenElems.forEach((el) => {
  observer.observe(el);
});
