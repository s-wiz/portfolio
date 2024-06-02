import React, { useState, useEffect } from 'react';
import './styles/Navbar.css';
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

function Navbar({ homeRef, skillsRef, projectsRef, contactRef }) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (ref) => {
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [homeRef, skillsRef, projectsRef, contactRef]);

  return (
    <nav className="nav">
      <div className="navbar-container">
        <a href="#home" className="nav-logo" onClick={() => scrollToSection(homeRef.current)}>
          Sam-Wiz
        </a>

        <div className="mobile-icon" onClick={() => setIsOpen(!isOpen)}>
          <span>&#9776;</span>
        </div>

        <ul className="nav-items">
          <a href="#home" className="nav-link" onClick={() => scrollToSection(homeRef.current)}>
            Home
          </a>
          <a href="#skills" className="nav-link" onClick={() => scrollToSection(skillsRef.current)}>
            Skills
          </a>
          <a href="#projects" className="nav-link" onClick={() => scrollToSection(projectsRef.current)}>
            Projects
          </a>
          <a href="#contact" className="nav-link" onClick={() => scrollToSection(contactRef.current)}>
            Contact
          </a>
        </ul>

        {isOpen && (
          <ul className={`mobile-menu ${isOpen ? 'open' : ''}`}>
            <a onClick={() => scrollToSection(homeRef.current)} href="#home" className="nav-link">
              Home
            </a>
            <a onClick={() => scrollToSection(skillsRef.current)} href="#skills" className="nav-link">
              Skills
            </a>
            <a onClick={() => scrollToSection(projectsRef.current)} href="#projects" className="nav-link">
              Projects
            </a>
            <a onClick={() => scrollToSection(contactRef.current)} href="#contact" className="nav-link">
              Contact
            </a>
          </ul>
        )}

        <div className="button-container">
          <a href="https://drive.google.com/file/d/12iTNw_iRt5pDZRhTpB0Hnj0M_oxa8C0i/view?usp=sharing" className="github-button">
            My resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;