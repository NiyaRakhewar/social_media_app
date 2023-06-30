import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../contextFolder/AuthContext";
import { FeedListContext } from "../../contextFolder/FeedListContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const UnFollowBtn = ({ profileData }) => {
  const { token } = useContext(AuthContext);

  const { dispatch } = useContext(FeedListContext);

  const handleUnFollow = async (profileData) => {
    const response = await fetch(`/api/users/unfollow/${profileData._id}`, {
      method: "POST",
      headers: {
        authorization: token,
      },
    });

    const data = await response.json();

    dispatch({
      type: "REMOVE_FOLLOWER",
      payload: { unfollowedUser: data.followUser },
    });

    dispatch({
      type: "REMOVE_FOLLOWING",
      payload: { user: data.user },
    });

    // console.log("data in unfollow", data);

    localStorage.setItem("user", JSON.stringify(data.user));

    toast.success(`Unfollow `, {
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
        className="anyProfile-unfollow-btn"
        onClick={() => handleUnFollow(profileData)}
      >
        Unfollow
      </button>
    </div>
  );
};
