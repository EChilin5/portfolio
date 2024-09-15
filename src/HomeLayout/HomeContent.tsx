import React, { useEffect, useRef, useState } from "react";
import About from "../components/AboutComponent";
import ContactComponent from "../components/ContactComponent";
import Home from "../components/HomeComponent";
import ProjectComponent from "../components/ProjectComponent";
import BallEffect from "../components/AnimationComponents/BallEffect/BallEffect";
import "./HomeContent.css";
import CardAnimationDeck from "../components/AnimationComponents/CardAnimation/CardAnimationDeck";

function HomeContent() {

  return (
    <div className="app-overall">

      <div className="content">
        <section>
          <Home />
        </section>
        <section id="sectionPin">
          <div className="pin-wrap-sticky">
            <div className="pin-wrap">
              …
              <div id="about">
                <About />
              </div>{" "}
            </div>
          </div>
        </section>
        <section>
          <div id="project" className="project-content-home">
            <div className="home-cards">
              <div className="home-wrapper">
                <div className="card-deck-title">Projects</div>
                <div>
                  <CardAnimationDeck />
                </div>
              </div>
            </div>
          </div>
          
          
        </section>
        <section>
          <div id="contact" className="contact-home">
            <div className="contact-form-section">
              <ContactComponent />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomeContent;
