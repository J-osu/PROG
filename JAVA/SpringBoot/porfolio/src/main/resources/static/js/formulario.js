document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const datosFormulario = {
        nombre: document.getElementById("nombre").value,
        correo: document.getElementById("correo").value,
        mensaje: document.getElementById("mensaje").value
    };

    fetch("http://localhost:8080/contacto/guardar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datosFormulario)
    })
    .then(response => response.json())
    .then(data => {
        alert("Formulario enviado correctamente");
        console.log("Respuesta del servidor:", data);
    })
    .catch(error => console.error("Error:", error));
});