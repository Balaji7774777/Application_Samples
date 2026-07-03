const elements = document.querySelectorAll(
    ".expertise-card, .tech-category, .project-card, .timeline-item, .stat-box"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            entry.target.style.transitionDelay = `${i * 80}ms`;
        }
    });
}, {
    threshold: 0.15
});

elements.forEach(el => {
    el.classList.add("reveal");
    observer.observe(el);
});