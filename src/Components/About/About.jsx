import React from "react";

import "./About.css";
import about from "./about.png";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

const About = () => {
  return (
    <div className="about-box-container">
      <div className="about-header">About Me</div>

      <div className="about-container">
        <div className="about-image">
          <img src={about} alt="" />
        </div>

        <div className="about-data">
          <div className="intro">
            Hi Everyone, My name is{" "}
            <span className="ah"> Purvesh Krishnani </span> and I am from{" "}
            <span className="ah"> Mumbai </span> . I have completed my post
            graduation in <span className="ah">MSc (Computer Science )</span>{" "}
            from KC Collge (Churchgate).
          </div>

          <br />
          <div className="describe">
            <div className="description-heading">
              Terms That can describe me apart form Coding :
            </div>
            <div className="description-point">
              <div className="description-point-data">
                <div className="about-icon">
                  <ExitToAppOutlinedIcon />
                </div>
                <div className="about-point">Adventurous</div>
              </div>

              <div className="description-point-data">
                <div className="about-icon">
                  <ExitToAppOutlinedIcon />
                </div>
                <div className="about-point">Cricket</div>
              </div>
              <div className="description-point-data">
                <div className="about-icon">
                  <ExitToAppOutlinedIcon />
                </div>
                <div className="about-point">Enthusiast</div>
              </div>
              <div className="description-point-data">
                <div className="about-icon">
                  <ExitToAppOutlinedIcon />
                </div>
                <div className="about-point">Adaptable</div>
              </div>

              <div className="description-point-data">
                <div className="about-icon">
                  <ExitToAppOutlinedIcon />
                </div>
                <div className="about-point">Honest</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
