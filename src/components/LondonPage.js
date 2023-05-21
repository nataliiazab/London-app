import React from "react";
import "./LondonPage.css";

const LondonPage = () => {
  return (
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
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
   
      <section id="home">
        <div className="content">
          <h1>Welcome to London</h1>
          <p>This will be intro page - general information, photos and famous attractions</p>
        </div>
      </section>
      <section id="about">
        <div className="content">
          <h2>About London</h2>
          <p>
            To add more information about LOndon. To mentioned different parts of London.
          </p>
        </div>
      </section>
      <section id="contact">
        <div className="content">
          <h2>Contact Us</h2>
          <p>Get in touch with us to learn more about London. - add our links to LinkedIn and feedback form</p>
        </div>
      </section>
    </div>
  );
};

export default LondonPage;
