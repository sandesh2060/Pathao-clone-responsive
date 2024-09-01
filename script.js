document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".ri-menu-2-line");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  menuIcon.addEventListener("click", () => {
    dropdownMenu.classList.toggle("show");
  });
});
