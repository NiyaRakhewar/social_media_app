import React from "react";
import { Header } from "../Header";
import "../styles/Home.css";
import { Feeds } from "../Feeds";
import { Suggestions } from "../Suggestions";
import { Post } from "../Post";
import { useState } from "react";
import { useEffect } from "react";
import { Loader } from "../Loader";
import { useContext } from "react";
import { FeedListContext } from "../../contextFolder/FeedListContext";
// import { AuthContext } from "../../contextFolder/AuthContext";
export const Home = () => {
  const { state } = useContext(FeedListContext);
  // const { profile } = useContext(AuthContext);

  const profile = JSON.parse(localStorage.getItem("user"));

  // const currUser = state.users?.find(({ _id }) => _id === profile._id);

  const followingPostData = state.feed?.filter(
    (post) =>
      profile?.following?.some(
        (followingUser) => followingUser?.username === post.username
      ) || profile.username === post.username
  );

  // console.log("following pst user", currUser);

  const filteredData = !state.isLatest
    ? followingPostData?.sort((a, b) => {
        const dateA = a.likes?.likeCount;
        const dateB = b.likes?.likeCount;
        return dateB - dateA;
      })
    : followingPostData?.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB - dateA;
      });

  // const [isLoader, setIsLoader] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoader(false);
  //   }, 2000);
  // });

  return (
    <div className="layout">
      {/* {isLoader && <Loader />} */}
      <div className="nav">
        <Header />
      </div>
      <div className="main">
        <Post />
        <Feeds filteredData={filteredData} />
      </div>
      <div className="aside">
        <Suggestions />
      </div>
    </div>
  );
};
