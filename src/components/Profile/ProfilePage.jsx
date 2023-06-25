import React, { useContext } from "react";
import { Header } from "../Header";
import "./profilepage.css";
import { UserPosts } from "./UserPosts";
import { UserBookmarks } from "./UserBookmarks";
import { BsBookmarksFill, BsFileEarmarkPost } from "react-icons/bs";
import { useState } from "react";
import { AuthContext } from "../../contextFolder/AuthContext";
import { TbWorld } from "react-icons/tb";
import { FeedListContext } from "../../contextFolder/FeedListContext";
import { EditProfile } from "../EditProfile";

export const ProfilePage = () => {
  const [show, setShow] = useState("userposts");
  const { state } = useContext(FeedListContext);

  const { profile } = useContext(AuthContext);

  const filteredData = state.feed?.filter(
    (post) => post.username === profile.username
  );

  const profileData = state.users?.find(
    (post) => post.username === profile.username
  );

  console.log("user", profile);
  const handlerPost = () => {
    setShow("userposts");
  };
  const handlerBookmarks = () => {
    setShow("userbookmarks");
  };
  return (
    <div>
      <div className="profile-page-container">
        <div className="profile-header">
          <Header />
        </div>
        <div className="profile-page-outer-container">
          <div className="profile-page-inner-container">
            <div className="profile-card">
              <div className="background"></div>
              <div className="profile-data">
                <div className="profile-inform">
                  <p className="profile-name">
                    {profileData.firstName} {profileData.lastName}
                  </p>
                  <p className="profile-username">@{profileData.username}</p>
                </div>
                <img
                  className="profile-picture"
                  src={profileData.avatar}
                  alt=""
                />
                <EditProfile profileData={profileData} />
              </div>
              <p className="profile-bio">{profileData.bio}</p>
              <div className="profile-website">
                <TbWorld />
                <p>{profileData.website}</p>
              </div>
              <div className="profile-count">
                {filteredData.length} Post | {profileData?.following?.length}{" "}
                Following | {profileData?.followers?.length} Followers
              </div>
              <button className="logout-btn">Logout</button>
            </div>
            <div className="profile-navbar">
              <div
                className={
                  show === "userposts" ? "highlight-post" : "post-container"
                }
                onClick={handlerPost}
              >
                <BsFileEarmarkPost />
                <p>POST</p>
              </div>

              <div
                onClick={handlerBookmarks}
                className={
                  show === "userbookmarks"
                    ? "highlight-bookmarks"
                    : "bookmark-container"
                }
              >
                <BsBookmarksFill />
                <p>Bookmarks</p>
              </div>
            </div>
            {show === "userposts" && <UserPosts />}
            {show === "userbookmarks" && <UserBookmarks />}
          </div>
        </div>
      </div>
    </div>
  );
};
