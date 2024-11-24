import Logo from "./assets/MN-logo-no-bg-green.png";
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
    </nav>
  );
}

export default Header;
