import React from "react";
import { SlPlus } from "react-icons/sl";
import { BsFire } from "react-icons/bs";
import { MdOutlineFiberNew } from "react-icons/md";
// import ReactModem from "react-modem";
// // or
// import { connect, modularize } from "react-modem";
export const Post = () => {
  return (
    <div className="outer-feed-container">
      <div className="inner-feed-container">
        <div className="card" style={{ marginBottom: "20px", height: "80px" }}>
          <div className="card-info">
            <div className="card-name-date">
              <img src={"profile"} alt="" className="profile-image" />
              <p style={{ opacity: "0.5", marginLeft: "20px" }}>
                What's on your mind...{"User Name"}
              </p>
            </div>
            <SlPlus />
          </div>
        </div>
        <div className="card" style={{ marginBottom: "20px", height: "80px" }}>
          <div className="card-info">
            <h3
              style={{
                display: "flex",
                gap: "0.7rem",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MdOutlineFiberNew
                style={{ border: "0.3px solid white", borderRadius: "0.3rem" }}
              />
              Latest
            </h3>
            |
            <h3>
              <BsFire /> Trending
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
