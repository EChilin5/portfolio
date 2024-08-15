import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./OriginalCard.css";

 interface CardContent{
  image:string;
  option: string;
  description: string;
  gitUrl: string;
  url: string;
  title:string;
}

function OriginalCard(props: CardContent) {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      <div className="card-container">
        <div className="card-container-image">
          <img src={props.image} alt="project" />
        </div>
        <div className="card-container-content">
          {props.option !== "Android" ? (
            <div className="card-content-tech">
              <p>REACT JS</p>
              <p>Bootstrap</p>
              <p>C#</p>
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
  );
}

export default OriginalCard;
