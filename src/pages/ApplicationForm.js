import React, { useState } from "react";
import "./appform.css";

const ApplicationForm = () => {
  const [experience, setExperience] = useState("fresher");

  return (
    <div className="application-form-section">
      <div className="container">
        <div className="form-header">
          <h2>Apply Now</h2>
          <p>Join us and take the next step in your career!</p>
        </div>
        <form 
          className="application-form" 
          action="https://getform.io/f/aollzzlb" 
          method="POST" 
          encType="multipart/form-data"
        >
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your full name" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="resume">Resume</label>
            <input type="file" id="resume" name="resume" />
          </div>
          <div className="form-group experience-toggle">
            <label>Experience Level</label>
            <div className="experience-options">
              <button
                type="button"
                className={`toggle-btn ${experience === "fresher" ? "active" : ""}`}
                onClick={() => setExperience("fresher")}
              >
                Fresher
              </button>
              <button
                type="button"
                className={`toggle-btn ${experience === "experienced" ? "active" : ""}`}
                onClick={() => setExperience("experienced")}
              >
                Experienced
              </button>
            </div>
          </div>
          {experience === "experienced" && (
            <div className="form-group">
              <label htmlFor="yearsOfExperience">Years of Experience</label>
              <input
                type="number"
                id="yearsOfExperience"
                name="yearsOfExperience"
                placeholder="Enter your years of experience"
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="qualification">Qualification</label>
            <input type="text" id="qualification" name="qualification" placeholder="Your highest qualification" required />
          </div>
          <div className="form-group">
            <label htmlFor="designation">Designation</label>
            <input type="text" id="designation" name="designation" placeholder="Your current designation" required />
          </div>
          <button type="submit" className="submit-button">Submit Application</button>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
