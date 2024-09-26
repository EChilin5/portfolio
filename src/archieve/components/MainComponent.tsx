import React from "react";
import About from "./AboutComponent";
import Home from "./HomeComponent";
import ContactComponent from "./ContactComponent";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProjectComponent from "./ProjectComponent";
import Button from "react-bootstrap/Button";
import ErrorPage from "./ErrorPage";

function Main() {
  const openResume = () => {
    const url =
      "https://drive.google.com/file/d/16Xlk-MbYOjsX8k9JOqO2iGOKnxRkgvTM/view?usp=sharing";
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/project">Project</Link>
        <Link to="/contact">Contact</Link>
        <Button onClick={() => openResume()}>Open Resume</Button>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactComponent />} />
          <Route path="/project" element={<ProjectComponent />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Main;
