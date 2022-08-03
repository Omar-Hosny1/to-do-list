import React, { useRef, useState } from "react";
import { app } from "../../firebase-connfig";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
function UserAndPasswordAuthentication() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(true);

  const inputSignUpEmail = useRef();
  const inputSignUpPassword = useRef();

  const inputSignInEmail = useRef();
  const inputSignInPassword = useRef();

  const auth = getAuth();

  const signUpHandler = (e) => {
    e.preventDefault();
    const enteredEmail = inputSignUpEmail.current.value;
    const enteredPassword = inputSignUpPassword.current.value;
    createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword)
      .then((res) => {
        alert("Successful Operation");
        navigate("/main-page");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const signInHandler = (e) => {
    e.preventDefault();

    const enteredEmail = inputSignInEmail.current.value;
    const enteredPassword = inputSignInPassword.current.value;

    signInWithEmailAndPassword(auth, enteredEmail, enteredPassword)
      .then((res) => {
        navigate("/main-page");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <>
      {isSignUp && (
        <form onSubmit={signUpHandler}>
          <input
            type="email"
            placeholder="Enter Your Email"
            ref={inputSignUpEmail}
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            ref={inputSignUpPassword}
          />
          <button type="submit">Sign Up</button>
        </form>
      )}
      {!isSignUp && (
        <form onSubmit={signInHandler}>
          <input
            type="email"
            placeholder="Enter Your Email"
            ref={inputSignInEmail}
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            ref={inputSignInPassword}
          />
          <button type="submit">Sign In</button>
        </form>
      )}

      {isSignUp ? (
        <span onClick={() => setIsSignUp(false)}>Already Has An Account!</span>
      ) : (
        <span onClick={() => setIsSignUp(true)}>Create Account!</span>
      )}
    </>
  );
}

export default UserAndPasswordAuthentication;
