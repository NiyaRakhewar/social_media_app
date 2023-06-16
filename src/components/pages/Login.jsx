import React, { useContext } from "react";
import web_logo from "../images/logo_new.png";
import { useNavigate } from "react-router";
import "../styles/Login.css";
import { AuthContext } from "../../contextFolder/AuthContext";
export const Login = () => {
  const navigate = useNavigate();

  // const location = useLocation();
  // const from = location.state?.from || "/login";

  // console.log("loc", location);

  // console.log("from", from);
  // const location = useLocation();

  const { setToken, profile, setProfile } = useContext(AuthContext);

  const handleGuestLogin = async () => {
    const credentials = {
      username: "hinatahyuga",
      password: "hinatasama",
    };

    const response = await fetch("api/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    });

    const data = await response?.json();

    // console.log("login page data", data);

    if (data.encodedToken) {
      // console.log("data", data.encodedToken);
      localStorage.setItem("token", data.encodedToken);
      localStorage.setItem("user", JSON.stringify(data.foundUser));
      navigate("/home");
      // console.log("location", location?.state?.from?.pathname);
      setToken(data.encodedToken);
      setProfile({
        ...profile,
        username: data.foundUser.username,
        password: data.foundUser.password,
      });
    }
  };

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

            <h3 onClick={handleGuestLogin}>Guest Login</h3>

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
