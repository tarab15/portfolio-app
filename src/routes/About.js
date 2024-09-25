import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container, Row, Col, Card } from "react-bootstrap";
import developer from "../images/developer.webp";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import "./AllStyle.css";
import { FaPython, FaGithub } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiMysql } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { LiaNodeJs } from "react-icons/lia";
import { RiVuejsFill } from "react-icons/ri";
import { IoLogoReact } from "react-icons/io5";

const About = () => {
  const skills = [
    { name: "Python", logo: <FaPython style={{"fontSize":"130%","marginRight":"5%","borderRadius": "50%","outline": "2px solid black",}} /> },
    { name: "JavaScript", logo: <SiJavascript style={{"fontSize":"130%","marginRight":"5%","borderRadius": "50%","outline": "2px solid black",}} /> },
    { name: "HTML", logo: <TiHtml5 style={{"fontSize":"130%","marginRight":"5%","borderRadius": "50%","outline": "2px solid black",}} /> },
    { name: "CSS", logo: <IoLogoCss3 style={{"fontSize":"130%","marginRight":"5%","borderRadius": "50%","outline": "2px solid black",}}/> },
    { name: "Node.js", logo: <LiaNodeJs style={{"fontSize":"130%","marginRight":"5%","borderRadius": "50%","outline": "2px solid black",}}/> },
    { name: "Vue.js", logo: <RiVuejsFill style={{"fontSize":"130%","marginRight":"5%","borderRadius": "50%","outline": "2px solid black",}}/> },
    { name: "React.js", logo: <IoLogoReact style={{"fontSize":"130%","marginRight":"5%","borderRadius": "50%","outline": "2px solid black",}} /> },
    { name: "MySQL", logo: <SiMysql style={{"fontSize":"130%","marginRight":"5%","borderRadius": "50%","outline": "2px solid black",}}/> },
    { name: "MongoDB", logo: <SiMongodb style={{"fontSize":"130%","marginRight":"5%","borderRadius": "50%","outline": "2px solid black",}}/> },
    { name: "Git", logo: <FaGithub style={{"fontSize":"130%","marginRight":"5%","borderRadius": "50%","outline": "2px solid black",}}/> },
  ];
  return (
    <div className="text-light">
      <div style={{ margin: 20 }}>
        <Navbar />
      </div>

      <Container className="my-5">
        <Row>
          <Col md={12} className="text-center mb-5">
            <h1
              style={{
                fontSize: "500%",
                ffontFamily: "studiofeixen-variable,studiofeixen,Arial,Helvetica,sans-serif",
                fontWeight: "bold",
                display: "inline-block",
                "border-bottom": "2px solid",
                color:"#F8F9FA"
              }}
            >
              ABOUT ME
            </h1>
            <p style={{ fontSize: "150%", "padding-top": "1%" }}>
              Welcome to my portfolio! Here's a little bit about me.
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={16}>
            <Card
              className="card"
              style={{
                width: "100%",
                borderRadius: "15px",
                padding: "5%",
                backgroundColor: "whitesmoke",
              }}
            >
              <Row className="g-0">
                <Col md={8}>
                  <Card.Body>
                    <Card.Title
                      style={{ fontSize: "300%", fontWeight: "bold" }}
                    >
                      So, who am I?
                    </Card.Title>
                    <Card.Text style={{ marginTop: "5%", fontSize: "120%" }}>
                      Software Engineer, passionate about Web Development
                      specializing in front end development. Offering 1.5+ years
                      of experience in industry with history of recognition for
                      performance. Specifically proficient in object- oriented
                      design ideas and software development processes, as well
                      as the JavaScrpit, frameworks, and tools. Strong
                      analytical and problem-solving abilities, as well as an
                      acute attention to detail. demonstrated capacity to
                      cooperate in crossfunctional teams and adjust to changing
                      project needs.
                    </Card.Text>
                  </Card.Body>
                </Col>
                <Col md={4}>
                  <Card.Img
                    variant="top"
                    src={developer}
                    style={{
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "50%",
                      outline: "2px solid black",
                    }}
                  />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={16}>
            <Card
              className="card"
              style={{
                width: "100%",
                borderRadius: "15px",
                padding: "2%",
                backgroundColor: "#CFCFCF",
                marginTop: "2%",
              }}
            >
              <Card.Body>
                <Card.Title
                  style={{
                    fontSize: "300%",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  SKILLS
                </Card.Title>
                <Card.Text>
                  <div className="d-flex justify-content-center align-items-center">
                    {skills.map((skill, ind) => {
                      if (ind < 5) {
                        return <Skills key={ind} skill={skill} />;
                      }
                      return <></>
                    })}
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    {skills.map((skill, ind) => {
                      if (ind > 4) {
                        return <Skills key={ind} skill={skill} />;
                      }
                      return <></>
                    })}
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={16}>
            <Card
              className="card"
              style={{
                width: "100%",
                borderRadius: "15px",
                padding: "2%",
                backgroundColor: "whitesmoke",
                marginTop: "2%",
              }}
            >
              <Card.Body>
                <Card.Title
                  style={{
                    fontSize: "300%",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Experience
                </Card.Title>
                <Card.Text style={{ marginTop: "5%", fontSize: "120%" }}>
                  <Experience />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer word={'Contact here : '} />
    </div>
  );
};

export default About;
