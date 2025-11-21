import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import './DriveWithUsSection.css';

const DriveWithUsSection = () => {
  const [expandedSection, setExpandedSection] = useState('benefits');

  const benefits = [
    {
      title: 'Earn on Your Terms',
      description: 'Drive when you want, where you want. No minimum hours required.'
    },
    {
      title: 'Competitive Rates',
      description: 'Keep 75-78% of every fare. Higher rates for Women-for-Women programs. Weekly payouts via direct deposit.'
    },
    {
      title: 'Fair Treatment',
      description: 'Transparent pricing with no hidden fees. Support from real people, not just algorithms. Driver advisory board gives you a voice.'
    },
    {
      title: 'Community Impact',
      description: 'Make a difference in your community. Build meaningful connections with regular riders. Support local families and strengthen neighborhood networks.'
    },
    {
      title: 'Professional Development',
      description: 'Access training programs, workshops, and skill-building opportunities to grow your career beyond driving.'
    },
    {
      title: 'Electric Vehicle Incentives',
      description: 'Special bonuses for EV drivers. Charging station partnerships and environmental impact rewards.'
    }
  ];

  const requirements = [
    'Valid Class G driver\'s license',
    'Minimum 3 years driving experience',
    'Clean driving record',
    'Vehicle less than 8 years old',
    'Commercial auto insurance',
    'Pass comprehensive background check'
  ];

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <section className="drive-with-us-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Drive with Zoplop</h2>
        </div>
        
        <div className="expandable-section">
          <button
            className="section-toggle"
            onClick={() => toggleSection('benefits')}
          >
            <span className="toggle-title">Why Drive With Us?</span>
            {expandedSection === 'benefits' ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
          {expandedSection === 'benefits' && (
            <div className="section-content">
              <div className="benefits-grid">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="benefit-card">
                    <CardContent className="benefit-content">
                      <h3 className="benefit-title">{benefit.title}</h3>
                      <p className="benefit-description">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="expandable-section">
          <button
            className="section-toggle"
            onClick={() => toggleSection('requirements')}
          >
            <span className="toggle-title">Driver Requirements</span>
            {expandedSection === 'requirements' ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
          {expandedSection === 'requirements' && (
            <div className="section-content">
              <ul className="requirements-list">
                {requirements.map((req, index) => (
                  <li key={index} className="requirement-item">
                    <Check className="check-icon" size={20} />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="expandable-section">
          <button
            className="section-toggle"
            onClick={() => toggleSection('application')}
          >
            <span className="toggle-title">Application Process</span>
            {expandedSection === 'application' ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
          {expandedSection === 'application' && (
            <div className="section-content">
              <div className="application-steps">
                <div className="app-step">
                  <div className="step-num">1</div>
                  <div>
                    <h4>Submit Application</h4>
                    <p>Complete online form with your details and documents</p>
                  </div>
                </div>
                <div className="app-step">
                  <div className="step-num">2</div>
                  <div>
                    <h4>Background Check</h4>
                    <p>Comprehensive screening process (3-5 business days)</p>
                  </div>
                </div>
                <div className="app-step">
                  <div className="step-num">3</div>
                  <div>
                    <h4>Training & Onboarding</h4>
                    <p>Complete safety and service training modules</p>
                  </div>
                </div>
                <div className="app-step">
                  <div className="step-num">4</div>
                  <div>
                    <h4>Start Driving</h4>
                    <p>Activate your account and begin earning</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DriveWithUsSection;