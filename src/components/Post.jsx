import React, { useContext } from "react";
import { SlPlus } from "react-icons/sl";
import { BsFillEmojiLaughingFill, BsFire, BsImage } from "react-icons/bs";
import { MdOutlineFiberNew } from "react-icons/md";
import { AuthContext } from "../contextFolder/AuthContext";
import { FeedListContext } from "../contextFolder/FeedListContext";
import "./styles/Post.css";

export const Post = () => {
  const { profile } = useContext(AuthContext);

  const { state, dispatch } = useContext(FeedListContext);

  // console.log("users in post", state.users);

  const currentUser = profile;

  const userData = state.users.find(
    (user) => user.username === currentUser.username
  );

  // console.log("usersData.avatar in post", userData.avatar);

  // console.log("profile in post", profile);

  const clickHandlerNewPost = () => {
    dispatch({ type: "SHOW_POST", payload: !state.showPost });
  };

  return (
    <div className="outer-feed-container">
      <div className="inner-feed-container">
        <div className="card" style={{ marginBottom: "20px", height: "80px" }}>
          <div className="card-info" onClick={clickHandlerNewPost}>
            <div className="card-name-date">
              <img src={userData.avatar} alt="" className="profile-image" />
              <p style={{ opacity: "0.5", marginLeft: "20px" }}>
                What's on your mind, {userData.firstName}
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
        {state.showPost && (
          <div className="add-address-outer-container">
            <div className="add-address-container">
              <div
                className="card"
                style={{
                  marginBottom: "20px",
                  width: "100%",
                }}
              >
                <div className="card-info">
                  <div
                    className="card-name-date"
                    style={{ width: "90%", marginBottom: "-40px" }}
                  >
                    <img
                      src={userData.avatar}
                      alt=""
                      className="profile-image"
                    />
                    <textarea
                      placeholder=" What's on your mind..."
                      style={{
                        opacity: "0.5",
                        marginLeft: "20px",
                        marginTop: "2%",
                        marginBottom: "-5%",
                        padding: "10px",
                        height: "100px",
                        width: "90%",
                        backgroundColor: "#383a3d",
                        border: "none",
                      }}
                    />
                  </div>
                </div>
                <div
                  className="card-icons"
                  style={{
                    justifyContent: "space-around",
                    flexWrap: "wrap",
                    color: "whitesmoke",
                    width: "100%",
                  }}
                >
                  {/* <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      // gap: "3rem",
                      border: "1px solid red",
                      margin: "-10px 0",
                      width: "30%",
                    }}
                  > */}
                  <p
                    className="icn"
                    style={{
                      padding: "10px",
                      margin: "10px 10px",
                      display: "flex",
                      gap: "1rem",
                      backgroundColor: "grey",
                      boxShadow: "0px 2px 3px 2px rgba(0, 0, 0, 0.3)",
                      borderRadius: "0.3rem",
                    }}
                  >
                    <BsImage style={{ fontSize: "x-large" }} /> Photo/GIF
                  </p>
                  <p
                    className="icn"
                    style={{
                      padding: "10px",
                      margin: "10px",
                      display: "flex",
                      gap: "1rem",
                      backgroundColor: "grey",
                      boxShadow: "0px 2px 3px 2px rgba(0, 0, 0, 0.3)",
                      borderRadius: "0.3rem",
                    }}
                  >
                    <BsFillEmojiLaughingFill style={{ fontSize: "x-large" }} />
                    Emojis
                  </p>
                  {/* </div> */}
                  <button
                    onClick={clickHandlerNewPost}
                    style={{
                      padding: "5px 20px",
                      margin: "10px 10px",
                      backgroundColor: "grey",
                      boxShadow: "0px 2px 3px 2px rgba(0, 0, 0, 0.3)",
                      borderRadius: "0.3rem",
                      color: "whitesmoke",
                      fontSize: "medium",
                    }}
                  >
                    POST
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
