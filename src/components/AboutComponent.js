import React from "react";

import CardComponent from "./CardComponent";
import reactImage from "../image/react.png";
import css from "../image/CSS.png";
import firestore from "../image/firestore.png";
import java from "../image/Java.png";
import kotlin from "../image/kotlin.png";
import sql from "../image/SQL.png";

import "./AboutComponent.css";

const AboutComponent = () => {
  return (
    <div>
      <div className="about-container">
        <div className="about-container-right">
          <img src={reactImage} alt="testing will be replaced" />
        </div>
        <div className="about-container-left">
          <h2>About Me</h2>
          <p>
            Hello, I'm Edgar Chilin, a dedicated software developer with a
            passion for both mobile and web development. My mission is to create
            applications that address real-world challenges and enhance people's
            daily lives.{" "}
          </p>
          <p>
            Launched a few mobile applications on the Play Store using Kotlin
            and Firebase, I've honed my skills in crafting innovative solutions.
            One of my most rewarding projects is a nutrition-based application
            to keep records of your weight loss journey, a food journal, and a
            variety of recipes from the Edaman API.
          </p>
          <p>
            In the realm of web development, I'm excited to announce that my
            upcoming websites, built with React JS, C#, and SQL, are just around
            the corner. These platforms are geared towards assisting businesses
            in selling their product, allowing users to make appointments, and
            providing users with a healthier lifestyle.
          </p>

          <div className="about-tech-stack">
            <p>Technologies I am familar with</p>
            <ul>
              <div className="about-tech-stack-container">
                <div className="about-tech-stack-left">
                  <li>REACT JS</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>C#</li>
                </div>
                <div className="about-tech-stack-right">
                  <li>SQL</li>
                  <li>Kotlin</li>
                  <li>Java</li>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
