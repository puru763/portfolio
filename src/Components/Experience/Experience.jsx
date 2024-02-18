import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div>
      <div className="experience">
        <div className="all-experience"></div>
        <div className="info-exp">
          <div className="infor-heading">
            <h2 className="job-title">Backend Developer Intern</h2>

            <p className="duration">Jan 2024 - Present</p>
          </div>
          <p className="job-desc">
            Leveraged Object-Oriented Programming for scalable and robust
            software solutions. Collaborated with a cross-functional team to
            deliver high-quality products and services. Specialized as a Backend
            Engineer using Java, Spring Boot, and MongoDB in the tech stack.
          </p>
        </div>
      </div>

      <div className="experience">
        <div className="info-exp">
          <div className="infor-heading">
            <h2 className="job-title">Web Developer</h2>

            <p className="duration">Jan 2023 - Feb 2023</p>
          </div>

          <p className="job-desc">
            Developed modern, responsive web applications using React.js
        
             Implemented new features, debugged code, and enhanced user
            interfaces for high-quality, user-friendly web applications.
            Gained valuable experience with frontend development tools,
            libraries, and Git for version control, emphasizing a strong
            understanding of quality web application delivery
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
