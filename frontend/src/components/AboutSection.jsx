import React from 'react';
import { Trophy } from 'lucide-react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div className="about-grid">
          <div className="about-content">
            <div className="about-icon-wrapper">
              <Trophy className="about-icon" size={48} />
            </div>
            <h2 className="about-title">About Zoplop</h2>
            <p className="about-text">
              Zoplop is Canada's first community-focused ride-share platform—100% Canadian-owned and committed to keeping profits, jobs, and innovation right here at home. We provide safe, reliable, and inclusive transportation that strengthens communities and creates meaningful economic opportunities for women.
            </p>
            <h3 className="about-subtitle">Our Mission</h3>
            <p className="about-text">
              To provide safe, reliable, and inclusive transportation that strengthens communities and creates meaningful economic opportunities for women.
            </p>
          </div>
          <div className="about-visual">
            <div className="visual-box box-1"></div>
            <div className="visual-box box-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;