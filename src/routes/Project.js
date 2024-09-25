import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Col, Container, Row } from "react-bootstrap";
import movieApp from "../images/MovieApp.png";
import { FaArrowRight } from "react-icons/fa6";
import portfolioApp from "../images/portfolioApp.png";
import bahl from "../images/bahl.png";
import vr from "../images/vrFyp.png";
import fitWorld from "../images/fitWorld.png";
import MyModal from "../components/Modal";
import "./AllStyle.css";

const Project = () => {
  const [projectInfo, setProjectInfo] = useState(0);
  const [modals, setModals] = useState([false, false, false, false, false]);

  const toggleModal = (index) => {
    const updatedModals = modals.map((show, i) => (i === index ? !show : show));
    setModals(updatedModals);
  };

  const projects = [
    {
      name: "Portfolio App",
      description:
        "A React.js and Bootstrap-based portfolio app efficiently combines modern web technologies and responsive design principles to create a professional, user-friendly platform for showcasing an individual’s work and achievements. With React’s component-based structure and Bootstrap’s styling and layout tools, the app is both functional and visually appealing, providing a solid foundation for any personal or professional portfolio.",
      codeUrl: "https://github.com/tarab15/portfolio-app",
      imageIndex: 1,
    },
    {
      name: "Movie App",
      description:
        "A React.js and Bootstrap-based portfolio app efficiently combines modern web technologies and responsive design principles to create a professional, user-friendly platform for showcasing an individual’s work and achievements. With React’s component-based structure and Bootstrap’s styling and layout tools, the app is both functional and visually appealing, providing a solid foundation for any personal or professional portfolio.",
      codeUrl: "https://github.com/tarab15/movie-app-react",
      imageIndex: 2,
    },
    {
      name: "Bank Al-Habib Core Banking System",
      description:
        "The goal of this project is to use Java and Vue.js to create a Core Banking Software solution for Bank Al Habib. It will give users an easy-to-use interface via which they can access their accounts and carry out different banking tasks. The technology will facilitate scalability for future expansion while guaranteeing adherence to industry norms and laws.",
      codeUrl: "",
      imageIndex: 3,
    },
    {
      name: "VR App For Steam Based Space Expedition",
      description:
        "Final year Project aims to develop a VR application through which school students can explore and learn about space in a fully immersive virtual environment, thus improving quality of education and exposing children to the field of space sciences",
      codeUrl: "",
      imageIndex: 4,
    },
    {
      name: "Fit World Gym",
      description:
        "Influencing and interactive website design describing gym focusing on its courses and also provide a site for shopping related to gym designed using wordpress and JS",
      codeUrl: "",
      imageIndex: 5,
    },
  ];

  const [headerStyle, setHeaderStyle] = useState({
    fontFamily: "studiofeixen-variable,studiofeixen,Arial,Helvetica,sans-serif",
    fontWeight: "bold",
    fontSize: "3rem",
  });

  const renderImage = () => {
    switch (projectInfo) {
      case 0:
        return <div></div>;
      case 1:
        return (
          <div>
            <img
              style={{
                margin: "5%",
                marginTop: "15%",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                opacity: "0.75",
                borderRadius: "10%",
                outline: "5px solid white",
              }}
              src={portfolioApp}
              alt="portfolioApp"
            />
          </div>
        );
      case 2:
        return (
          <div>
            <img
              style={{
                margin: "5%",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                opacity: "0.75",
                borderRadius: "10%",
                outline: "5px solid white",
              }}
              src={movieApp}
              alt="movieApp"
            />
          </div>
        );
      case 3:
        return (
          <div>
            <img
              style={{
                margin: "5%",
                marginTop: "25%",
                width: "100%",
                height: "110%",
                objectFit: "cover",
                display: "block",
                opacity: "0.75",
                borderRadius: "10%",
                outline: "5px solid black",
              }}
              src={bahl}
              alt="bahl"
            />
          </div>
        );
      case 4:
        return (
          <div>
            <img
              style={{
                margin: "5%",
                marginTop: "15%",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                opacity: "0.75",
                borderRadius: "10%",
                outline: "5px solid black",
              }}
              src={vr}
              alt="vr"
            />
          </div>
        );
      case 5:
        return (
          <div>
            <img
              style={{
                margin: "5%",
                marginTop: "25%",
                width: "100%",
                height: "150%",
                objectFit: "cover",
                display: "block",
                opacity: "0.75",
                borderRadius: "10%",
                outline: "5px solid black",
              }}
              src={fitWorld}
              alt="fitWorld"
            />
          </div>
        );
      default:
        return <div></div>;
    }
  };

  return (
    <div className="text-light" style={{ margin: 20 }}>
      <Navbar />
      <Container>
        <Row>
          <Col md="6" style={{ marginTop: "15%" }}>
            <h1
              style={headerStyle}
              onMouseEnter={() => {
                setHeaderStyle({ ...headerStyle, "letter-spacing": "10px" });
              }}
              onMouseLeave={() => {
                setHeaderStyle({ ...headerStyle, "letter-spacing": "0" });
              }}
            >
              PROJECTS
            </h1>
            <hr style={{ fontSize: "20%" }} />
            <div>
              <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
                {projects.map((project, index) => {
                  return (
                    <li key={index} style={{ fontSize: "1.5rem" }}>
                      <div
                        onMouseEnter={() => {
                          setProjectInfo(project.imageIndex);
                        }}
                        onMouseLeave={() => {
                          setProjectInfo(0);
                        }}
                        onClick={() => toggleModal(index)}
                      >
                        {projectInfo === project.imageIndex && (
                          <FaArrowRight style={{ marginRight: "3%" }} />
                        )}
                        {project.name}
                        <hr />
                      </div>
                      <MyModal
                        heading={project.name}
                        body={project.description}
                        show={modals[index]}
                        onHide={() => {
                          toggleModal(index);
                        }}
                        codeUrl={project.codeUrl}
                        className="custom-modal"
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </Col>
          <Col md="6" style={{ marginTop: "5%" }}>
            {renderImage()}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Project;
