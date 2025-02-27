class OjosSeguidores {
  constructor(selector) {
    this.ojos = document.querySelectorAll(selector);

    // Eventos para el ratón y la pantalla táctil
    document.addEventListener("mousemove", (event) => this.moverPupilas(event));
    document.addEventListener("touchmove", (event) => this.moverPupilas(event), { passive: false });
  }

  moverPupilas(event) {
    event.preventDefault(); // Evita el desplazamiento de la pantalla en móviles

    // Obtener coordenadas del ratón o del touch
    const mouseX = event.touches ? event.touches[0].clientX : event.clientX;
    const mouseY = event.touches ? event.touches[0].clientY : event.clientY;

    this.ojos.forEach((ojo) => {
      const rect = ojo.getBoundingClientRect();
      const eyeX = rect.left + rect.width / 2;
      const eyeY = rect.top + rect.height / 2;

      const angle = Math.atan2(mouseY - eyeY, mouseX - eyeX);
      const maxDistance = 30;
      const pupilaX = Math.cos(angle) * maxDistance;
      const pupilaY = Math.sin(angle) * maxDistance;

      const pupila = ojo.querySelector(".pupila");
      pupila.style.transform = `translate(${pupilaX}px, ${pupilaY}px)`;
    });
  }
}

new OjosSeguidores(".ojo1, .ojo2");
