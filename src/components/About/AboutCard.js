import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am Siddhant Nanda.
            I am a Software Engineer at Turtlemint.
            I typically concentrate on designing modules
            for clients that are distinct from existing services. In addition, 
            I tailor current services to meet the needs of my clients.
            <br />
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> I like working in C++, Java and Python.
            </li>
            <li className="about-activity">
              <ImPointRight /> Currently I am trying to learn React.
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
