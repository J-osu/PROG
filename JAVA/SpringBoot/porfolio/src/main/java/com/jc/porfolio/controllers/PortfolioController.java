package com.jc.porfolio.controllers;


import com.jc.porfolio.model.entity.PortfolioData;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PortfolioController {

    @GetMapping("/data")
    public PortfolioData getPortfolioData() {
        PortfolioData portfolioData = new PortfolioData();

        // Datos de ejemplo
        PortfolioData.Home home = new PortfolioData.Home();
        home.setTitle("Bienvenido a mi portafolio");
        home.setDescription("Este es un ejemplo de descripción.");
        portfolioData.setHome(home);

        PortfolioData.Experience experience = new PortfolioData.Experience();
        experience.setId(1);
        experience.setCompany("Empresa Ejemplo");
        experience.setPosition("Desarrollador");
        experience.setPeriod("2020 - 2023");
        experience.setResponsibilities(List.of("Desarrollar aplicaciones", "Mantener sistemas"));
        portfolioData.setExperience(List.of(experience));

        PortfolioData.Project project = new PortfolioData.Project();
        project.setId(1);
        project.setName("Proyecto Ejemplo");
        project.setDescription("Descripción del proyecto.");
        project.setTechnologies(List.of("Java", "Spring Boot", "React"));
        project.setDemoUrl("http://demo.com");
        project.setRepoUrl("http://github.com");
        portfolioData.setProjects(List.of(project));

        PortfolioData.Contact contact = new PortfolioData.Contact();
        contact.setEmail("ejemplo@email.com");
        PortfolioData.Contact.SocialMedia socialMedia = new PortfolioData.Contact.SocialMedia();
        socialMedia.setGithub("http://github.com");
        socialMedia.setLinkedin("http://linkedin.com");
        contact.setSocialMedia(socialMedia);
        portfolioData.setContact(contact);

        return portfolioData;
    }
}