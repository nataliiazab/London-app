import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./LondonPage.css";
import Home from "./Home.js";
import About from "./About.js";
import Contact from "./Contact.js";

const LondonPage = () => {
  return (
    <Router>
      <div className="london-page">
        <header>
          <nav>
            <input type="checkbox" id="menu-toggle" className="menu-toggle" />
            <label htmlFor="menu-toggle" className="menu-icon">
              <span></span>
              <span></span>
              <span></span>
            </label>
            <div className="logo">London</div>
            <ul className="menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default LondonPage;

