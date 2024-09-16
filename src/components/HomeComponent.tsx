import React from "react";
import character from "../image/character.jpg";
import "./HomeComponent.css";
import { Framer } from "./MageneticButton";

const Home = () => {
  let linkedin = "https://www.linkedin.com/in/edgar-c/";
  let resume =
    "https://drive.google.com/file/d/1cFr7-XmffshG0JXaFawLZIUjbvWUqSCm/view?usp=sharing";
  let Github = "https://github.com/EChilin5";
  const openResume = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div>
      <div className="home-container">
        <div className="home-container-left">
          <div className="home-subheading">
            <h2>Edgar Chilin</h2>
            <h3>Develop web and mobile apps</h3>
          </div>
          <div className="btn-section">
            <Framer>
            <button role="link" onClick={() => openResume(resume)}>
              Resume
            </button>
            <button role="link" onClick={() => openResume(Github)}>
              Github
            </button>
            <button role="link" onClick={() => openResume(linkedin)}>
              LinkedIn
            </button>
            </Framer>
          </div>
        </div>
        <div className="home-container-right">
          {/* <img src={character} alt="temporary naruto" /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
