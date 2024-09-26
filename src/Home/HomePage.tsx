import React from "react";
import "./HomePage.scss";
import FluidAnimation from "../archieve/components/AnimationComponents/FluidAnimation";

const HomePage = () => {
  return (
    <div className="home-main">
      <div className="home-container">
        <div className="home-header">
          <div className="home-header-title">Edgar A Chilin</div>
          <div className="home-header-sub"> Software Developer</div>
        </div>
        <div className="home-bottom">
          <div className="social-groups">
            <div>Linkedin</div>
            <div>Resume</div>
            <div>GitHub</div>
          </div>
          <div className="home-description">
            Hello there, I am currently working on building user friendly web applications.Currently based in Los Angeles.
          </div>
        </div>
      </div>
      <div className="home-fluid">
      <FluidAnimation/>

      </div>
    </div>
  );
};

export default HomePage;
