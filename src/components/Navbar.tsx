import React from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

interface NavbarProps {
  currentView: 'home' | 'catalogue' | 'builder';
  onNavigate: (view: 'home' | 'catalogue' | 'builder') => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="navbar-container">
        <div className="navbar-brand serif" onClick={() => onNavigate('home')}>
          Bloom.inc
        </div>
        
        <div className="navbar-links">
          <button 
            className={`nav-link ${currentView === 'catalogue' ? 'active' : ''}`}
            onClick={() => onNavigate('catalogue')}
          >
            In bloom
          </button>
          <button 
            className={`nav-link ${currentView === 'builder' ? 'active' : ''}`}
            onClick={() => onNavigate('builder')}
          >
            Arrange
          </button>
          <button className="nav-link">
            About
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
