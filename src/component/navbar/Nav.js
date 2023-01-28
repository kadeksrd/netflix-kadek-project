import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  const TransitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", TransitionNavbar);
    return () => window.removeEventListener("scroll", TransitionNavbar);
  }, []);

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <div className="nav-contents">
        <img
          onClick={() => navigate("/")}
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png?"
          alt=""
          className="nav-logo"
        />
        <img
          className="nav-avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117.com/uploads/netflix-logo-0.png?"
          onClick={() => {
            navigate("/profile");
            console.log(navigate.push);
          }}
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
