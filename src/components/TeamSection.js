import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import './TeamSection.css';

const teamMembers = [
  {
    name: 'Yashraj Tiwari',
    role: 'Backend Developer',
    linkedin: 'https://linkedin.com/in/meghnaparmar',
    twitter: 'https://twitter.com/meghnaparmar',
    facebook: 'https://facebook.com/meghnaparmar',
  },
  {
    name: 'Sangam Parmar',
    role: 'Frontend Developer',
    linkedin: 'https://linkedin.com/in/sangamparmar',
    twitter: 'https://twitter.com/sangamparmar',
    facebook: 'https://facebook.com/sangamparmar',
  },
  {
    name: 'Shivraj Singh Chundawat',
    role: 'Designer',
    linkedin: 'https://linkedin.com/in/sangamparmar',
    twitter: 'https://twitter.com/sangamparmar',
    facebook: 'https://facebook.com/sangamparmar',
  },
  {
    name: 'Shalendar Thakur',
    role: 'CEO',
    linkedin: 'https://linkedin.com/in/shalendarthakur',
    twitter: 'https://twitter.com/shalendarthakur',
    facebook: 'https://facebook.com/shalendarthakur',
  },
];

const TeamSection = () => {
  return (
    <div className="team-section">
      <div className="container">
        <div className="team-header">
          <h2>Meet Our Team</h2>
          <p>Our team of experts is here to help you achieve your goals.</p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <div className="team-socials">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
