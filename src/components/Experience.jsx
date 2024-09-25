import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Experience.css";

const Experience = () => {
  const [company, setCompany] = useState(true);
  const experiences = [
    {
      company: "Teresol Pvt Ltd",
      role: "Software Design Engineer",
      period: "Sep 2022 - Present",
      description: `Designed and developed the front-end components of a web application using Vue.js ensuring
responsiveness, scalability, and a seamless user experience and middleware components using Node.js
enabling secure and efficient data transfer between front-end and back-end systems`,
    },
    {
      company: "Proxima",
      role: "Software Developer Intern",
      period: "Jan 2021 - Mar 2021",
      description: `Working in the field of artificial intelligence mainly in chatbot development with an AI based company.`,
    },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <Container>
        <Row>
          <Col md={6}>
            <button
              className="button-28"
              onClick={() => {
                setCompany(true);
              }}
              style={
                company === true
                  ? { color: "#000", "background-color": "#CFCFCF","marginTop":"10%" }
                  : { color: "#3B3B3B", "background-color": "transparent" }
              }
            >
              {experiences[0].company}
            </button>
            <button
              className="button-28"
              onClick={() => {
                setCompany(false);
              }}
              style={
                company === false
                  ? { color: "#000", "background-color": "#CFCFCF","marginTop":"5%" }
                  : { color: "#3B3B3B", "background-color": "transparent","marginTop":"5%" }
              }
            >
              {experiences[1].company}
            </button>
          </Col>
          <Col md={6} >
            {company === true ? (
              <div style={{"outline":"2px solid black", "padding":"3%","marginTop":"5px","borderRadius":"10%","color": "#000", "background-color": "#CFCFCF"}}>
                <p>
                  <strong>Role:</strong> {experiences[0].role}
                </p>
                <p>
                  <strong>Period:</strong> {experiences[0].period}
                </p>
                <p>
                  <strong>Description:</strong> {experiences[0].description}
                </p>
              </div>
            ) : (
              <div style={{"outline":"2px solid black", "padding":"2%","marginTop":"5px","borderRadius":"5%","color": "#000", "background-color": "#CFCFCF"}}>
                <p>
                  <strong>Role:</strong> {experiences[1].role}
                </p>
                <p>
                  <strong>Period:</strong> {experiences[1].period}
                </p>
                <p>
                  <strong>Description:</strong> {experiences[1].description}
                </p>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Experience;
