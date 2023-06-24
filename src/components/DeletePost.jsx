import React from "react";
import { useContext } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AuthContext } from "../contextFolder/AuthContext";
import { FeedListContext } from "../contextFolder/FeedListContext";

export const DeletePost = ({ post }) => {
  const { dispatch } = useContext(FeedListContext);
  const { token } = useContext(AuthContext);

  const clickHandlerDelete = async (post) => {
    console.log(post);
    const response = await fetch(`/api/posts/${post._id}`, {
      method: "DELETE",
      headers: {
        authorization: token,
      },
      //   body: JSON.stringify({ post }),
    });

    const data = await response.json();

    dispatch({ type: "DELETE_POST", payload: data.posts });
  };
  return (
    <div>
      <p
        className="option-icon-delete"
        onClick={() => clickHandlerDelete(post)}
      >
        <RiDeleteBin5Line className="option-icon" />
        Delete
      </p>
    </div>
  );
};
