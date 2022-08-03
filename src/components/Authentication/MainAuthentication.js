import React from "react";
import AuthImage from "../../Images/Authentication-page/Auth-Img.jpg";
function MainAuthentication() {
  return (
    <div className="main-authentication">
      <div className="auth-froms"></div>
      <div className="auth-img">
        <img src={AuthImage} />
      </div>
    </div>
  );
}

export default MainAuthentication;
