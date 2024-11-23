import "./stylesheets/index.css";
import Navbar from "./Header.jsx";
import Footer from "./Footer.jsx";
import Project from "./Project.jsx";
import Profile from "./Profile.jsx";
import Tech from "./Tech.jsx";
import Sidebar from "./Sidebar.jsx"; // Correct casing
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div style={{ overflowY: 'scroll', scrollbarWidth: 'none' }} className="app-container">
      <style>
        {`
          .app-container::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <Sidebar />
      <Navbar />
      {/* Portfolio starts from here */}
      <Profile />
      <Tech />
      <Project />
      <Footer />
    </div>
  );
}

export default App;