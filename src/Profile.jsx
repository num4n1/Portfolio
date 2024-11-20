import profilePicture from "./assets/profilePicture.jpg";
import TechStack from "./TechStack.jsx";
import "./stylesheets/Profile.css";
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
            <p>Hello! I am a Full Stack Developer.</p>
            <TechStack />
          </div>
        </div>
      </section>
    </>
  );
}
export default Profile;
