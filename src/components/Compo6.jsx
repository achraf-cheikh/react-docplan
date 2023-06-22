import React from "react";
import "./Compo6.css";
import { Button, Card } from "react-bootstrap";

const Compo6 = () => {
  const tabl = [
    {
      photo: "https://www.docplanner.com/images/warsaw.png",
      tiitre: "Warsaw",
    },
    {
      photo: "https://www.docplanner.com/images/barcelona.png",
      tiitre: "Barcelona",
    },
    {
      photo: "https://www.docplanner.com/images/munich.png",
      tiitre: "Munich",
    },
    {
      photo: "https://www.docplanner.com/images/istanbul.png",
      tiitre: "Istanbul",
    },
    {
      photo: "https://www.docplanner.com/images/rome.png",
      tiitre: "Rome",
    },
    {
      photo: "https://www.docplanner.com/images/bologna.png",
      tiitre: "Bologna",
    },
    {
      photo: "https://www.docplanner.com/images/curitiba.png",
      tiitre: "Curitiba",
    },
    {
      photo: "https://www.docplanner.com/images/rio-janeiro.png",
      tiitre: "Rio De Janeiro",
    },
    {
      photo: "https://www.docplanner.com/images/mexico-city.png",
      tiitre: "Mexico City",
    },
    {
      photo: "https://www.docplanner.com/images/bogota.png",
      tiitre: "Bogota",
    },
  ];

  return (
    <div className="carddiv">
      {tabl.map((el) => (
        <Card className="cardd">
          <Card.Img variant="top" src={el.photo} />
          <Card.Body className="body-card">
            <Card.Title className="tit">{el.tiitre}</Card.Title>
            <Button className="btn" variant="primary">
              SEE OPENINGS
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Compo6;
