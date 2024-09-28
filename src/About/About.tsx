import React from "react";
import java from "../image/Java.png";
import SQL from "../image/SQL.png";
import reactImage from "../image/react.png";
import kotlin from "../image/kotlin.png";
import edgar from "../image/Edgar.jpeg";
import css from "../image/CSS.png";
import csharp from "../image/C#.png";
import "./About.scss";
import Magnetic from "../Animation/Magnets";
import { motion, MotionValue } from "framer-motion";

interface Motion{
  y:MotionValue<number>;
}

const About = () => {
  // const {y} = props;

  const techSkills = [
    {
      name: "java",
      image: `${java}`,
    },
    {
      name: "SQL",
      image: `${SQL}`,
    },
    {
      name: "React",
      image: `${reactImage}`,
    },
    {
      name: "Kotlin",
      image: `${kotlin}`,
    },
    {
      name: "css",
      image: `${css}`,
    },
    {
      name: "c#",
      image: `${csharp}`,
    },
  ];

  return (
    <div className="about-main">
      <div className="about-header">
        <div className="about-header-title">About Me</div>
        <div className="about-container">
          <div className="about-photo">
            <img src={edgar} alt="edgar" />
          </div>
          <div className="about-description">
            A software developer with experience from web to mobile
            applications. Provide users with quality content.
          </div>
        </div>
      </div>

      <div className="about-tech-title"> Tech Stack</div>
        <div className="tech">
          {techSkills.map((tech) => {
            return (
              <Magnetic>
              <div key={tech.name}>
                <div className="tech-card">
                  <div className="tech-card-overllay">
                    <img src={tech.image} alt="test" />
                  </div>
                  <div> {tech.name}</div>
                </div>
              </div>
              </Magnetic>
            );
          })}
        </div>
   
    </div>
  );
};

export default About;
