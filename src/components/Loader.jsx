import React from "react";
// import loader from "../components/Images/gif_img.gif";
import "../components/styles/Loader.css";

export const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-inner-container">
        <img src={"https://i.gifer.com/fxVE.gif"} alt="" className="loader" />
      </div>
    </div>
  );
};
