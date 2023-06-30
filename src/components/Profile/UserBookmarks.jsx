import React, { useContext } from "react";
import { FeedListContext } from "../../contextFolder/FeedListContext";
// import { AuthContext } from "../../contextFolder/AuthContext";
import { PostForm } from "../PostForm";
import "../styles/Feed.css";

export const UserBookmarks = () => {
  const { state } = useContext(FeedListContext);

  // const { profile } = useContext(AuthContext);

  const profile = JSON.parse(localStorage.getItem("user"));

  const currUser = profile;

  // const currUser = state.users?.find(({ _id }) => _id === profile._id);
  const filteredData = state.feed?.filter(({ _id }) =>
    currUser?.bookmarks.includes(_id)
  );

  console.log("filteredData user bookmarks", filteredData);

  return (
    <div className="outer-feed-container" style={{ justifyContent: "center" }}>
      <div className="inner-feed-container" style={{ width: "95%" }}>
        {filteredData?.map((post) => {
          return <PostForm userpost={post} />;
        })}
      </div>
    </div>
  );
};
