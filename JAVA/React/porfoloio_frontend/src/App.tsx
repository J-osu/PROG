import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header/Index';
import Footer from './components/Footer/Index';
import HomePage from './pages/HomePage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

import './App.css';


interface PortfolioData {
  home: {
    title: string;
    description: string;
  };
  experience: Array<{
    id: number;
    company: string;
    position: string;
    period: string;
    responsibilities: string[];
  }>;
  projects: Array<{
    id: number;
    name: string;
    description: string;
    technologies: string[];
    demoUrl?: string;
    repoUrl?: string;
  }>;
  contact: {
    email: string;
    phone?: string;
    socialMedia: {
      github?: string;
      linkedin?: string;
      twitter?: string;
    };
  };
}

const App: React.FC = () => {
  
  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(null);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8080';
        const response = await axios.get<PortfolioData>(`${API_URL}/api/data`);
        console.log('Datos recibidos:', response.data);
        setPortfolioData(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('Error fetching data:', error.message);
        } else {
          console.error('Unexpected error:', error);
        }
      }
    };
  
    fetchData();
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Header />
        
        <main className="main-content">
          {portfolioData ? (
            <Routes>
              <Route 
                path="/" 
                element={<HomePage data={portfolioData.home} />} 
              />
              <Route 
                path="/experiencia" 
                element={<ExperiencePage experiences={portfolioData.experience || []} />} 
              />
              <Route 
                path="/proyectos" 
                element={<ProjectsPage projects={portfolioData.projects || []} />} 
              />
              <Route 
                path="/contacto" 
                element={
                  <ContactPage 
                    contactInfo={portfolioData?.contact || { email: '', phone: '', socialMedia: {} }} 
                    socialMedia={portfolioData?.contact?.socialMedia || {}} 
                  />
                } 
              />
            </Routes>
          ) : (
            <p>Cargando datos...</p>
          )}
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;