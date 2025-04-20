import React from 'react';
import '../../css/movilMenu.css';

interface MobileMenuButtonProps {
  isOpen: boolean;
  toggle: () => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ isOpen, toggle }) => (
  <button
    className="navbar-toggler"
    type="button"
    onClick={toggle}
    aria-expanded={isOpen}
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>
);

export default MobileMenuButton;