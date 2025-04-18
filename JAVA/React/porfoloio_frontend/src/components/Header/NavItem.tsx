import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/headerBase.css';

interface NavItemProps {
  to: string;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ to, children }) => (
  <li className="nav-item">
    <Link className="nav-link" to={to}>
      {children}
    </Link>
  </li>
);

export default NavItem;