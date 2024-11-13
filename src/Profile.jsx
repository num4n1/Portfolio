import profilePicture from "./assets/profilePicture.jpg";
import TechStack from "./TechStack.jsx";
import "./stylesheets/Profile.css";
function Profile() {
  return (
    <>
      <div className="main-card">
        <div className="profile-card">
          <img className="profile-image" src={profilePicture} alt="Numan"></img>
          <h2 className="profile-title">Mohamed Numan</h2>
          <p>Hello! I am a full stack developer.</p>
          <TechStack />
        </div>
      </div>
    </>
  );
}
export default Profile;
