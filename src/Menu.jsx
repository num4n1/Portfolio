import React, { useState, useEffect } from "react";
import "./stylesheets/Menu.css";
function Menu() {
  const [activeSection, setActiveSection] = useState("");

  // Update the active section based on the scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [showPopup, setShowPopup] = useState(false);

  const handleExperienceClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setShowPopup(true); // Show the popup
  };

  const closePopup = () => {
    setShowPopup(false); // Close the popup
  };

  return (
    <>
      <div className="menu-container">
        <ul className="menu-list">
          <div className="line-separator"></div>
          <li>
            <a
              href="#profile"
              className={activeSection === "profile" ? "active" : ""}
            >
              Profile
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#techstack"
              className={activeSection === "techstack" ? "active" : ""}
            >
              Knowledge
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeSection === "projects" ? "active" : ""}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={handleExperienceClick}
              className={activeSection === "experience" ? "active" : ""}
            >
              Experience
            </a>
          </li>
        </ul>
        <div className="line-separator"></div>
      </div>
      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <h3>🚧Under Construction🚧</h3>
            <p>
              The Experience page is currently under construction. Check back
              later!
            </p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;
