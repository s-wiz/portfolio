import React, { useState } from 'react';
import './styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="navbar-container">
        <a href="/" className="nav-logo">
          Sam-Wiz
        </a>

        <div className="mobile-icon" onClick={() => setIsOpen(!isOpen)}>
          <span>&#9776;</span>
        </div>

        <ul className="nav-items">
          <a href="#home" className="nav-link">Home</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </ul>

        {isOpen && (
          <ul className={`mobile-menu ${isOpen ? 'open' : ''}`}>
            <a onClick={() => setIsOpen(!isOpen)} href="#home" className="nav-link">Home</a>
            <a onClick={() => setIsOpen(!isOpen)} href="#home" className="nav-link">Skills</a>
            <a onClick={() => setIsOpen(!isOpen)} href="#home" className="nav-link">Projects</a>
            <a onClick={() => setIsOpen(!isOpen)} href="#home" className="nav-link">Contact</a>
            <a
              href="https://github.com/your-github-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="github-button"
            >
              Connect with me
            </a>
          </ul>
        )}

        <div className="button-container">
          <a href="https://github.com/Sam-wiz" className="github-button">Connect with me</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;