package com.jc.porfolio.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class siteControllers {
    @GetMapping("/")
    public String home(){
        return "/www/site/index";
    }
    @GetMapping("/experiencia")
    public String exper(){
        return "/www/site/experiencia";
    }
    @GetMapping("/proyectos")
    public String proyects(){
        return "/www/site/proyectos";
    }
    @GetMapping("/contacto")
    public String contacto(){
        return "/www/site/contacto";
    }
}
