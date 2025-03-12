document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filters .btn");
    const projectCards = document.querySelectorAll(".col");

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Remover la clase 'active' de todos los botones
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        // Añadir la clase 'active' al botón clickeado
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        // Mostrar u ocultar proyectos según el filtro
        projectCards.forEach((card) => {
          const category = card.getAttribute("data-category");
          if (filter === "all" || category === filter) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  });