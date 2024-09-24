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
import css from "../image/CSS.png"
import csharp from "../image/C#.png"

const AboutComponent = () => {
  return (
    <div className="about-section">

      <div className="about-container">
        <div className="about-container-right">
        <h2 className="about-title">About Me</h2>

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
                <SkillCard imagePath={reactImage} projectType={"React"}/>
                <SkillCard imagePath={SQL} projectType={"SQL"} />
                <SkillCard imagePath={csharp} projectType={"C#"} />
              </div>
              <div className="about-tech-stack">
                <SkillCard imagePath={css}projectType={"css"} />

                <SkillCard imagePath={kotlin} projectType={"Kotlin"} />
                <SkillCard imagePath={java} projectType={"Java"} />
              </div>
            </div>
          </div>

          <p>
         Create innovative solutions with  Android (Kotlin, Firebase) and web development (React JS, C#, SQL), from mentoring teams to leading QA for generative AI tools. Let's connect to bring a collaborative, results-driven approach to your next project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
