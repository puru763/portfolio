// Experience.js
import React from "react";
import "./Experience.css"; // Import the external CSS file

const Experience = () => {
  return (
    <div>
      <div className="experience">
        <div className="info">
          <h2>Backend Developer Intern</h2>
          <p className="job-desc">
          •  Leveraged Object-Oriented Programming for scalable and robust software solutions. <br />
          • Collaborated with a cross-functional team to deliver high-quality products and services. <br />
          • Specialized as a Backend Engineer using Java, Spring Boot, and MongoDB in the tech stack.
          </p>
        </div>
        <p className="duration">Jan 2024 - Present</p>
      </div>

      <div className="experience">
        <div className="info">
          <h2>Web Developer</h2>
          <p className="job-desc">
          • Developed modern, responsive web applications using React.js. <br />
• Implemented new features, debugged code, and enhanced user interfaces for high-quality, user-friendly web applications. <br />
• Gained valuable experience with frontend development tools, libraries, and Git for version control, emphasizing a strong
understanding of quality web application delivery
          </p>
        </div>
        <p className="duration">Jan 2023 - Feb 2023</p>
      </div>
    </div>
  );
};

export default Experience;
