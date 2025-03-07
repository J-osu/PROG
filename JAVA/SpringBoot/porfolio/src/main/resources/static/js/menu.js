const observer = new MutationObserver(() => {
    const navToggle = document.querySelector(".navbar-toggler");
    const navMenu = document.querySelector(".navbar-nav");

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.toggle("menu_visible");
        });

        observer.disconnect(); // Dejar de observar una vez encontrado el header
    }
});

// Observar cambios en el body hasta que el header aparezca
observer.observe(document.body, { childList: true, subtree: true });