import React from "react";
import { useSelector } from "react-redux";
import Nav from "../../component/navbar/Nav";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";
import "./ProfileScreen.css";
import { useNavigate } from "react-router-dom";
function ProfileScreen() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen-body">
        <h1>Profile Info</h1>
        <div className="profileScreen-info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117.com/uploads/netflix-logo-0.png?"
            alt="profile-avatar"
          />
          <div className="profileScreen-details">
            <h1>Welcome Back ! </h1>
            <h2>{user.email}</h2>
            <div className="profileScreen-plans"></div>
          </div>
        </div>
        <button
          className="profileScreen-signOut"
          onClick={(e) => {
            auth.signOut();
          }}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default ProfileScreen;
