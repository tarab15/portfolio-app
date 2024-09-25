import React from "react";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Project from "./routes/Project";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
