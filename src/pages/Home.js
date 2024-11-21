import React from 'react';
import HeaderSection from '../components/HeaderSection';
import MissionSection from '../components/MissionSection';
import ServicesSection from '../components/ServicesSection';
import WhyUsSection from '../components/WhyUsSection';
import PartnersSection from '../components/PartnersSection';
import TeamSection from '../components/TeamSection';
import LocationSection from '../components/LocationSection';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <HeaderSection />
      <MissionSection />
      <ServicesSection />
      <WhyUsSection />
      <PartnersSection />
      <TeamSection />
      <LocationSection />
    </div>
  );
};

export default Home;
