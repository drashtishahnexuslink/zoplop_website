import React from 'react';
import { Check } from 'lucide-react';
import './AppFeaturesSection.css';

const AppFeaturesSection = () => {
  const appFeatures = [
    'Easy booking in seconds',
    'Schedule rides up to 30 days in advance',
    'Upfront pricing with no surprises',
    'Multiple payment methods',
    'Real-time GPS tracking',
    'In-app customer support',
    'Ride history and receipts'
  ];

  const systemRequirements = [
    'iOS: Requires iOS 14.0 or later (50MB storage)',
    'Android: Requires Android 8.0 or later (50MB storage)'
  ];

  return (
    <section className="app-features-section">
      <div className="section-container">
        <div className="app-features-grid">
          <div className="app-features-content">
            <h2 className="app-features-title">App Features</h2>
            <ul className="features-list">
              {appFeatures.map((feature, index) => (
                <li key={index} className="feature-list-item">
                  <Check className="check-icon" size={20} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <h3 className="requirements-title">System Requirements</h3>
            <ul className="features-list">
              {systemRequirements.map((req, index) => (
                <li key={index} className="feature-list-item">
                  <Check className="check-icon" size={20} />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="app-features-visual">
            <div className="visual-phone"></div>
            <div className="visual-phone phone-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFeaturesSection;