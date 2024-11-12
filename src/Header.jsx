import "./stylesheets/Header.css";
import Logo from './assets/MN-logo-no-bg.png'

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <img className="nav-bar-logo" src={Logo}></img>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Skills
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Projects
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Companies
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
