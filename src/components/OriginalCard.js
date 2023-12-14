import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./OriginalCard.css";

function OriginalCard(props) {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    // <Card style={{ width: "18rem" }}>
    //   <Card.Img variant="top" src={props.image} />
    //   <Card.Body>
    //     <Card.Title>{props.title}</Card.Title>
    //     <Card.Text>{props.description}</Card.Text>
    //     <Button variant="primary" onClick={() => openInNewTab(props.url)}>
    //       View Project
    //     </Button>
    //   </Card.Body>
    // </Card>
    <div>
      <div className="card-container">
        <div className="card-container-image">
          <img src={props.image} alt="project" />
        </div>
        <div className="card-container-content">
          <div className="card-content-tech">
            <p>REACT JS</p>
            <p>Bootstrap</p>
            <p>C#</p>
          </div>
          <div className="card-content-title">
            <h3>{props.title}</h3>
          </div>
          <div className="card-content-desc">{props.description}</div>
          <div className="card-content-footer">
            <button id="btn-left">Github</button>
            <button id="btn-right">Live</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OriginalCard;
