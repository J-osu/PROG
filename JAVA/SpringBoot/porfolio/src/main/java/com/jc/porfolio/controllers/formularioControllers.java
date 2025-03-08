package com.jc.porfolio.controllers;

import com.jc.porfolio.model.entity.Formulario;

import com.jc.porfolio.model.repository.FormularioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/contacto")
public class formularioControllers {

    @Autowired
    private FormularioRepository formularioRepository;

    // Guardar datos del formulario
    @PostMapping("/guardar")
    public Formulario guardarFormulario(@RequestBody Formulario formulario) {
        return formularioRepository.save(formulario);
    }
    
}
