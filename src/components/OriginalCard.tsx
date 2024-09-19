import React from "react";
import "./OriginalCard.scss";
import photo from "../images/card_background.png"

 interface CardContent{
  image:string;
  option: string;
  description: string;
  gitUrl: string;
  url: string;
  title:string;
  trigger:boolean;
}

function OriginalCard(props: CardContent) {


  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      <div className={`lusion-card-wrapper`}>
        <div className="card">
          <div
            className="content"
            // allow card flip to occur
            style={{
              transformOrigin: "center", // Ensures the rotation is around the center
              transform: props.trigger ? `rotateY(180deg)` : "rotateY(0deg)",
              // "translate(-50%, -50%) rotateY(0deg)",
            }}
          >
            <div className="front">
              <div className="front-content">
                <img src={photo} alt="card" />
                {/* <div className="photo-mask" /> */}
              </div>
            </div>
            <div className="back">
            <div className="card-container">
        <div className="card-container-image">
          <img src={props.image} alt="project" />
        </div>
        <div className="card-container-content">
          {props.option !== "Android" ? (
            <div className="card-content-tech">
              <p>REACT JS</p>
            </div>
          ) : (
            <div className="card-content-tech">
              <p>Android</p>
              <p>Kotlin</p>
              <p>Firebase</p>
            </div>
          )}

          <div className="card-content-title">
            <h3>{props.title}</h3>
          </div>
          <div className="card-content-desc">{props.description}</div>
          <div className="card-content-footer">
            <button id="btn-left" onClick={() => openInNewTab(props.gitUrl)}>
              Github
            </button>
            <button id="btn-right" onClick={() => openInNewTab(props.url)}>
              Live
            </button>
          </div>
        </div>
      </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OriginalCard;
