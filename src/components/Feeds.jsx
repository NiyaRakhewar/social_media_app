import React, { useContext } from "react";
import { FeedListContext } from "../contextFolder/FeedListContext";
import { BiBookmark, BiComment, BiHeart } from "react-icons/bi";
import { BsShare } from "react-icons/bs";
import { SlOptionsVertical } from "react-icons/sl";
import "../components/styles/Feed.css";
export const Feeds = () => {
  const { state } = useContext(FeedListContext);

  console.log("state in feeds", state);
  return (
    <div className="outer-feed-container">
      <div className="inner-feed-container">
        {state.feed.map((post) => {
          const { content, links, likes, comments } = post;
          return (
            <div className="card">
              <div className="card-info">
                <div className="card-name-date">
                  <img src={links} alt="" className="profile-image" />
                  <h2>firstName lastName </h2>
                </div>
                <SlOptionsVertical />
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
                <BsShare className="icn" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
