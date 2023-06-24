import React from "react";
import { FeedListContext } from "../../contextFolder/FeedListContext";
import { useContext } from "react";
import { AuthContext } from "../../contextFolder/AuthContext";
import { PostForm } from "../PostForm";

export const UserPosts = () => {
  const { state } = useContext(FeedListContext);

  const { profile } = useContext(AuthContext);

  const filteredData = state.feed?.filter(
    (post) => post.username === profile.username
  );

  return (
    <div className="outer-feed-container" style={{ justifyContent: "center" }}>
      <div
        className="inner-feed-container"
        style={{ justifyContent: "center", width: "95%" }}
      >
        {filteredData?.map((post) => {
          return <PostForm userpost={post} />;
        })}
      </div>
    </div>
  );
};