const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("activate");
    navMenu.classList.toggle("activate");
});

document.querySelectorAll(".nav-link").forEach((link) =>
    link.addEventListener("click", () => {
        hamburger.classList.remove("activate");
        navMenu.classList.remove("activate");
    })
);