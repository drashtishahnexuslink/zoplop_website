import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, MapPin, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from '../hooks/use-toast';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2 className="contact-title">Contact Information</h2>
            
            <div className="info-block">
              <h3 className="info-heading">24/7 Rider Support</h3>
              <div className="info-item">
                <Phone size={20} className="info-icon" />
                <span>1-800-ZOPLOP-1</span>
              </div>
              <div className="info-item">
                <Mail size={20} className="info-icon" />
                <span>support@zoplop.ca</span>
              </div>
              <div className="info-item">
                <MessageCircle size={20} className="info-icon" />
                <span>Real-time chat support</span>
              </div>
            </div>

            <div className="info-block">
              <h3 className="info-heading">Driver Support</h3>
              <div className="info-item">
                <Phone size={20} className="info-icon" />
                <span>1-800-DRIVE-ZP</span>
              </div>
              <div className="info-item">
                <Mail size={20} className="info-icon" />
                <span>drivers@zoplop.ca</span>
              </div>
            </div>

            <div className="info-block">
              <h3 className="info-heading">Corporate Headquarters</h3>
              <div className="info-item">
                <MapPin size={20} className="info-icon" />
                <span>Toronto, Ontario, Canada</span>
              </div>
              <div className="info-item">
                <Phone size={20} className="info-icon" />
                <span>1-800-ZOPLOP-1</span>
              </div>
            </div>

            <div className="info-block">
              <h3 className="info-heading">Office Hours</h3>
              <div className="info-item">
                <Clock size={20} className="info-icon" />
                <span>Monday - Friday: 9AM - 6PM EST</span>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h2 className="form-title">Contact & Support</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" className="submit-btn">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;