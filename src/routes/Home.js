import React from "react";
import Navbar from "../components/Navbar";
import programmer from "../images/woman1.jpg";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div className="text-light" style={{ margin: 20 }}>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col" style={{ marginTop: "20%" }}>
            <h2>Hello, I am</h2>
            <h1 style={{ fontSize: "5rem" }}>TARAB ZEHRA</h1>
            <h3>Software Engineer</h3>
            <span>
              A Result-Oriented Web Developer building and managing Websites and
              Web Applications that leads to the success of the overall product
            </span>
            <div style={{ marginTop: "5%" }}>
              <Link style={{ color: "white" }} to={"/about"}>
                Learn More
              </Link>
            </div>
          </div>
          <div className="col" style={{ marginTop: "22%", }}>
            <div
              style={{
                display: "flex",
                "justify-content": "center",
                "align-items": "center",
                height: "200px",
              }}
            >
              <img
                style={{ borderRadius: "50%", height: "200%", }}
                src={programmer}
                alt="programmer"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
