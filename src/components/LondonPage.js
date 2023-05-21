import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./LondonPage.css";

const Home = () => (
  <section id="home">
    <div className="content">
      <h1>Welcome to London</h1>
      <p>This will be the intro page with general information, photos, and famous attractions.</p>
    </div>
  </section>
);

const About = () => (
  <section id="about">
    <div className="content">
      <h2>About London</h2>
      <p>To add more information about London. Mention different parts of London.</p>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact">
    <div className="content">
      <h2>Contact Us</h2>
      <p>Get in touch with us to learn more about London. Add our links to LinkedIn and a feedback form.</p>
    </div>
  </section>
);

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

