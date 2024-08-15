import React from "react";
import naruto from "../image/newsletter-naruto3.png";
import "./AboutComponent.css";
import SkillCard from "./CardComponents/SkillCard";
import java from "../image/Java.png";
import SQL from "../image/SQL.png";
import reactImage from "../image/react.png";
import kotlin from "../image/kotlin.png";
import marker from "../image/marker.png";

const AboutComponent = () => {
  return (
    <div>
      <div className="about-container">
        <div className="about-container-right">
          <img src={naruto} alt="testing will be replaced" />
        </div>
        <div className="about-container-left">
          <h2>About Me</h2>
          <p>
            As a passionate software developer with a strong foundation in both
            mobile and web development, I thrive on creating applications that
            solve real-world challenges and improve users' lives. My expertise
            spans Android development with Kotlin and Firebase, where I've
            successfully launched apps on the Play Store, to cutting-edge web
            development using React JS, C#, and SQL.
          </p>
          <p>
            In addition to my technical skills, I am deeply committed to
            continuous learning and collaboration. I’ve mentored teams in React
            JS and TypeScript, led quality assurance for generative AI tools,
            and ensured flawless website performance. If you’re looking for
            someone who can bring innovative solutions and a collaborative
            spirit to your project, let’s connect!
          </p>

          <div className="about-tech-stack-name">
            
            <div className="about-tech-stack-container"><h3>Technologies I am familar with: </h3>
            <span className="dotA"></span>
            <span className="dotB"></span>
            <span className="dotC"></span>
            <span className="dotD"></span>
          
            <span className="squareEraser">Eraser</span>
            <img className="marker" src={marker} alt="marker"/>
            <img className="marker-two" src={marker} alt="marker"/>
            <img className="marker-three" src={marker} alt="marker"/>

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
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
