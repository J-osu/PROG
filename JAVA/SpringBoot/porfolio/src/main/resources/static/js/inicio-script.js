class OjosSeguidores {
  constructor(selector) {
    this.ojos = document.querySelectorAll(selector);
    this.touchStartY = 0;
    this.refreshArrow = this.crearFlechaRecarga();

    // Eventos para el ratón y la pantalla táctil
    document.addEventListener("mousemove", (event) => this.moverPupilas(event));
    document.addEventListener("touchmove", (event) => this.moverPupilas(event), { passive: false });

    // Eventos para refrescar en móviles
    document.addEventListener("touchstart", (event) => this.iniciarTouch(event), { passive: true });
    document.addEventListener("touchmove", (event) => this.mostrarFlecha(event));
    document.addEventListener("touchend", (event) => this.verificarRecarga(event));
  }

  moverPupilas(event) {
    event.preventDefault(); // Evita el desplazamiento de la pantalla en móviles

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

  iniciarTouch(event) {
    this.touchStartY = event.touches[0].clientY;
  }

  mostrarFlecha(event) {
    const touchY = event.touches[0].clientY;
    const desplazamiento = touchY - this.touchStartY;

    if (window.scrollY === 0 && desplazamiento > 50) {
      this.refreshArrow.style.opacity = Math.min((desplazamiento - 50) / 50, 1); // Aparece progresivamente
      this.refreshArrow.style.transform = `translateY(${Math.min(desplazamiento - 50, 50)}px)`;
    } else {
      this.refreshArrow.style.opacity = 0; // Oculta la flecha si no se desliza lo suficiente
    }
  }

  verificarRecarga(event) {
    const touchEndY = event.changedTouches[0].clientY;
    const desplazamientoTotal = touchEndY - this.touchStartY;

    if (window.scrollY === 0 && desplazamientoTotal > 100) {
      location.reload(); // Recargar la página si el usuario desliza más de 100px
    } else {
      this.refreshArrow.style.opacity = 0; // Si no alcanza el umbral, desaparece
    }
  }

  crearFlechaRecarga() {
    const flecha = document.createElement("div");
    flecha.innerHTML = "&#x21bb;"; // Código Unicode de una flecha de recarga.
    flecha.style.position = "fixed";
    flecha.style.top = "20px";
    flecha.style.left = "50%";
    flecha.style.transform = "translateX(-50%)";
    flecha.style.fontSize = "30px";
    flecha.style.color = "#fff";
    flecha.style.opacity = "0";
    flecha.style.transition = "opacity 0.3s, transform 0.3s";
    document.body.appendChild(flecha);
    return flecha;
  }
}

new OjosSeguidores(".ojo1, .ojo2");