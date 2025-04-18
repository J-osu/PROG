import React from 'react';
import styles from './styles.module.css';

interface MobileMenuButtonProps {
  isOpen: boolean;
  toggle: () => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ isOpen, toggle }) => (
  <button
    className={`navbar-toggler ${styles.toggler}`}
    type="button"
    onClick={toggle}
    aria-expanded={isOpen}
    aria-label="Toggle navigation"
  >
    <span className={`navbar-toggler-icon ${styles.togglerIcon}`}></span>
  </button>
);

export default MobileMenuButton;