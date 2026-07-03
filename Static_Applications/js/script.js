/*==================================================
  DEVOPS PORTFOLIO
  SCRIPT.JS
===================================================*/

/*=========================
LOADER
=========================*/
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1200);
});

/*=========================
STICKY HEADER ON SCROLL
=========================*/
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

/*=========================
MOBILE MENU TOGGLE
=========================*/
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

/*=========================
SMOOTH SCROLL NAV LINKS
=========================*/
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: "smooth"
            });
        }

        nav.classList.remove("active");
    });
});

/*=========================
CUSTOM CURSOR
=========================*/
const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

let mouseX = 0;
let mouseY = 0;
let followerX = 0;
let followerY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
});

/* Smooth follower animation */
function animateFollower() {
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;

    follower.style.left = followerX + "px";
    follower.style.top = followerY + "px";

    requestAnimationFrame(animateFollower);
}
animateFollower();

/*=========================
BACK TO TOP BUTTON
=========================*/
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/*=========================
SECTION FADE IN ON SCROLL
=========================*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-up");
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll("section, .project-card, .expertise-card, .tech-category, .timeline-content, .metric")
    .forEach(el => observer.observe(el));

/*=========================
TERMINAL TYPE EFFECT (OPTIONAL POLISH)
=========================*/
const terminal = document.querySelector(".terminal-window code");

if (terminal) {
    const text = terminal.innerText;
    terminal.innerText = "";

    let i = 0;

    function typeEffect() {
        if (i < text.length) {
            terminal.innerText += text.charAt(i);
            i++;
            setTimeout(typeEffect, 8);
        }
    }

    typeEffect();
}

/*=========================
PARTICLE BACKGROUND (SIMPLE VERSION)
=========================*/
const particlesContainer = document.getElementById("particles");

function createParticle() {
    const p = document.createElement("div");

    const size = Math.random() * 3 + 1;

    p.style.position = "absolute";
    p.style.width = size + "px";
    p.style.height = size + "px";
    p.style.background = "rgba(255,255,255,0.4)";
    p.style.borderRadius = "50%";
    p.style.left = Math.random() * window.innerWidth + "px";
    p.style.top = window.innerHeight + "px";
    p.style.opacity = Math.random();

    particlesContainer.appendChild(p);

    let speed = Math.random() * 1 + 0.3;

    function fall() {
        let top = parseFloat(p.style.top);
        if (top < -10) {
            p.remove();
        } else {
            p.style.top = top - speed + "px";
            requestAnimationFrame(fall);
        }
    }

    fall();
}

setInterval(createParticle, 250);

/*=========================
ACTIVE SECTION HIGHLIGHT
=========================*/
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

/*=========================
MOBILE NAV STYLE SUPPORT (JS SIDE)
=========================*/
const style = document.createElement("style");

style.innerHTML = `
nav ul.active{
    display:flex;
    flex-direction:column;
    position:absolute;
    top:70px;
    right:20px;
    background:rgba(5,8,22,0.95);
    padding:20px;
    border-radius:12px;
    gap:16px;
    border:1px solid rgba(255,255,255,0.08);
}
`;

document.head.appendChild(style);