package com.jc.porfolio.model.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;

public class PortfolioData {
    @JsonProperty("home")
    private Home home;

    @JsonProperty("experience")
    private List<Experience> experience;

    @JsonProperty("projects")
    private List<Project> projects;

    @JsonProperty("contact")
    private Contact contact;

    // Getters y setters para los campos principales
    public Home getHome() {
        return home;
    }

    public void setHome(Home home) {
        this.home = home;
    }

    public List<Experience> getExperience() {
        return experience;
    }

    public void setExperience(List<Experience> experience) {
        this.experience = experience;
    }

    public List<Project> getProjects() {
        return projects;
    }

    public void setProjects(List<Project> projects) {
        this.projects = projects;
    }

    public Contact getContact() {
        return contact;
    }

    public void setContact(Contact contact) {
        this.contact = contact;
    }

    public static class Home {
        private String title;
        private String description;

        // Getters y setters para Home
        public String getTitle() {
            return title;
        }

        public void setTitle(String title) {
            this.title = title;
        }

        public String getDescription() {
            return description;
        }

        public void setDescription(String description) {
            this.description = description;
        }
    }

    public static class Experience {
        private int id;
        private String company;
        private String position;
        private String period;
        private List<String> responsibilities;

        // Getters y setters para Experience
        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public String getCompany() {
            return company;
        }

        public void setCompany(String company) {
            this.company = company;
        }

        public String getPosition() {
            return position;
        }

        public void setPosition(String position) {
            this.position = position;
        }

        public String getPeriod() {
            return period;
        }

        public void setPeriod(String period) {
            this.period = period;
        }

        public List<String> getResponsibilities() {
            return responsibilities;
        }

        public void setResponsibilities(List<String> responsibilities) {
            this.responsibilities = responsibilities;
        }
    }

    public static class Project {
        private int id;
        private String name;
        private String description;
        private List<String> technologies;
        private String demoUrl;
        private String repoUrl;

        // Getters y setters para Project
        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getDescription() {
            return description;
        }

        public void setDescription(String description) {
            this.description = description;
        }

        public List<String> getTechnologies() {
            return technologies;
        }

        public void setTechnologies(List<String> technologies) {
            this.technologies = technologies;
        }

        public String getDemoUrl() {
            return demoUrl;
        }

        public void setDemoUrl(String demoUrl) {
            this.demoUrl = demoUrl;
        }

        public String getRepoUrl() {
            return repoUrl;
        }

        public void setRepoUrl(String repoUrl) {
            this.repoUrl = repoUrl;
        }
    }

    public static class Contact {
        private String email;
        private String phone;
        private SocialMedia socialMedia;

        // Getters y setters para Contact
        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public String getPhone() {
            return phone;
        }

        public void setPhone(String phone) {
            this.phone = phone;
        }

        public SocialMedia getSocialMedia() {
            return socialMedia;
        }

        public void setSocialMedia(SocialMedia socialMedia) {
            this.socialMedia = socialMedia;
        }

        public static class SocialMedia {
            private String github;
            private String linkedin;
            private String twitter;

            // Getters y setters para SocialMedia
            public String getGithub() {
                return github;
            }

            public void setGithub(String github) {
                this.github = github;
            }

            public String getLinkedin() {
                return linkedin;
            }

            public void setLinkedin(String linkedin) {
                this.linkedin = linkedin;
            }

            public String getTwitter() {
                return twitter;
            }

            public void setTwitter(String twitter) {
                this.twitter = twitter;
            }
        }
    }
}