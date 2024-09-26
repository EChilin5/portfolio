import React from "react";
import ConfettiTest from "./ConfettiTest";
import "./HomeContent.css";
import ContactComponent from "../components/ContactComponent";

const HomeFooter = () => {
  return (
    <div
    style={{
      position: "relative",
      height: "800px",
      clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
    }}
  >
    <div
      style={{
        position: "relative",
        height: "calc(90vh + 800px)",
        top: "-100vh",
      }}
    >
      <div
        style={{
          height: "800px",
          position: "sticky",
          top: "calc(90vh - 800px)",
        }}
      >
        <section>
          <div id="contact" className="contact-home">
            <div className="contact-form-section">
              <ConfettiTest />
              <ContactComponent />
            </div>
          </div>
        </section>
      </div>
    </div>
    </div>
  );
};

export default HomeFooter;
