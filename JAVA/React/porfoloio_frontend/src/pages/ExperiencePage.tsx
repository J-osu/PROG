import React from 'react';
import '../css/experiencia.css';
import '../css/buttons.css';
import Card from '../components/Card/Card';

interface TimelineItem {
  id: number;
  icon: string;
  title: string;
  period: string;
  description: string;
}

interface Skill {
  name: string;
  percentage: number;
  category: 'hard' | 'soft';
}

const ExperiencePage: React.FC = () => {
  // Datos de la línea de tiempo
  const timelineItems: TimelineItem[] = [
    {
      id: 1,
      icon: 'bi bi-code-slash',
      title: 'Desarrollador Frontend',
      period: '2024 - 2025',
      description: 'Estoy trabajando en la creación de interfaces de usuario modernas y responsivas utilizando HTML, CSS y JavaScript.'
    },
    {
      id: 2,
      icon: 'bi bi-braces',
      title: 'Desarrollador de Páginas webs',
      period: '2023 - 2023',
      description: 'Participé en la creación de distintas páginas webs con wordpress elements.'
    },
    {
      id: 3,
      icon: 'bi bi-gear-fill',
      title: 'Técnico en Sistemas Microinformáticos y Redes',
      period: '2022 - 2023',
      description: 'Enrutamiento de cables y configuración de redes'
    }
  ];

  // Datos de habilidades
  const skills: Skill[] = [
    { name: 'HTML/CSS', percentage: 90, category: 'hard' },
    { name: 'JavaScript', percentage: 85, category: 'hard' },
    { name: 'React', percentage: 75, category: 'hard' },
    { name: 'Trabajo en equipo', percentage: 95, category: 'soft' },
    { name: 'Comunicación', percentage: 80, category: 'soft' },
    { name: 'Resolución de problemas', percentage: 90, category: 'soft' }
  ];

  // Filtrar habilidades
  const hardSkills = skills.filter(skill => skill.category === 'hard');
  const softSkills = skills.filter(skill => skill.category === 'soft');

  return (
    <div className="container my-5 experience-page">
      {/* Línea de tiempo vertical */}
      <section className="timeline-vertical">
        <h2 className="text-center mb-5 encab">Experiencia Laboral</h2>
        <div className="timeline">
          {timelineItems.map(item => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-icon">
                <i className={item.icon}></i>
              </div>
              <div className="timeline-content">
                <Card
                  icon={item.icon}
                  title={item.title}
                  subtitle={item.period}
                  content={item.description}
                  className="timeline-card"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="skills-section">
        <h2 className="text-center mb-4 encab">Habilidades</h2>
        <p className="text-center mb-4 txt-p">
          A lo largo de mi experiencia, he desarrollado habilidades técnicas y blandas que me permiten enfrentar desafíos de manera efectiva.
        </p>

        <div className="skills-container">
          {/* Hard Skills */}
          <div className="skills-column">
            <h4 className="skills-title"><i className="bi bi-tools"></i> Hard Skills</h4>
            {hardSkills.map((skill, index) => (
              <div key={`hard-${index}`} className="skill-item">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.percentage}%</span>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="skills-column">
            <h4 className="skills-title"><i className="bi bi-people-fill"></i> Soft Skills</h4>
            {softSkills.map((skill, index) => (
              <div key={`soft-${index}`} className="skill-item">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;