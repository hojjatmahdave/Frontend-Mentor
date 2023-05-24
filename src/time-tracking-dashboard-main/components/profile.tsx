import React from "react";
import { ProfileStyle } from "../styles/profile-style";
import profileImage from "../images/image-jeremy.png";
const Profile = () => {
  return (
    <ProfileStyle>
      <div>
        <img src={profileImage} alt="person" />
        <p>Reprot for</p>
        <p>Jeremy Robson</p>
      </div>
      <div>
        <p>Daily</p>
        <br />
        <p>Weekly</p>
        <br />
        <p>Monthly</p>
      </div>
    </ProfileStyle>
  );
};

export default Profile;
