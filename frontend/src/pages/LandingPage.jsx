import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import FeaturesSection from '../components/FeaturesSection';
import WhyChooseSection from '../components/WhyChooseSection';
import SafetySection from '../components/SafetySection';
import HowToRideSection from '../components/HowToRideSection';
import AppFeaturesSection from '../components/AppFeaturesSection';
import DriveWithUsSection from '../components/DriveWithUsSection';
import CanadianOwnershipSection from '../components/CanadianOwnershipSection';
import ImpactSection from '../components/ImpactSection';
import ContactSection from '../components/ContactSection';
import DownloadAppSection from '../components/DownloadAppSection';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <FeaturesSection />
      <WhyChooseSection />
      <SafetySection />
      <HowToRideSection />
      <AppFeaturesSection />
      <DriveWithUsSection />
      <CanadianOwnershipSection />
      <ImpactSection />
      <ContactSection />
      <DownloadAppSection />
      <Footer />
    </div>
  );
};

export default LandingPage;