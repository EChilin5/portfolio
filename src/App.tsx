import React from "react";
import TopNavBar from "./NavbarComponent";
import HomePage from "./Home/HomePage";
import ProjectPage from "./Projects/ProjectPage";
import About from "./About/About";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
     <HomePage/>
     <About/>
     <ProjectPage/>
     <Footer/>
    </div>
  );
}

export default App;
