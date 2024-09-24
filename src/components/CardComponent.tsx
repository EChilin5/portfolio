import React from "react";
import Card from "react-bootstrap/Card";
import "./CardComponent.css";
import { title } from "process";

interface  CardContent{
  image:string,
  title:string, 
  description:string,
}

function CardComponent(props:CardContent) {
  return (
    <Card style={{ width: "10rem" }}>
      <Card.Img variant="top" src={props.image} height="150px" width="75px" />
      <Card.Body>
        <Card.Title className="text-center">{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
