import React from 'react';
import { motion } from 'framer-motion';
import './MissionSection.css';
import { FaBullseye, FaUsers, FaLightbulb } from 'react-icons/fa';

const MissionSection = () => {
  return (
    <motion.div
      className="mission-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>Our Mission</h2>
      <p>
        Our goal is to bridge the gap between talent and opportunity by connecting the best
        candidates with top companies.
      </p>
      <div className="mission-points">
        <div className="mission-point">
          <FaBullseye size={50} className="mission-icon" />
          <h3>Empower Individuals</h3>
          <p>Empower individuals to achieve their career goals through personalized guidance and support.</p>
        </div>
        <div className="mission-point">
          <FaUsers size={50} className="mission-icon" />
          <h3>Provide Talent</h3>
          <p>Provide companies with the best talent in the industry to drive their success and innovation.</p>
        </div>
        <div className="mission-point">
          <FaLightbulb size={50} className="mission-icon" />
          <h3>Foster Community</h3>
          <p>Foster a community of growth and innovation by connecting like-minded professionals.</p>
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="cta-button"
      >
        Join Us
      </motion.button>
    </motion.div>
  );
};

export default MissionSection;