import React from "react";
import { Card } from "react-bootstrap";
import "./HangingEffect.css";

const Skills = ({skill}) => {
  return (
    <div className="hanging-card">
      <Card style={{ width: "11rem","textAlign":"center" }}>
        <Card.Body>
          <Card.Title>{skill.logo}{skill.name}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Skills;
