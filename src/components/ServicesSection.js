import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaUserGraduate, FaHandshake, FaClipboardList, FaRegBuilding, FaChartBar } from 'react-icons/fa';
import './ServicesSection.css';

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>Our Placement Services</h2>
          <p>We provide comprehensive services to ensure successful job placements.</p>
        </motion.div>
        <div className="services-grid">
          <motion.div
            className="service-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaBriefcase size={50} className="service-icon" />
            <h3>Job Matching</h3>
            <p>Connecting job seekers with suitable opportunities.</p>
          </motion.div>
          <motion.div
            className="service-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaUserGraduate size={50} className="service-icon" />
            <h3>Career Guidance</h3>
            <p>Offering personalized advice for career development.</p>
          </motion.div>
          <motion.div
            className="service-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaHandshake size={50} className="service-icon" />
            <h3>Interview Preparation</h3>
            <p>Providing training and tips for successful interviews.</p>
          </motion.div>
          <motion.div
            className="service-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaClipboardList size={50} className="service-icon" />
            <h3>Resume Building</h3>
            <p>Helping create impactful and professional resumes.</p>
          </motion.div>
          <motion.div
            className="service-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaRegBuilding size={50} className="service-icon" />
            <h3>Employer Partnerships</h3>
            <p>Partnering with top companies for direct placements.</p>
          </motion.div>
          <motion.div
            className="service-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaChartBar size={50} className="service-icon" />
            <h3>Job Market Insights</h3>
            <p>Providing current trends and data in the job market.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
