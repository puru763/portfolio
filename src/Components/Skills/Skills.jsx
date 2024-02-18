import React from "react";
import "./Skills.css";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiHibernate } from "react-icons/si";

const Skills = () => {
  return (
    <div className="skill-box">
      <div className="skill-heading">My Skills </div>

      <div className="skills-data">
          <div className="skill-item-box">
            <FaReact className="skill-icons" />
            <div className="skill-name">React JS</div>
          </div>

          <div className="skill-item-box">
            <FaNodeJs className="skill-icons" />
            <div className="skill-name">Node JS</div>
          </div>

          <div className="skill-item-box">
            <SiExpress className="skill-icons" />
            <div className="skill-name">Express JS</div>
          </div>

          <div className="skill-item-box">
            <SiMongodb className="skill-icons" />
            <div className="skill-name">MongoDB</div>
          </div>

          <div className="skill-item-box">
            <SiCplusplus className="skill-icons" />
            <div className="skill-name">C++</div>
          </div>

          <div className="skill-item-box">
            <FaJava className="skill-icons" />
            <div className="skill-name">Java</div>
          </div>

          <div className="skill-item-box">
            <FaHtml5 className="skill-icons" />
            <div className="skill-name">HTML</div>
          </div>

          <div className="skill-item-box">
            <IoLogoCss3 className="skill-icons" />
            <div className="skill-name">CSS</div>
          </div>

          <div className="skill-item-box">
            <IoLogoJavascript className="skill-icons" />
            <div className="skill-name">Javascript</div>
          </div>

          <div className="skill-item-box">
            <FaAws className="skill-icons" />
            <div className="skill-name">AWS</div>
          </div>

          <div className="skill-item-box">
            <SiMysql className="skill-icons" />
            <div className="skill-name">MYSQL</div>
          </div>

          <div className="skill-item-box">
            <FaGithub className="skill-icons" />
            <div className="skill-name"> Github</div>
          </div>


          <div className="skill-item-box">
            <BiLogoSpringBoot className="skill-icons" />
            <div className="skill-name"> Spring boot</div>
          </div>


          <div className="skill-item-box">
            <SiHibernate className="skill-icons" />
            <div className="skill-name"> SiHibernate</div>
          </div>


        </div>
      </div>
  );
};

export default Skills;


