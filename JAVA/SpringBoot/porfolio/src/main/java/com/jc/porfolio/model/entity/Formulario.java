package com.jc.porfolio.model.entity;

import jakarta.persistence.*;
import javax.validation.constraints.NotEmpty;

@Entity
public class Formulario {
    
    @Id @GeneratedValue
    private long id;
    @Column(nullable = false)
    @NotEmpty
    private String nombre;
    @Column(nullable = false)
    @NotEmpty
    private String correo;
    @Column(nullable = true)
    private String mensaje;

    public Formulario() {
        // Constructor vacío necesario para JPA
    }

    public Formulario(String nombre, String correo, String email){

    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public void setCorreo(String correo) {
        this.correo = correo;
    }
    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }
    public String getNombre() {
        return nombre;
    }
    public String getCorreo() {
        return correo;
    }
    public String getMensaje() {
        return mensaje;
    }

}
