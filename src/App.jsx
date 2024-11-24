import "./stylesheets/index.css";
import Navbar from "./Header.jsx";
import Footer from "./Footer.jsx";
import Project from "./Project.jsx";
import Profile from "./Profile.jsx";
import About from "./About.jsx";
import Tech from "./Tech.jsx";
import Sidebar from "./Sidebar.jsx"; // Correct casing
import Menu from "./Menu.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div
      style={{ overflowY: "scroll", scrollbarWidth: "none" }}
      className="app-container"
    >
      <style>
        {`
          .app-container::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <Sidebar />
      <Navbar />
      <Menu />

      {/* Portfolio starts from here */}
      <Profile />
      <About />
      <Tech />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
