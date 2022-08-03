import React from "react";
import { app } from "../../Firebase/firebase-connfig";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function GoogleAuth() {
  const navigate = useNavigate();
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInHandler = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        navigate("/main-page");
        localStorage.setItem("loggedIn", true);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return <button onClick={signInHandler}>Sign In By Google</button>;
}

export default GoogleAuth;
