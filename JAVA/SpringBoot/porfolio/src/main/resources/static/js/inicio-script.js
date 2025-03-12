class OjosSeguidores {
  constructor(selector) {
    this.ojos = document.querySelectorAll(selector);
    this.touchingEye = false; // Para verificar si el touch está sobre los ojos

    // Eventos para el ratón
    document.addEventListener("mousemove", (event) => this.moverPupilas(event));

    // Eventos táctiles
    document.addEventListener("touchstart", (event) => this.detectarTouch(event), { passive: true });
    document.addEventListener("touchmove", (event) => this.moverPupilasTouch(event), { passive: false });
    document.addEventListener("touchend", () => (this.touchingEye = false));
  }

  moverPupilas(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

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

  detectarTouch(event) {
    const touch = event.touches[0];
    this.touchingEye = [...this.ojos].some((ojo) => ojo.contains(document.elementFromPoint(touch.clientX, touch.clientY)));
  }

  moverPupilasTouch(event) {
    if (!this.touchingEye) return; // Solo mover si se toca un ojo

    const touch = event.touches[0];
    const touchX = touch.clientX;
    const touchY = touch.clientY;

    this.ojos.forEach((ojo) => {
      const rect = ojo.getBoundingClientRect();
      const eyeX = rect.left + rect.width / 2;
      const eyeY = rect.top + rect.height / 2;

      const angle = Math.atan2(touchY - eyeY, touchX - eyeX);
      const maxDistance = 30;
      const pupilaX = Math.cos(angle) * maxDistance;
      const pupilaY = Math.sin(angle) * maxDistance;

      const pupila = ojo.querySelector(".pupila");
      pupila.style.transform = `translate(${pupilaX}px, ${pupilaY}px)`;
    });

    event.preventDefault(); // Evita el scroll accidental al mover los ojos
  }
}

new OjosSeguidores(".ojo1, .ojo2");