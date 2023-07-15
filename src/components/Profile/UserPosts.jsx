import React from "react";
import { FeedListContext } from "../../contextFolder/FeedListContext";
import { useContext } from "react";
// import { AuthContext } from "../../contextFolder/AuthContext";
import { PostForm } from "../PostForm";
import "../styles/Feed.css";
export const UserPosts = ({ username }) => {
  const { state } = useContext(FeedListContext);

  // const { profile } = useContext(AuthContext);

  // const profile = JSON.parse(localStorage.getItem("user"));

  console.log("userpost", username);

  const filteredData = state.feed?.filter((post) => post.username === username);

  return (
    <div className="outer-feed-container" style={{ justifyContent: "center" }}>
      <div className="inner-feed-container" style={{ width: "95%" }}>
        {filteredData?.map((post, i) => {
          return (
            <div key={i}>
              <PostForm userpost={post} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
