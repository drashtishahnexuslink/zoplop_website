import React from 'react';
import { Card, CardContent } from './ui/card';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    {
      title: 'Standard Rides',
      description: 'Fast, reliable rides anywhere in the Greater Toronto Area. Available 24/7 for everyday transportation needs.',
      image: 'https://images.unsplash.com/photo-1634055740573-d01a8fea7555?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMGNhcnxlbnwwfHx8fDE3NjM3MjYwNzl8MA&ixlib=rb-4.1.0&q=85'
    },
    {
      title: 'Women-for-Women Rides',
      description: 'Safe rides by women, for women. Request female drivers for enhanced safety and comfort.',
      image: 'https://images.unsplash.com/photo-1726429017116-0996484f9537?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHw0fHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMGNhcnxlbnwwfHx8fDE3NjM3MjYwNzl8MA&ixlib=rb-4.1.0&q=85'
    },
    {
      title: 'Group Rides',
      description: 'Travel together with larger vehicles for groups of 5-7 passengers.',
      image: 'https://images.unsplash.com/photo-1756142008330-87dc106322a4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxmYW1pbHklMjB2ZWhpY2xlfGVufDB8fHx8MTc2MzcyNjA4N3ww&ixlib=rb-4.1.0&q=85'
    }
  ];

  return (
    <section className="services-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Choose the ride that perfectly fits your needs</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <Card key={index} className="service-card">
              <div className="service-image-wrapper">
                <img src={service.image} alt={service.title} className="service-image" />
              </div>
              <CardContent className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;