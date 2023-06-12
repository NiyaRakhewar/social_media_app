import React from "react";
import web_logo from "../images/logo_new.png";
import { useNavigate } from "react-router";
import "../styles/Login.css";
export const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="main-landing-container">
      <div className="landing-container">
        <div className="content">
          <img src={web_logo} alt="logo" className="logo" />

          <div className="pagename">
            <h1>Login</h1>
          </div>

          <div className="landing-text">
            <div className="email">
              <label>Email</label>
              <input placeholder="  weeb@moshimoshi.com" />
            </div>

            <div className="password">
              <label>Password</label>
              <input placeholder="  Password" />
            </div>
          </div>

          <div className="landing-links">
            <button onClick={() => navigate("/login")}>Login</button>

            <h3 onClick={() => navigate("/")}>Guest Login</h3>

            <div className="text-login">
              <p>Don't have an account ?</p>{" "}
              <p className="login" onClick={() => navigate("/signup")}>
                Sign up !
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
