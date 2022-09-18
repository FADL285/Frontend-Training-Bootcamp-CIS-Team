// Select DOM Elements
const navbarToggler = document.getElementById("navbar-toggler");
const navbarMenu = document.getElementById("navbar-menu");
const navbarBackdrop = document.getElementById("backdrop");
const navbarMenuCloseBtn = document.getElementById("navbar-menu-close");


// Create Function to open the menu
function openMenu() {
  navbarMenu.classList.add("navbar__menu--open");
  navbarBackdrop.classList.add("navbar__backdrop--open");
}

// Create function to close the menu
function closeMenu() {
  navbarMenu.classList.remove("navbar__menu--open");
  navbarBackdrop.classList.remove("navbar__backdrop--open");
}

// Create Function to toggle the menu
function toggleMenu() {
  navbarToggler.addEventListener("click", openMenu);
  navbarMenuCloseBtn.addEventListener("click", closeMenu);
  navbarBackdrop.addEventListener("click", closeMenu);
}

// DomContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  // Call the function
  toggleMenu();
});
