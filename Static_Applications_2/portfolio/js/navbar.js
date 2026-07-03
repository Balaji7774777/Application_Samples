const header = document.querySelector("header");
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav ul");

menuBtn?.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    nav.classList.toggle("active");
});

/* header scroll effect */
window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
});

/* scroll spy */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const top = section.offsetTop - 120;
        if (window.scrollY >= top) current = section.id;
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});