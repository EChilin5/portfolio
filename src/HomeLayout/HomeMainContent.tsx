import React from 'react'
import "./HomeContent.css";
import chill from "../image/ChillCalories.png";
import zotes from "../image/zotes.png"
import duck from "../image/duck.png"
import globalmetal from "../image/GlobalMetalVentures.png"
import Home from '../components/HomeComponent';
import ProjectTemplate from '../components/ProjectTemplate';
import ConfettiTest from './ConfettiTest';
import About from "../components/AboutComponent";




const HomeMainContent = () => {
    const projects = [
        {
          id: 0,
          name: "TXT Labs",
          techStack: "Reat JS with TypeScript",
          description:
            "Collborated with fellow teammates in a website redevelopment: Our focus was on integrating advanced animations to highlight our latest web development capabilities for prospective clients.For example using framer motion to create unique animations appealing to users to demonstrate the high level of website we create for our clients",
          git: "",
          liv: "https://txtlabs.io/",
          image: `${duck}`,
        },
        {
          id: 1,
          name: "Global Metal Ventures",
          techStack: "React Js",
          description:
            "Client requested to improve there overall website based on their design in order to improve better design. Additionally incorporate the EMAIL JS API for customers to contact client directly.",
          git: "",
          liv: "https://globalmetalventures.com/",
          image: `${globalmetal}`,
        },
        {
          id: 2,
          name: "Chill Calories",
          techStack: "Kotlin, Firebase",
          description:
            "An android application built with Kotlin in order to help user to improve their eating habbits. The app will show users a list of food they have ate in the past, healthy restaurants, and recipes. Additionally the app will be providing the user with the amount of calories they have consumed and how many they have left. This way the user can be more cautious of what they eat.",
          git: "https://github.com/EChilin5/iTV",
          liv: "https://play.google.com/store/apps/details?id=eachillz.dev.itv&hl=en",
          image: `${chill}`,
        },
        {
          id: 3,
          name: "Zotes",
          techStack: "Kotlin, Firebase, React Js",
          description:
            "Zote Shop is an web application intended to help users buy different products. A demo application to demonstrate how products will be presented and what infromation will be available to the user.",
          git: "https://github.com/EChilin5/Commerce",
          liv: "https://play.google.com/store/apps/details?id=eachillz.dev.itv&hl=en",
          image: `${zotes}`,
        },
      ];
  return (
    <div className="app-overall">
      <div className="content">
        <section>
          <Home />
          <ConfettiTest />
        </section>
        <section id="sectionPin">
          <div id="about">
            <About />
          </div>{" "}
        </section>
        <section>
          <div id="project" className="project-content-home">
            <div className="card-deck-title">Projects</div>
            <div className="project-chart">
              {projects.map((project) => {
                return (
                  <div key={project.id}>
                    <ProjectTemplate content={project} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default HomeMainContent