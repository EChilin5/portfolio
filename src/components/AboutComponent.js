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
          <h4>
            {" "}
            I am a devloper who is interested in both web development and mobile
            development. I have recently launched 3 applications in the google
            play store.
          </h4>
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
