import React, { useRef, useState } from "react";
import { auth } from "../../firebase";
import "./signInScreen.css";
import SignUpScreen from "../signUpScreen/SignUPScreen";
import { Route } from "react-router-dom";

export default function SignInScreen() {
  const [signUp, setSignUp] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signIn = (e) => {
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });

    e.preventDefault();
  };

  // route path

  return (
    <>
      {signUp ? (
        <SignUpScreen />
      ) : (
        <div className="signInScreen">
          <form>
            <h1>Sign In</h1>
            <input ref={emailRef} type="email" placeholder="Email" />
            <input ref={passwordRef} type="password" placeholder="Password" />
            <button type="submit" onClick={signIn}>
              Sign In
            </button>
            <h4>
              <span className="signUpScreen-gray">New to Netflix ? </span>
              <span
                className="signUpScreen-link"
                onClick={() => setSignUp(true)}
              >
                Sign Up now.
              </span>
            </h4>
          </form>
        </div>
      )}
    </>
  );
}
