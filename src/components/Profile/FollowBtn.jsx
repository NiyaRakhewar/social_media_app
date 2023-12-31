import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../contextFolder/AuthContext";
import { FeedListContext } from "../../contextFolder/FeedListContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const FollowBtn = ({ profileData }) => {
  const { token } = useContext(AuthContext);

  const { dispatch } = useContext(FeedListContext);

  const handleFollow = async (profileData) => {
    const response = await fetch(`/api/users/follow/${profileData._id}`, {
      method: "POST",
      headers: {
        authorization: token,
      },
    });

    const data = await response.json();

    dispatch({
      type: "ADD_FOLLOWER",
      payload: { followUser: data.followUser },
    });

    dispatch({
      type: "ADD_FOLLOWING",
      payload: { user: data.user },
    });

    // console.log("data in follow", data);
    localStorage.setItem("user", JSON.stringify(data.user));

    toast.success(`Following `, {
      position: "bottom-left",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div>
      <button
        className="anyProfile-follow-btn "
        onClick={() => handleFollow(profileData)}
      >
        Follow
      </button>
    </div>
  );
};
