import { Link } from "react-router-dom";
import React from "react";
import { IoPersonCircle } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="navbar navbar-default navbar-light bg-light rounded-navbar rounded-5">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to={"/"}>
            <IoPersonCircle
              className="icons"
              style={{ color: "black", fontSize: "42", marginBottom: "3" }}
            />
            TARAB
          </Link>
        </div>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link active text-black" to={"/"}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-black" to={"/project"}>
              Project
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-black" to={"/about"}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-black" to={"/contact"}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
