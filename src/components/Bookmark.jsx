import React, { useContext } from "react";

import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { FeedListContext } from "../contextFolder/FeedListContext";
import { AuthContext } from "../contextFolder/AuthContext";

export const Bookmark = ({ post, user }) => {
  const { state, dispatch } = useContext(FeedListContext);
  const { token, profile } = useContext(AuthContext);

  const username = profile.username;

  const loggedInUser = state.users?.find(({ _id }) => _id === profile._id);
  const isBookmark = loggedInUser?.bookmarks?.includes(post?._id);

  const bookmarkHandler = async (post) => {
    const response = await fetch(`/api/users/bookmark/${post._id}`, {
      method: "POST",
      headers: {
        authorization: token,
      },
    });
    const data = await response?.json();

    console.log(data);
    dispatch({
      type: "SAVE_DATA_BY_BOOKMARK",
      payload: { bookmarks: data.bookmarks, username },
    });
  };

  const bookmarkRemoveHandler = async (post) => {
    const response = await fetch(`/api/users/remove-bookmark/${post._id}`, {
      method: "POST",
      headers: {
        authorization: token,
      },
    });
    const data = await response?.json();
    console.log("removeBookark", data);
    dispatch({
      type: "SAVE_DATA_BY_BOOKMARK",
      payload: { bookmarks: data.bookmarks, username },
    });
  };

  const bookmarksPostByUser = (postUser) => {
    if (isBookmark) {
      bookmarkRemoveHandler(postUser);
    } else {
      bookmarkHandler(postUser);
    }
  };

  return (
    <div onClick={() => bookmarksPostByUser(post)}>
      {isBookmark ? (
        <BsFillBookmarkFill className="icn" />
      ) : (
        <BsBookmark className="icn" />
      )}
    </div>
  );
};
