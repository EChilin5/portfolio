import React, { useEffect, useRef } from "react";
import TopNavBar from "./NavbarComponent";
import HomePage from "./Home/HomePage";
import ProjectPage from "./Projects/ProjectPage";
import About from "./About/About";
import Footer from "./Footer/Footer";
import Lenis from "lenis";
import { useTransform, useScroll, motion, MotionValue } from "framer-motion";
import useDimension from "./useDimension";
import "./App.scss";
import SlideablePage from "./ParalaxEffect/SlideablePage";

function App() {
  // useEffect(() => {
  //   const lenis = new Lenis();
  //   let frameCount = 0;

  //   function raf(time: number) {
  //     // Only update Lenis every 2nd frame to reduce load
  //     if (frameCount % 5 === 0) {
  //       lenis.raf(time);
  //     }
  //     frameCount++;
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);
  // }, []);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    // start end is when you want to start tracking
    // stop when it's at the end of the window a new item starts
    offset: ["start end", "end start"],
  });

  const { height } = useDimension();
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);

  return (
    <div className="App">
      <div className="home-hero-display">
        <div className="home-hero-display-main">
          <HomePage />
        </div>
        <div className="home-hero-display-mid">
        </div>
        <div className="home-hero-display-sub">
          <SlideablePage />
        </div>
      </div>
      <div className="app-main" ref={container}>
        {/* <motion.div style={{ y }} className="app-container"> */}
        <div>
          <About />
        </div>
        <div>
          <ProjectPage />
        </div> 
        {/* </motion.div> */}
      </div> 
       {/* <div
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
          >  */}
            <Footer />
          </div>
    //      </div>
    //   </div>
    //  </div>
  );
}

export default App;
