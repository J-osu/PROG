import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-1.0.png';
import MobileMenuButton from './MobileMenuButton';
import NavItem from './NavItem';
import '../../css/headerBase.css';

interface MenuItem {
  path: string;
  label: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { path: '/', label: 'Inicio' },
    { path: '/experiencia', label: 'Experiencia Laboral' },
    { path: '/proyectos', label: 'Proyectos' },
    { path: '/contacto', label: 'Contacto' }
  ];

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" className="logo-nav" />
          </Link>

          {/* Botón menú móvil */}
          <MobileMenuButton 
            isOpen={isMenuOpen} 
            toggle={() => setIsMenuOpen(!isMenuOpen)} 
          />

          {/* Menú principal */}
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto">
              {menuItems.map((item) => (
                <NavItem key={item.path} to={item.path}>
                  {item.label}
                </NavItem>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;