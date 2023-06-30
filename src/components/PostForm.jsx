import dayjs from "dayjs";
import React from "react";
import { Options } from "./Options";
import { Like } from "./Like";
import { BiComment } from "react-icons/bi";
import { Bookmark } from "./Bookmark";
import { BsEyeFill, BsShare } from "react-icons/bs";
import "./styles/Feed.css";
export const PostForm = ({ userpost }) => {
  // const { state } = useContext(FeedListContext);

  const profile = JSON.parse(localStorage.getItem("user"));

  // const userData = state?.users?.find(
  //   (user) => user?.username === userpost?.username
  // );
  const userData = profile;

  const { content, links, likes, views, comments, createdAt } = userpost;

  return (
    <div className="card" style={{ width: "100%" }}>
      <div className="card-info">
        <div className="card-name-date">
          <img src={userData?.avatar} alt="" className="profile-image" />
          <div className="username">
            <h3>
              {userData?.firstName} {userData?.lastName}
              <small style={{ opacity: "0.7", fontSize: "small" }}>
                {"  "}
                {dayjs(createdAt).locale("en").format("MMM D, YYYY")}
              </small>
            </h3>

            <p>@{userData?.username}</p>
          </div>
        </div>
        <div className="option">
          <Options post={userpost} />
        </div>
      </div>
      <div className="card-content">
        <p> {content} </p>
        <div className="card-image">
          <img src={links} alt="" className={links !== "" && "image-tag"} />
        </div>
      </div>

      <div className="card-icons" style={{ gap: "15%" }}>
        <div>
          <Like post={userpost} />{" "}
          {likes?.likeCount === 0 ? (
            ""
          ) : (
            <p>
              <small>{likes?.likeCount}</small>
            </p>
          )}
        </div>
        <div>
          <BiComment className="icn" />
          {comments?.length === 0 ? (
            ""
          ) : (
            <p>
              <small>{comments?.length}</small>
            </p>
          )}
        </div>
        <Bookmark post={userpost} />
        <div>
          <BsEyeFill className="icn" />
          <p>
            <small>{views}</small>
          </p>
        </div>
        <div>
          <BsShare className="icn" />
        </div>
      </div>
    </div>
  );
};
