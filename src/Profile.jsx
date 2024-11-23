import profilePicture from "./assets/profilePicture.jpg";
import TechStack from "./TechStack.jsx";
import "./stylesheets/Profile.css";
import "bootstrap/dist/css/bootstrap.min.css";
function Profile() {
  return (
    <>
      <section id="profile">
        <div className="main-card">
          <div className="profile-card">
            <div className="profile-image-container">
              <img
                className="profile-image"
                src={profilePicture}
                alt="Numan"
              ></img>
            </div>

            <h2 className="profile-title">Mohamed Numan</h2>
            <h3 className="my-location">
              {" "}
              Currently based in &#128204; Toronto, Ontario
            </h3>
            {/* <p>
              Hello! I am a Full Stack Developer with a passion for creating
              dynamic and user-friendly web applications. With expertise in both
              front-end and back-end technologies, I specialize in building
              scalable, efficient, and innovative solutions. Let's collaborate
              to bring ideas to life and solve real-world problems through code!
            </p> */}
          </div>
        </div>
      </section>
    </>
  );
}
export default Profile;
