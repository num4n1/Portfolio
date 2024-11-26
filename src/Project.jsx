import MoneyWise from "./assets/MoneyWise.png";
import ISole from "./assets/Isole.png";
import ResearchGram from "./assets/ResearchGram.png";
import JobpAIr from "./assets/JobpAIr.png";
import CookEasy from "./assets/CookEasy.png";
import SweSeek from "./assets/SweSeek.png";
import "./stylesheets/Project.css";
import React, { useState, useEffect } from "react";
function Project() {
  const [showPopup, setShowPopup] = useState(false);

  const handleExperienceClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setShowPopup(true); // Show the popup
  };

  const closePopup = () => {
    setShowPopup(false); // Close the popup
  };

  return (
    <section id="projects">
      <div className="project-page">
        <div class="album py-5 custom-bg-green">
          <div class="project-heading-container">
            <h1 class="project-heading-outline">WORK</h1>
            <h2 class="project-heading-overlay">MY WORK</h2>
          </div>
          <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div class="col">
                <div class="card shadow-sm custom-card-bg">
                  <img
                    className="card-img-top"
                    src={MoneyWise}
                    alt="MoneyWise"
                  />
                  <div class="card-body">
                    <h3>MoneyWise</h3>
                    <p class="card-text">
                      A web app for expense tracking, budget management, and
                      categorize transactions with AI, providing secure access
                      and real-time financial insights for better money
                      management.
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div className="btn-container">
                        <div class="btn-group">
                          <button
                            type="button"
                            class="btn btn-sm btn-outline-secondary"
                            onClick={handleExperienceClick}
                          >
                            View on GitHub
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card shadow-sm">
                  <img className="card-img-top" src={ISole} alt="ISole" />
                  <div class="card-body">
                    <h3>I-Sole</h3>
                    <p class="card-text">
                      Developed a non-invasive diabetic insole using TensorFlow,
                      integrated with React-Native and Flask apps, deployed on
                      AWS, delivering real-time health insights and improving
                      emergency response times.
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div className="btn-container">
                        <div class="btn-group">
                          <button
                            type="button"
                            class="btn btn-sm btn-outline-secondary"
                          >
                            View on GitHub
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card shadow-sm">
                  <img
                    className="card-img-top"
                    src={ResearchGram}
                    alt="ResearchGram"
                  />
                  <div class="card-body">
                    <h3>ResearchGram</h3>
                    <p class="card-text">
                      An AI-powered platform that recommends research papers
                      using user-provided inputs like videos, images, audio, or
                      documents. It generates summaries, recommendations, and
                      facilitates efficient exploration
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div className="btn-container">
                        <div class="btn-group">
                          <a
                            href="https://github.com/num4n1/Hip-Hack-Array-hackathon"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none" }}
                          >
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              View on GitHub
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card shadow-sm">
                  <img className="card-img-top" src={JobpAIr} alt="JobpAIr" />
                  <div class="card-body">
                    <h3>Job pAIr</h3>
                    <p class="card-text">
                      A platform that simplifies job-seeking by offering
                      <br></br>AI-driven personalized job recommendations,
                      application tracking, and tools for career optimization.
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div className="btn-container">
                        <div class="btn-group">
                          <a
                            href="https://github.com/num4n1/Job-pair"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none" }}
                          >
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              View on GitHub
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card shadow-sm">
                  <img className="card-img-top" src={CookEasy} alt="CookEasy" />
                  <div class="card-body">
                    <h3>CookEasy</h3>
                    <p class="card-text">
                      An AI Powered app that helps users discover dishes they
                      can cook based on available ingredients and provides
                      precise spice and vegetable measurements for cooking.
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div className="btn-container">
                        <div class="btn-group">
                          <button
                            type="button"
                            class="btn btn-sm btn-outline-secondary"
                            onClick={handleExperienceClick}
                          >
                            View on GitHub
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card shadow-sm">
                  <img className="card-img-top" src={SweSeek} alt="SweSeek" />
                  <div class="card-body">
                    <h3>SWESeek</h3>
                    <p class="card-text">
                      A platform that simplifies job searching with personalized
                      recommendations, application tracking, resources, and
                      progress visualization for seamless efficiency.
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div className="btn-container">
                        <div class="btn-group">
                          <a
                            href="https://github.com/num4n1/SWESeek"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none" }}
                          >
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              View on GitHub
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="project-container">
          <div className="project">
            <div className="project-left">
              <img className="project-image" src={MoneyWise} alt="MoneyWise" />
              <h2 className="project-title">AI Powered Finance Tracker</h2>
            </div>
            <div className="project-right">
              <p className="project-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Doloribus voluptatibus ullam, tempore facilis dicta ea unde,
                impedit repudiandae exercitationem ipsam consectetur totam quos
                labore quo ducimus eaque fuga soluta maiores!
              </p>
            </div>
          </div>

          <div className="project">
            <div className="project-left">
              <img className="project-image" src={MoneyWise} alt="MoneyWise" />
              <h2 className="project-title">AI powered Finance tracker</h2>
            </div>
            <div className="project-right">
              <p className="project-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Doloribus voluptatibus ullam, tempore facilis dicta ea unde,
                impedit repudiandae exercitationem ipsam consectetur totam quos
                labore quo ducimus eaque fuga soluta maiores!
              </p>
            </div>
          </div>
          <div className="project">
            <div className="project-left">
              <img className="project-image" src={MoneyWise} alt="MoneyWise" />
              <h2 className="project-title">AI powered Finance tracker</h2>
            </div>
            <div className="project-right">
              <p className="project-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Doloribus voluptatibus ullam, tempore facilis dicta ea unde,
                impedit repudiandae exercitationem ipsam consectetur totam quos
                labore quo ducimus eaque fuga soluta maiores!
              </p>
            </div>
          </div>
          <div className="project">
            <div className="project-left">
              <img className="project-image" src={MoneyWise} alt="MoneyWise" />
              <h2 className="project-title">AI powered Finance tracker</h2>
            </div>
            <div className="project-right">
              <p className="project-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Doloribus voluptatibus ullam, tempore facilis dicta ea unde,
                impedit repudiandae exercitationem ipsam consectetur totam quos
                labore quo ducimus eaque fuga soluta maiores!
              </p>
            </div>
          </div>
          <div className="project">
            <div className="project-left">
              <img className="project-image" src={MoneyWise} alt="MoneyWise" />
              <h2 className="project-title">AI powered Finance tracker</h2>
            </div>
            <div className="project-right">
              <p className="project-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Doloribus voluptatibus ullam, tempore facilis dicta ea unde,
                impedit repudiandae exercitationem ipsam consectetur totam quos
                labore quo ducimus eaque fuga soluta maiores!
              </p>
            </div>
          </div>
        </div> */}

        {/* Popup Modal */}
        {showPopup && (
          <div className="popup-overlay" onClick={closePopup}>
            <div className="popup-box" onClick={(e) => e.stopPropagation()}>
              <h3>🚧Work in Progress🚧</h3>
              <p>
                This project is currently under development. Stay tuned for
                updates!
              </p>
              <button onClick={closePopup}>Close</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
export default Project;
