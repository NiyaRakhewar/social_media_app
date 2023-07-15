import React, { useContext } from "react";
import web_logo from "../images/logo_new.png";
import { useNavigate } from "react-router";
import "../styles/Signup.css";
import { AuthContext } from "../../contextFolder/AuthContext";
import { AvatarGenerator } from "random-avatar-generator";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Signup = () => {
  const navigate = useNavigate();

  const { setToken, setProfile, signUpData, setSignUpData } =
    useContext(AuthContext);

  const handleInput = (e, fieldName) => {
    const { value } = e.target;
    setSignUpData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const generator = new AvatarGenerator();

  const handleSignUp = async () => {
    const validationErrors = {};

    if (!signUpData.firstName) {
      validationErrors.firstName = "First name is required";
    }

    if (!signUpData.lastName) {
      validationErrors.lastName = "Last name is required";
    }

    if (!signUpData.username) {
      validationErrors.email = "Email is required";
    }

    if (!signUpData.password) {
      validationErrors.password = "Password is required";
    }

    try {
      const avatar = generator.generateRandomAvatar(signUpData.firstName);
      // const avatar =
      //   "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/813px-Unknown_person.jpg?20200423155822";

      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({
          firstName: signUpData.firstName,
          lastName: signUpData.lastName,
          username: signUpData.username,
          password: signUpData.password,
          website: "niya-portfolio",
          avatar: avatar,
        }),
      });
      const data = await response.json();
      localStorage.setItem("token", data?.encodedToken);
      localStorage.setItem("user", JSON.stringify(data?.createdUser));
      setToken(data.encodedToken);
      setProfile(data.createdUser);
      navigate("/home");

      toast(` Welcome ${signUpData.firstName} ${signUpData.lastName}`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (err) {
      alert(err);
    }
  };

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
              <input
                type="text"
                placeholder="First Name"
                onChange={(e) => handleInput(e, "firstName")}
              />
            </div>

            <div>
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                onChange={(e) => handleInput(e, "lastName")}
              />
            </div>

            <div>
              <label>Username</label>
              <input
                type="text"
                placeholder="username"
                onChange={(e) => handleInput(e, "username")}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                placeholder="weeb@moshimoshi.com"
                onChange={(e) => handleInput(e, "email")}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                placeholder="password"
                onChange={(e) => handleInput(e, "password")}
              />
            </div>
          </div>

          <div className="landing-links">
            <button onClick={handleSignUp}>Sign Up</button>

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
