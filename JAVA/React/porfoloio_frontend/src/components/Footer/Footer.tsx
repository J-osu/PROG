import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-1.0.png'; // Asegúrate de tener la imagen en assets
import '../../css/footerBase.css';

const Footer: React.FC = () => {
  return (
    <footer className="custom-footer">
      <div className="container text-center">
        <div className="row">
          {/* Logo */}
          <div className="col-md-4 izq">
            <Link to="/">
              <img src={logo} alt="logo" className="footer-logo" />
            </Link>
          </div>

          {/* Información */}
          <div className="col-md-4 cen">
            <h2>Josu-dev</h2>
            <p>Tu lo imaginas, yo lo hago realidad</p>
          </div>

          {/* Redes sociales */}
          <div className="col-md-4 der">
            <h2>SÍGUEME</h2>
            <div className="social-icons">
              <a 
                href="https://www.instagram.com/jjho_su?igsh=MTBieHFmMWFyaGlicA==" 
                className="bi bi-instagram" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              ></a>
              <a 
                href="https://github.com/ICV-24-25/proyecto-web-1-trimestre-J-osu" 
                className="bi bi-github" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              ></a>
              <a 
                href="https://www.linkedin.com/in/josu%C3%A9-de-la-cruz-858452290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                className="bi bi-linkedin" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              ></a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center custom-footer-bottom">
        <small>&copy; 2024 <b>Josu-dev</b> - Todos los Derechos Reservados.</small>
      </div>
    </footer>
  );
};

export default Footer;