// select DOM elements

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuBranding = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");
const card = document.querySelectorAll(".card");

//set state of menu
let showMenu = false;

//add event listeners
menuBtn.addEventListener("click", toggleMenu);

card.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("flipped");
  });
});

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    showMenu = false;
  }
}

function flip() {
  event.stopPropagation();
  const { flipped } = event.target.attributes;

  event.target.classList.toggle("flipped");
}
