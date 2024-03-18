import React from "react";
import OriginalCard from "./OriginalCard";
import "./ProjectComponent.css";
import tio from "../image/tio.png";
import chillcalories from "../image/ChillCalories.png";
import zotes from "../image/zotes.png";
import appointment from "../image/appoinment.jpg";

function ProjectComponent() {
  return (
    <div className="project">
      <h2>Projects</h2>

      <div className="project-grid">
        <div className="project-column">
          <OriginalCard
            image={chillcalories}
            title="Chill Calories"
            description="Help Users reduce their calories and loose weight"
            url="https://play.google.com/store/apps/details?id=eachillz.dev.itv&hl=en"
            gitUrl="https://github.com/EChilin5/iTV"
            option="Android"
          />
        </div>

        <div className="project-column">
          <OriginalCard
            image={tio}
            title="TIO CR"
            description="Turn Images into Text with a click of a button"
            url="https://play.google.com/store/apps/details?id=com.eachilin.imagecut&hl=en"
            gitUrl="https://github.com/EChilin5/ImageCut_OCR"
            option="Android"
          />
        </div>
        <div className="project-column">
          <OriginalCard
            image={zotes}
            title="Zotes Shop Demo"
            description="Sample Ecommerce shop to view and buy items"
            url="https://play.google.com/store/apps/details?id=com.eachilin.zotes"
            gitUrl="https://github.com/EChilin5/Zotes_OCR"
            option="Android"
          />
        </div>

        <div className="project-column">
          <OriginalCard
            className="project-column"
            image={appointment}
            title="Appointments"
            description="The frontEnd version of the app still in development"
            url="https://appointments-7407b.web.app/"
            gitUrl="https://github.com/EChilin5/appointment"
            option="Web"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectComponent;
