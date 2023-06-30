import React from "react";
import web_logo from "../images/logo_new.png";
// import Uchiha from "../images/Itachi Uchiha.png";
import { useNavigate } from "react-router";
import "../styles/Landing.css";
export const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <div className="main-landing-container">
        <div className="landing-container">
          <div className="content">
            <img className="logo" src={web_logo} alt="logo" />

            {/* <h1> Welcome Weebs </h1> */}
            <div className="landing-text">
              <p>
                FOLLOW <small>PEOPLE AROUND THE GLOBE</small>
              </p>
              <p>
                CONNECT <small>WITH YOUR FRIENDS</small>
              </p>
              <p>
                SHARE <small>WHAT YOU THINKING</small>
              </p>
            </div>

            <div className="landing-links">
              <button onClick={() => navigate("/signup")}>Join Now</button>
              <div className="text-login">
                <p>Already have an account?</p>
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
    </div>
  );
};
