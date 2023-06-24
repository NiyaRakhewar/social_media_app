import React, { useContext } from "react";
import { FeedListContext } from "../contextFolder/FeedListContext";
import { BiComment } from "react-icons/bi";
import { BsEyeFill, BsShare } from "react-icons/bs";
import "../components/styles/Feed.css";
import dayjs from "dayjs";
import "dayjs/locale/en";
import { Like } from "./Like";
import { Bookmark } from "./Bookmark";
import { AuthContext } from "../contextFolder/AuthContext";
import { Options } from "./Options";
export const Feeds = () => {
  const { state } = useContext(FeedListContext);
  const { profile } = useContext(AuthContext);

  const filteredData = !state.isLatest
    ? state.feed?.sort((a, b) => {
        const dateA = a.likes?.likeCount;
        const dateB = b.likes?.likeCount;
        return dateB - dateA;
      })
    : state.feed?.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB - dateA;
      });

  console.log("state in feeds", state);

  return (
    <div className="outer-feed-container">
      <div className="inner-feed-container">
        {filteredData?.map((post, i) => {
          const { content, links, likes, views, comments, createdAt } = post;

          const userData = state?.users?.find(
            (user) => user?.username === post?.username
          );

          const filtered = post?.username === profile?.username ? true : false;

          return (
            <div key={i} className="card">
              <div className="card-info">
                <div className="card-name-date">
                  <img
                    src={userData?.avatar}
                    alt=""
                    className="profile-image"
                  />
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
                  {filtered && <Options post={post} />}
                </div>
              </div>
              <div className="card-content">
                <p> {content} </p>
                <div className="card-image">
                  <img
                    src={links}
                    alt=""
                    className={links !== "" && "image-tag"}
                  />
                </div>
              </div>

              <div className="card-icons">
                <div>
                  <Like post={post} />{" "}
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
                <Bookmark post={post} />
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
        })}
      </div>
    </div>
  );
};
