import React from "react";
import "./AboutComponent.css";
import CardComponent from "./CardComponent";
import reactImage from "../image/react.png";
import css from "../image/CSS.png";
import firestore from "../image/firestore.png";
import java from "../image/Java.png";
import kotlin from "../image/kotlin.png";
import sql from "../image/SQL.png";

function About() {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-left-wrapper">
          <h2>About Me</h2>
          <hr />
          <p>
            I am a developer interested in both web and mobile development. I
            have a passion for creating applications that can help benefit my
            community. I have recently launched three applications on the Google
            Play store to help with productivity and health that are currently
            listed in my project section. My overall goal is to create an app
            that can have a large impact on people or contribute to a
            large-scale application that a variety of different people use.
          </p>
          <p>
            Additionally, I have IT Experience as I have previously helped set
            up and troubleshoot both Windows and Mac devices. If you have any
            issues feel free to reach out to see if I can assist you.
          </p>
        </div>
      </div>

      <div className="about-right">
        <h2>Skills</h2>
        <div className="bg-grid">
          <div className="grid">
            <CardComponent
              className="column"
              image={reactImage}
              title="React"
              description=""
            />
            <CardComponent
              className="column"
              image={css}
              title="CSS"
              description=""
            />
            <CardComponent
              className="column"
              image={kotlin}
              title="Kotlin"
              description=""
            />
            <CardComponent
              className="column"
              image={firestore}
              title="FireStore"
              description=""
            />
            <CardComponent
              className="column"
              image={java}
              title="Java"
              description=""
            />
            <CardComponent
              className="column"
              image={sql}
              title="SQL"
              description=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
