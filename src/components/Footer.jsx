import React from "react";
import { Link } from "react-router-dom";
import { IoLogoLinkedin } from "react-icons/io5";
import { VscGithubInverted } from "react-icons/vsc";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = ({word}) => {
  return (
    <div >
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4" >
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        {word && <li ><h4 style={{"marginTop":"5%"}}>{word}</h4></li>}
          <li className="ms-3">
            <Link
              className="navbar-brand"
              target="_blank"
              to={
                "https://www.linkedin.com/in/tarab-zehra-2a29581a3?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BgB%2By1btLTdqY7KamXHHVNA%3D%3D"
              }
            >
              <IoLogoLinkedin
                className="icons"
                style={{ color: "white", fontSize: "42", marginBottom: "3" }}
              />
            </Link>
          </li>
          <li className="ms-3">
            <Link
              className="navbar-brand"
              target="_blank"
              to={"https://github.com/tarab15"}
            >
              <VscGithubInverted
                className="icons"
                style={{ color: "white", fontSize: "40", marginBottom: "3" }}
              />
            </Link>
          </li>
          <li className="ms-3">
            <Link
              className="navbar-brand"
              target="_blank"
              to={"https://www.instagram.com/tarab2863/"}
            >
              <FaInstagramSquare
                className="icons"
                style={{ color: "white", fontSize: "42", marginBottom: "3" }}
              />
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
