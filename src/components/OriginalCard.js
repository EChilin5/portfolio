import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function OriginalCard(props) {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary" onClick={() => openInNewTab(props.url)}>
          View Project
        </Button>
      </Card.Body>
    </Card>
  );
}

export default OriginalCard;
