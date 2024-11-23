import Logo from './assets/MN-logo-no-bg-black.png'
import React, { useState } from "react";
import "./stylesheets/Header.css";

function Header() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleNavbar = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <nav className="custom-navbar">
      <img className="nav-bar-logo" src={Logo}></img>
      <ul className={`navbar-links ${isDropdownVisible ? "active" : ""}`}>
        <li><a href="#profile">Profile</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#techstack">Knowledge</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#companies">Experience</a></li>
        <li><a href="#feedback">Feedback</a></li>
      </ul>
      <button className="navbar-toggle" onClick={toggleNavbar}>
        ☰
      </button>
    </nav>
  );
}

export default Header;
