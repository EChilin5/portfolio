import React from "react";
import "./HomePage.scss";
import FluidAnimation from "../archieve/components/AnimationComponents/FluidAnimation";
import edgar2 from "./file.png"
import edgar3 from "./test.png"

const HomePage = () => {

  let linkedin = "https://www.linkedin.com/in/edgar-c/";
  let resume =
    "https://drive.google.com/file/d/1cFr7-XmffshG0JXaFawLZIUjbvWUqSCm/view?usp=sharing";
  let Github = "https://github.com/EChilin5";
  const openLink = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div className="home-main">
      <div className="home-container">
        <div className="home-header">
          <div className="home-header-title">Edgar A Chilin</div>
          <div className="home-header-sub"> Software Developer</div>
        </div>
        <div className="home-bottom">
          <div className="social-groups">
            <div className="social-groups-item" onClick={()=>openLink(linkedin)}>Linkedin</div>
            <div className="social-groups-item" onClick={()=>openLink(resume)}>Resume</div>
            <div className="social-groups-item" onClick={()=>openLink(Github)}>GitHub</div>
          </div>
          <div className="home-description">
            Hello there, I am currently working on building user friendly web applications.Currently based in Los Angeles.
          </div>
        </div>
      </div>
      <div className="home-image">
        <img src={edgar3} alt="edgar2"/>
      </div>
      <div className="home-fluid">
      <FluidAnimation/>

      </div>
    </div>
  );
};

export default HomePage;
