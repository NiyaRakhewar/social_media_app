import React from "react";
import { useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { DeletePost } from "./DeletePost";
import { EditPost } from "./EditPost";

export const Options = ({ post }) => {
  const [showOptions, setShowOptions] = useState(false);

  const [postId, setPostId] = useState("");

  const clickHandlerOption = (post) => {
    setShowOptions(!showOptions);
    setPostId(post._id);
  };
  return (
    <div>
      <SlOptionsVertical onClick={() => clickHandlerOption(post)} />
      {showOptions && postId === post._id && (
        <div className="drop-down-feed">
          <EditPost post={post} />
          <DeletePost post={post} />
        </div>
      )}
    </div>
  );
};
