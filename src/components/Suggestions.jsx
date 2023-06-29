import React, { useContext } from "react";
import { FeedListContext } from "../contextFolder/FeedListContext";
import "../components/styles/Suggestions.css";
import { useNavigate } from "react-router";
import { FollowBtn } from "./Profile/FollowBtn";
export const Suggestions = () => {
  const { state } = useContext(FeedListContext);

  // const { profile } = useContext(AuthContext);

  const profile = JSON.parse(localStorage.getItem("user"));

  // console.log("profile in sugg", profile);

  const navigate = useNavigate();

  const newData = profile.following.map((user) => user.username);

  const filteredData = state.users.filter(
    (user) =>
      user.username !== profile.username && !newData.includes(user.username)
  );

  // const handleFollow = () => {
  //   <FollowBtn profileData={user} />;
  // };

  // console.log("sugg", state.users);
  return (
    <div className="outer-suggetion-container">
      <div className="inner-suggetion-container">
        <h2>Suggested Users</h2>
        {filteredData.map((user, i) => {
          const { avatar, firstName, lastName } = user;
          return (
            <div key={i} className="user-card">
              <img
                src={avatar}
                onClick={() => navigate(`/profile/${user.username}`)}
                alt=""
                className="profile-img"
              />
              <p
                className="name"
                onClick={() => navigate(`/profile/${user.username}`)}
              >
                {firstName} {lastName}
              </p>
              <FollowBtn className="follow-btn" profileData={user} />
              {/* <button className="follow-btn" onClick={handleFollow}>
                {" "}
                Follow{" "}
              </button> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};
