import React from "react";
import { Card } from "react-bootstrap";
export default function Mycard(props) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.card.img} />
        <Card.Body style={{ padding: "2rem", margin: "2rem" }}>
          <Card.Title style={{ color: "red" }}>{props.card.title}</Card.Title>
          <Card.Text style={{ fontSize: "15px" }}>{props.card.text}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
