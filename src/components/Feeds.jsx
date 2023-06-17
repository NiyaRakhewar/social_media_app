import React, { useContext } from "react";
import { FeedListContext } from "../contextFolder/FeedListContext";
import { BiBookmark, BiComment, BiEdit, BiHeart } from "react-icons/bi";
import { BsShare } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { SlOptionsVertical } from "react-icons/sl";
import "../components/styles/Feed.css";
export const Feeds = () => {
  const { state, dispatch } = useContext(FeedListContext);

  // const clickHandlerForOption = (id) => {
  //   const filteredById = state.feed.find((user) => user._id === id);

  //   if (filteredById) {
  //     dispatch({ type: "DROP_FOR_PROFILE", payload: !state.isOption });
  //   }
  // };

  // console.log("state in feeds", state);
  return (
    <div className="outer-feed-container">
      <div className="inner-feed-container">
        {state.feed.map((post, i) => {
          const { content, links, likes, comments } = post;

          const userData = state.users.find(
            (user) => user.username === post.username
          );

          // console.log("userData avatar", userData.avatar);
          return (
            <div key={i} className="card">
              <div className="card-info">
                <div className="card-name-date">
                  <img src={userData.avatar} alt="" className="profile-image" />
                  <h2>
                    {userData.firstName} {userData.lastName}{" "}
                  </h2>
                </div>
                <div className="option">
                  <SlOptionsVertical />
                  {true && (
                    <div className="drop-down-feed">
                      <p className="option-icon-edit">
                        <BiEdit className="option-icon" /> Edit
                      </p>
                      <p className="option-icon-delete">
                        <RiDeleteBin5Line className="option-icon" /> Delete
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="card-content">{content}</div>
              <div className="card-image">
                <img src={links} alt="" className="image-tag" />
              </div>
              <div className="card-icons">
                <div>
                  <BiHeart className="icn" />{" "}
                  {likes.likeCount === 0 ? "" : likes.likeCount}
                </div>
                <div>
                  <BiComment className="icn" />
                  {comments.length === 0 ? "" : comments.length}
                </div>
                <BiBookmark className="icn" />
                <div>
                  <BsShare className="icn" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
