import React from "react";
import character from "../image/character.jpg";
import "./HomeComponent.css";

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
          <div className="home-subtitle">Hi my name is</div>
          <div className="home-subheading">
            <h2>Edgar Chilin</h2>
            <h3>I develop web and mobile apps</h3>
          </div>
          <div className="home-subcontent">
            <p>
              I specialize in using the MERN Stack
            </p>
          </div>
          <div className="btn-section">
            <button role="link" onClick={() => openResume(resume)}>
              Resume
            </button>
            <button role="link" onClick={() => openResume(Github)}>
              Github
            </button>
            <button role="link" onClick={() => openResume(linkedin)}>
              LinkedIn
            </button>
          </div>
        </div>
        <div className="home-container-right">
          <img src={character} alt="temporary naruto" />
        </div>
      </div>
    </div>
  );
};

export default Home;
