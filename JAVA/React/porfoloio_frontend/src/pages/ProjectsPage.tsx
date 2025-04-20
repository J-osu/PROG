import React, { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard/ProjectCard';
import tetrisImage from '../assets/images/img-tetris.jpg';
import snakeImage from '../assets/images/img-snake-juego.png';
import motorGraficoImage from '../assets/images/MotorGrafico.png';
import enConstruccionImage from '../assets/images/En-Construccion-.png';
import '../css/porfolio.css';
import '../css/buttons.css';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: 'games' | 'tools' | 'other';
  projectUrl?: string;
}

const ProjectsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'games' | 'tools' | 'other'>('all');

  // Datos de proyectos (puedes mover esto a un archivo aparte o cargarlo desde API)
  const projects: Project[] = [
    {
      id: 1,
      title: 'Tetris',
      description: 'Un clásico juego de Tetris',
      imageUrl: tetrisImage,
      category: 'games',
      projectUrl: 'https://github.com/J-osu/GAMES/tree/main/tetris'
    },
    {
      id: 2,
      title: 'Snake',
      description: 'El clásico juego de la serpiente',
      imageUrl: snakeImage,
      category: 'games',
      projectUrl: 'https://github.com/J-osu/GAMES/tree/main/snake'
    },
    {
      id: 3,
      title: 'Motor Gráfico',
      description: 'Un motor gráfico para juegos 2D',
      imageUrl: motorGraficoImage,
      category: 'tools',
      projectUrl: 'https://github.com/J-osu/GAMES/tree/main/MTG(MoTor-Grafico)'
    },
    {
      id: 4,
      title: 'En Construcción',
      description: 'Próximamente...',
      imageUrl: enConstruccionImage,
      category: 'other'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="container mt-5 projects-page">
      {/* Filtro por tipo de proyecto */}
      <div className="filters text-center mb-4">
        {(['all', 'games', 'tools', 'other'] as const).map(filter => (
          <button
            key={filter}
            className={`btn btn-outline-primary ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter === 'all' ? 'Todos' : 
             filter === 'games' ? 'Juegos' : 
             filter === 'tools' ? 'Herramientas' : 'Otros'}
          </button>
        ))}
      </div>

      {/* Sección de proyectos */}
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {filteredProjects.map(project => (
          <div key={project.id} className="col" data-category={project.category}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;