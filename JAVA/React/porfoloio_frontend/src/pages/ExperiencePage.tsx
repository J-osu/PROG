import React from 'react';
import '../css/experiencia.css';
import '../css/buttons.css';

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
                <h5>{item.title}</h5>
                <p>{item.period}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Habilidades con barras de porcentaje */}
      <section className="skills my-5">
        <h2 className="text-center mb-4 encab">Habilidades</h2>
        <p className="text-center mb-4 txt-p">
          A lo largo de mi experiencia, he desarrollado habilidades técnicas y blandas que me permiten enfrentar desafíos de manera efectiva.
        </p>

        <div className="row">
          {/* Hard Skills */}
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body c-carta">
                <h4 className="card-title mb-4"><i className="bi bi-tools"></i> Hard Skills</h4>
                {hardSkills.map((skill, index) => (
                  <div key={index} className="skill-bar mb-3">
                    <span>{skill.name}</span>
                    <div className="progress">
                      <div 
                        className="progress-bar" 
                        style={{ width: `${skill.percentage}%` }}
                        role="progressbar"
                        aria-valuenow={skill.percentage}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        {skill.percentage}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h4 className="card-title mb-4"><i className="bi bi-people-fill"></i> Soft Skills</h4>
                {softSkills.map((skill, index) => (
                  <div key={index} className="skill-bar mb-3">
                    <span>{skill.name}</span>
                    <div className="progress">
                      <div 
                        className="progress-bar" 
                        style={{ width: `${skill.percentage}%` }}
                        role="progressbar"
                        aria-valuenow={skill.percentage}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        {skill.percentage}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;