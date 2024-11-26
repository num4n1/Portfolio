import Doodle from "./assets/Doodle-green.png";
import React, { useState } from "react";
import "./stylesheets/About.css";

function Header() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleNavbar = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <section id="about">
      <div className="about-page">
        <div class="about-heading-container">
          <h1 class="about-heading-outline">ABOUT</h1>
          <h2 class="about-heading-overlay">About me</h2>
        </div>
        <div className="about-container">
          <div className="about-left">
            <div className="doodle-box">
              <img src={Doodle} alt="Doodle" />
            </div>
          </div>
          <div className="about-right">
            <p>
              I am a passionate full-stack developer who loves building creative
              and efficient solutions for modern problems. With a focus on
              innovation and collaboration, I enjoy working on projects that
              make a meaningful impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
