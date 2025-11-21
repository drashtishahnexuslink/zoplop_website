import React from 'react';
import { Button } from './ui/button';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Toronto's Community-Focused Transportation Platform
        </div>
        <h1 className="hero-title">
          Ride Safe, Ride Local<br />Ride Zoplop
        </h1>
        <p className="hero-description">
          100% Canadian-owned ride-share platform committed to keeping profits, jobs,<br />
          and innovation right here at home.
        </p>
        <div className="hero-buttons">
          <Button className="hero-btn-primary">Get Started</Button>
          <Button variant="outline" className="hero-btn-secondary">Become a Driver</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;