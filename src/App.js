import React, { useEffect } from "react";
import "./App.css";
import Homescreen from "./pages/homescreen/Homescreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./pages/loginscreen/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./pages/profilescreen/ProfileScreen";
import SignInScreen from "./pages/signInScreen/signInScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // user ketika login
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // Logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // Logged Out
        dispatch(logout);
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/" element={<Homescreen />}></Route>
            <Route path="/profile" element={<ProfileScreen />}></Route>
            <Route path="signin" element={<SignInScreen />} />;
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
