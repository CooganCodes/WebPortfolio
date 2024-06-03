import React, { useState } from 'react';
import './Navbar.scss';

const Navbar = ({ isSticky }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <a href="#home" onClick={toggleMenu}>Home</a>
        </li>
        <li>
          <a href="#about" onClick={toggleMenu}>About</a>
        </li>
        <li>
          <a href="#projects" onClick={toggleMenu}>Projects</a>
        </li>
        <li>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
