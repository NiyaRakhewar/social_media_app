import React, { useContext } from "react";
import { FeedListContext } from "../../contextFolder/FeedListContext";
import { AuthContext } from "../../contextFolder/AuthContext";
import { PostForm } from "../PostForm";

export const UserBookmarks = () => {
  const { state } = useContext(FeedListContext);

  const { profile } = useContext(AuthContext);

  const currUser = state.users?.filter(
    (user) => user.username === profile.username
  );

  const filteredData = currUser?.bookmarks?.map((bookmarkId) => {
    let data = state.feed?.filter((post) => post._id === bookmarkId);
    return data;
  });

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
