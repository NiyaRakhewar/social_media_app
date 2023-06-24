import React, { useContext } from "react";
import { SlPlus } from "react-icons/sl";
import { BsFire, BsImage } from "react-icons/bs";
import { MdOutlineFiberNew, MdOutlineRemoveCircle } from "react-icons/md";
import { AuthContext } from "../contextFolder/AuthContext";
import { FeedListContext } from "../contextFolder/FeedListContext";
import "./styles/Post.css";
import { useState } from "react";
// import { formatDate } from "../backend/utils/authUtils";
import { v4 as uuid } from "uuid";

export const Post = () => {
  const { profile } = useContext(AuthContext);

  const { token } = useContext(AuthContext);

  const { state, dispatch } = useContext(FeedListContext);

  const currentUser = profile;

  const userData = state.users?.find(
    (user) => user.username === currentUser.username
  );

  const [newContent, setNewContent] = useState({
    _id: uuid(),
    content: "",
    links: "",
  });

  const clickHandlerAddNewPost = async (newContent) => {
    const response = await fetch(`/api/posts`, {
      method: "POST",
      headers: {
        authorization: token,
      },
      body: JSON.stringify({ postData: newContent }),
    });
    const data = await response?.json();

    dispatch({ type: "NEW_POST", payload: data.posts });
    dispatch({ type: "SHOW_POST", payload: !state.showPost });
  };

  const handlerChangeContent = (e) => {
    setNewContent({ ...newContent, content: e.target.value });
  };

  const handleUploadImage = (event) => {
    if (event.target.files && event.target.files[0]) {
      setNewContent({
        ...newContent,
        links: URL.createObjectURL(event.target.files[0]),
      });
      //   setShowPhotos(true);
    }
  };
  const handlerRemoveImage = () => {
    setNewContent({
      ...newContent,
      links: "",
    });
  };
  const clickHandlerNewPost = () => {
    dispatch({ type: "SHOW_POST", payload: !state.showPost });
  };

  return (
    <div className="outer-feed-container">
      <div className="inner-feed-container">
        <div className="card-new-post">
          <div className="card-info" onClick={clickHandlerNewPost}>
            <div className="card-name-date">
              <img src={userData.avatar} alt="" className="profile-image" />
              <p>What's on your mind, {userData.firstName}</p>
            </div>
            <SlPlus />
          </div>
        </div>
        <div className="card-sort-latest">
          <div className="card-info-post">
            <h3
              className={state.isLatest ? "latest_h3_true" : "latest_h3"}
              onClick={() => dispatch({ type: "LATEST", payload: true })}
            >
              <MdOutlineFiberNew
                className={state.isLatest ? "latest-icn-true" : "latest-icn"}
              />
              <h4> Latest</h4>
            </h3>
            |
            <h3
              className={!state.isLatest ? "latest_h3_true" : "latest_h3"}
              onClick={() => dispatch({ type: "LATEST", payload: false })}
            >
              <BsFire /> Trending
            </h3>
          </div>
        </div>
        {state.showPost && (
          <div className="add-outer-container">
            <div className="add-container">
              <div className="edit-card">
                <div className="edit-profile">
                  <img src={userData.avatar} alt="" className="profile-image" />
                </div>
                <div className="edit-mini-card">
                  <div className="edit-content">
                    <textarea
                      name=""
                      contentEditable="true"
                      className="text"
                      placeholder=" What's on your mind..."
                      onChange={(e) => handlerChangeContent(e)}
                    />
                    <div className="edit-img">
                      <img
                        src={newContent.links}
                        alt=""
                        className={newContent.links === "" ? "none" : "img"}
                      />
                      {newContent.links !== "" && (
                        <MdOutlineRemoveCircle
                          onClick={handlerRemoveImage}
                          className="remove-btn"
                        />
                      )}
                    </div>
                  </div>
                  <div className="edit-bottom">
                    <label htmlFor="photo-upload" className="edit-photo">
                      <input
                        type="file"
                        accept="image/*"
                        style={{ visibility: "hidden" }}
                        id="photo-upload"
                        onChange={handleUploadImage}
                      />

                      <h4 style={{ display: "flex", flexDirection: "row" }}>
                        <BsImage className="edit-icn" />
                        Photo/GIF
                      </h4>
                    </label>
                    {/* <p className="sort-icn">
                  <BsEmojiLaughing style={{ fontSize: "x-large" }} />
                  Emojis
                </p> */}
                    <button
                      className="save-btn"
                      onClick={() => clickHandlerAddNewPost(newContent)}
                    >
                      POST
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
