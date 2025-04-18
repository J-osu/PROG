import React from 'react';
import { Link } from 'react-router-dom';
import '../css/index.css'; // Tus estilos convertidos
import cvPdf from '../assets/pdf/Curriculum.pdf';
import '../css/buttons.css';

const HomePage: React.FC = () => {
  return (
    <section className="home-container">
      <section className="cara-con-manos">
        {/* Mano derecha */}
        <div className="Mano mano-derecha">
          <div className="Palma">
            <Link to="/proyectos">Proyectos</Link>
          </div>
          <div className="dedos dedo1"></div>
          <div className="dedos dedo2"></div>
          <div className="dedos dedo3"></div>
          <div className="dedos dedo4"></div>
          <div className="pulgar"></div>
        </div>

        {/* Cara central */}
        <div className="cara">
          <div className="ojos">
            <div className="ojo1">
              <div className="pupila"></div>
            </div>
            <div className="ojo2">
              <div className="pupila"></div>
            </div>
          </div>
          
          <div className="cv">
            <a 
              href={cvPdf} 
              download="Mi-CV" 
              className="btn-14"
            >
              <span>CV</span>
            </a>
          </div>
          
          <div className="boca">
            <div className="nombre"><h1>Josu-dev</h1></div>
            <div className="description"><h4>Desarrollador web</h4></div>
          </div>
        </div>

        {/* Mano izquierda */}
        <div className="Mano mano-izquierda">
          <div className="Palma">
            <a 
              href="https://youtu.be/xvFZjo5PgG0?feature=shared" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Click aquí
            </a>
          </div>
          <div className="dedos dedo1"></div>
          <div className="dedos dedo2"></div>
          <div className="dedos dedo3"></div>
          <div className="dedos dedo4"></div>
          <div className="pulgar"></div>
        </div>
      </section>
    </section>
  );
};

export default HomePage;