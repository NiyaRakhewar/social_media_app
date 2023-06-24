import React from "react";
import { useContext } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { AuthContext } from "../contextFolder/AuthContext";
import { FeedListContext } from "../contextFolder/FeedListContext";

export const Like = ({ post }) => {
  const { dispatch } = useContext(FeedListContext);
  const { token, profile } = useContext(AuthContext);

  //   console.log(profile, "prof ");

  const isLiked =
    post?.likes?.likedBy?.filter((user) => user?._id === profile?._id)
      .length !== 0;

  //   console.log("isLiked = ", isLiked);

  const handlerForLike = async (post) => {
    const response = await fetch(`/api/posts/like/${post._id}`, {
      method: "POST",
      headers: {
        authorization: token,
      },
      body: JSON.stringify(post),
    });

    const data = await response?.json();

    // console.log("data like = ", data);

    dispatch({ type: "SET_DATA_BY_LIKE", payload: data?.posts });
  };

  const handlerForDislike = async (post) => {
    const response = await fetch(`/api/posts/dislike/${post._id}`, {
      method: "POST",
      headers: {
        authorization: token,
      },
      body: JSON.stringify(post),
    });

    const data = await response?.json();

    // console.log("data dislike = ", data);

    dispatch({ type: "SET_DATA_BY_DISLIKE", payload: data?.posts });
  };

  const clickHandler = (post) => {
    if (isLiked) {
      handlerForDislike(post);
    } else {
      handlerForLike(post);
    }
  };

  return (
    <div onClick={() => clickHandler(post)}>
      {isLiked ? <BsHeartFill style={{ color: "red" }} /> : <BsHeart />}
    </div>
  );
};
