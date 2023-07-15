import React, { useContext, useState } from "react";
import web_logo from "../images/logo_new.png";
import { useNavigate } from "react-router";
import "../styles/Login.css";
import { AuthContext } from "../../contextFolder/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ErrorContext } from "../../contextFolder/ErrorContext";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const { errors, setErrors } = useContext(ErrorContext);
  // const location = useLocation();

  const [showPassword, setShowPassword] = useState(false);

  const { setToken, setProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const validationErrors = {};

    if (!loginData.username) {
      validationErrors.username = "Username is required";
    }

    if (!loginData.password) {
      validationErrors.password = "Password is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const response = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username: loginData.username,
        password: loginData.password,
      }),
    });

    const data = await response.json();
    console.log(data, "login");

    if (data.encodedToken) {
      localStorage.setItem("token", data.encodedToken);
      localStorage.setItem("user", JSON.stringify(data.foundUser));
      navigate("/login");
      setToken(data.encodedToken);
      setProfile(data.foundUser);
      toast.success("Successfully logged in ", {
        autoClose: 1000,
        position: "bottom-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.error("Wrong Credentials", {
        autoClose: 1000,
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const handleGuestLogin = async () => {
    toast.success(` Moshi Moshi !! `, {
      autoClose: 1000,
      position: "bottom-right",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

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
      setProfile(
        data.foundUser
        // ...profile,

        // username: data.foundUser.username,
        // password: data.foundUser.password,
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="main-landing-container">
      <div className="landing-container">
        <div className="content">
          <img src={web_logo} alt="logo" className="logo" />

          <div className="pagename">
            <h1>Login</h1>
          </div>
          {/* 
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
            <button onClick={handleLogin}>Login</button>

            <h3 onClick={handleGuestLogin}>Guest Login</h3>

            <div className="text-login">
              <p>Don't have an account ?</p>{" "}
              <p className="login" onClick={() => navigate("/signup")}>
                Sign up !
              </p>
            </div>
          </div> */}

          <form action="" className="login-input" onSubmit={handleSubmit}>
            <div className="login-input-username">
              <label htmlFor="">UserName : </label>
              <input
                type="text"
                placeholder="gabbarsingh"
                value={loginData.username}
                onChange={(e) =>
                  setLoginData({ ...loginData, username: e.target.value })
                }
              />
            </div>
            {errors.username && (
              <span className="error-username">{errors.username}</span>
            )}

            <div className="login-input-password">
              <label htmlFor="">Password : </label>
              <div className="password-container">
                <input
                  type={showPassword ? "password" : "text"}
                  className="password"
                  placeholder="KitneAadmiThe@3"
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                />
                {showPassword ? (
                  <AiFillEyeInvisible
                    className="eye"
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <AiFillEye
                    className="eye"
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </div>
            </div>
            {errors.password && (
              <span className="error-password">{errors.password}</span>
            )}
            <div className="login-button-container">
              <button className="login-btn" type="submit">
                Login
              </button>
              <button
                className="guest-btn"
                type="button"
                onClick={handleGuestLogin}
              >
                Guest Mode
              </button>
            </div>

            <p>
              Don't have an account? <Link to="/signup">Signup</Link>
            </p>
          </form>
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
