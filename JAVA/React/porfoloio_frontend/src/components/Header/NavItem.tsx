import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

interface NavItemProps {
  to: string;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ to, children }) => (
  <li className={`nav-item ${styles.navItem}`}>
    <Link className={`nav-link ${styles.navLink}`} to={to}>
      {children}
    </Link>
  </li>
);

export default NavItem;