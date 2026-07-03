async function loadComponent(id, file) {
    try {
        const res = await fetch(file);
        const html = await res.text();
        document.getElementById(id).innerHTML = html;
    } catch (err) {
        console.error("Error loading:", file, err);
    }
}

loadComponent("header", "components/header.html");
loadComponent("hero-section", "components/hero.html");
loadComponent("about-section", "components/about.html");
loadComponent("expertise-section", "components/expertise.html");
loadComponent("tech-section", "components/tech.html");
loadComponent("projects-section", "components/projects.html");
loadComponent("experience-section", "components/experience.html");
loadComponent("contact-section", "components/contact.html");
loadComponent("footer", "components/footer.html");