import React from "react";
import About from "../components/AboutComponent";
import ContactComponent from "../components/ContactComponent";
import Home from "../components/HomeComponent";
import ProjectComponent from "../components/ProjectComponent";

function HomeContent() {
  return (
    <div>
      {" "}
      <Home />
      <div id="about">
        <About />
      </div>
      <div id="project">
        <ProjectComponent />
      </div>
      <div id="contact">
        <ContactComponent />
      </div>
    </div>
  );
}

export default HomeContent;
