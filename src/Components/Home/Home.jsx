import "./Home.css";
import profile from "./profile.jpeg";
import { GrLinkedin } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    const originalText = "I am Purvesh Krishnani";
    let index = 0;
    let direction = 1;

    const intervalId = setInterval(() => {
      if (index >= originalText.length || index < 0) {
        direction *= -1;
        index += direction * 1;
      }

      setText(originalText.slice(0, index + 1));
      index += direction;
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  const handleresume = () => {
    window.location.href =
      "https://drive.google.com/file/d/1F57LgEzGW4dB6v7vRLJPOX3BjqVG9nVO/view?usp=sharing";
  };
  const handleIconClick = (event) => {
    const iconType = event.target.dataset.iconType;
  
    switch (iconType) {
      case 'linkedin':
        window.location.assign('https://www.linkedin.com/in/purvesh15/');
        break;
      case 'github':
        window.location.assign('https://github.com/puru763');
        break;
      case 'instagram':
        window.location.assign('https://www.instagram.com/puru_763');
        break;
      default:
        break;
    }
  };
  
  
  
  
  return (
    <div className="home-container">
      <div className="left">
        <div className="profile-container">
          <div className="img">
            <img src={profile} alt="" />
          </div>
          <div className="media-links" onClick={handleIconClick}>
            <GrLinkedin className="icon" data-icon-type="linkedin" />
            <BsGithub className="icon" data-icon-type="github" />
            <BsInstagram className="icon" data-icon-type="instagram" />
          </div>
        </div>
      </div>

      <div className="right">
        <div className="data-container">
          <div className="name">
            Hello! <span className="fade-in">{text}</span>
          </div>
          <div className="description">
            <span className="orange">Empowering</span> Web-Development Intern at
            Exposys Data Lab |<span className="orange"> Passionate</span> about
            <span className="orange"> Crafting </span> Exceptional Web
            Experiences
          </div>
          <div className="resume">
            <button className="resume-btn" onClick={handleresume}>
              Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;