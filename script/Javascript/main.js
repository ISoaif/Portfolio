// menu

const menu = document.querySelector(".navbar__links");
const link = document.querySelector(".navbar__link");
const name = document.querySelector(".navbar__name");
const menuButton = document.querySelector(".navbar__icons");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  name.classList.toggle("navbar_change_color");
});
