import MoneyWise from "./assets/MoneyWise.png";
import ISole from "./assets/Isole.png";
import ResearchGram from "./assets/ResearchGram.png";
import JobpAIr from "./assets/JobpAIr.png";
import CookEasy from "./assets/CookEasy.png";
import SweSeek from "./assets/SweSeek.png";
import "./stylesheets/Project.css";
function Project() {
  return (
    <section id="projects">
      <div className="project-page">
        <div class="skills-container">
          <h1 class="skills-outline">PROJECTS</h1>
          <h2 class="skills-overlay">MY PROJECTS</h2>
        </div>

        <div class="album py-5 custom-bg-green">
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
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
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
                  <img className="card-img-top" src={ISole} alt="ISole" />
                  <div class="card-body">
                    <h3>I-Sole</h3>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
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
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
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
                  <img className="card-img-top" src={JobpAIr} alt="JobpAIr" />
                  <div class="card-body">
                    <h3>Job pAIr</h3>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
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
                  <img className="card-img-top" src={CookEasy} alt="CookEasy" />
                  <div class="card-body">
                    <h3>CookEasy</h3>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
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
                  <img className="card-img-top" src={SweSeek} alt="SweSeek" />
                  <div class="card-body">
                    <h3>SWESeek</h3>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
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
      </div>
    </section>
  );
}
export default Project;
