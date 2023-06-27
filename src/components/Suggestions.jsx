import React, { useContext } from "react";
import { FeedListContext } from "../contextFolder/FeedListContext";
import "../components/styles/Suggestions.css";
import { AuthContext } from "../contextFolder/AuthContext";
import { useNavigate } from "react-router";
export const Suggestions = () => {
  const { state } = useContext(FeedListContext);

  const { profile } = useContext(AuthContext);

  const navigate = useNavigate();

  const filteredData = state.users.filter(
    (user) => user.username !== profile.username
  );

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

              <button className="follow-btn"> Follow </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
