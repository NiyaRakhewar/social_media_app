import React from "react";
import { Header } from "../Header";
import "./profilepage.css";
import { UserPosts } from "./UserPosts";
import { UserBookmarks } from "./UserBookmarks";
import { BsBookmarksFill, BsFileEarmarkPost } from "react-icons/bs";
import { useState } from "react";
export const ProfilePage = () => {
  const [show, setShow] = useState("userposts");
  // const toggleActive = ({ isActive }) => {
  //   return isActive
  //     ? "profile-nav-item nav-link-active"
  //     : "profile-nav-item nav-link";
  // };

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
            <div className="profile-card">card</div>
            <div className="profile-navbar">
              <div onClick={handlerPost} className="post-container">
                <BsFileEarmarkPost />
                <p>POST</p>
              </div>

              <div onClick={handlerBookmarks} className="bookmark-container">
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
