import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../contextFolder/AuthContext";
import { FeedListContext } from "../../contextFolder/FeedListContext";

export const BookmarkPage = () => {
  const { state } = useContext(FeedListContext);
  const { profile } = useContext(AuthContext);

  const loggedInUser = state.users?.find(({ _id }) => _id === profile._id);

  const filteredData = state.feed?.filter(({ _id }) =>
    loggedInUser?.bookmarks.includes(_id)
  );

  console.log("bp state.users", state.users);

  console.log("bp profile", profile);

  return (
    <div>
      {filteredData.map((post) => (
        <div>{post.content}</div>
      ))}
    </div>
  );
};
