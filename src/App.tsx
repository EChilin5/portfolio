import React from "react";
import TopNavBar from "./NavbarComponent";
import HomePage from "./Home/HomePage";
import ProjectPage from "./Projects/ProjectPage";
import About from "./About/About";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <HomePage />
      <About />
      <ProjectPage />
      <div
        style={{
          position: "relative",
          height: "510px",
          clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
        }}
      >
        <div
          style={{
            position: "relative",
            height: "calc(90vh + 510px)",
            top: "-100vh",
          }}
        >
          <div
            style={{
              height: "510px",
              position: "sticky",
              top: "calc(90vh - 510px)",
            }}
          >
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
