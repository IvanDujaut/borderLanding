const navToggle = document.querySelector(".navbar-toggle");
const navMenu = document.querySelector(".menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("menu_visible");
})