import React from "react";
import naruto from "../image/newsletter-naruto3.png";
import character from "../image/character.jpg";
import "./HomeComponent.css";

const Home = () => {
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
              I specialize in using REACT JS, C#, SQL, and Kotlin to build web
              and mobile applications.Yes I also specialize in android
              applications.
            </p>
          </div>
          <div className="btn-section">
            <button>Resume</button>
            <button>Github</button>
            <button>LinkedIn</button>
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
