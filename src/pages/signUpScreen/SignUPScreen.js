import React, { useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { auth } from "../../firebase";
import SignInScreen from "../signInScreen/signInScreen";
import "./SignUpScreen.css";

function SignUpScreen() {
  const [signUp, setSignUp] = useState(false);

  const emailRefers = useRef("");
  const passwordRefers = useRef(null);

  const register = (e) => {
    auth
      .createUserWithEmailAndPassword(
        emailRefers.current.value,
        passwordRefers.current.value
      )
      .then((authUser) => {
        console.log(authUser);
        setSignUp(true);
        alert("Sign Up Success");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      {signUp ? (
        <SignInScreen />
      ) : (
        <div className="signUpScreen">
          <form>
            <h1>Sign Up</h1>

            <input ref={emailRefers} type="email" placeholder="Email" />
            <input
              ref={passwordRefers}
              type="password"
              placeholder="Password"
            />
            <button type="submit" onClick={register}>
              Sign Up
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default SignUpScreen;
