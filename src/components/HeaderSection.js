import React from 'react';
import { motion } from 'framer-motion';
import './HeaderSection.css';

const HeaderSection = () => {
  return (
    <motion.div
      className="header-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Top Header Navbar */}
      <div className="navbar">
        <div className="logo">NIS Placement</div>
        <div className="nav-links">``
          <motion.button
            className="nav-button"
            whileHover={{ scale: 1.1 }}
            onClick={() => (window.location.href = '/login')}
          >
            Login
          </motion.button>
          <motion.button
            className="nav-button signup-button"
            whileHover={{ scale: 1.1 }}
            onClick={() => (window.location.href = '/signup')}
          >
            Signup
          </motion.button>
        </div>
      </div>

      {/* Main Header Content */}
      <div className="header-overlay">
        <div className="header-text">
          <motion.h1
            className="header-title"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Empowering Careers, Connecting Talent
          </motion.h1>
          <motion.p
            className="header-subtitle"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Join hands with top companies and elevate your career to new heights.
          </motion.p>
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              window.location.href = '/application-form';
            }}
          >
            Fill Your Form
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default HeaderSection;
