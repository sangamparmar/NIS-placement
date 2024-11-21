import React from 'react';
import { motion } from 'framer-motion';
import './PartnersSection.css';

const partners = [
  { logo: require('./part1.png') },
  { logo: require('./part2.png') },
  { logo: require('./part3.png') },
  // { logo: require('./part4.png') },
  // { logo: require('./part55.png') },
  { logo: require('./part6.png') },
];

const PartnersSection = () => {
  return (
    <motion.div
      className="partners-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <motion.div
          className="partners-header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>Our Partners</h2>
          <p>We are proud to collaborate with these esteemed partners.</p>
        </motion.div>
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <motion.div
              className="partner-card"
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={partner.logo} alt={partner.name} className="partner-logo" />
              <h3>{partner.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PartnersSection;