import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <img src="https://customer-assets.emergentagent.com/job_5d232d78-efa2-4fbe-aeed-dce9cc654a5e/artifacts/mdh1ayxy_ZopLop_Logo.svg" alt="ZopLop" className="logo-img" />
        </div>
        <nav className="nav-menu">
          <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
          <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          <button onClick={() => scrollToSection('why-zoplop')} className="nav-link">Why Zoplop?</button>
          <button onClick={() => scrollToSection('safety')} className="nav-link">Safety</button>
          <button onClick={() => scrollToSection('ride')} className="nav-link">Ride</button>
          <button onClick={() => scrollToSection('impact')} className="nav-link">Impact</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
        </nav>
        <Button className="login-btn">Log In</Button>
      </div>
    </header>
  );
};

export default Header;