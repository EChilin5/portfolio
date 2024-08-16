import React from "react";
import naruto from "../image/newsletter-naruto3.png";
import "./AboutComponent.css";
import SkillCard from "./CardComponents/SkillCard";
import java from "../image/Java.png";
import SQL from "../image/SQL.png";
import reactImage from "../image/react.png";
import kotlin from "../image/kotlin.png";
import marker from "../image/marker.png";
import edgar from "../image/Edgar.jpeg";

const AboutComponent = () => {
  return (
    <div className="about-section">
      {" "}
      <h2 className="about-title">About Me</h2>
      <div className="about-container">
        <div className="about-container-right">
          <div className="image-block">
            <img src={edgar} alt="testing will be replaced" />
            
          </div>

          <div className="overlay"></div>
        </div>
        <div className="about-container-left">
          <div className="about-tech-stack-name">
            <div className="about-tech-stack-container">
              <h3>Tech Stack</h3>
              <span className="dotA"></span>
              <span className="dotB"></span>
              <span className="dotC"></span>
              <span className="dotD"></span>

              <span className="squareEraser">Eraser</span>
              <img className="marker" src={marker} alt="marker" />
              <img className="marker-two" src={marker} alt="marker" />
              <img className="marker-three" src={marker} alt="marker" />

              <div className="about-tech-stack">
                <SkillCard imagePath={reactImage} />
                <SkillCard imagePath={SQL} />
                <SkillCard imagePath={reactImage} />
              </div>
              <div className="about-tech-stack">
                <SkillCard imagePath={reactImage} />

                <SkillCard imagePath={kotlin} />
                <SkillCard imagePath={java} />
              </div>
            </div>
          </div>

          <p>
            As a software developer with expertise in mobile and web
            development, I create applications that solve real-world challenges.
            My skills include Android development with Kotlin and Firebase, and
            web development using React JS, C#, and SQL. I’m committed to
            continuous learning and collaboration, having mentored teams in
            React and TypeScript, and led QA for generative AI tools. Let’s
            connect if you need innovative solutions and a collaborative
            approach to your project
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
