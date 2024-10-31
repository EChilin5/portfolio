import React, { useEffect } from "react";
import "./HomePage.scss";
import FluidAnimation from "../archieve/components/AnimationComponents/FluidAnimation";
import edgar2 from "./file.png";
import edgar3 from "./test.png";
import Lenis from "lenis";
import happface from "../image/Happy face.png";
import star from "../image/Star 5.png";
import outlinecircle from "../image/Ellipse 6.png";
import fullcircle from "../image/Ellipse 7.png";
import SlideablePage from "../ParalaxEffect/SlideablePage";

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
        <div className="home-wrapper">
          <div className="home-main-header">
            <div className="home-header">
              <div className="home-header-title">
                Edgar Chilin
                <img src={happface} alt="happy face" />
              </div>
              <div className="home-header-sub">
                <img src={star} alt="star" />
                Software Developer
              </div>
            </div>
          </div>
          <div className="home-images">
            <div className="home-images-location">
              <img className="oultine-img" src={outlinecircle} alt="outline" />
              <img className="full-img" src={fullcircle} alt="full" />
            </div>
          </div>
        </div>
        {/* <div className="home-bottom">
          <div className="social-groups">
            <div
              className="social-groups-item"
              onClick={() => openLink(linkedin)}
            >
              Linkedin
            </div>
            <div
              className="social-groups-item"
              onClick={() => openLink(resume)}
            >
              Resume
            </div>
            <div
              className="social-groups-item"
              onClick={() => openLink(Github)}
            >
              GitHub
            </div>
          </div>
          <div className="home-description">
            Hello there, I am currently working on building user friendly web
            applications.Currently based in Los Angeles.
          </div>
        </div> */}
        <div className="tech-Stack">
          <div>Tech Stack</div>
          <div>React, Java, HTML, JavaScript, C#, Python, .NET</div>
        </div>
      </div>
      {/* <div className="home-image"><img src={edgar2} alt="edgar2"/></div> */}
    </div>
  );
};

export default HomePage;
