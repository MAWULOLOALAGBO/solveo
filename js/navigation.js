// -----------------------------------------
// NAVIGATION.JS — Gestion du header Solveo
// -----------------------------------------

// Effet header au scroll (léger, performant)
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (!header) return;

    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Sécurisation : empêche erreurs si un lien n'existe pas
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        // Aucun code ici pour l’instant → évite les erreurs
    });
});

