import "./stylesheets/index.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import Profile from "./Profile.jsx";
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
      <Header />
      <Profile />
      <Card />
      <Footer />
    </div>
  );
}

export default App;