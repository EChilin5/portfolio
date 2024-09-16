import React, { useEffect, useRef, useState } from "react";
import About from "../components/AboutComponent";
import Home from "../components/HomeComponent";

import "./HomeContent.css";
import CardAnimationDeck from "../components/AnimationComponents/CardAnimation/CardAnimationDeck";
import FluidAnimation from "../components/AnimationComponents/FluidAnimation";
import Confetti from "./ConfettiTest";
import ConfettiTest from "./ConfettiTest";
import ContactComponent from "../components/ContactComponent";

function HomeContent() {

  return (
    <div className="app-overall">

      <div className="content">
        <section>
          <Home />
          <ConfettiTest/>
        </section>
        <section id="sectionPin">
          <div className="pin-wrap-sticky">
            <div className="pin-wrap">
              
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
