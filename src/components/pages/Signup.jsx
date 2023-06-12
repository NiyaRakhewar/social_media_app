import React from "react";
import web_logo from "../images/logo_new.png";
import { useNavigate } from "react-router";
import "../styles/Signup.css";
export const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className="main-landing-container">
      <div className="landing-container">
        <div className="content">
          <img src={web_logo} alt="logo" className="logo" />

          <div className="pagename">
            <h1>Sign Up</h1>
          </div>

          <div className="landing-text">
            <div>
              <label>First Name</label>
              <input placeholder="First Name" />
            </div>

            <div>
              <label>Last Name</label>
              <input placeholder="Last Name" />
            </div>

            <div>
              <label>Email</label>
              <input placeholder="weeb@moshimoshi.com" />
            </div>
            <div>
              <label>Password</label>
              <input placeholder="Password" />
            </div>

            <div>
              <label>Confirm Password</label>
              <input placeholder="Confirm Password" />
            </div>
          </div>

          <div className="landing-links">
            <button>Sign Up</button>

            <div className="text-login">
              <p>Already have an account ?</p>
              <p className="login" onClick={() => navigate("/login")}>
                Login !
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="gif_container">
        <div className="inner-gif-container">
          <img
            className="gif_img"
            src="https://cdn.dribbble.com/users/2457221/screenshots/19869130/media/f8afadb465862adf9279d21cacf44b03.gif"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};
