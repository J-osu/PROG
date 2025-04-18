import React from 'react';
import '../../css/porfolio.css';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    imageUrl: string;
    projectUrl?: string;
  };
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="card interactive-card">
      <img src={project.imageUrl} className="card-img-top" alt={project.title} />
      <div className="card-body text-center">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.description}</p>
        {project.projectUrl && (
          <a 
            href={project.projectUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Ver
          </a>
        )}
      </div>
    </div>
  );
};
