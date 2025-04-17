package com.jc.porfolio.controllers;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api") // Ruta base para este controlador
public class PortfolioControllers {

    @GetMapping("/data") // Endpoint específico
    public String getData() {
        return "¡Hola desde el backend!"; // Respuesta de prueba
    }
}