import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaUsers, FaAward, FaLightbulb, FaHandshake, FaRocket } from 'react-icons/fa';
import './WhyUsSection.css';

const WhyUsSection = () => {
  return (
    <motion.div
      className="why-us-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <motion.div
          className="why-us-header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>Why Choose Us?</h2>
          <p>Discover the reasons why we stand out from the competition.</p>
        </motion.div>
        <div className="why-us-grid">
          <motion.div
            className="why-us-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCheckCircle size={50} className="why-us-icon" />
            <h3>Quality Assurance</h3>
            <p>We ensure the highest quality in all our services.</p>
          </motion.div>
          <motion.div
            className="why-us-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaUsers size={50} className="why-us-icon" />
            <h3>Expert Team</h3>
            <p>Our team consists of experienced professionals.</p>
          </motion.div>
          <motion.div
            className="why-us-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaAward size={50} className="why-us-icon" />
            <h3>Award-Winning</h3>
            <p>We have received numerous awards for our services.</p>
          </motion.div>
          <motion.div
            className="why-us-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLightbulb size={50} className="why-us-icon" />
            <h3>Innovative Solutions</h3>
            <p>We provide innovative solutions to complex problems.</p>
          </motion.div>
          <motion.div
            className="why-us-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaHandshake size={50} className="why-us-icon" />
            <h3>Customer Focused</h3>
            <p>Our customers are at the heart of everything we do.</p>
          </motion.div>
          <motion.div
            className="why-us-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaRocket size={50} className="why-us-icon" />
            <h3>Fast Delivery</h3>
            <p>We ensure timely delivery of all our projects.</p>
          </motion.div>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="cta-button"
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
};

export default WhyUsSection;