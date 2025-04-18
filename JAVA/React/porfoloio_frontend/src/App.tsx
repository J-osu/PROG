import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header/Index';
import Footer from './components/Footer/Index'; // Asumiendo que ya creaste el Footer
import HomePage from './pages/HomePage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
// import NotFoundPage from './pages/NotFoundPage';
// import LoadingSpinner from './components/LoadingSpinner';
// import ErrorDisplay from './components/ErrorDisplay';
import './App.css';

// Tipos TypeScript para los datos del portfolio
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
  const [loading, setLoading] = useState<boolean>(true);
  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<PortfolioData>(
          `${process.env.REACT_APP_API_URL}/api/data` || 'http://localhost:8080/api/data'
        );
        setPortfolioData(response.data);
      } catch (err) {
        const error = err as AxiosError;
        setError(error.response?.data?.message || 'Error al cargar los datos del portfolio');
        console.error('Error fetching portfolio data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorDisplay message={error} onRetry={() => window.location.reload()} />;
  }

  return (
    <Router>
      <div className="app-container">
        <Header />
        
        <main className="main-content">
          <Routes>
            <Route 
              path="/" 
              element={<HomePage data={portfolioData?.home} />} 
            />
            <Route 
              path="/experiencia" 
              element={<ExperiencePage experiences={portfolioData?.experience || []} />} 
            />
            <Route 
              path="/proyectos" 
              element={<ProjectsPage projects={portfolioData?.projects || []} />} 
            />
            <Route 
              path="/contacto" 
              element={
                <ContactPage 
                  contactInfo={portfolioData?.contact} 
                  socialMedia={portfolioData?.contact?.socialMedia} 
                />
              } 
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;