import React from "react";
import About from "../components/AboutComponent";
import ContactComponent from "../components/ContactComponent";
import Home from "../components/HomeComponent";
import ProjectComponent from "../components/ProjectComponent";
import BallEffect from "../components/AnimationComponents/BallEffect/BallEffect";
import "./HomeContent.css"
import CardAnimationDeck from "../components/AnimationComponents/CardAnimation/CardAnimationDeck";

function HomeContent() {
  return (
    <div>
      {" "}
      <Home />
      <div id="about">
        <About />
      </div>
      <div id="project" className="project-content-home">
      <div className="home-cards">
      <div className="home-wrapper">
        <div className="home-title">
          Projects
        </div>
        <div>
          <CardAnimationDeck />
        </div>
      </div>
    </div>
      </div>
      <div  id="contact" className="contact-home">
        <div className="contact-form-section">
            <ContactComponent />
        </div>
        <div className="contact-form-animation-bg">
          <BallEffect/>
        </div>
      </div>
      
    </div>
  );
}

export default HomeContent;
