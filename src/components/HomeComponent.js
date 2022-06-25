import React from "react";
import "./HomeComponent.css";

import naruto from "../image/newsletter-naruto3.png";

function Home() {
  return (
    <div className="home">
      <div className="home-left">
        <div className="home-left-bg"></div>
        <img src={naruto} alt="character" className="home-left-img"></img>
      </div>

      <div className="home-right">
        <div className="home-right-wrapper">
          <h2 className="home-intro">Hello, My name is</h2>
          <h1 className="home-name">Edgar Chilin</h1>
          <div className="home-title">
            <div className="home-title-wrapper">
              <div className="home-title-item">Web Developer</div>
              <div className="home-title-item">Android Developer</div>
              <div className="home-title-item">UI/UX</div>
              <div className="home-title-item">Dog Owner</div>
            </div>
          </div>
          <div className="home-desc">
            I am a developer who has an interest in both web and mobile
            development. Reference my projects to see my skillset.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
