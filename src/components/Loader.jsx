import React from "react";
// import loader from "../components/Images/gif_img.gif";
import "../components/styles/Loader.css";

export const Loader = () => {
  return (
    <div className="loader-container">
      <img
        src={
          "https://cdn.dribbble.com/users/2457221/screenshots/19869130/media/f8afadb465862adf9279d21cacf44b03.gif"
        }
        alt=""
        className="loader"
      />
    </div>
  );
};
